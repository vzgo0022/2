import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';



const DupLink = ({ array }) => (
   <Fragment>{array.map(({
      to = null,
      id = undefined,
      replace = false,
      text = ''
   }) => (
         <Link
            to={to}
            key={id}
            replace={replace}
         > {text} </Link>)
   )}</Fragment>)


export default DupLink;





