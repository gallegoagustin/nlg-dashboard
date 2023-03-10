import React from 'preact/compat';
import { useState } from 'preact/hooks';

export const Message = (props) => {
    const [viewMessage, setViewMessage] = useState(false);
    const [read, setRead] = useState(false);
    const switchViewMessage = () => {
        setViewMessage(!viewMessage);
    };
    const markAsRead = () => {
        setRead(!read);
        props.isRead === !read;
        console.log(props.isRead); 
    };
    return (
        <div className='message-container'>
            <div className='extend-container'>
                <div className="preview" onClick={() => switchViewMessage()}>
                    <div className="date">
                        <h2>{props.date}</h2>
                    </div>
                    <div className="subject">
                        <h2>{props.subject}</h2>
                    </div>
                    <div className="job-adress">
                        <h2>{props.jobAdress}</h2>              
                    </div>
                    <div className="sender">
                        <h2>{props.sender}</h2>                    
                    </div>
                </div>
                {viewMessage && (
                    <div className="show-message-div">
                        <p1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit massa non ligula consectetur, ac pretium arcu consectetur. Etiam porta ante ac lacus lacinia sagittis. Nunc dignissim aliquet libero et varius. Phasellus ultrices neque sit amet erat imperdiet fermentum. Donec semper eleifend rhoncus. Maecenas sit amet felis condimentum, mollis nulla ac, vestibulum ex. Suspendisse id est a magna hendrerit bibendum. Maecenas laoreet leo nec enim tempus lacinia. </p1>
                        <div className='details-div'>
						    <img className='detail-svg' src='./assets/fullscreen.svg' alt='view-details'/> 
                            <h3 className='view-job-details'>View job details</h3>
                        </div>
                    </div> 
                    
                )}
            </div>
            <div className="eye-div">
                <img className={read ? 'eye-open-svg-read' : 'eye-open-svg'} src='./assets/eye-open.svg' alt='mark as read' onClick={() => markAsRead()}/>
            </div>
        </div>
    );
};