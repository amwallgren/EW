import React from 'react';
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div>
      <footer>
            <Link to={'/gdpr'}>Learn more about how we work with GDPR</Link>
      </footer>
    </div>
  )
}


