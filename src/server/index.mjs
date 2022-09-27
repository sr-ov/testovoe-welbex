import express from 'express'
import cors from 'cors'

import { Column, db } from './models.mjs'

const PORT = 4321
const app = express()

app.use(cors())

app.get('/table', async (req, res) => {
	try {
		const cols = await Column.findAll()
		res.json(cols)
	} catch (error) {
		console.error(error)
	}
})

const start = async () => {
	try {
		await db.authenticate()
		await db.sync()

		app.listen(PORT, () => {
			console.log('START ==>', PORT)
		})
	} catch (error) {
		console.error(error)
	}
}
start()
