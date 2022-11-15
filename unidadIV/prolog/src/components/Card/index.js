import React from 'react'
import logo from '../../logo.svg'
import classes from './Card.module.css'

const Card = () => {
  return (
    <div className={classes.border_red}>
      <div>Case Studies</div>
      <img src={logo} />
      <div>NHS Specialist</div>
      <div>Pharmacy</div>
      <hr />
      <div>Making NHS Specialist</div>
      <div>Service a digital</div>
    </div>
  )
}

export default Card