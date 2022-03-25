import React from 'react'
import PropTypes from 'prop-types'
function Header({text, bgColor, textColor}) {
  
  const HeaderStyles = {
    backgroundColor: bgColor,
    color:textColor
  }
    return (
   <header style = {{ backgroundColor:'red'}}>
       <div className="container">
           <h2>{text}</h2>
       </div>
   </header>
  )
}
Header.defaultProps = {
    text:"feedback ui",
    bgColor:'rgba(0,0,0, 0.4)',
    textColor: "#ff6a9"
}
Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes
}

export default Header