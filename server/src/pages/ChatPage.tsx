import React from 'react';
import { Message } from './components/index';
import { ChatPagePropsI, MessageI } from '../types/index';

export const ChatPage = ({ messages = [], user }: ChatPagePropsI) => (
    <html >
        <head>
            <title>Docler Chat</title>
        </head>
        <body>
            <h1>Hello {user.userName}</h1>
            <div className="messages" tabIndex={0}>
                <ul id="messages">
                    { messages.map((message: MessageI, i) => <Message key={i} {...message} /> )}
                </ul>
            </div>
            <div className="control" tabIndex={0}>
                <form id="messageForm">
                    <input type="text" name="message"></input>
                    <button type="submit">Send</button>
                </form>
            </div>
        </body>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io.js" />
        <script type="text/javascript" src="/client/clientApp.js"></script>
    </html>
)
