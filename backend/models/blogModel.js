const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter blog name"],
  },
  description: {
    type: String,
    // required: [true, "Pleaee enter blog description"],
    default: "No Desciption",
  },
  topImage:{
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  }, 
  body: {
    type: String,
    required: [true, "Pleaee enter blog body"],
  },
  views: {
    type: Number,
    default: 0,
  },
  likes: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please enter blog Category"],
  },
  tags: [
    {
      type: String,
      required: true,
    },
  ],
  numOfComments: {
    type: Number,
    default: 0,
  },
  comments: [
    {
      name: {
        type: String,
        required: true,
      },
      userid: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Blogs", blogSchema);
