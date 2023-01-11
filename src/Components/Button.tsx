import React from 'react'

// children props hole react.reactNode dia kaj kora lage **** 

type button ={
    children: React.ReactNode
}

const Button = ({children}:button) => {
  return (
    <button>{children}</button>
  )
}

export default Button