import React from "react";

export const withKey = (key?: string) => {
    return <E extends object, T extends React.ComponentType<E>>(component: T) => 
    (props: E, index: number) => {
        React.createElement(
            component,
            {...props, key: key ? props[key as keyof E] : index},
            []
        );
    }
}