const itemSchema = {
  fields: {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true
    }
  },
}

module.exports = {
  itemSchema,
}
