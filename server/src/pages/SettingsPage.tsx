import React from 'react';
import { SettingsPagePropsI } from '../types/index';
import { PageLayout } from './layouts/PageLayout';

export const SettingsPage = ({ user }: SettingsPagePropsI) => (
    <PageLayout js={['/client/settings.js']}>
        <section className="settings-container">
            <form id="settingsForm" tabIndex={0}>
                <div className="field-group">
                    <h3><label htmlFor="userName">User Name</label></h3>
                    <input type="text" name="userName" defaultValue={user.userName} placeholder="Please inser your name" />
                </div>

                <div className="field-group">
                    <h3>Interface Color</h3>
                    <input type="radio" name="interfaceColor" value="light" id="interfaceColorLight" defaultChecked={true} /> 
                    <label htmlFor="interfaceColorLight">Light</label>
                    <input type="radio" name="interfaceColor" value="dark" id="interfaceColorDight"  /> 
                    <label htmlFor="interfaceColorDight">Dark</label>
                </div>

                <div className="field-group">
                    <h3>Time Format</h3>
                    <input type="radio" name="timeFormat" value="12" id="timeFormat12" defaultChecked={true} /> 
                    <label htmlFor="timeFormat12">12 hours</label>
                    <input type="radio" name="timeFormat" value="24" id="timeFormat24" /> 
                    <label htmlFor="timeFormat24">24 hours</label>
                </div>

                <div className="field-group">
                    <h3>CTRL+ENTER</h3>
                    <input type="radio" name="ctrlEnter" value="on" id="ctrlEnterOn" defaultChecked={true} /> 
                    <label htmlFor="ctrlEnterOn">On</label>
                    <input type="radio" name="ctrlEnter" value="off" id="ctrlEnterOff" /> 
                    <label htmlFor="ctrlEnterOff">Off</label>
                </div>

                <div className="field-group">
                    <h3>Language</h3>
                    <select name="language">
                        <option value="en">English</option>
                        <option value="de">Germany</option>
                    </select>
                </div>
                <br />

                <button type="submit">Save</button>
            </form>
        </section>
    </PageLayout>
)
