import React from 'react';
import "./style.css"

interface IMenuItem {
  name: string,
  onClick: () => void,
  style?: React.CSSProperties
}

const MenuItem = (props: IMenuItem) => {
  return (
    <p style={{ ...props?.style }} className='menu-item' onClick={props.onClick} >{props.name}</p>
  )
}

export default MenuItem