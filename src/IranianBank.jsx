'use client'
import React from "react";
import { iconMap } from "./iconMap";

const IranianBank = ({ name, size = 20, ...rest }) => {
    const Icon = iconMap[name];

    if (!Icon) {
        console.error(`Icon "${name}" not found.`);
        return null;
    }

    return (
        <img
            src={Icon}
            width={size}
            height={size}
            style={{ width: `${size}px`, height: `${size}px` }}
            alt={name}
            {...rest}
        />
    );
};

export default IranianBank;