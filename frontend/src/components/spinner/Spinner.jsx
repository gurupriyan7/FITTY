import React from 'react'
import "./Spinner.scss"
function Spinner() {
  return (
          <div className='loader-wrapper'>
          <img className='load-anim' src="https://acegif.com/wp-content/uploads/loading-36.gif" alt='' draggable={false}/>
      </div>
  )
}

export default Spinner
