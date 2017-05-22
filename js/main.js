import React from 'react'
import ReactDOM from 'react-dom'

import Home from './Home.js'
import './typewriter.js'
import './smoothscroll.js'
import './analytics.js'
import projects from './projects_data.js'
import statements from './aboutme_data.js'

ReactDOM.render(
  <Home projects={projects} statements={statements}/>,
  document.getElementById('app')
);
