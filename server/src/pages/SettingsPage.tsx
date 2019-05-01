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
                <div>
                    <h5>Interface Color</h5>
                    <input type="radio" name="interfaceColor" value="light" id="interfaceColorLight" defaultChecked={true} /> 
                    <label>Light</label>
                    <input type="radio" name="interfaceColor" value="dark" id="interfaceColorDight"  /> 
                    <label>Dark</label>
                </div>

                <div>
                    <h5>Time Format</h5>
                    <input type="radio" name="timeFormat" value="12" id="timeFormat12" defaultChecked={true} /> 
                    <label>12 hours</label>
                    <input type="radio" name="timeFormat" value="24" id="timeFormat24" /> 
                    <label>24 hours</label>
                </div>

                <div>
                    <h5>CTRL+ENTER</h5>
                    <input type="radio" name="ctrlEnter" value="on" id="ctrlEnterOn" defaultChecked={true} /> 
                    <label>On</label>
                    <input type="radio" name="ctrlEnter" value="off" id="ctrlEnterOff" /> 
                    <label>Off</label>
                </div>

                <div>
                    <h5>Language</h5>
                    <select name="language">
                        <option value="en">English</option>
                        <option value="de">Germany</option>
                    </select>
                </div>
                <br />
                <button type="submit">Save</button>
            </form>
        </body>
        <script type="text/javascript" src="/client/settings.js"></script>
    </html>
)
