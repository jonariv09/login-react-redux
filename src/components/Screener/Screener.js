import React from 'react'
import {FiArrowLeft} from 'react-icons/fi';

export const Screener = ({ history }) => {

  const handleGetBack = (e) => {
    e.preventDefault();
    history.replace('/');
  }

  return (
    <div className="container pt-4">
      <a
        href="#"
        onClick={handleGetBack}
        className="text-muted arrow-left"
      >
        <FiArrowLeft/>
      </a>
    </div>
  )
}
