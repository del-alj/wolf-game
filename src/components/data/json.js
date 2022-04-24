import React from 'react'
import Data from '../../assets/data/darija.json'

function Json(props) {

  return (
    <div>
        {Data  
        .filter(dataJson => dataJson.id === props.index)
        .map((dataJson, index) => {
                return <h2> {dataJson.language}</h2>
        })}
    </div>
  )
}

export default Json