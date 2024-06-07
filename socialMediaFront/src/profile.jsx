import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "./context";
import { retrieveProfilePost, deletePost, updatePost } from "./api";
import Popup from "reactjs-popup";

function Profile() {
  const { auth } = useContext(AuthContext);
  const [userPostState, setUserPostState] = useState([]);
  const [editPostData, setEditPostData] = useState({ id: "", content: "" });

  const fetchPosts = () => {
    retrieveProfilePost({ auth }).then((data) => {
      // const userPosts = data.filter((post) => post.user === auth.user.username);
      setUserPostState(data);
      // change the log from userPosts back to data
      console.log("data", data);
    });
  };

  useEffect(() => {
    fetchPosts();
    console.log("useEffect triggered");
  }, [auth]);

  const handleDelete = (postId) => {
    deletePost({ auth, postId })
      .then(() => {
        fetchPosts();
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handleUpdate = (postId, content) => {
    console.log("handleupdate clicked");
    setEditPostData({ id: postId, content: content });
  };

  const handleFormChange = (e) => {
    setEditPostData({ ...editPostData, content: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updatePost({ auth, postId: editPostData.id, content: editPostData.content })
      .then(() => {
        setEditPostData({ id: "", content: "" });
        fetchPosts();
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handleModalClose = () => {
    setEditPostData({ id: "", content: "" });
  };

  return (
    <div>
      <div>Here you can edit your posts</div>
      <div>
        {userPostState.length > 0 ? (
          userPostState.map((post, index) => (
            <div key={index} className="post">
              <p>
                User: {post.user}
                <br></br>
                Bleat: {post.content}
                <br></br>
                date: {post.date_created}
                <br></br>
                <button onClick={() => handleDelete(post.id)}>Delete</button>
                <br></br>
                <Popup
                  trigger={<button>Update</button>}
                  modal
                  nested
                  onClose={() => setEditPostData({ id: "", content: "" })}
                  open={editPostData.id === post.id}
                  onOpen={() => handleUpdate(post.id, post.content)}
                >
                  {(close) => (
                    <div className="modal">
                      <div className="content">
                        <form onSubmit={handleFormSubmit}>
                          <label>
                            Edit Post:
                            <input
                              type="text"
                              value={editPostData.content}
                              onChange={handleFormChange}
                            ></input>
                          </label>
                          <button onClick={() => close()}>Cancel</button>
                          <button type="submit">Submit</button>
                        </form>
                      </div>
                    </div>
                  )}
                </Popup>
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

export default Profile;
