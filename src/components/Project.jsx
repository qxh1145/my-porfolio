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
import { HiArrowUpRight } from 'react-icons/hi2';
import Button from '@mui/joy/Button';

const Project = () => {
  const [visible, setVisible] = React.useState(false);
    React.useEffect(() => {
      const t = setTimeout(() => setVisible(true), 50);
      return () => clearTimeout(t);
    }, []);
  return (
    <div className={`list-group about ${visible ? 'visible' : ''}`} style={{  position: 'absolute', top: '80%', right: '5%', fontFamily: 'Courier New, Courier, monospace', fontWeight: 'bolder' , }}>
     <div style={{display: 'flex', flexDirection: 'column',}}>
        <a href='https://qxh1145.github.io/bu-banh-online/' target='_blank'>Online Eating Moon Cake</a>
        <a href='https://qxh1145.github.io/bu-banh-online/' target='_blank'>Galery Online Viewing</a>
        <a href='https://qxh1145.github.io/bu-banh-online/' target='_blank'>HoangYen Records</a>
        <br></br>
        <span ><a href='http://github.com/qxh1145' target='_blank'>View more on my github</a></span>
      </div>
     
    </div>
  );
}

export default Project
