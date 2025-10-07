import CardSwap, { Card } from './CardSwap'
import prjimg1 from '../assets/prjimg1.png'
import './Project.css'
import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';

const Project = () => {
  return (
    <div style={{  position: 'absolute', top: '85%', right: '5%', fontFamily: 'Courier New, Courier, monospace', fontWeight: 'bolder' , }}>
      <CardSwap
    cardDistance={60}
    verticalDistance={70}
    delay={5000}
    pauseOnHover={false}
  >
    <Card>
      <h3>#1</h3>
      <p><a href='https://qxh1145.github.io/bu-banh-online/' target='blank'>Online Eat cake</a></p>
      <img src={prjimg1} alt="Project 1" />
    </Card>
    <Card>
      <h3>#2</h3>
      <p>Your content here</p>
    </Card>
    <Card>
      <h3>Card 3</h3>
      <p>Your content here</p>
    </Card>
  </CardSwap>
    </div>
  );
}

export default Project
