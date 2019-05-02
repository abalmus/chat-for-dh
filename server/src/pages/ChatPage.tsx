import React from 'react';
import { Message } from './components/index';
import { ChatPagePropsI, MessageI } from '../types/index';
import { PageLayout } from './layouts/PageLayout';

export const ChatPage = ({ messages = [], user }: ChatPagePropsI) => (
    <PageLayout js={['/client/clientApp.js']}>
        <div className="grid chat">
            <div className="col-1 side-nav">
                <h4>Hello {user.userName}</h4>
            </div>
            <div className="col-2 chat-rooms"></div>
            <div className="col-9">
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
