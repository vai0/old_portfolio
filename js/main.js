import React from 'react'
import ReactDOM from 'react-dom'

import Home from './Home.js'

var projects = [
  {
    title: "Wakey Alarm Clock",
    description: "This project is based off a mock-up by designer Jennifer Yuchi. This project was indended to deepen my understanding of ReactJS. Polymer components were used for material design. Eventual plans - replace Polymer with react-mdl, create a progressive web app so it integrates deeper as a mobile app with alarm notifications, congregate the data up into a higher component.",
    skills: ['HTML5', 'CSS3', 'Javascript', 'ReactJS', 'Polymer'],
    links: {
      github: 'https://momofuku.com/',
      preview: 'https://stripe.com/'
    }
  },
  {
    title: "Tom's Metal Site",
    description: "A revamp the website of the first company where I took my first job. This project was intended to deepen my understanding of media queries. You can see the original site here. The site supports mobile, tablet, and desktop sizes. All done with media queries, pure HTML5, and CSS3 - no external libraries or javasc",
    skills: ['HTML5', 'CSS3'],
    links: {
      github: 'https://momofuku.com/',
      preview: 'https://google.com'
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
    return: '["<a href="#">j.chi2241@gmail.com</a>", "<a href="#">LinkedIn</a>", "<a href="#">github</a>"]'
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
    return: '["HTML5", "CSS3", "Javasript", "jQuery", "ReactJS", "git", "webpack", "Sketch"]'
  }
];

ReactDOM.render(
  <Home projects={projects} statements={statements}/>,
  document.getElementById('app')
);
