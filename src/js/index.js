import React from 'react'
import ReactDOM from 'react-dom'

import Home from 'Home.js'
import 'vendor/analytics.js'
import projects from 'content/projects_content'
import statements from 'content/aboutme_content'

ReactDOM.render(
  <Home projects={projects} statements={statements}/>,
  document.getElementById('app')
);
