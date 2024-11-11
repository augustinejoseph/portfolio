// Not using directly as the new implementation fetches data from google sheets.

import {
  windows,
  restapi,
  react,
  postgresql,
  nginx,
  mongodb,
  microservices,
  python,
  home,
  phone,
  aws,
  css,
  django,
  docker,
  gcp,
  git,
  github_si as github,
  graphql,
  html,
  javascript,
  linux,
} from "../imports";

export const skillList = [
  {
    skillName: "Python",
    url: python,
    description:
      "Interpreted, object-oriented, high-level programming language.",
  },
  {
    skillName: "Django",
    url: django,
    description: "Python-based web framework.",
  },
  {
    skillName: "React",
    url: react,
    description: "JavaScript library for building UI components.",
  },
  {
    skillName: "AWS",
    url: aws,
    description: "A cloud provided with immense tech support.",
  },
  {
    skillName: "Microservices",
    url: microservices,
    description: "An architectural and organizational approach.",
  },
  {
    skillName: "Docker",
    url: docker,
    description: "Containerization platform for applications.",
  },
  {
    skillName: "Git",
    url: git,
    description: "Distributed version control system.",
  },
  {
    skillName: "GCP",
    url: gcp,
    description: "Googles cloud services provider.",
  },
  {
    skillName: "GitHub",
    url: github,
    description: "Web-based Git repository hosting.",
  },
  {
    skillName: "JavaScript",
    url: javascript,
    description: "High-level programming language for web development.",
  },
  {
    skillName: "GraphQL",
    url: graphql,
    description: " Query language for APIs.",
  },
  {
    skillName: "Linux",
    url: linux,
    description: "Open-source operating system.",
  },
  {
    skillName: "PostgreSQL",
    url: postgresql,
    description: " Open-source relational database.",
  },
  {
    skillName: "REST API",
    url: restapi,
    description: "Architecture for web services.",
  },
  {
    skillName: "MongoDB",
    url: mongodb,
    description: "Document-oriented DB with high availability.",
  },
  {
    skillName: "CSS",
    url: css,
    description: "Cascading Style Sheets for web styling.",
  },
  {
    skillName: "HTML",
    url: html,
    description: "Markup language for web content.",
  },
  {
    skillName: "Nginx",
    url: nginx,
    description: "Open source webserver.",
  },
];
