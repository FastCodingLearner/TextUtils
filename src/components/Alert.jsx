import React from 'react'

function Alert(p) {
    const capital = (word) =>{
        let lword = word.toLowerCase()
        return lword.charAt(0 ).toUpperCase() + word.slice(1)
    }
  return (
    <div className="container " style={{height : "50px", marginTop : "5px"}}>
      
      
    {  p.alert &&  <div className={`alert alert-${(p.alert.type).toLowerCase()} alert-dismissible fade show my-3" role="alert`}>
        <strong>{capital(p.alert.type)}! </strong>{p.alert.message}.
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
       </div>}
      
    </div>
  )
}

export default Alert
