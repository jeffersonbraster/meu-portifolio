'use client'

import SectionHeading from "./section-heading";
import {motion} from "framer-motion"

export const About = () => {
  return (
    <motion.section initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{delay: 0.125}} className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40">
      <SectionHeading>Sobre</SectionHeading>

      <p className="mb-3">
        Após ter me formado em{" "}
        <span className="font-medium">Administração</span>, Eu decidir seguir
        minha carreira em programação. Então fiz um curso de ads, e estudei por
        diversos cursos e me apaixonei por{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">A minha parte favorita de programar</span> é
        resolver algum tipo de problema eu{" "}
        <span className="underline">amo</span> a sensação de ter resolvido e ver todo o esforço valendo a pena. Minhas stacks favoritas são{" "}
        <span className="font-medium">
          React, Next.js, Node.js e todos os seus ecossistemas
        </span>
        . Também tenho familiaridade em utilizar TypeScript, Prisma, jest e um pouco de python. Nesse momento eu estou trabalhando na {" "}
        <span className="font-medium">Globo</span> como Software Developer
      </p>

      <p>
        <span className="italic">Quando não estou codando</span>, eu estou sempre com minha namorada, faço musculação, assisto filmes e jogo valorant. 
        Eu amo estudar{" "}
        <span className="font-medium">novas tecnologias e aprimorando as que já conheço</span>. No momento eu estou{" "}
        <span className="font-medium">criando projetos pessoais</span>. E pretendo um dia começar a tocar algum instrumento musical haha.
      </p>
    </motion.section>
  );
};
