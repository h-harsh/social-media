import "./createPost.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../postsSlice";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

export const CreatePost = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const [file, setFile] = useState(null);
  const [displayFile, setDisplayFile] = useState(null);


  const onFormSubmit = async () => {
    const formData = new FormData();
    formData.append("post-image", file);
    console.log(file, formData)
    // if (file) {
      // dispatch(addPost({text,formData}));
      dispatch(addPost({formData,text}));
      setFile(null)
      setDisplayFile(null)
      setText("")
    // }
  };

  const onInputChange = (e) => {
    setFile(e.target.files[0]);
    if (e.target.files && e.target.files[0]) {
      setDisplayFile(URL.createObjectURL(e.target.files[0]));
    }
  };
  return (
    <div className="createPost-card">
      <div className="createPost-card-p1">
        <h2>Create Post</h2>
      </div>
      <div className="createPost-create-box">
        <Avatar size={40} icon={<UserOutlined />} />
        <textarea
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Something on your mind ....!"
        ></textarea>
      </div>
      <div className="createPost-img-upload">
        <input
          type="file"
          name="post-image"
          id="post-image"
          onChange={onInputChange}
        />
        <div className="pic-display-post">
        <img src={displayFile} alt="" />
        </div>
      </div>
      <div className="createPost-actions">
        {/* <button onClick={() => dispatch(addPost({ text: text }))}>Post</button> */}
        <button onClick={() => onFormSubmit()}>Post</button>
      </div>
    </div>
  );
};
