import React from 'react';
import { ChatControlPropsI } from '../../types';
import { useTranslation } from 'react-i18next';

const ChatControl = ({}: ChatControlPropsI) => {
    const { t } = useTranslation();

    return (
        <section className="chat-control" tabIndex={0}>
            <div className="chat-control-options">
                <i className="icon-happy" tabIndex={0} title="Select Emoji"></i>
                <i className="icon-image" tabIndex={0} title="Send Image"></i>
                <i className="icon-attachment" tabIndex={0} title="Attach File"></i>
                <i className="icon-calendar" tabIndex={0} title="Scheaduled Message"></i>
            </div>

            <div className="chat-control-form">
                <form id="messageForm">
                    <textarea name="message" placeholder={t('messagePlaceholder')}></textarea>
                    <button type="submit">
                        <i className="icon-compass" title={t('messageTitle')}></i>
                    </button>
                </form>
            </div>
        </section>
    );
}

export default ChatControl;
