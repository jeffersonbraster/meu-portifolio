'use client'
import React from 'react'
import { Project } from './project'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'

export const Projects = () => {
  const { ref } = useSectionInView('Projetos', 0.5)

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>Projetos</SectionHeading>

      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
