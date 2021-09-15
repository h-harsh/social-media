import "./postCard.css";
import { useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { deletePost, likePost } from "../../../features/Posts/postsSlice";
import { commentPost } from "../../../features/Posts/postsSlice";
import {
  likePostFromFeed,
  commentPostFromFeed,
} from "../../../features/Auth User/authUserSlice";
import { Avatar, Button } from "antd";
import {
  ShareAltOutlined,
  CommentOutlined,
  LikeOutlined,
  LikeFilled,
  DeleteOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { baseurl } from "../../../utils/baseurl";

export const PostCard = ({ post, feed }) => {
  const [comment, setComment] = useState("");
  const [showCommentsBox, setShowCommentsBox] = useState(false);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.userData.currentUser);

  return (
    <div className="post-card">
      <div className="post-author-details">
        <div className="post-author-details-inner">
          <div>
            <Avatar size={40} icon={<UserOutlined />} />
          </div>

          <div className="post-author-details-p2">
            <h4>{post.authorName}</h4>
            <p>{post.createdAt}</p>
          </div>
        </div>
        {!feed && (
          <div>
            <button
              onClick={() => dispatch(deletePost(post._id))}
              className="post-del-btn"
            >
              <DeleteOutlined />
            </button>
          </div>
        )}
      </div>

      <div className="post-content">
        <p>{post.text}</p>
        <div className="post-content-img">
          <img src={`${baseurl}/${post.image}`} alt="" />
        </div>
      </div>

      <div className="post-interaction-details">
        <p>{post.likes.length} Likes</p>
        <p>{post.comments.length} comments</p>
      </div>

      <div className="post-actions">
        {feed && (
          <button
            className={
              post.likes.includes(currentUser._id)
                ? "post-liked"
                : "post-not-liked"
            }
            onClick={() => dispatch(likePostFromFeed(post._id))}
          >
            {" "}
            {post.likes.includes(currentUser._id) ? (
              <LikeFilled />
            ) : (
              <LikeOutlined />
            )}{" "}
            Like
          </button>
        )}
        {!feed && (
          <button onClick={() => dispatch(likePost(post._id))}>
            {" "}
            <LikeOutlined /> Like
          </button>
        )}
        <button onClick={() => setShowCommentsBox((old) => !old)}>
          {" "}
          <CommentOutlined /> Comment
        </button>
        {/* <button>
          {" "}
          <ShareAltOutlined /> Share
        </button> */}
      </div>

      {showCommentsBox ? (
        <div className="post-comment-box">
          <div className="comment-create">
            <Avatar size={40} icon={<UserOutlined />} />
            <input
              id="comment"
              onChange={(e) => setComment(e.target.value)}
              type="text"
            />
            {/* <button onClick={() => dispatch(commentPost({postId:post._id, comment: comment})) }>Comment</button> */}
            {feed && (
              <Button
                onClick={() =>
                  dispatch(
                    commentPostFromFeed({
                      postId: post._id,
                      comment: comment,
                      setComment,
                    })
                  )
                }
                size={"large"}
              >
                Comment
              </Button>
            )}
            {!feed && (
              <Button
                onClick={() =>
                  dispatch(commentPost({ postId: post._id, comment: comment }))
                }
                size={"large"}
              >
                Comment
              </Button>
            )}
          </div>
          <div className="comments-view">
            {post.comments.map((commentItem) => {
              return (
                <div className="post-author-details post-comments-box">
                  <Avatar size={35} icon={<UserOutlined />} />
                  <div className="post-author-details-p2 post-comments-details">
                    <h4>{commentItem.fullName}</h4>
                    <p>{commentItem.comment}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
};
