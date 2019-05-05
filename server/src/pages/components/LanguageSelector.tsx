import React from 'react';
import { LangOptionI, LanguageSelectorPropsI } from '../../types';
import { useTranslation } from 'react-i18next';

const LanguageSelector = ({ title, options, defaultValue }: LanguageSelectorPropsI) => {
    const { t } = useTranslation();
    
    return (
        <div className="field-group">
            <h3>{title}</h3>
            <select name="language">
                {
                    options.map(({ value, label }: LangOptionI) => (
                        <option value={value} selected={value === defaultValue}>{label}</option>
                    ))
                }
            </select>
        </div>
    );
}

export default LanguageSelector;
