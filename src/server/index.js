import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import HelloWorld from '../container/HelloWorld';

const app = express();
app.get('/', (req, res) => {
    const str = renderToString(<HelloWorld />);
    res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Document</title>
            </head>
            <body>
                <div id="root">${str}</div>
            </body>
            </html>
        `);
});

app.listen(3000, () => {
    console.log('Server is running on port: 3000');
});
