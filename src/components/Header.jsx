import React from "react";
import addCommentIcon from "../add-comment-icon.png";
import notificationIcon from "../notification-icon.png";

const Header = ({ handleAddCommentModalOpen, handleNotificationDisplay, notificationDisplay, notificationFeed }) => (
    <header className="comments-feed-header">
        <h2 className="flex-grow-1">Comments Feed</h2>
        <div className="notification">
            <img className="pad-10" src={notificationIcon} onClick={handleNotificationDisplay}/>
            {notificationFeed.length > 0 && <span className="badge">{notificationFeed.length}</span>}
            <div className="dropdown-content" style={{display: notificationDisplay}}>
                {notificationFeed.map(notifications => <p>{notifications} new messages added</p>)}
            </div>
        </div>

        <img style={{ padding: '10px' }} src={addCommentIcon} onClick={handleAddCommentModalOpen} />
    </header>
);

export default Header;
