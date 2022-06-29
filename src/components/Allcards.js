import React from 'react'
import Card from './Card'

export default function Allcards() {


  return (
      <>
    <div className="container my-4" >
      <div className="container row">
        <div className='col-md-3'>
      <Card urlToImage="https://techcrunch.com/wp-content/uploads/2022/02/GettyImages-1144864948.jpg?w=600" 
            url="https://techcrunch.com/2022/02/18/better-com-loses-more-senior-execs-as-employees-brace-for-another-mass-layoff/"
      />
      </div>
      </div>
    </div>
    </>
  )
}
