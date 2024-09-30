import React from 'react'
import { useMediaQuery } from 'react-responsive'
import TextareaAutosize from 'react-textarea-autosize';
import './textarea.css'
const Textarea = (props) => {
  const isBigScreen           = useMediaQuery({ query: '(min-width: 1000px)' })
  const isTabletOrMobile      = useMediaQuery({ query: '(min-width: 280px)' })
  return (
    <><label className={props.cssLabel}>{props.label}</label>
    <div className={props.className} >
        
        <TextareaAutosize id={props.id} 
        style={props.style}
        minRows={props.minRows}
        minLength={props.minLength}
        maxLength={props.maxLength}
        cacheMeasurements
        messMinLength={props.messMinLength}
        messMaxLength={props.messMaxLength}
        onChange={props.onChange}
      /> 
      </div>
      </>
  )
}

export default Textarea