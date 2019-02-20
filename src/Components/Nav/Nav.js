import React from 'react';
import { Switch } from 'react-router-dom';

import DupLink from '../../DupComp/DupLink';
import DupRoute from '../../DupComp/DupRoute';
import { NavArrayLink, NavArrayRoute } from './NavArray';



const NavReact = () => {
    return (
        <nav >
            <ul >
              <DupLink array={NavArrayLink} />
            </ul>

            <Switch>
               <DupRoute array={NavArrayRoute} />
            </Switch>
        </nav>
    )
}



export default NavReact;