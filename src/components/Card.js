import React from 'react'

export default function Card(props) {
  return (
    <div>
      <div className="card" style={{"width":"18rem"}}>
  <img src={props.urlToImage}/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Things are getting worse at Better. More executives have resigned from Better.com nearly three months after the online mortgage lender laid off 900 employees via Zoom and as the company prepares for more layoffs, according to multiple sources familiar with th…</p>
    <a href={props.url} target="_blank" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  )
}
