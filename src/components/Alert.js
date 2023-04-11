import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
            let lower = word.toLowerCase();
            return lower.charAt(0).toUpperCase()+ lower.slice(1);
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show mx-5`} role="alert">
   <center><strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}</center> 
    
  </div>
  )
}

export default Alert