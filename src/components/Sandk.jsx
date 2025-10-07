import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';
import { Grid } from '@mui/joy';

const SandK = () => {
  return (

    <div style={{  position: 'absolute', top: '53%', right: '1%', fontFamily: 'Courier New, Courier, monospace', fontWeight: 'bolder' }}>
      <h3>Programming Language & Framework</h3>
      <ul>
        <li>Java, javascript, Swift</li>
        <li>React, NodeJS, ReactNative</li>
        <li>Tailwind-CSS, CSS-in-JS</li>
      </ul>
      <h3>What Language I speak ?</h3>
      <ul>
        <li>Japanese</li>
        <li>English</li>
        <li>Vietnamese</li>
      </ul>
      <h3>Tool I use</h3>
      <ul>
        <li>Docker</li>
        <li>Git, Github</li>
        <li>VSCode, Intelliji, XCode</li>
        <li>Notion, Jira, Postmam, pgAdmin4</li>
      </ul>
    </div>
  );
}
export default SandK
