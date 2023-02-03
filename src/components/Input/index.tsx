import React, { InputHTMLAttributes } from 'react'


export default function Input({...props}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input {...props} className={`bg-white/[0.16] hover:bg-white/[0.24] h-14 w-full p-4 rounded-lg outline-none ${props.className}`}  />
  )
}
