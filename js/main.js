import React from 'react'
import ReactDOM from 'react-dom'

import Home from './Home.js'
import './typewriter.js'
import './smoothscroll.js'

var projects = [
  {
    title: "Wakey Alarm Clock",
    description: 'This project is based off a mock-up by designer <a href="http://www.xiaotongyuchi.com/wakeyalarm">Jennifer Yuchi</a>. This project was intended to deepen my understanding of ReactJS. Polymer components were used for material design (strange I know). Eventual plan - create a progressive web app. Designed for mobile use.',
    skills: ['HTML5', 'CSS3', 'Javascript', 'ReactJS', 'Polymer'],
    links: {
      github: 'https://github.com/vai0/alarmclock',
      preview: 'https://justinchi.me/alarmclock/'
    }
  },
  {
    title: "Tom's Metal Site",
    description: "A revamp the website of the first company where I took my first job. This project was intended to deepen my understanding of media queries. You can see the original site here. The site supports mobile, tablet, and desktop sizes. All done with media queries, pure HTML5 and CSS3 - no external libraries or javascript.",
    skills: ['HTML5', 'CSS3'],
    links: {
      github: 'https://github.com/vai0/tomsmetal_site',
      preview: 'https://justinchi.me/tomsmetal/'
    }
  }
];

var statements = [
  {
    input: 'Justin.currentLocation',
    return: '"San Jose, CA"'
  },
  {
    input: 'Justin.contactInfo',
    return: '["<a href="mailto:j.chi2241@gmail.com">j.chi2241@gmail.com</a>", "<a href="https://www.linkedin.com/in/justin-chi-64b12b37">LinkedIn</a>", "<a href="https://github.com/vai0">github</a>"]'
  },
  {
    input: 'Justin.resume',
    return: '"<a href="#">justinchi.pdf</a>"'
  },
  {
    input: 'Justin.interests',
    return: '["design", "webdev", "foosball", "/r/nba", "starcraft"]'
  },
  {
    input: 'Justin.education',
    return: '"University of California, San Diego"'
  },
  {
    input: 'Justin.skills',
    return: '["HTML5", "CSS3", "Javascript", "jQuery", "ReactJS", "git", "Sketch"]'
  }
];

ReactDOM.render(
  <Home projects={projects} statements={statements}/>,
  document.getElementById('app')
);
