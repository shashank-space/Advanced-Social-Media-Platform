import User from "../models/User.js";
import Post from "../models/Post.js";

// Search Users
export const searchUsers = async (req, res) => {
  try {

    const keyword = req.query.q || "";

    const users = await User.find({
      username: {
        $regex: keyword,
        $options: "i",
      },
    }).select("-password");

    res.json({
      success: true,
      count: users.length,
      users,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Search Posts
export const searchPosts = async (req, res) => {

  try {

    const keyword = req.query.q || "";

    const posts = await Post.find({
      caption: {
        $regex: keyword,
        $options: "i",
      },
    })
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

// Trending Posts
export const trendingPosts = async (req, res) => {

  try {

    const posts = await Post.find()
      .populate("author", "username avatar")
      .sort({
        likes: -1,
        createdAt: -1,
      })
      .limit(10);

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