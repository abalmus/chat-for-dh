import React from 'react';
import { useTranslation } from 'react-i18next';
import { UserNamePropsI } from '../../types';

const UserName = ({ userName }: UserNamePropsI) => {
    const { t } = useTranslation();
    
    return (
        <div className="field-group">
            <h3><label htmlFor="userName">{t('userName')}</label></h3>
            <input
                type="text"
                name="userName"
                defaultValue={userName}
                placeholder={t('userNamePlaceholder')} />
        </div>
    );
}

export default UserName;
