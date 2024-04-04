"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"

const CommentInput = ({ anime_mal_id, user_email, username, anime_title }) => {
    const [comment, setComment] = useState("")
    const [isCreated, setIsCreated] = useState(false)
    const router = useRouter()

    const handleInput = (event) => {
        setComment(event.target.value)
    }

    const handlePosting = async (event) => {
        event.preventDefault()

        // Memeriksa apakah komentar tidak kosong
        if (!comment.trim()) {
            return; // Jika kosong, berhenti di sini
        }

        const data = { anime_mal_id, user_email, comment, username, anime_title }

        const response = await fetch("/api/v1/comment" , {
            method: "POST",
            body: JSON.stringify(data)
        })
        const postComment = await response.json()
        if(postComment.isCreated) {
            setIsCreated(true)
            setComment("")
            router.refresh()
        }
    }

    return (
        <div className="flex flex-col gap-2">
            {isCreated && <p className="text-blue-900">Komentar berhasil diposting</p>}
            <textarea 
                onChange={handleInput} 
                value={comment}
                className="w-full h-32 p-4 text-xl border border-gray-300 rounded"
                placeholder="Masukkan komentar..."
            />
            <button onClick={handlePosting} className="w-52 py-2 px-3 bg-yellow-400 rounded-lg text-white font-semibold hover:bg-yellow-500 transition duration-300">Posting Komentar</button>
        </div>
    )
}

export default CommentInput
