export enum SKILLS {
  REACT = 'React.js',
  TYPESCRIPT = 'Typescript',
  NEXT_JS = 'Next.js',
  REDUX = 'Redux-toolkit',
  JAVASCRIPT = 'Javascript',
  HTML_AND_CSS = 'HTML & CSS',
}

interface Skills {
  skill: SKILLS
  expertLevel: 'GOOD' | 'VERY GOOD' | 'NICE'
}

export type SkillSet = Skills[]
