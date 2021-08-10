import './postCard.css'
import {useState } from "react"
import { useDispatch, useStore } from "react-redux"
import { likePost } from "../../../features/Posts/postsSlice"
import { commentPost } from "../../../features/Posts/postsSlice"
import { Avatar, Button } from 'antd';
import {ShareAltOutlined, CommentOutlined, LikeOutlined, } from '@ant-design/icons'

export const PostCard = ({post}) => {
    const [comment, setComment] = useState("")
    const [showCommentsBox, setShowCommentsBox] = useState(false)
    const dispatch = useDispatch()
    return (
        <div className="post-card">
            <div className="post-author-details">
                <Avatar size={40} style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>A</Avatar>
                <div className="post-author-details-p2">
                <h4>{post.authorName}</h4>
                <p>{post.createdAt}</p>
                </div>
            </div>

            <div className="post-content">
                <p>{post.text}</p>
                <img className="post-content-img" src="https://i.ytimg.com/vi/Wg0s1XCfISs/maxresdefault.jpg" alt="" />
            </div>

            <div className="post-interaction-details" >
                <p>{post.likes.length} Likes</p>
                <p>{post.comments.length} comments</p>
            </div>

            <div className="post-actions">
                 <button onClick={() => dispatch(likePost(post._id))} > <LikeOutlined /> Like</button> 
                 <button onClick={() => setShowCommentsBox(old => !old)} > <CommentOutlined /> Comment</button> 
                 <button> <ShareAltOutlined /> Share</button> 
            </div>

            {showCommentsBox ? (
                <div className="post-comment-box">
                <div className="comment-create">
                    <Avatar size={40} style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>S</Avatar>
                    <input  onChange={(e) => setComment(e.target.value)} type="text" />
                    {/* <button onClick={() => dispatch(commentPost({postId:post._id, comment: comment})) }>Comment</button> */}
                    <Button onClick={() => dispatch(commentPost({postId:post._id, comment: comment})) } size={"large"}>Comment</Button>
                </div>
                <div className="comments-view">
                {
                    post.comments.map(commentItem => {
                        return(
                            <div className="post-author-details post-comments-box">
                                <Avatar size={35} style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>S</Avatar>
                                <div className="post-author-details-p2 post-comments-details">
                                    <h4>{commentItem.fullName}</h4>
                                    <p>{commentItem.comment}</p>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
            ) : (null)
        }
        </div>
    )
}
