import React from 'react';
import { Message, Avatar } from './components';
import { ChatPagePropsI, MessageI, AvatarPropsI } from '../types';
import { PageLayout } from './layouts/PageLayout';

export const ChatPage = ({ messages = [], user }: ChatPagePropsI) => (
    <PageLayout js={['/client/clientApp.js']}>
        <div className="chat">
            <div className="chat-header">
                <div className="side-nav">
                    <Avatar letter={user.userName[0]} />

                    <nav className="utility">
                        <a href="/settings">
                            <i className="icon-cog" tabIndex={0} title="Settings"></i>
                        </a>
                        <a href="/help" className="help">
                            <i className="icon-lifebuoy" tabIndex={0} title="Help"></i>
                        </a>
                    </nav>
                </div>
                <div className="chat-rooms"></div>
            </div>

            <div className="messages-container">
                <ul id="messages" className="messages">
                    { messages.map((message: MessageI, i) => <Message key={i} {...message} isSelf={user.userName === message.userName} /> )}
                </ul>

                <section className="chat-control" tabIndex={0}>
                    <div className="chat-control-options">
                        <i className="icon-happy" tabIndex={0} title="Select Emoji"></i>
                        <i className="icon-image" tabIndex={0} title="Send Image"></i>
                        <i className="icon-attachment" tabIndex={0} title="Attach File"></i>
                        <i className="icon-calendar" tabIndex={0} title="Scheaduled Message"></i>
                    </div>

                    <div className="chat-control-form">
                        <form id="messageForm">
                            <textarea name="message" placeholder="Type your message"></textarea>
                            <button type="submit">
                                <i className="icon-compass" title="Send Message"></i>
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    </PageLayout>
)
