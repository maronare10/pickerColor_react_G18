import React, { useState } from 'react'
import './App.css'

function App() {

  const [backgroundColor, setBackgroundColor ] = useState('')

  const handleChange = (event) => {
    setBackgroundColor(event.target.value)
    // console.log(event.target.value);
  }

  return (
    <div className="app" style= {{ backgroundColor}}>
      {/* {backgroundColor} */}
      <span>Selecciona un color:</span>
      <input 
        type="text" 
        placeholder='#FF0000'
        onChange = { handleChange }
        value = { backgroundColor }
      />

    </div>
  )
}

export default App