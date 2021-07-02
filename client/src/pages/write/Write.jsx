import { useContext, useState } from "react";
import "./write.css";
import axios from "axios";
import {Context} from "../../context/"

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = uDeState("");
  const [file, setFile] = useState(null);
  const {user} = useContext(Context);

  const handleSubmit = (e) => {
      e.preventDefault();
      const newPost = {
          username:user.username,
          title,
          desc
      };
      if(file){
          const data = FormData();
          const filename = Date.now() + file.name;
          data.append("name", filename);
          data.append("file", file);
      }
      axios.post("/posts")
  };

  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.unsplash.com/photo-1624689146002-0a5d2dcbf2fe?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus-circle"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
