import Spreadsheet from '../assets/Spreadsheet.jpg';
import SocialMedia from '../assets/SocialMedia.jpg';
import GameDay from '../assets/GameDay.jpg';
import Todolist from '../assets/todolist.webp';

import SpreadsheetREADME from '../documents/SpreadsheetREADME.pdf';
import GameDayWhitePaper from '../documents/GameDayWhitePaper.pdf';
import GameDayInfographic from '../documents/GameDayInfographic.pdf';

export const ProjectList = [
  {
    name: "Social Media Website",
    image: SocialMedia,
    skills: "TypeScript, ReactJS, HTML, CSS",
    githubLink: "https://github.com/seojungood/Social-Media-Project",
    demoLink: "https://seojungood-project1.web.app/",
  },
  {
    name: "Spreadsheet",
    image: Spreadsheet,
    skills: "C#, MAUI, XAML",
    githubLink: SpreadsheetREADME,
    demoLink: "https://youtu.be/qKMoC4Z3LO0"
  },
  {
    name: "Super Bowl Twitter Data Analysis",
    image: GameDay,
    skills: "Python, Tableau, Tableau Prep",
    githubLink: GameDayWhitePaper,
    demoLink: GameDayInfographic
  },
  {
    name: "Todo List (Next.js)",
    image: Todolist,
    skills: "Next.js, TypeScript, Prisma, Tailwind css",
    githubLink: "https://github.com/seojungood/TodoList-nextjs",
    demoLink: "https://youtu.be/Ulvz1D29GDA"
  }
]