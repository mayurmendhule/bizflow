const mongoose = require('mongoose');

const taxesSchema = new mongoose.Schema({
  taxName: {
    type: String,
    required: true,
    trim: true,
  },
  taxValue: {
    type: String,
    required: true,
  },
  isDefault: {
    type: Boolean,
    default: false,
  },
  removed: {
    type: Boolean,
    default: false,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Taxes', taxesSchema);
