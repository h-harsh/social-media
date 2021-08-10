import "./createPost.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../postsSlice";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button } from "antd";

export const CreatePost = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="createPost-card">
        <div className="createPost-card-p1">
        <h2>Create Post</h2>
        </div>
      <div className="createPost-create-box">
        <Avatar size={40} icon={<UserOutlined />} />
        <textarea
          type="text"
          onChange={(e) => setText(e.target.value)}
          placeholder="Something on your mind ....!"
        ></textarea>
      </div>
      <div className="createPost-img-upload">
        <button> <i class="far fa-images"></i></button>
      </div>
      <div className="createPost-actions">
        <button  onClick={() => dispatch(addPost({ text: text }))}>Post</button>
      </div>
    </div>
  );
};

