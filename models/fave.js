let mongoose = require('mongoose')


let faveSchema = new mongoose.Schema ({
  userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Fave'
  }
})


module.exports = mongoose.model('Fave', faveSchema)
