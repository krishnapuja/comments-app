import React from "react";

const CommentCard = ({name, message, created}) => (
<section className="comment-card">
    <p className="message-content">{message}</p>
    <h5>{name} <span className="color-grey">commented on </span> {new Date(created).toUTCString()}</h5>
</section>
);

export default CommentCard;
