const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const { all } = require('../../routes/news');

const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type: String, maxLength: 255, required: true},
    description: {type: String, maxLength: 255},
    image: {type: String, maxLength: 255},
    videoId: {type: String, maxLength: 255},
    level: {type: String, maxLength: 255},
    slug: {type: String, maxLength: 255},
    createdAt: {type: Date, Default: Date.now},
    updatedAt: {type: Date, Default: Date.now}
  });

  // Add plugin 
  Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'})

  module.exports = mongoose.model('Course', Course);