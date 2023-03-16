import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ percentage }) => {
  const getColor = (percentage) => {
    if (percentage >= 90) {
      return 'black';
    } 
    else if (percentage >= 80) {
      return 'green';
    } 
    else if (percentage >= 70) {
      return 'blue';
    } 
    else if (percentage >= 60) {
      return 'purple';
    } 
    else if (percentage >= 50) {
      return 'yellow';
    } 
    else if (percentage >= 40) {
      return 'orange';
    } 
    else if (percentage >= 30) {
      return 'brown';
    } 
    else if (percentage >= 20) {
      return 'skyblue';
    } 
    else if (percentage >= 10) {
      return 'grey';
    } 
    else {
      return 'red';
    }
  };

  const style = {
    width: `${percentage}%`,
    backgroundColor: getColor(percentage)
  };

  return (
    <div className="ProgressBar">
      <div className="Progress" style={style} />
    </div>
  );
};

export default ProgressBar;
