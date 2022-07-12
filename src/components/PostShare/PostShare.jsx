import React, { useState, useRef } from "react";
import "./PostShare.css";
import ProfileImg from "../../img/SanyamJain.jpg";
import { UilScenery } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from '@iconscout/react-unicons';

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  // An event that will be fired on hidden input
  // It is fired by the reference when user will set his photo option

  /*  
    when event is fired it will check the availablity of any image or the event 
    contains any files, if it contains then the image should be present on the 
    zero index of our file and assign the photo to image variable.
  */

  const onChangeImage = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  return (
    <div className="postshare">
      <img src={ProfileImg} alt="profile" />
      <div>
        <input type="text" placeholder="What's happening" />
        <div className="postoptions">
          <div className="options" onClick={() => imageRef.current.click()}>
            <UilScenery />
            Photo
          </div>
          <div className="options">
            <UilPlayCircle />
            Video
          </div>
          <div className="options">
            <UilLocationPoint />
            Location
          </div>
          <div className="options">
            <UilSchedule />
            Schedule
          </div>
          <button className="btn ps-btn">Share</button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onChangeImage}
            />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={image.image} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;