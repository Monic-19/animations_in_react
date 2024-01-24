import React from 'react'

const TextWeight = () => {
    const text = 'your brand logo here';
    const letters = text.split('');
  return (  <>
  <div className='TW'>
  {letters.map((letter, index) => (
        <span key={index} className="letter">
          {letter}
        </span>
      ))}
  </div>
  </> 
  )
}

export default TextWeight