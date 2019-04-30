import React from 'react';

interface Message {
    time: number,
    username: string;
    text: string
}

interface Props {
    messages: Message[];
}

const Message = ({ username, text, time }: Message) => (
    <li>{text}</li>
);

export const ClientIndex = ({ messages = [] }: Props) => (
    <html >
        <head>
            <title>Docler Chat</title>
        </head>
        <body>
            <ul>
                { messages.map((message, i) => <Message key={i} {...message} /> )}
            </ul>
        </body>
    </html>
)
