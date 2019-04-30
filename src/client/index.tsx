import React from 'react';
import { Message } from './components';
import { ClientIndexPropsI, MessageI } from '../types';

export const ClientIndex = ({ messages = [] }: ClientIndexPropsI) => (
    <html >
        <head>
            <title>Docler Chat</title>
        </head>
        <body>
            <ul>
                { messages.map((message: MessageI, i) => <Message key={i} {...message} /> )}
            </ul>
        </body>
    </html>
)
