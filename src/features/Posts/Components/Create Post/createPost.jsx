import { useState } from "react";
import { useDispatch } from "react-redux"
import { addPost } from "../../postsSlice";

export const CreatePost = () => {
    const [text, setText] = useState("")
    const dispatch = useDispatch();

    return(
        <>
        <label htmlFor="">
            <input type="text" onChange={(e) => setText(e.target.value)} />
            Something on your mind
        </label>
        <button
        onClick={() => dispatch(addPost({text:text}))}
        >Post</button>
        </>
    )
}