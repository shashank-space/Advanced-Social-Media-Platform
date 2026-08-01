import Comment from "../models/Comment";
import Post from "../models/Post";

// Add Comment
export const addComment = async (req, res) => {
  try {

    const { text } = req.body;

    const post = await Post.findById(req.params.postId);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    const comment = await Comment.create({
      post: post._id,
      user: req.user.id,
      text,
    });

    post.commentsCount += 1;

    await post.save();

    res.status(201).json({
      success: true,
      comment,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Get Comments
export const getComments = async (req, res) => {

  try {

    const comments = await Comment.find({
      post: req.params.postId,
    })
      .populate("user", "username avatar")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: comments.length,
      comments,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// Delete Comment
export const deleteComment = async (req, res) => {

  try {

    const comment = await Comment.findById(req.params.commentId);

    if (!comment) {

      return res.status(404).json({
        success: false,
        message: "Comment not found",
      });

    }

    if (comment.user.toString() !== req.user.id) {

      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });

    }

    await comment.deleteOne();

    await Post.findByIdAndUpdate(comment.post, {
      $inc: {
        commentsCount: -1,
      },
    });

    res.json({
      success: true,
      message: "Comment Deleted",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};