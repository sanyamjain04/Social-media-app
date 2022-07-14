import React from "react";
import "./FollowersCard.css";
import { Followers } from "../../../src/Data/FollowersData";

const FollowersCard = () => {
  return (
    <div className="followerCard">
      <h3>Who is following you</h3>

      {Followers.map((follower, id) => {
        return (
          <div className="follower" >
            <div >
              <img
                src={follower.img}
                
                alt="follower  "
                className="followerimg"
              />
              <div className="name">
                <span>{follower.name}</span>
                <span>@{follower.username}</span>
              </div>
            </div>
            <button className="btn">
              Follow
            </button>
          </div>  
        );
      })}
    </div>
  );
};

export default FollowersCard;
