import React from 'react';
import { ChooseOnePropsI, ChooseOptionItemI } from '../../types';

const ChooseOne = ({ title, name, options }: ChooseOnePropsI) => (
    <div className="field-group">
        <h3>{title}</h3>
        {
            options.map(({ label, value }: ChooseOptionItemI, index: number) => (
                <React.Fragment key={index}>
                    <input type="radio" name={name} value={value} id={name+value} defaultChecked={index === 0} /> 
                    <label htmlFor={name+value}>{label}</label>
                </React.Fragment>
            ))
        }
    </div>
);

export default ChooseOne;
