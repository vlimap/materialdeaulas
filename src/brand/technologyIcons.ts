import { conceptIcons } from './conceptIcons';
import javascript from './skill-icons-main/icons/JavaScript.svg';
import typescript from './skill-icons-main/icons/TypeScript.svg';
import java from './skill-icons-main/icons/Java-Dark.svg';
import python from './skill-icons-main/icons/Python-Dark.svg';
import html5 from './skill-icons-main/icons/HTML.svg';
import css3 from './skill-icons-main/icons/CSS.svg';
import sql from './skill-icons-main/icons/SQLite.svg';
import bash from './skill-icons-main/icons/Bash-Dark.svg';
import nodeJs from './skill-icons-main/icons/NodeJS-Dark.svg';
import express from './skill-icons-main/icons/ExpressJS-Dark.svg';
import springBoot from './skill-icons-main/icons/Spring-Dark.svg';
import restApi from './technology-icons/OpenAPI.svg';
import jwt from './technology-icons/JWT.svg';
import swagger from './technology-icons/Swagger.svg';
import sequelize from './skill-icons-main/icons/Sequelize-Dark.svg';
import prisma from './skill-icons-main/icons/Prisma.svg';
import react from './skill-icons-main/icons/React-Dark.svg';
import nextJs from './skill-icons-main/icons/NextJS-Dark.svg';
import vite from './skill-icons-main/icons/Vite-Dark.svg';
import tailwindCss from './skill-icons-main/icons/TailwindCSS-Dark.svg';
import bootstrap from './skill-icons-main/icons/Bootstrap.svg';
import sass from './skill-icons-main/icons/Sass.svg';
import axios from './technology-icons/Axios.svg';
import figma from './skill-icons-main/icons/Figma-Dark.svg';
import postgresql from './skill-icons-main/icons/PostgreSQL-Dark.svg';
import mysql from './skill-icons-main/icons/MySQL-Dark.svg';
import sqlServer from './technology-icons/SQLServer.svg';
import mongodb from './skill-icons-main/icons/MongoDB.svg';
import redis from './skill-icons-main/icons/Redis-Dark.svg';
import dbeaver from './technology-icons/DBeaver.svg';
import docker from './skill-icons-main/icons/Docker.svg';
import azure from './skill-icons-main/icons/Azure-Dark.svg';
import githubActions from './skill-icons-main/icons/GithubActions-Dark.svg';
import terraform from './skill-icons-main/icons/Terraform-Dark.svg';
import nginx from './skill-icons-main/icons/Nginx.svg';
import linux from './skill-icons-main/icons/Linux-Dark.svg';
import ubuntu from './skill-icons-main/icons/Ubuntu-Dark.svg';
import jest from './skill-icons-main/icons/Jest.svg';
import vitest from './skill-icons-main/icons/Vitest-Dark.svg';
import postman from './skill-icons-main/icons/Postman.svg';
import insomnia from './technology-icons/Insomnia.svg';
import git from './skill-icons-main/icons/Git.svg';
import github from './skill-icons-main/icons/Github-Dark.svg';
import conventionalCommits from './technology-icons/ConventionalCommits.svg';
import grafana from './skill-icons-main/icons/Grafana-Dark.svg';
import prometheus from './skill-icons-main/icons/Prometheus.svg';
import datadog from './technology-icons/Datadog.svg';
import vsCode from './skill-icons-main/icons/VSCode-Dark.svg';
import intellijIdea from './skill-icons-main/icons/Idea-Dark.svg';
import npm from './skill-icons-main/icons/Npm-Dark.svg';
import eslint from './technology-icons/ESLint.svg';
import prettier from './technology-icons/Prettier.svg';

export const technologyIcons: Record<string, string> = {
  javascript,
  typescript,
  java,
  python,
  html5,
  css3,
  sql,
  bash,
  'node-js': nodeJs,
  express,
  'spring-boot': springBoot,
  'rest-api': restApi,
  jwt,
  swagger,
  sequelize,
  prisma,
  react,
  'next-js': nextJs,
  vite,
  'tailwind-css': tailwindCss,
  bootstrap,
  sass,
  axios,
  figma,
  postgresql,
  mysql,
  'sql-server': sqlServer,
  mongodb,
  redis,
  dbeaver,
  docker,
  'docker-compose': docker,
  azure,
  'github-actions': githubActions,
  terraform,
  nginx,
  linux,
  ubuntu,
  jest,
  vitest,
  postman,
  insomnia,
  git,
  github,
  'conventional-commits': conventionalCommits,
  grafana,
  prometheus,
  datadog,
  'vs-code': vsCode,
  'intellij-idea': intellijIdea,
  npm,
  eslint,
  prettier,
  ...conceptIcons,
};

export function getTechnologyIcon(courseOrTechnologySlug: string): string | undefined {
  const technologySlug = courseOrTechnologySlug.replace(/^curso-/, '');
  return technologyIcons[technologySlug];
}
