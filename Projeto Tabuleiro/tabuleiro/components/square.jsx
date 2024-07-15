import React from 'react';
import styles from "../pages/css/Square.module.css"

const Square = ({ black }) => {
  const squareStyle = black ? styles.blackSquare : styles.whiteSquare;
  return <div className={`${styles.square} ${squareStyle}`}></div>;
};

export default Square;
