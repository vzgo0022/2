import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';



const DupNavLink = ({ array }) => (
   <Fragment>{array.map(({
      to,
      id,
      replace,
      activeClassName,
      activeStyle,
      exact,
      strict,
      isActive,
      text
   }) => (
         <li key={id}>
            <NavLink
               to={to}
               replace={replace}
               activeClassName={activeClassName}
               activeStyle={activeStyle}
               exact={exact}
               strict={strict}
               isActive={isActive} >{text}</NavLink>
         </li>)
   )}</Fragment>)



export default DupNavLink;





