import firebase from "firebase";
import React, { useState } from "react";
import db from "../firebase";
import {
  EmojiIcon,
  GIFIcon,
  ImageIcon,
  PollIcon,
  ScheduleIcon,
} from "../icons/Icon";


const TweetBox = () => {
    const [content, setContent] = useState("");
  
    const sendTweet = () => {
      if (content !== "") {
        db.collection("feed").add({
          displayName: "Adil Ahmet Sargın",
          username: "@adilahmetsargin",
          content,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          image:
            "https://images.unsplash.com/photo-1620657668921-29d93757551f",
          avatar:
            "https://pbs.twimg.com/profile_images/1343621698030071813/f8O81qL6_bigger.jpg",
        });
  
        setContent("");
      }
    };
  
    return (
      <div className="flex flex-col flex-1 mt-2 px-2">
        <textarea
          className="w-full text-xl placeholder-gray-lightGray outline-none overflow-hidden resize-none bg-transparent"
          placeholder="What's happening?"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <div className="flex items-center justify-between">
          <div className="flex -ml-3">
            <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightestGray">
              <ImageIcon className="w-6 h-6 text-blue-baseBlue" />
            </div>
            <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightestGray">
              <GIFIcon className="w-6 h-6 text-blue-baseBlue" />
            </div>
            <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightestGray">
              <PollIcon className="w-6 h-6 text-blue-baseBlue" />
            </div>
            <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightestGray">
              <EmojiIcon className="w-6 h-6 text-blue-baseBlue" />
            </div>
            <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightestGray">
              <ScheduleIcon className="w-6 h-6 text-blue-baseBlue" />
            </div>
          </div>
          <button
            className="bg-blue-baseBlue text-white rounded-full px-4 py-2 font-medium"
            onClick={sendTweet}
          >
            Tweet
          </button>
        </div>
      </div>
    );
  };
  
  export default TweetBox;