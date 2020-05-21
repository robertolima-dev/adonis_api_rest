'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Genre = use("App/Models/Genre");

/**
 * Resourceful controller for interacting with genres
 */
class GenreController {

    async index ({ request, response, view }) {
        const genres = await Genre.all()
        return genres;
    }

    async store ({ request }) {
        const data = request.only(["description"])
        const genre = await Genre.create(data)
        return genre;
    }

    async show ({ params }) {
        const genre = await Genre.findOrFail(params.id)
        return genre
    }
    
    async update ({ params, request }) {
        const data = request.only(['description'])
        const genre = await Genre.findOrFail(params.id)
        genre.merge(data)
        await genre.save()
        return genre
    }
    
    async destroy ({ params }) {
        const genre = await Genre.findOrFail(params.id);
        await genre.delete()

    }
}

module.exports = GenreController
