import React from 'react'

const Footer = () => {
    const d = new Date();
    
  return (
    <section className="bg-cyan-700 flex items-center justify-center text-white py-2 text-sm sm:text-base">
  &copy;{d.getFullYear()} Shopping-Website UI. All rights reserved.
    </section>
  )
}

export default Footer
