"use server"

import React from 'react'
import { getErrorMessage, validateString } from '@/lib/utils'
import { Resend } from 'resend'
import ContactFormEmail from '@/email/contact-form-email'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail")
  const message = formData.get("message")

  if (!validateString(senderEmail, 500) || !validateString(message, 3000)) {
    return {
      error: 'E-mail ou mensagem inválidos'
    }
  }

  let data
  try {
    await resend.emails.send({
      from: 'Novo contato do seu portifolio <onboarding@resend.dev>',
      to: 'jeffersonbraster@gmail.com',
      subject: 'Menssagem do meu portifolio',
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, { message: message as string, senderEmail: senderEmail as string })
    })
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error)
    }
  }

  return {
    data
  }
}