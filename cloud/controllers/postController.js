let Post = Parse.Object.extend('Post')

const findAll = async (req) => {
  try {
    const query = new Parse.Query(Post)
    const data = await query.find()

    return data
  } catch (error) {
    throw error
  }
}

const findSingle = async (req) => {
  try {
    let { id } = req.params
    const query = new Parse.Query(Post)
    const data = await query.get(id)

    return data
  } catch (error) {
    throw error
  }
}

const addPost = async (req) => {
  try {
    let post = new Post()

    let { name, surname } = req.params

    post.set('name', name)
    post.set('surname', surname)
    const data = await post.save()

    return data
  } catch (error) {
    throw error
  }
}

const updatePost = async (req) => {
  try {
    let { id, name, surname } = req.params
    const query = new Parse.Query(Post)
    const data = await query.get(id)

    data.set('name', name)
    data.set('surname', surname)
    const updatedData = data.save()

    return updatedData
  } catch (error) {
    throw error
  }
}

const deletePost = async (req) => {
  try {
    let { id } = req.params
    const query = new Parse.Query(Post)
    const data = await query.get(id)

    await data.destroy()

    return {
      success: true,
      message: 'Post is deleted',
    }
  } catch (error) {
    throw error
  }
}

module.exports = {
  findAll,
  findSingle,
  addPost,
  updatePost,
  deletePost
}
