import React from 'react';
import { MessageI } from '../../types/index';

const Message = ({ userName, text, time }: MessageI) => (
    <li>{userName}: {text}</li>
);

export default Message;
