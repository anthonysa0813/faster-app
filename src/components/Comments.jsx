import React from "react";
import "./comments.css";
import userOne from "../images/user-one.png";
import userSecond from "../images/user-two.png";
import userThird from "../images/user-third.png";
const Comments = () => {
  return (
    <div className="CommentsContainer   ">
      <div className="commentsUsers ">
        <h1 className="text-center">Folks are checking out Fast</h1>
        <div className="commentsGrid ">
          <div className="cardUser">
            <img className="userProfile-image" src={userOne} alt="" />
            <div className="cardUser-info">
              <p className="text-center">
                Just made my first @fast order. Now I’m just upset that every
                store doesn’t have this yet. @domm let’s go!!!!
              </p>
              <span className="text-center">Harry Hurst</span>
              <span className="text-center">@harryhurst</span>
            </div>
          </div>
          <div className="cardUser">
            <img className="userProfile-image" src={userSecond} alt="" />

            <div className="cardUser-info">
              <p className="text-center">
                Just made my first @fast order. Now I’m just upset that every
                store doesn’t have this yet. @domm let’s go!!!!
              </p>
              <span className="text-center">Holly Cardew</span>
              <span className="text-center">@hollyccc</span>
            </div>
          </div>
          <div className="cardUser">
            <img className="userProfile-image" src={userThird} alt="" />

            <div className="cardUser-info">
              <p className="text-center">
                Just made my first @fast order. Now I’m just upset that every
                store doesn’t have this yet. @domm let’s go!!!!
              </p>
              <span className="text-center">Hum</span>
              <span className="text-center">@humrashid</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
