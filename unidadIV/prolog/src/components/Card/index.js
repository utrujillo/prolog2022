import React from 'react'
import logo from '../../logo.svg'
import Text from '../Text'
import classes from './Card.module.css'

const Card = () => {
  return (
    <div className={classes.border_red}>
      <Text 
        title='Case Studies'
        stylescss={{
          customStyles: 'fs_28 fw_bold'
        }} 
      />
      <img src={logo} />
      <Text 
        title='NHS Specialist'
        stylescss={{
          customStyles: 'fs_16 fw_bold'
        }}
      />
      <Text 
        title='Pharmacy'
        stylescss={{
          customStyles: 'fs_16 fw_bold'
        }}
      />
      <hr />
      <Text 
        title='Making NHS Specialist'
        stylescss={{
          customStyles: 'fs_8 fw_light'
        }}
      />
      <Text 
        title='Service a digital'
        stylescss={{
          customStyles: 'fs_8 fw_light'
        }}
      />
    </div>
  )
}

export default Card