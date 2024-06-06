import React, { useContext, useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { submitPost, retrievePost } from "./api";
import { AuthContext } from "./context";

function UserHome() {
  const { auth } = useContext(AuthContext);
  const [postState, setPostState] = useState("");
  console.log("postState", postState);

  const fetchPosts = () => {
    retrievePost({ auth }).then((data) => {
      setUserPostState(data);
      console.log("data", data);
    });
  };

  const submit = (e) => {
    e.preventDefault();
    const content = postState;
    submitPost({ auth, userPost: { content } }).then(() => {
      setPostState("");
      fetchPosts();
    });
  };

  const [userPostState, setUserPostState] = useState([]);

  useEffect(() => {
    fetchPosts();
    console.log("useEffect triggered");
  }, [auth]);

  return (
    <div>
      <div>
        <h1>Home page under construction</h1>
      </div>
      <div>
        <Popup trigger={<button>click to make post</button>} modal nested>
          {(close) => (
            <div className="modal">
              <div className="content">
                <form onSubmit={submit}>
                  <label>
                    what it do?
                    <input
                      type="text"
                      name="postText"
                      value={postState}
                      onChange={(e) => setPostState(e.target.value)}
                    ></input>
                  </label>
                  <button onClick={() => close()}>cancel</button>
                  <button type="submit">submit</button>
                </form>
              </div>
            </div>
          )}
        </Popup>
      </div>
      <div className="feed">
        {userPostState.length > 0 ? (
          userPostState.map((post, index) => (
            <div key={index} className="post">
              <p>
                User: {post.user}
                <br></br>
                Bleat: {post.content}
                <br></br>
                date: {post.date_created}
              </p>
            </div>
          ))
        ) : (
          <p>no posts to display</p>
        )}
      </div>
    </div>
  );
}

export default UserHome;
