'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsersSchema extends Schema {
  up () {
    this.create('users', (collection) => {
      collection.index('username_index', {username: 1}, {unique: true})
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UsersSchema
