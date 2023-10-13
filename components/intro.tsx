'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import jejeImg from '../public/jeje_linke.jpeg'
import { BsArrowRight, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { useSectionInView } from '@/lib/hooks'
import { useActiveSectionContext } from '@/context/active-section-context'

export const Intro = () => {
  const { ref } = useSectionInView('Inicio', 0.5)
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

  return (
    <section
      id="home"
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'tween', duration: 0.2 }}
          >
            <Image
              src={jejeImg}
              alt="Minha foto de perfil - Jefferson"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="w-24 h-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
      >
        <span className="font-bold">Olá, me chamo Jefferson.</span> Eu sou{' '}
        <span className="font-bold">Software Developer</span> com{' '}
        <span className="font-bold">4 anos</span> de experiência. Eu amo criar{' '}
        <span className="italic">sites</span>. Meu foco é{' '}
        <span className="underline">React (Next.js) e Node</span>.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
      >
        <Link
          href="#contact"
          onClick={() => {
            setActiveSection('Contato')
            setTimeOfLastClick(Date.now())
          }}
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Entre em contato
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/cv-jefferson.pdf"
          download
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full borderBlack cursor-pointer outline-none focus:scale-110 hover:scale-110 active:scale-105 transition"
        >
          Download CV{' '}
          <HiDownload className="opacity-60 group-hover:translate-y-1" />
        </a>
        <a
          href="https://www.instagram.com/jeffersonbrandao/"
          target="_black"
          rel="noreferrer"
          className="bg-white p-4 text-pink-400 flex items-center gap-2 rounded-full cursor-pointer outline-none borderBlack focus:scale-110 hover:scale-110 hover:text-pink-700 active:scale-105 transition"
        >
          <BsInstagram />
        </a>

        <a
          href="https://www.linkedin.com/in/jefferson-brandao-dev/"
          target="_black"
          rel="noreferrer"
          className="bg-white p-4 text-blue-700 flex items-center gap-2 rounded-full cursor-pointer outline-none borderBlack focus:scale-110 hover:scale-110 hover:text-blue-900 active:scale-105 transition"
        >
          <BsLinkedin />
        </a>

        <a
          href="https://github.com/jeffersonbraster"
          target="_black"
          rel="noreferrer"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full cursor-pointer outline-none borderBlack focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-105 transition"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  )
}
