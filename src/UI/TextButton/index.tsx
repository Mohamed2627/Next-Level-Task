import React from 'react'
import "./style.css"

interface ITextButton {
  text: string,
  onClick: () => void,
  loading?: boolean,
  style?: React.CSSProperties
}

const TextButton = (props: ITextButton) => {
  return (
    <button
      className='text-button'
      onClick={props.onClick}
      style={props?.style}
      disabled={props.loading}
    >
      {props.text}
    </button>
  )
}

export default TextButton