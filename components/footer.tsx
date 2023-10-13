import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} Jefferson Brandão. Todos os direitos
        reservados.
      </small>
      <p className="text-xs mb-3">
        <span className="font-semibold">Sobre esse website:</span> contruindo
        utilizando as tecnologias React & Next.js (App Router & Server Actions),
        Typescript, Tailwindcss, Frame motion, React email, Resend e deploy na
        vercel.
      </p>
    </footer>
  )
}
