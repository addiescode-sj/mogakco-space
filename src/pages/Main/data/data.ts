import { Project } from '@atoms/Projects/model'
import { SKILLS, SkillSet } from '@atoms/Skills/model'

export const skillSet: SkillSet = [
  {
    skill: SKILLS.REACT,
    expertLevel: 'VERY GOOD',
  },
  {
    skill: SKILLS.TYPESCRIPT,
    expertLevel: 'VERY GOOD',
  },
  {
    skill: SKILLS.NEXT_JS,
    expertLevel: 'GOOD',
  },
  {
    skill: SKILLS.REDUX,
    expertLevel: 'VERY GOOD',
  },
  { skill: SKILLS.JAVASCRIPT, expertLevel: 'VERY GOOD' },
  { skill: SKILLS.HTML_AND_CSS, expertLevel: 'VERY GOOD' },
]

export const projectList: Project[] = [
  {
    title: 'Mogakco Space',
    date: '2022.1~ Now working',
    description: 'Building a beautiful online resume making service',
    url: 'https://github.com/addiescode-sj/mogakco-space',
  },
  {
    title: 'Seoul City - Gonganieum (Community Space)',
    date: '2020.8.~2020.11',
    description: 'Developed a official space rental & community platform for City of Seoul. ',
    url: 'https://www.communityspace.kr/',
  },
  {
    title: 'Maserati Korea - Clone Coding',
    date: '2020.5',
    description: 'Did a clone coding project at code bootcamp for practicing React.js ',
    url: 'https://www.youtube.com/watch?v=yaO4jlIrlY8',
  },
  {
    title: 'Gbox - Social app for present giving & sharing',
    date: '2019.3~ 2019.4',
    description:
      'Implemented MVPs for Gbox App, learning front-end development while doing school project',
    url: 'https://www.youtube.com/watch?v=cNeShlDPwpw',
  },
]

export const githubLink = 'https://github.com/addiescode-sj'
export const linkedInLink = 'https://www.linkedin.com/in/sunjoo-lee-9b30a5163/'
