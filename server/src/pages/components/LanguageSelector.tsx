import React from 'react';
import { useTranslation } from 'react-i18next';

interface LangOptionI {
    value: string;
    label: string;
}

interface LanguageSelectorPropsI {
    title: string;
    options: LangOptionI[];
    selectedValue: string;
}

const LanguageSelector = ({ title, options, selectedValue }: LanguageSelectorPropsI) => {
    const { t } = useTranslation();
    
    return (
        <div className="field-group">
            <h3>{title}</h3>
            <select name="language">
                {
                    options.map(({ value, label }: LangOptionI) => (
                        <option value={value} selected={value === selectedValue}>{label}</option>
                    ))
                }
            </select>
        </div>
    );
}

export default LanguageSelector;
