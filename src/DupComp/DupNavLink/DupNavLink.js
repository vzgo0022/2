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
         <NavLink
            key={id}
            to={to}
            replace={replace}
            activeClassName={activeClassName}
            activeStyle={activeStyle}
            exact={exact}
            strict={strict}
            isActive={isActive} > {text} </NavLink>)
   )}</Fragment>)



export default DupNavLink;





