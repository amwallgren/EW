import React from 'react';
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div>
      <footer>
            <p>Adress: 48.833°N, 2.332°E </p>
            <Link to={'/gdpr'}>Learn more about how we work with GDPR</Link>
            <p>Tel. (719) 266-2837 </p>
      </footer>
    </div>
  )
}


