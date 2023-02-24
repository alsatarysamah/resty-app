import React from 'react';
import './spinner.css';

function SpinnerRect(props) {
  return (
    <div className={`spinner ${props.className}`}>
      <div className="bar bar11"></div>

      <div className="bar bar10"></div>

      <div className="bar bar1"></div>
      <div className="bar bar2"></div>
      <div className="bar bar3"></div>
      <div className="bar bar4"></div>
      <div className="bar bar5"></div>
      <div className="bar bar6"></div>
      <div className="bar bar7"></div>
      <div className="bar bar8"></div>
      <div className="bar bar9"></div>
    </div>
  );
}
export default SpinnerRect;