import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Template1 from './templates/1';

export default (data) => {
    console.log('generateHTML');
    return ReactDOMServer.renderToString(<Template1 {...data}/>);
};
