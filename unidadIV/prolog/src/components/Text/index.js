import React from 'react'

const Text = (props) => {
  
  const { title, stylescss } = props
  const { customStyles } = stylescss
  return (
    <div className={customStyles}>
      {title}
    </div>
  )
}

Text.defaultProps = {  
  title: '',
  stylescss: {}
}

export default Text