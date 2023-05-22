const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const { all } = require('../../routes/commission');

const Schema = mongoose.Schema;

const Commission = new Schema({
    name: {type: String, maxLength: 255, required: true},
    price: {type: Number, min: 10, index:true},
    type: {type: String, maxLength: 255, required: true},
    image: {type: String, maxLength: 255, required: true},
    createdAt: {type: Date, Default: Date.now},
    updatedAt: {type: Date, Default: Date.now}
  }, {
    collection: 'commission'
  });

  // Add plugin 
  Commission.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'})

  module.exports = mongoose.model('Commission', Commission);