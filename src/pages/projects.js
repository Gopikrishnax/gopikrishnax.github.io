import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import ProjectList from '../components/projects/projectList';
import LinkToPages from '../components/extras/LinkToPages';
import { miniProjects } from '../constants/constants';

const ProjectsPage = () => (
  <Layout containerType="container">
    <SEO title="Projects" />
    <div className="projects">
      <div className="pageHeader">
        <h2>My Projects</h2>
      </div>
      <ProjectList />
      <div className="projects_other">
        <h3>Other mini projects</h3>
        <ul className="projects_other_list">
          {miniProjects.map(item => (
            <li key={item.sourceCodeUrl}>
              {item.name} - <a href={item.liveDemoUrl}>Live</a> &{' '}
              <a href={item.sourceCodeUrl}>Source Code</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <LinkToPages />
  </Layout>
);

export default ProjectsPage;
