import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "./context";
import { retrieveProfilePost, deletePost } from "./api";

function Profile() {
  const { auth } = useContext(AuthContext);
  const [userPostState, setUserPostState] = useState([]);

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
