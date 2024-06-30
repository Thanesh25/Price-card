import React from 'react'

const PriceCard = ({plan,price,features,btn}) => {
  console.log(features)
  
  return (
    <div className='container fluid'>
      <div className="price-card">
        <p className='plan'>{plan}</p>
        <p className='price-head'>{price}</p>
        <hr></hr>
        <ul>
          {features.map((line, index) => (<li key={index} className={line.available ? '' : 'text-body-tertiary'}> {line.available ? (
            <i className="fas fa-check icon" ></i>
          ) : (
              <i className="fas fa-times icon" ></i>
          )}{line.name}</li>))}
        </ul>
        
        
          <button className='btn btn-primary' >Button</button>
        
      </div>
    </div>
  )
}

export default PriceCard




