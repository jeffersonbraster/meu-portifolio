import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import pieceImg from "@/public/piece-project.png";
import barberImg from "@/public/barber-project.png";
import neonImg from "@/public/neon-clone-project.png";
import widgetImg from "@/public/widget-project.png";
import pokeImg from "@/public/poke-project.png";

export const links = [
  {
    name: "Inicio",
    hash: "#home",
  },
  {
    name: "Sobre",
    hash: "#about",
  },
  {
    name: "Projetos",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experiência",
    hash: "#experience",
  },
  {
    name: "Contato",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Analista de TI - Jr",
    location: "Fortaleza, CE",
    description:
      "Atuei como analista de TI no grupo edson queiroz - holding. Participei de diversas integrações entre sistemas terceirizados, correções, manutenção em ERP, melhorias em diversos sites e aplicativos, consultas correções e desenvolvimento em banco de dados PL/SQL.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2021",
  },
  {
    title: "Software Developer - Jr",
    location: "Remoto",
    description:
      "Trabalhei por 6 meses na empresa compass uol, alocado em um grande projeto de interoperabilidade em uma grande empresa na área da saúde utilizando as stacks: Typescript, node(nestjs), react, jest, mongoose, kafka etc.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Software Developer",
    location: "Remoto",
    description:
      "Estou como full-stack developer atualmente trabalhando na Globo. Minhas principais stacks são: Javascript(React, Nextjs, node), Python(jinja, langchain, apis).",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "One Piece App",
    description:
      "Projeto onde mostra os personagens do anime One Piece, utilizando html, sass e javascript",
    tags: ["Html", "Sass", "Javascript"],
    imageUrl: pieceImg,
  },
  {
    title: "Pokemon App",
    description:
      "Projeto front-end para consulta de pokemons, utilizando html, sass e javascript",
    tags: ["Html", "Sass", "Javascript"],
    imageUrl: pokeImg,
  },
  {
    title: "Dev Barber",
    description:
      "Projeto de um frela, uma landing page para um barbeiro, utilizando html, sass e javascript",
    tags: ["Html", "Sass", "Javascript"],
    imageUrl: barberImg,
  },
  {
    title: "Clone Neon",
    description:
      "Projeto para melhorar e aparfeiçoar as habilidades em html, sass e javascript",
    tags: ["Html", "Sass", "Javascript"],
    imageUrl: neonImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "nestjs",
  "GraphQL",
  "Apollo",
  "jest",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;