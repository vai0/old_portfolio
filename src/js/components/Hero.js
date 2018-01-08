import React from 'react';
import Typewriter from 'Typewriter';

class Hero extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="hero-container">
        <Typewriter className="hero-title" text="Justin Chi"/>
        <div className="hero-description">
          I am a web developer in the bay area. I have a passion for building simple, beautiful user experiences. Check out my <a href="#projects">work</a> below.
        </div>
      </div>
    );
  }
}

export default Hero;
