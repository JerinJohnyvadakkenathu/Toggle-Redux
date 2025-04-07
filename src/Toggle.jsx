import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { actionToggle } from './Action';

const Toggle = () => {
  const value = useSelector((state) => state.toggle.current);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ color: value ? 'blue' : 'red' }}>
        {value ? 'Blue (true)' : 'Red (false)'}
      </h1>

      <button
        onClick={() => dispatch(actionToggle())}
        style={{
          backgroundColor: value ? 'blue' : 'red',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          fontSize: '16px',
          cursor: 'pointer'
        }}
      >
        Toggle Color
      </button>
    </div>
  );
};

export default Toggle;
