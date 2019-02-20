import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';



const DupLink = ({ array }) => (
   <Fragment>{array.map(({
      to,
      id,
      replace,
      text
   }) => (
         <li key={id}>
            <Link
               to={to}
               replace={replace}>{text}</Link>
         </li>)
   )}</Fragment>)


export default DupLink;





