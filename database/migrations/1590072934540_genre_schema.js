'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GenreSchema extends Schema {
  up () {
    this.create('genres', (table) => {
      table.increments()
      table.string('description', 240).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('genres')
  }
}

module.exports = GenreSchema
