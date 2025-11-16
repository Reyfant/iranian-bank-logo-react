import React from "react";

const IranianBank = ({ name, size = 20, ...rest }) => {
    try {
        const Icon = require(`./icons/${name}.svg`).default;

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
    } catch (e) {
        console.error(`Icon "${name}" not found.`);
        return null;
    }
};

export default IranianBank;