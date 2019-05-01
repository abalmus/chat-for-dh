import React from 'react';
import { SettingsPagePropsI } from '../types/index';

export const SettingsPage = ({ user }: SettingsPagePropsI) => (
    <html >
        <head>
            <title>Docler Chat Settings</title>
        </head>
        <body>
            <form id="settingsForm" tabIndex={0}>
                <label htmlFor="userName">User Name</label>
                <input type="text" name="userName" defaultValue={user.userName} />
                <button type="submit">Save</button>
            </form>
        </body>
        <script type="text/javascript" src="/client/settings.js"></script>
    </html>
)
