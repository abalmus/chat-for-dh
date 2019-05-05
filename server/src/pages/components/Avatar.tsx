import React from 'react';
import { AvatarPropsI } from '../../types/index';

const Avatar = ({ letter }: AvatarPropsI) => (
    <div className="avatar">{letter.toUpperCase()}</div>
);

export default Avatar;
