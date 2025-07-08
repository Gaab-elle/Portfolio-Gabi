import React from 'react';
import { Circle } from 'lucide-react';
import { LucideIconMap } from '../../utils/iconMapping';

const DynamicLucideIcon = ({ iconName, size = 20, color = 'currentColor', className = '' }) => {
    const IconComponent = LucideIconMap[iconName?.toLowerCase()] || Circle;
    return <IconComponent size={size} color={color} className={className} />;
};

export default DynamicLucideIcon;