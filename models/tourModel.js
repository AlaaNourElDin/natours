const mongoose = require('mongoose');

const tourSchema = mongoose.Schema({
  name: {
    type: 'string',
    required: true
  },
  price: { type: 'number', default: 0 }
});

const tour = mongoose.model('Tour', tourSchema);

module.exports = tour;
