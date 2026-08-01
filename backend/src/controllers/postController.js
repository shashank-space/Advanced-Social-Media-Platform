import Post from "../models/Post.js";

// Create Post
export const createPost = async (req, res) => {
  try {
    const { caption, image, video } = req.body;

    const post = await Post.create({
      author: req.user.id,
      caption,
      image,
      video,
    });

    res.status(201).json({
      success: true,
      post,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Feed
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", "username avatar")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: posts.length,
      posts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Single Post
export const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate("author", "username avatar");

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    res.json({
      success: true,
      post,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Delete Post
export const deletePost = async (req, res) => {

  try {

    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    if (post.author.toString() !== req.user.id) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    await post.deleteOne();

    res.json({
      success: true,
      message: "Post Deleted",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Like / Unlike Post
export const likePost = async (req, res) => {

  try {

    const post = await Post.findById(req.params.id);

    if (!post) {

      return res.status(404).json({
        success: false,
        message: "Post not found",
      });

    }

    const alreadyLiked = post.likes.includes(req.user.id);

    if (alreadyLiked) {

      post.likes = post.likes.filter(
        id => id.toString() !== req.user.id
      );

    } else {

      post.likes.push(req.user.id);

    }

    await post.save();

    res.json({
      success: true,
      likes: post.likes.length,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Update Post
export const updatePost = async (req, res) => {

  try {

    const { caption } = req.body;

    const post = await Post.findById(req.params.id);

    if (!post) {

      return res.status(404).json({
        success: false,
        message: "Post not found",
      });

    }

    if (post.author.toString() !== req.user.id) {

      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });

    }

    post.caption = caption || post.caption;

    await post.save();

    res.json({
      success: true,
      post,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

export const getFeed = async (req, res) => {

  try {

    const posts = await Post.find()

      .populate("author", "username avatar")

      .sort({
        createdAt: -1,
      });

    res.json({
      success: true,
      posts,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};