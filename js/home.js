import React from 'react'
import smoothScroll from 'smoothscroll-polyfill'
import 'css/Home.scss'

export default class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <Navbar />
        <Hero />
        <About statements={this.props.statements}/>
        <h2 id="projects" className="section-title">Projects</h2>
        <Projects projects={this.props.projects}/>
        <div className="background"></div>
        <h2 id="contact" className="section-title">Contact me!</h2>
        <ContactLinks />
        <Footer />
      </div>
    );
  }
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const self = this;
    smoothScroll.polyfill();

    document.addEventListener('DOMContentLoaded', function(event) {
      self.refs.navbar.addEventListener('click', function(e) {
        if (e.target.innerText === 'Projects') {
          document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
        } else if (e.target.innerText === 'Contact') {
          document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  render() {
    return (
      <nav className="navbar" ref="navbar">
        <a href="https://justinchi.me">Home</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    );
  }
}

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.typewrite = this.typewrite.bind(this);
  }

  typewrite(str) {
    var text = '';
    var typespeed = 0;
    var mintypespeed = 90;
    var maxtypespeed = 150;
    var self = this;

    for (var i = 0; i <= str.length; i++) {
      (function(x) {
        typespeed += Math.random() * (maxtypespeed - mintypespeed) + mintypespeed;
        setTimeout(function() {
          self.refs.heroTitle.innerHTML = text + '<span>&nbsp;</span>';
          text += str[x];
        }, typespeed);
      }(i));
    }
  }

  componentDidMount() {
    this.typewrite('Justin_Chi');
  }

  render() {
    return (
      <div className="hero-container">
        <div className="hero-title" ref="heroTitle"></div>
        <div className="hero-description">
          I'm a front-end developer in the bay
          area on a path to learning how to build beautiful websites.
          Follow my progress through the projects I've built.
        </div>
      </div>
    );
  }
}

class ContactLinks extends React.Component {
  render() {
    return (
      <div className="contact-links">
        <span><a href="mailto:j.chi2241@gmail.com">j.chi2241@gmail.com</a></span>
        <span><a href="https://www.linkedin.com/in/justin-chi-64b12b37">LinkedIn</a></span>
        <span><a href="https://github.com/vai0">github</a></span>
      </div>
    );
  }
}

class Footer extends React.Component {
  render () {
    return (
      <div className="footer">
        <span>© 2017 created by Justin Chi</span>
      </div>
    );
  }
}

class About extends React.Component {
  render() {
    return (
      <div className="about-container">
        <div className="terminal">
          <div className="terminal-header">
            <div className="header-button red"></div>
            <div className="header-button yellow"></div>
            <div className="header-button green"></div>
          </div>
          <div className="terminal-window">
            <Statements statements={this.props.statements}/>
          </div>
        </div>
      </div>
    );
  }
}

class Statements extends React.Component {
  render() {
    return (
      <div>
        {this.props.statements.map((statement, index) => {
          return <Statement statement={statement} key={index} />;
        })}
        <div className="statement">
          <div className="input-statement">
            <span>&nbsp;</span>
          </div>
        </div>
      </div>
    );
  }
}

class Statement extends React.Component {
  render() {
    return (
      <div className="statement">
        <div className="input-statement">{this.props.statement.input}</div>
        <div className="return-statement" dangerouslySetInnerHTML={{__html: this.props.statement.return}}></div>
      </div>
    );
  }
}


class Projects extends React.Component {
  render() {
    return (
      <div className="projects-container">
        {this.props.projects.map((project, index) => {
          return (
            <ProjectCard projectTitle={project.title}
              projectDescription={project.description}
              projectSkills={project.skills}
              projectLinks={project.links}
              key={index} />
          )
        })}
      </div>
    );
  }
}

class ProjectCard extends React.Component {
  render() {
    return (
      <div className="project-card">
        <h3>{this.props.projectTitle}</h3>
        <p dangerouslySetInnerHTML={{__html: this.props.projectDescription}}></p>
        <ProjectSkills skills={this.props.projectSkills}/>
        <ProjectLinks links={this.props.projectLinks}/>
      </div>
    );
  }
}

class ProjectSkills extends React.Component {
  render() {
    return (
      <div className="project-skills">
        {this.props.skills.map((skill, index) => {
          return <ProjectSkill skill={skill} key={index} />;
        })}
      </div>
    );
  }
}

class ProjectSkill extends React.Component {
  render() {
    return (
      <span className="project-skill">{this.props.skill}</span>
    );
  }
}

class ProjectLinks extends React.Component {
  render() {
    return (
      <div className="project-links">
        {Object.keys(this.props.links).map((key, index) => {
          return <ProjectLink site={key} link={this.props.links[key]} key={index} />
        })}
      </div>
    );
  }
}

class ProjectLink extends React.Component {
  render() {
    const buttonText = (this.props.site === 'github') ? 'github' : 'view project';
    return (
      <a href={this.props.link} className="project-link">{buttonText}</a>
    );
  }
}
