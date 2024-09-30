import React from 'react'
import './btnsubmit.css'
const BtnSubmit = (props) => {

  return (
    <div className={props.container_submit}>
        <input onClick={props.click} className={props.classe}  type='submit' id={props.id} value={props.value} />
    </div>
  )
}

export default BtnSubmit