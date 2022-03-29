import React from 'react'
function Header({text, bgColor, textColor}) {
  
 
    return (
   <header style = {{ backgroundColor:'red'}}>
       <div className="container">
           <h2>{text}</h2>
       </div>
   </header>
  )
}


export default Header