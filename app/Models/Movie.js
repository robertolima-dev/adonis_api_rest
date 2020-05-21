'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Movie extends Model {
    user() {
        return this.belongsTo('App/Models/User')
    }
    genre() {
        return this.belongsTo('App/Models/Genre')
    }
}

module.exports = Movie
