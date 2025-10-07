import { useEffect, useState } from 'react';
import './About.css';

const About = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`list-group about ${visible ? 'visible' : ''}`}>
      <span>Born in 2005</span>
      <span>in Hue, Vietnam.</span>
      <span>I am a Software</span>
      <span>Engineering student,</span>
      <span>passionate about</span>
      <span>technology and design.</span>
      <span>I strive to create</span>
      <span>useful and inspiring</span>
      <span>digital products,</span>
      <span>while learning and</span>
      <span>growing through</span>
      <span>new ideas and</span>
      <span>experiments.</span>
    </div>
  );
};

export default About;
