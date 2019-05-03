import React from 'react';
import { MessageI } from '../../types';

const Message = ({ userName, text, time, isSelf }: MessageI) => (
    <li className={isSelf ? 'self-message' : ''}>
        <div className="message">
            {text}
        </div>
        <div className="message-info">
            {userName} - {`${time.getHours()}:${time.getMinutes()}`}
        </div>
    </li>
);

export default Message;
