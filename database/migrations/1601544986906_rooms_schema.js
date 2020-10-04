'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RoomsSchema extends Schema {
  up () {
    this.create('rooms', (collection) => {
      collection.index('room_code_index', {room_code: 1})
    })
  }

  down () {
    this.drop('rooms')
  }
}

module.exports = RoomsSchema
