import React from 'react';
import { MessageI } from '../../types/index';

const Message = ({ username, text, time }: MessageI) => (
    <li>{username}: {text}</li>
);

export default Message;
