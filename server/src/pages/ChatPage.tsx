import React from 'react';
import { ChatPagePropsI } from '../types';
import { PageLayout } from './layouts/PageLayout';
import { useTranslation } from 'react-i18next';

import {
    Avatar,
    ChatHistory,
    ChatControl,
    UtilityNav
} from './components';

export const ChatPage = ({ messages = [], user }: ChatPagePropsI) => {
    const { t } = useTranslation();

    return (
        <PageLayout js={['/client/clientApp.js']} settings={user.settings}>
            <div className="chat">
                <div className="chat-header">
                    <div className="side-nav">
                        <Avatar letter={user.userName[0]} />

                        <UtilityNav
                            navItems={[{
                                url: '/settings',
                                title: t('settings'),
                                icon: 'icon-cog'
                            }, {
                                url: '/help',
                                title: t('help'),
                                icon: 'icon-lifebuoy',
                                extraClass: 'help'
                            }]}
                        />
                    </div>
                    <div className="chat-rooms"></div>
                </div>
            
                <div className="messages-container">
                    <ChatHistory
                        user={user}
                        messages={messages}
                    />

                    <ChatControl />
                </div>
            </div>
        </PageLayout>
    );
}