import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "./context";
import { retrievePost, deletePost } from "./api";

function Profile() {
  const { auth } = useContext(AuthContext);
  const [userPostState, setUserPostState] = useState([]);

  const fetchPosts = () => {
    retrievePost({ auth }).then((data) => {
      // const userPosts = data.filter((post) => post.user === auth.user.username);
      setUserPostState(data);
      // change the log from userPosts back to data
      console.log("data", data);
    });
  };

  // new function, delete if doesnt work, ties to button in html

  useEffect(() => {
    fetchPosts();
    console.log("useEffect triggered");
  }, [auth]);

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
