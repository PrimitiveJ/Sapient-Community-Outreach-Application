
import React from 'react';

const MainLayout = ({ title, children }) => {

    return (
        <div className="">
            <h1>{title}</h1>
            <div className="">{children}</div>
        </div>
    );

}

export default MainLayout;

