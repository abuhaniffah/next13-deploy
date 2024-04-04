import prisma from "@/libs/prisma";
import React from "react";

const CommentBox = async ({ anime_mal_id }) => {
  const comments = await prisma.comment.findMany({ where: { anime_mal_id } });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div
            key={comment.id}
            className="bg-white shadow-md rounded-lg p-6 transition duration-300 hover:shadow-lg"
          >
            <p className="text-gray-800 font-medium mb-4">{comment.username}</p>
            <p className="text-gray-600">{comment.comment}</p>
          </div>
        ))
      ) : (
        <div className="bg-gray-200 shadow-md rounded-lg p-6 transition duration-300 hover:shadow-lg flex items-center justify-center text-gray-600 text-center text-sm">
          Jadilah yang komen pertama
        </div>
      )}
      {/* Tampilkan teks "Sign In to Comment" */}
      <div className="bg-gray-200 shadow-md rounded-lg p-3 transition duration-300 hover:shadow-lg flex items-center justify-center text-gray-600 text-center text-sm">
        Sign In to Comment
      </div>
    </div>
  );
};

export default CommentBox;
