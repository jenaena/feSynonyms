import React from "react";
import "./style.css";
import { FaSpinner } from 'react-icons/fa';

export default function LoadingSpinner() {
  return (
    <div className="App">
          <FaSpinner icon="spinner" className="spinner" /> 
    </div>
  );
}