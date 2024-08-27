/* eslint-disable no-unused-vars */
import React, { useCallback, useState ,useEffect,useRef} from 'react'

const Generater = () => {
    const   [length,setLength]=useState(8)
    const   [password,setPassword]=useState("")
    const   [isNumber,setIsNumber]=useState(false)
    const   [charAllowed,setCharAllowed]=useState(false)
  

    const   passwordGenerator=useCallback(()=>{
      let pass=""
      let str=
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
     if(isNumber) str+="0123456789"
      if(charAllowed) str+="!@#$%^&*()_+{}[]-></*"
      for(let i=0;i<length;i++)
      {
        pass+=str.charAt(Math.floor(Math.random()*str.length))
      }
      setPassword(pass)
    }
    ,[length,isNumber,charAllowed,setPassword,])
    useEffect(()=>{
      passwordGenerator()
    },[length,isNumber,charAllowed,passwordGenerator])
    
    // useRef Hook
    const passwordRef=useRef(null)
    const copyPasswordToClipboard=()=>{
      passwordRef.current.select()
      document.execCommand("copy")
    }

  return (
    <>
         <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-5 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-5'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-7">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={isNumber}
          id="numberInput"
          onChange={() => {
              setIsNumber((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>

           
          

    </>
  )
}

export default Generater
