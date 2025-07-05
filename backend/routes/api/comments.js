/**
 * @fileoverview Express router for handling comment-related API endpoints.
 * 
 * Provides endpoints to:
 * - Retrieve all comments for a specific post.
 * - Delete a specific comment by its ID.
 * 
 * Dependencies:
 * - Express.js for routing.
 * - Mongoose for MongoDB object modeling.
 * - Comment Mongoose model.
 * 
 * Endpoints:
 * @route GET /:postId
 *   @description Get all comments for a specific post, sorted by creation date (newest first).
 *   @param {string} postId - The ID of the post to retrieve comments for.
 *   @returns {Array<Object>} 200 - List of comments.
 *   @returns {Object} 500 - Internal server error.
 * 
 * @route DELETE /:commentId
 *   @description Delete a specific comment by its ID.
 *   @param {string} commentId - The ID of the comment to delete.
 *   @returns {Object} 200 - Success message.
 *   @returns {Object} 404 - Comment not found.
 *   @returns {Object} 500 - Internal server error.
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
// Hey GitHub Copilot, // can you help me write a route to get all comments for a specific post?
router.get("/:postId", async (req, res) => {
  const { postId } = req.params;
  try {
    const comments = await Comment.find({ postId }).sort({ createdAt: -1 });
    res.status(200).json(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//add another endpoint for deleting a comment
router.delete("/:commentId", async (req, res) => {
    const { commentId } = req.params;
    try {
        const deletedComment = await Comment.findByIdAndDelete(commentId);
        if (!deletedComment) {
            return res.status(404).json({ message: "Comment not found" });
        }
        res.status(200).json({ message: "Comment deleted successfully" });
    } catch (error) {
        console.error("Error deleting comment:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
// hey GitHub Copilot, can you generate documentation for this file?
