const {
  register,
  login,
  logout,
  changePassword,
} = require('./controllers/userController.js')
const {
  getAllItems,
  getSingleItem,
  addItem,
  updateItem,
  deleteItem,
} = require('./controllers/itemController.js')
const { itemSchema } = require('./schemas/itemSchema.js')
const { beforeSaveItem } = require('./triggers/itemTrigger.js')
const { userSchema } = require('./schemas/userSchema.js')
const { beforeSaveUser } = require('./triggers/userTrigger.js')

// @Item
Parse.Cloud.define('get-all-items', getAllItems)

Parse.Cloud.define('get-single-item', getSingleItem)

Parse.Cloud.define('add-item', addItem, itemSchema)

Parse.Cloud.define('update-item', updateItem, itemSchema)

Parse.Cloud.define('delete-item', deleteItem)

Parse.Cloud.beforeSave('Item', beforeSaveItem)

// @USER
Parse.Cloud.define('register', register, userSchema)

Parse.Cloud.define('login', login)

Parse.Cloud.define('logout', logout)

Parse.Cloud.define('change-password', changePassword)

Parse.Cloud.beforeSave('User', beforeSaveUser)