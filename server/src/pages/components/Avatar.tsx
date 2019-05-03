import React from 'react';
import { AvatarPropsI } from '../../types';

const Avatar = ({ letter }: AvatarPropsI) => (
    <div className="avatar">{letter.toUpperCase()}</div>
);

export default Avatar;
