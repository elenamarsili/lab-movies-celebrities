const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    default: "unknown",
  },
  plot: String,
  cast: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Celebrity',
    required: true,
  }],
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
