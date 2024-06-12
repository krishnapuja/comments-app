import React from "react";
import Header from './Header';
import CommentSection from './CommentSection';
import AddComment from './AddComment';

const CommentsFeedContainer = () => {
    const [addCommentModalDisplay, setAddCommentModalDisplay] = React.useState('none');
    const [comments, setComments] = React.useState([]);
    const [notificationDisplay, setNotificationDisplay] = React.useState('none');
    const [notificationFeed, setNotificationFeed] = React.useState([]);
    

    React.useEffect(() => {
        // Fetch comments periodically to noify user on real time
        const fetchComments = async () => {
            await fetch('/getComments').then(r =>  r.json())
            .then(res => {
                setComments( prevComments => {
                    // when there is a change in response update the notification feed
                    if(prevComments.length > 0 && prevComments.length !== res.length){
                        setNotificationFeed(prevNotificationFeed => [...prevNotificationFeed, res.length - prevComments.length])
                    }

                    //sorting the response baseed on creation date to show latest messages at the top
                    return res.sort((a,b) => new Date(b.created) - new Date(a.created));
                } );
            })
        };
    
        // Fetch comments initially
        fetchComments();

    
        // Poll for new notifications every 5 seconds
        const interval = setInterval(fetchComments, 5000);
    
        // Clean up interval
        return () => clearInterval(interval);
      }, []);
    
    const handleAddCommentModalClose = () => {
        setAddCommentModalDisplay('none');
    };

    const handleAddCommentModalOpen =() => {
        setAddCommentModalDisplay('block');
    }

    const handleNotificationDisplay = () => {
        if(notificationDisplay === 'none'){
        setNotificationDisplay('block');
        } else {
            setNotificationDisplay('none');
        }
    }

    return (
        <>
        <Header 
        handleAddCommentModalOpen={handleAddCommentModalOpen} 
        notificationDisplay={notificationDisplay}
        handleNotificationDisplay={handleNotificationDisplay}
        notificationFeed={notificationFeed}
        />
        <AddComment addCommentModalDisplay={addCommentModalDisplay} handleModalClose={handleAddCommentModalClose}/>
        <CommentSection comments={comments}/>
        </>
    )
};

export default CommentsFeedContainer;
