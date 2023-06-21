import React from 'react'

function Car(props) {
  const car=props.brand;
  return(
    <>
    <h1>Garage</h1>
    {/* {car.length > 0 &&
      <h2>
        You have {car.length} cars in your garage.
      </h2>
    } */}

    <h3>Car model : {car}</h3>
    </>
  )
  
}

export default Car