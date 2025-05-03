import React from 'react'

export const Footer = () => {
    let footerStyle={
        width:"100%",
        position:"relative",
        top:"100vh"

    }
  return (
   <footer><div className='bg-dark text-light' py-3 style={footerStyle}>
        <p className="text-center">
        Copyright &copy; MyToDoList.com
        </p>
    </div>
    </footer> 
  )
}
