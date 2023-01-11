import React from 'react'

// React.CSSProperties for pasing styles like props

type ButtonStyleProps = {
    btnStyle: React.CSSProperties
}

const ButtonStyle = ({btnStyle}:ButtonStyleProps) => {
  return (
    <div style={btnStyle}>ButtonStyle</div>
  )
}

export default ButtonStyle