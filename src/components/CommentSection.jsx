import React from "react";
import CommentCard from "./CommentCard";

const CommentSection = ({comments}) => {
    return (
        <main className="main-section">
            {comments.map(({name, message, created, id})=> <CommentCard name={name} message={message} created={created} key={id}/>)}
        </main>
    )
};

export default CommentSection;
