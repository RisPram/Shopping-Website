import React from 'react'

const Wrapper = ({outer,inner, children}) => {
  return (
   <section className={`w-full flex items-center justify-center ${outer??""}`}>
    <section className={`w-[80%] flex flex-col ${inner??""}`}>
        {children}
    </section>
   </section>
  )
}

export default Wrapper
