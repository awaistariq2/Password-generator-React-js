import Container from 'react-bootstrap/Container';
import './App.css';
import React, { useCallback, useEffect, useRef, useState } from 'react';




const App = () => {
  const [password, setPassword] = useState("" );
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);

  const passwordRef=useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "0123456789"
    if (character) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)
    console.log(pass)
  }, [length, number, character, setPassword])


  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,999);
    window.navigator.clipboard.writeText(password);
  },[password])
 useEffect(()=>{
 passwordGenerator()
 },[length,number,character,passwordGenerator])
  return (
    <div className="parent">
      <div className="generator-box">
        <h3>Password Generator</h3>
        <input type="text" value={password} readOnly placeholder="password" className="password-display" ref={passwordRef} />
        <button  onClick={copyPasswordToClipboard}className="copy-button">Copy</button>

        <div className="options">
          <label>
            Length : {length}
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
          </label>

          <label>
            <input
              type="checkbox"
              defaultChecked={number}
              id="numberInput"
              onChange={(e) => setNumber((prev=>!prev))}
            />
            Include Numbers
          </label>

          <label>
            <input
              type="checkbox"
              defaultChecked={character}
              id="characterInput"
              onChange={(e) => setCharacter((prev)=>!prev)}
            />
            Include Characters
          </label>
        </div>
      </div>
    </div>
  );
};

export default App;
