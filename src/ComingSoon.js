import React from 'react'
import commingsoon from "./assests/coming-soon.avif";

const ComingSoon = () => {
  return (
    <div className='comingsoon' style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        <img src={commingsoon} alt="comingsoon" className="cimg" />
    </div>
  )
}

export default ComingSoon