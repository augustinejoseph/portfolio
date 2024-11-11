// Do not remove imports. Used for build purpose

import gmail from "./Constants/NavBarIcons/gmail.png";
import linkedin from "./Constants/NavBarIcons/linkedin.png";
import medium from "./Constants/NavBarIcons/medium.png";
import phone from "./Constants/NavBarIcons/phone.png";
import github from "./Constants/NavBarIcons/github.png";
import home from "./Constants/NavBarIcons/home.png";
import aws from "./Constants/SillIcons/aws.png";
import css from "./Constants/SillIcons/css.png";
import django from "./Constants/SillIcons/django.png";
import docker from "./Constants/SillIcons/docker.png";
import gcp from "./Constants/SillIcons/gcp.png";
import git from "./Constants/SillIcons/git.png";
import github_si from "./Constants/SillIcons/github.png";
import graphql from "./Constants/SillIcons/graphql.png";
import html from "./Constants/SillIcons/html.png";
import javascript from "./Constants/SillIcons/javascript.png";
import linux from "./Constants/SillIcons/linux.png";
import python from "./Constants/SillIcons/python.png";
import microservices from "./Constants/SillIcons/microservices.png";
import mongodb from "./Constants/SillIcons/mongodb.png";
import nginx from "./Constants/SillIcons/nginx.png";
import postgresql from "./Constants/SillIcons/postgresql.png";
import react from "./Constants/SillIcons/react.png";
import restapi from "./Constants/SillIcons/restapi.png";
import windows from "./Constants/SillIcons/windows.png";
import angular from "./Constants/SillIcons/angular.png";
import aspne from "./Constants/SillIcons/aspne.png";
import cplus from "./Constants/SillIcons/cplus.png";
import firebase from "./Constants/SillIcons/firebase.png";
import java from "./Constants/SillIcons/java.png";
import php from "./Constants/SillIcons/php.png";
import r from "./Constants/SillIcons/r.png";
import redux from "./Constants/SillIcons/redux.png";
import typescript from "./Constants/SillIcons/typescript.png";
import unix from "./Constants/SillIcons/unix.png";
import nextjs from "./Constants/SillIcons/nextjs.png";
import nodejs from "./Constants/SillIcons/nodejs.png";
import nestjs from "./Constants/SillIcons/nestjs.png";
import jenkins from "./Constants/SillIcons/jenkins.png";
import reactnative from "./Constants/SillIcons/reactnative.png";
import profilePicture from "./Constants/ProfilePicture/portrait.jpg";



export {
  windows,
  restapi,
  react,
  postgresql,
  nginx,
  mongodb,
  microservices,
  python,
  gmail,
  linkedin,
  home,
  medium,
  github,
  phone,
  aws,
  css,
  django,
  docker,
  gcp,
  git,
  github_si,
  graphql,
  html,
  javascript,
  linux,
  profilePicture,
};

export { MEDIUM_API_LINK } from "./Constants/API/Api";
export { SKILLS_GOOGLE_SHEETS_LINK, PROFILE_GOOGLE_SHEETS_LINK, PROJECTS_GOOGLE_SHEETS_LINK } from "./Constants/API/Api";
export { RESUME_URL } from "./Constants/API/Api";
export { EMAIL } from "./Constants/API/Api";
export { PHONE } from "./Constants/API/Api";
export { MEDIUM_PROFILE_URL } from "./Constants/API/Api";
export { GITHUB_LINK } from "./Constants/API/Api";
export { LINKEDIN_LINK } from "./Constants/API/Api";
export { projectList } from "./ProjectList/ProjectList";

export { useEffect } from "react";
export { useNavigate, useParams } from "react-router-dom";
export { default as axios } from "axios";
export { default as HomePage } from "./Components/HomePage/HomePage";
export { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export { default as Navbar } from "./Components/Navbar/Navbar";
export { Download } from "react-bootstrap-icons";
export { default as SkillCard } from "./Components/SkillCard/SkillCard";
export { default as ProjectCard } from "./Components/ProjectCard/ProjectCard";
export { fetchMediumArticles } from "./Components/HomePage/Functions";
export { fetchSkillListFromSheet, fetchProfileListFromSheet, fetchProjectListFromSheet } from "./Components/HomePage/Functions";
export { default as ArticlesCard } from "./Components/ArticlesCard/ArticlesCard";
export { default as Footer } from "./Components/Footer/Footer";
export { default as FullProject } from "./Components/FullProject/FullProject";
