import React from 'react';
import { PageLayoutPropsI } from '../../types';

export const PageLayout = ({ children, settings, js = [] }: PageLayoutPropsI) => (
  <html lang={settings.language}>
    <head>
      <title>Docler Chat</title>
      <meta content="width=device-width, initial-scale=1.0" name="viewport"></meta>
      <link href="https://fonts.googleapis.com/css?family=Work+Sans" rel="stylesheet" />
      <link rel="stylesheet" href="/client/styles/fonts.css" type="text/css"></link>
      <link rel="stylesheet" href="/client/styles/app.css" type="text/css"></link>
      {
        settings &&
        settings.interfaceColor === 'dark' &&
        <link rel="stylesheet" href="/client/styles/dark.css" type="text/css"></link>
      }
    </head>
    <body className={settings.interfaceColor}>{children}</body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io.js" />
    {
      js.map((src, i) => <script key={i} src={src}></script>)
    }
  </html>
);
