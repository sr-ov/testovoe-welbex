import * as path from 'node:path'
import { fileURLToPath } from 'node:url'
import { Sequelize, DataTypes } from 'sequelize'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const db = new Sequelize({
	dialect: 'sqlite',
	storage: path.join(__dirname, 'database.sqlite'),
})

export const Column = db.define('user', {
	name: { type: DataTypes.STRING, allowNull: false },
	count: { type: DataTypes.INTEGER, allowNull: false },
	distance: { type: DataTypes.INTEGER, allowNull: false },
})
