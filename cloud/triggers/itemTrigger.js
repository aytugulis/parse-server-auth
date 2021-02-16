const beforeSaveItem = async (req) => {
  const user = req.user
  if (!user) {
    throw 'Please login first.'
  }
}

module.exports = {
  beforeSaveItem,
}
