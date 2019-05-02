import React, { CSSProperties } from 'react';
import { PageLayoutPropsI } from '../../types';

const bodyStyle: CSSProperties = {
  fontFamily: 'Work Sans, sans-serif',
  background: '#F7F7F7'
};

export const PageLayout = ({ children, js = [] }: PageLayoutPropsI) => (
  <html lang="en">
    <head>
      <title>Docler Chat</title>
      <link href="https://fonts.googleapis.com/css?family=Work+Sans" rel="stylesheet" />
      <link rel="stylesheet" href="https://npmcdn.com/wire.css/dist/wire.min.css" type="text/css"></link>
      <link rel="stylesheet" href="/client/styles/fonts.css" type="text/css"></link>
      <link rel="stylesheet" href="/client/styles/app.css" type="text/css"></link>
    </head>
    <body style={bodyStyle}>{children}</body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io.js" />
    {
      js.map((src, i) => <script key={i} src={src}></script>)
    }
  </html>
);
