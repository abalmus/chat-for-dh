import React from 'react';
import { ChatHistoryPropsI, MessageI } from '../../types';
import { Message } from './index';

const ChatHistory = ({ user, messages }: ChatHistoryPropsI) => (
    <ul id="messages" className="messages">
        { 
            messages.map((message: MessageI, index: number) => 
                <Message
                    key={index}
                    {...message}
                    isSelf={user.userName === message.userName}
                />
            )
        }
    </ul>
);

export default ChatHistory;
