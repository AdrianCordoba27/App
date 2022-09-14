import React from 'react';
import '../styles/Textblock.css';
function Textblock(props) {
  return (
    <div className='text-container'>
      <img
        className='text-image'
        src={require(`../images/${props.name}-pfp.jpg`)}
        alt={`${props.name} pfp`}
      />
      <div className='text-text-container'>
        <p className='text-name'> <strong>{props.name} : {props.class}</strong></p>
        <p className='text-set'> <strong> Set {props.set} </strong></p>
        <p className='text-skill-name'> <strong>{props.skillName}</strong> </p>
        <p className='text-text'> {props.skillDescription}</p>
      </div>
    </div>
  );
}

export default Textblock;

