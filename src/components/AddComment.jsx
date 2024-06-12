import React from "react";

const initialFormState = {name: '', message: ''};


const AddComment = ({handleModalClose, addCommentModalDisplay}) => {
    const [formState, setFormState] = React.useState(initialFormState);
    
    // handles onChange for all form fields
    const handleChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value});
    };

    // creates a comment on click of add comment button
    const handleClick = async (e) => {
        e.preventDefault();
        await fetch('/createComment', {
            method: 'POST',
            // api headers to send json data and accept same
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(formState), 
          }).then(res => res.json())
        .then(res => {
            console.log(res);
        })
        .catch(e=>{
            console.log(e);
        })
    };

    // clears the modal window and clears form data on closing Modal
    const handleModalCloseClick = () => {
        setFormState(initialFormState);
        handleModalClose();
    }

    return (
        <main className="main-section">
            <div className="modal" style={{display: addCommentModalDisplay}}>
                <div className="modal-content">
                    <span className="close" onClick={handleModalCloseClick}>&times;</span>
                    <h3 className="add-comment-heading ">Add your Comment</h3>
                    <form className="margin-30">
                        <label htmlFor="name">Name</label><br />
                        <input type="text" id="name" name="name" 
                        className="input-field" 
                        value={formState.name} 
                        onChange={handleChange}/><br />
                        <label htmlFor="message">Message</label><br />
                        <textarea id="message" name="message"
                         rows="4" cols="50" 
                         className="input-field" 
                         value={formState.message} 
                         onChange={handleChange}></textarea> <br />
                         <div className="button-container">
                        <button onClick={handleClick} className="add-comment-button pad-10">Add Comment</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
};

export default AddComment;