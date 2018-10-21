'use strict'

const Realm = require('realm')

class Recipe extends Realm.Object {}
Recipe.schema = {
  name: 'Recipe',
  primaryKey: 'id',
  properties: {
    id: 'string',
    dateCreated: 'date',
    title: {type: 'string', default: ''},
    image_url: {type: 'string', default: ''},
    ingredients: {type: 'string', default: ''},
    userMadeRecipe: {type: 'bool', default: false},
    rating: {type: 'int', default: 0},
  }
}

export default new Realm({
  schema: [Recipe],
  schemaVersion: 2
})
