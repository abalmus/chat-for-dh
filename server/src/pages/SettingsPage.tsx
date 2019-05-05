import React from 'react';
import { SettingsPagePropsI } from '../types';
import { PageLayout } from './layouts/PageLayout';
import { useTranslation } from 'react-i18next';

import {
    ChooseOne,
    UserName,
    LanguageSelector
} from './components';

export const SettingsPage = ({ user }: SettingsPagePropsI) => {
    const { t } = useTranslation();

    return (
        <PageLayout js={['/client/settings.js']} settings={user.settings}>
            <section className="settings-container">
                <form id="settingsForm" tabIndex={0}>
                    <UserName userName={user.userName} />

                    <ChooseOne
                        name="interfaceColor"
                        title={t('interfaceColor')}
                        options={[{
                            label: t('light'),
                            value: 'light'
                        }, {
                            label: t('dark'),
                            value: 'dark'
                        }]}
                    />

                    <ChooseOne
                        name="timeFormat"
                        title={t('timeFormat')}
                        options={[{
                            label: `12 ${t('hours')}`,
                            value: '12'
                        }, {
                            label: `24 ${t('hours')}`,
                            value: '24'
                        }]}
                    />

                    <ChooseOne
                        name="ctrlEnter"
                        title="CTRL+ENTER"
                        options={[{
                            label: t('on'),
                            value: 'on'
                        }, {
                            label: t('off'),
                            value: 'off'
                        }]}
                    />

                    <LanguageSelector
                        title={t('language')}
                        selectedValue={user.settings.language}
                        options={[{
                            value: 'en',
                            label: t('english')
                        }, {
                            value: 'de',
                            label: t('germany')
                        }]}
                    />

                    <br />

                    <button type="submit">{t('save')}</button>
                </form>
            </section>
        </PageLayout>
    );
}
