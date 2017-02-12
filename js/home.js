import React from 'react'
import '../css/Home.scss'
import '../node_modules/font-awesome/scss/font-awesome.scss'

export default class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <Navbar />
        <div className="main-container">
          <Hero />
          <About />
          <h2 className="section-title">Projects</h2>
          <Projects projects={this.props.projects}/>
          <div className="background"></div>
        </div>
        <Footer />
      </div>
    );
  }
}

class Hero extends React.Component {
  render() {
    return (
      <div className="hero-container">
        <div className="hero-title">> Justin_Chi<span className="cursor">&nbsp;</span></div>
        <div className="hero-description">
          I'm a software developer in the bay
          area learning how to design and build beautiful, performant,
          responsive websites.
        </div>
      </div>
    );
  }
}

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <a href="#">Home</a>
        <a href="#">Projects</a>
        <a href="#">About</a>
      </nav>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div>
        <span><a href="#">j.chi2241@gmail.com</a></span>||
        <span><a href="#">LinkedIn</a></span>||
        <span><a href="#">github</a></span>
      </div>
    );
  }
}

class About extends React.Component {
  render() {

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

    return (
      <div className="about-container">
        <div className="terminal">
          <div className="terminal-header">
            <div className="header-button red"></div>
            <div className="header-button yellow"></div>
            <div className="header-button green"></div>
          </div>
          <div className="terminal-window">
            <Statements statements={statements}/>
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
            <span className="cursor">&nbsp;</span>
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
        <ProjectLinks links={this.props.projectLinks}/>
        <p>{this.props.projectDescription}</p>
        <ProjectSkills skills={this.props.projectSkills}/>
      </div>
    );
  }
}

class ProjectSkills extends React.Component {
  render() {
    return (
      <div>
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
    if (this.props.site === 'github') {
      return <span></span>
    } else if (this.props.site === 'preview') {
      return <span></span>
    } else {

    }
  }
}
