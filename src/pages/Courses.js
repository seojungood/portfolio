import React from "react";
import "../styles/Courses.css";
import { useState } from "react";

function Courses() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div className="wrapper">
      <div className="accordion">
        {data.map((item, i) => (
          <div className="course">
            <div className="title" onClick={() => toggle(i)}>
              <h2>{item.course}</h2>
              <span>{selected == i ? "-" : "+"}</span>
            </div>
            <div className={selected == i ? "content show" : "content"}>
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    course: "CS 5360 - Virtual Reality",
    description:
      "C#, Unity, VSCode - Human interfaces: visual, auditory, haptic, and locomotory displays; position tracking and mapping. Computer hardware and software for the generation of virtual environments. Networking and communications. Telerobotics: remote manipulators and vehicles, low-level control, supervisory control, and real-time architectures. Applications: manufacturing, medicine, hazardous environments, and training.",
  },
  {
    course: "CS 4530 - Mobile App Programming",
    description:
      "Kotlin, Android Studio - An introduction to the theory and practice of application development for mobile phones and tablets, including a focus on general program organizational techniques. Topics include native language foundations, automatic UI layout techniques, custom views and controls, data persistence, data driven user interfaces, application lifecycle, application architectural models like Model-View-Adapter, internet service interaction, RESTful web services, and 2D OpenGL rendering. Students will complete several programming projects during the course to explore these topics. A final project of the student's own design will make up a large part of the class.",
  },
  {
    course: "CS 4400 - Computer Systems",
    description:
      "C, Assembly - Introduction to computer systems from a programmer's point of view. Machine level representations of programs, optimizing program performance, memory hierarchy, linking, exceptional control flow, measuring program performance, virtual memory, concurrent programming with threads, network programming.",
  },
  {
    course: "CS 4000 - Senior Capstone Design",
    description:
      "During their last two semesters, senior Computer Science students form teams to develop significant software projects. This class is the first semester in the sequence. Seniors will work on team formation, project identification, project planning (including UI design, software architecture, testing methods, scheduling, etc.), and completion of a system prototype. This course will provide teams with time and guidance to effectively plan their projects, as well as emphasizing the written and oral communications necessary to succeed in industry. Projects formed in this course must be completed during the following semester in CS 4500. Students should have four or less CS electives/required courses left when signing up for this course and should be graduating during the following semester.",
  },
  {
    course: "CS 3810 - Computer Organization",
    description:
      "MIPS assembly language, MARS Simulator - An in-depth study of computer architecture and design, including topics such as RISC and CISC instruction set architectures, CPU organizations, pipelining, memory systems, input/output, and parallel machines. Emphasis is placed on performance measures and compilation issues.",
  },
  {
    course: "CS 3520 - Programming Languages",
    description:
      "Shplait(Custom-Language), DrRacket - Ideas behind the design and implementation of programming languages. Syntactic description; grammars and abstract syntax; interpreters and compilers; scope and lifetime of variables; order of evaluation; continuation representation; type systems.",
  },
  {
    course: "CS 3505 - Software Practices 2",
    description:
      "C++, Qt Creator - An in-depth study of traditional software development (using UML) from inception through implementation. The entire class is team-based, and will include a project that uses an agile process.",
  },
  {
    course: "CS 3500 - Software Practice",
    description:
      "C#, MAUI, Visual Studio - Practical exposure to the process of creating large software systems, including requirements specifications, design, implementation, testing, and maintenance. Emphasis on software process, software tools (debuggers, profilers, source code repositories, test harnesses), software engineering techniques (time management, code, and documentation standards, source code management, object-oriented analysis and design), and team development practice. Much of the work will be in groups and will involve modifying preexisting software systems.",
  },
  {
    course: "CS 3390 - Ethics in Data Science",
    description:
      "In this course, we will explore the technical, social, and ethical ramifications of the choices we make at the different stages of the data analysis pipeline, from data collection and storage to understanding feedback loops in analysis. Through class discussions, case studies and exercises, students will learn the basics of ethical thinking in science, understand the history of ethical dilemmas in scientific work, and study the distinct challenges associated with ethics in modern data science.",
  },
  {
    course: "CS 3100 - Models of Computation",
    description:
      "This course covers different models of computation and how they relate to the understanding and better design of real-world computer programs. As examples, we will study Turing machines that help define the fundamental limits of computing, Push-down Automata that help build language parsers, and Finite Automata that help build string pattern matchers. This course also covers the basics of designing correctly functioning programs, and introduces the use of mathematical logic through Boolean satisfiability methods. The course will involve the use of hands-on programming exercises written at a sufficiently high level of abstraction that the connections between theory and practice are apparent.",
  },
  {
    course: "CS 3130 - Engineering Probability and Statistics",
    description:
      "An introduction to probability theory and statistics, with an emphasis on solving problems in electrical and computer engineering. Topics in probability include discrete and continuous random variables, probability distributions, sums and functions of random variables, the law of large numbers, and the central limit theorem. Topics in statistics include sample mean and variance, estimating distributions, correlation, regression, and hypothesis testing. Engineering applications include failure analysis, process control, communication systems, and speech recognition.",
  },
  {
    course: "CS 3020 - Research Forum",
    description:
      "Throughout the semester, students will hear from a number of speakers about the kinds of problems that remain unsolved in computer science. The majority of the speakers to be School of computing faculty, with some speakers coming from outside of the university.",
  },
  {
    course: "CS 3011 - Industry Forum",
    description:
      "Presentations from local and national business leaders discussing issues in computing from industry perspectives, trends in computer science, professionalism, ethics, career readiness, lifelong learning, and contemporary issues. Offered on a graded basis.",
  },
  {
    course: "CS 2420 - Algorithms & Data Structures",
    description:
      "Java, Ecliipse IDE - This course provides an introduction to the problem of engineering computational efficiency into programs. Students will learn about classical algorithms (including sorting, searching, and graph traversal), data structures (including stacks, queues, linked lists, trees, hash tables, and graphs), and analysis of program space and time requirements. Students will complete extensive programming exercises that require the application of elementary techniques from software engineering.",
  },
  {
    course: "CS 2100 - Discrete Structures",
    description:
      "Introduction to propositional logic, predicate logic, formal logical arguments, finite sets, functions, relations, inductive proofs, recurrence relations, graphs, probability, and their applications to Computer Science.",
  },
  {
    course: "CS 1410 - Object-Oriented Programming",
    description:
      "Java, Eclipse IDE - This course builds on the programming skills learned in CS 1400, while introducing the paradigm of object-oriented programming.",
  },
  {
    course: "CS 1030 - Foundation of CS",
    description:
      "This course offers a gentle introduction to, and background about, what computers do and how they work, as well as how they interpret software instructions (i.e., programs) to do useful work.",
  },
  {
    course: "MATH 1210 - Calculus 1",
    description:
      "Functions and their graphs, differentiation of polynomial, rational and trigonometric functions. Velocity and acceleration. Geometric applications of the derivative, minimization and maximization problems, the indefinite integral, and an introduction to differential equations. The definite integral and the Fundamental Theorem of Calculus.",
  },
  {
    course: "MATH 1220 - Calculus 2",
    description:
      "Geometric applications of the integral, logarithmic, and exponential functions, techniques of integration, conic sections, improper integrals, numerical approximation techniques, infinite series and power series expansions, differential equations (continued).",
  },
  {
    course: "MATH 2270 - Linear Algebra",
    description:
      "Euclidean space, linear systems, Gaussian elimination, determinants, inverses, vector spaces, linear transformations, quadratic forms, least squares and linear programming, eigenvalues and eigenvectors, diagonalization. Includes theoretical and computer lab components.",
  },
];

export default Courses;
