// Screenshot can be any size. just make sure it is close to a 1:1 ratio - a square.

const projects = [
  {
    title: "Chart the Stock Market",
    description: 'This project is based off this <a href="https://www.freecodecamp.com/challenges/chart-the-stock-market">challenge</a>. Data is retrieved from the <a href="https://developer.tradier.com/documentation">Tradier API</a>. Search autocomplete relies on the lookup endpoint and runs slow at times. Please be patient!',
    skills: ['HTML5', 'CSS3', 'Sass', 'JavaScript', 'ES6', 'ReactJS'],
    screenshot: 'stockmarketchart.png',
    links: {
      github: 'https://github.com/vai0/stockmarketchart',
      preview: 'https://justinchi.me/stockmarketchart/'
    }
  },
  {
    title: "Wakey Alarm Clock",
    description: 'This project is based off this <a href="http://www.xiaotongyuchi.com/wakeyalarm">mock-up</a> by designer Xiaotong Yuchi. Polymer components were taken directly from Google spec to ensure smooth animations on mobile. Designed for mobile use.',
    skills: ['HTML5', 'CSS3', 'Sass', 'JavaScript', 'ReactJS', 'Polymer', 'Material Design'],
    screenshot: 'wakeyalarmclock.png',
    links: {
      github: 'https://github.com/vai0/alarmclock',
      preview: 'https://justinchi.me/alarmclock/'
    }
  },
  {
    title: "Wakey Weather Backgrounds",
    description: 'Animated backgrounds for when the alarm is triggered in the <a href="https://justinchi.me/alarmclock/">Wakey Alarm Clock</a> app. CSS animations and a bit of JavaScript for the snow and rain. No external libraries.',
    skills: ['HTML5', 'CSS3', 'Sass', 'JavaScript'],
    screenshot: 'wakeybackgrounds.png',
    links: {
      github: 'https://github.com/vai0/weather-animations',
      preview: 'https://justinchi.me/alarmclockweather'
    }
  },
  {
    title: "Tom's Metal Site",
    description: 'A revamped version of the website of the company at my first job. You can see the original site <a href="http://www.tomsmetal.com/">here</a>. The site supports mobile, tablet, and desktop sizes. Media queries only - no external libraries or JavaScript.',
    skills: ['HTML5', 'CSS3'],
    screenshot: 'tomsmetal.png',
    links: {
      github: 'https://github.com/vai0/tomsmetal_site',
      preview: 'https://justinchi.me/tomsmetal/'
    }
  },
  {
    title: 'Portfolio Site',
    description: 'This website! The site is designed for both mobile and desktop.',
    skills: ['HTML5', 'CSS3', 'Sass', 'JavaScript', 'ReactJS'],
    screenshot: 'portfolio.png',
    links: {
      github: 'https://github.com/vai0/portfolio_3',
      preview: 'https://justinchi.me/'
    }
  }
];

export default projects;
