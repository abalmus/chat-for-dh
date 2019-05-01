import React from 'react';
import { MessageI } from '../../types/index';

const Message = ({ userName, text, time, isSelf }: MessageI) => (
    <li className={isSelf ? 'self-message' : ''}>{userName}: {text} </li>
);

export default Message;
