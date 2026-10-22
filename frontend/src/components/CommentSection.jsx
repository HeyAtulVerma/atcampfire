import React, { useState } from 'react';

export default function CommentSection() {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim() !== "") {
            setComments([...comments, newComment]);
            setNewComment("");
        }
    };

    return (
        <div className="comment-section mt-8 text-white">
            <h2 className="text-2xl font-semibold mb-4">Comments</h2>
            <form onSubmit={handleCommentSubmit} className="mb-4">
                <textarea
                    className="w-full p-2 bg-gray-800 rounded-md shadow-sm"
                    rows="4"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment..."
                ></textarea>
                <button type="submit" className="mt-2 px-4 py-2 bg-green-600 rounded-md hover:bg-green-700 transition">
                    Comment
                </button>
            </form>
            <div className="comments-list space-y-4">
                {comments.map((comment, index) => (
                    <div key={index} className="comment p-4 bg-gray-800 rounded-md shadow-sm">
                        <p>{comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
