import React from 'react';

export default ({ title = '', description = '', phone = ''} ) => (
    <html>
        <head>
            <title>{title}</title>
            <link rel="stylesheet" href="./style.css"/>
        </head>
        <body>
            <div className="content">
                <h1>{title}</h1>
                <div>{description}</div>
                <button onClick={() => alert('click')}>{phone}</button>
            </div>
        </body>
    </html>
);
