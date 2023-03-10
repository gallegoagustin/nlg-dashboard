import React from 'preact/compat';
import { MessagesInbox } from './messagesInbox'; 


export const MessagesSection = ({ title }) => {
    return (
        <div className='operations-container'>
            <div className='title-container'>
                <h1 className='screen-title'>{title}</h1>
            </div>
            <div className='message-inbox-container'>
                <MessagesInbox tableTitle={'Messages'}/>
            </div>
        </div>
    );
};
