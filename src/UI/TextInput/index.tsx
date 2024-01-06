import React, { ReactNode, forwardRef, useImperativeHandle, useRef } from 'react';
import "./style.css"

interface ITextInput {
  value: string,
  setValue: (value: string) => void,
  defaultValue?: string,
  placeholder?: string,
  style?: React.CSSProperties,
  readOnly?: boolean,
  autoFocus?: boolean
  innerIcon?: ReactNode
  containerStyle?: React.CSSProperties
}

const TextInput = forwardRef((props: ITextInput, ref) => {

  // Refs---------------------------------
  const inputRef = useRef<HTMLInputElement>(null)

  // Helpers-------------------------------
  const InnerIcon = () => props?.innerIcon

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus()
  }), []);

  return (
    <div className='input-container' style={{ ...props?.containerStyle }}>
      <input
        ref={inputRef}
        type="text"
        value={props.value}
        defaultValue={props?.defaultValue}
        onChange={(e) => props.setValue(e.target.value)}
        className='text-input'
        style={{ ...props?.style }}
        placeholder={props?.placeholder}
        readOnly={props?.readOnly}
      />
      {props?.innerIcon && (
        <div className='inner-icon-container'>
          <InnerIcon />
        </div>
      )}
    </div>
  )
})

export default TextInput