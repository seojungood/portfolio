import Spreadsheet from '../assets/Spreadsheet.jpg';
import pixelDrawer from '../assets/pixelDrawer.jpeg';
import GameDay from '../assets/GameDay.jpg';
import Todolist from '../assets/todolist.webp';
import simonGame from '../assets/simonGameImage.jpeg';
import DOF from '../assets/depthOfPerceptionimg.png';
import FFR from '../assets/ffrimg.png';

import pixelDrawerDoc from '../documents/pixelDrawerDescription.pdf'
import SpreadsheetREADME from '../documents/SpreadsheetREADME.pdf';
import GameDayWhitePaper from '../documents/GameDayWhitePaper.pdf';
import GameDayInfographic from '../documents/GameDayInfographic.pdf';
import simonGameREADME from '../documents/SimoneGameREADME.pdf';
import DOFREADME from '../documents/unityDoFREADME.pdf';
import FFRREADME from '../documents/UnityFFRREADME.pdf';


export const ProjectList = [
  {
    name: "Pixel Drawer",
    image: pixelDrawer,
    skills: "Qt Creator, C++",
    githubLink: pixelDrawerDoc,
    demoLink: "https://youtu.be/o6MAB7HMz7c"
  },
  {
    name: "Spreadsheet",
    image: Spreadsheet,
    skills: "C#, MAUI, XAML",
    githubLink: SpreadsheetREADME,
    demoLink: "https://youtu.be/qKMoC4Z3LO0"
  },
  {
    name: "Unity - Depth of Perception",
    image: DOF,
    skills: "C#, Unity",
    githubLink: DOFREADME,
    demoLink: "https://youtu.be/-NoYFAVE6hQ"
  },
  {
    name: "Unity - Fixed Foveated Rendering / Bloom Effect",
    image: FFR,
    skills: "C#, Shader, Unity",
    githubLink: FFRREADME,
    demoLink: "https://youtu.be/C26XB8kTuMw"
  },
  {
    name: "Super Bowl Twitter Data Analysis",
    image: GameDay,
    skills: "Python, Tableau, Tableau Prep",
    githubLink: GameDayWhitePaper,
    demoLink: GameDayInfographic
  },
  {
    name: "Simon Game",
    image: simonGame,
    skills: "Qt Creator, C++",
    githubLink: simonGameREADME,
    demoLink: "https://youtu.be/xqcWQGgMkao"
  },
  {
    name: "Todo List (Next.js)",
    image: Todolist,
    skills: "Next.js, TypeScript, Prisma, Tailwind css",
    githubLink: "https://github.com/seojungood/TodoList-nextjs",
    demoLink: "https://youtu.be/Ulvz1D29GDA"
  }
]