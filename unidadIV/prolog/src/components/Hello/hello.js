import React from 'react'
import classes from './Hello.module.css'

const Hello = (props) => {
  const { text } = props
  return (
    <p className={classes.green}>
      { text }
    </p>
  )
}

export default Hello