import React from 'react'
import ReactDOM from 'react-dom'

import Home from 'Home.js'
import 'analytics.js'
import projects from 'data/projects_data'
import statements from 'data/aboutme_data'

ReactDOM.render(
  <Home projects={projects} statements={statements}/>,
  document.getElementById('app')
);
