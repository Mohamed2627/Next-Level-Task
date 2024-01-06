import React, { ReactNode } from 'react';
import "./style.css"

interface IIconButton {
  icon: ReactNode,
  onClick: () => void,
  style?: React.CSSProperties
}

const IconButton = (props: IIconButton) => {

  // Helpers--------------------------
  const Icon = () => props.icon

  return (
    <button className='icon-button-container' style={{ ...props?.style }} onClick={props.onClick}>
      <Icon />
    </button>
  )
}

export default IconButton