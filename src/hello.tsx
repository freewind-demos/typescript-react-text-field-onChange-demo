//import * as React from 'react'
import React, {useState} from 'react'

export default function Hello() {

  const [message, setMessage] = useState('');

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setMessage(event.currentTarget.value)
  }

  return <div>
    <h1>Hello React</h1>
    <input type='text' onChange={onChange}/>
    <div>{message}</div>
  </div>
  
}

