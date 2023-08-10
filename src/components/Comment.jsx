//"use client";

import { comments } from "@/libs/comments";
import { Reply } from "@/components/Reply";
import { useState } from "react";

export const Comment = ({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,
}) => {
  //const resultLikeNum = 0 ?" ":<img src="/like.svg" width={20}></img> ;
  const [reply, setReply] = useState(comments);

  return (
    <div>
      {/* your code here... */}
      <div className="d-flex gap-2 my-2">
        <comments />
        <img
          // src="/profileImages/lisa.jpg"
          src={userImagePath}
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <div
          className="rounded rounded-3 p-2"
          style={{ backgroundColor: "#E5E7EB" }}
        >
          {/* <span className="fw-semibold">Lisa</span> */}
          <span className="fw-semibold">{username}</span>
          <br />
          {/* <span>จริงค่า</span> */}
          <span>{commentText}</span>
          <div className="d-flex align-items-center gap-1">
            <img src="/like.svg" width={20}></img>
            {/* <span className="text-muted">999 คน</span> */}
            <span className="text-muted">{likeNum}</span>
          </div>
        </div>
      </div>
      {/* map-loop render Reply component here */}
      {reply.map((reply, i) => (
        <Reply
          key={i}
          userImagePath={reply.userImagePath}
          username={reply.username}
          likeNum={reply.likeNum}
        />
      ))}
    </div>
  );
};
