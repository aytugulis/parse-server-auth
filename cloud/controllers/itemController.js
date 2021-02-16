let Item = Parse.Object.extend('Item')

const getAllItems = async (req) => {
  try {
    const query = new Parse.Query(Item)
    const data = await query.find()

    return data
  } catch (error) {
    throw error
  }
}

const getSingleItem = async (req) => {
  try {
    const { id } = req.params
    const query = new Parse.Query(Item)
    const data = await query.get(id)

    return data
  } catch (error) {
    throw error
  }
}

const addItem = async (req) => {
  try {
    const user = req.user
    const item = new Item()
    const { name, price } = req.params
    item.set('name', name)
    item.set('price', price)
    const data = await item.save({}, { sessionToken: user.getSessionToken() })
    return data
  } catch (error) {
    throw error
  }
}

const updateItem = async (req) => {
  try {
    const user = req.user
    const { id, name, price } = req.params
    const query = new Parse.Query(Item)
    const data = await query.get(id)

    data.set('name', name)
    data.set('price', price)
    const updatedData = data.save({}, { sessionToken: user.getSessionToken() })

    return updatedData
  } catch (error) {
    throw error
  }
}

const deleteItem = async (req) => {
  try {
    const { id } = req.params
    const query = new Parse.Query(Item)
    const data = await query.get(id)

    await data.destroy({}, { sessionToken: user.getSessionToken() })

    return {
      success: true,
      message: 'Item deleted',
    }
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllItems,
  getSingleItem,
  addItem,
  updateItem,
  deleteItem,
}
