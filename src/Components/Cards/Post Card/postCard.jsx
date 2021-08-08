import {useState } from "react"
import { useDispatch } from "react-redux"
import { likePost } from "../../../features/Posts/postsSlice"
import { commentPost } from "../../../features/Posts/postsSlice"

export const PostCard = ({post}) => {
    const [comment, setComment] = useState("")
    const dispatch = useDispatch()
    return (
        <div>
            <p>Author name{post.author}</p>
            <h1>Post text{post.text}</h1>
            <div>
                <p onClick={() => dispatch(likePost(post._id))} >Like{post.likes.length + 1}</p>
                <p>share</p>

                <div>
                <p>Post a Comment</p>
                <input 
                onChange={(e) => setComment(e.target.value)}
                type="text" />
                <button onClick={() => dispatch(commentPost({postId:post._id, comment: comment})) } >comment</button>
                {
                    post.comments.map(commentItem => {
                        return(
                            <>
                            <p>{commentItem.fullName}</p>
                            <p>{commentItem.comment}</p>
                            </>
                        )
                    })
                }
                </div>
                
            </div>
        </div>
    )
}