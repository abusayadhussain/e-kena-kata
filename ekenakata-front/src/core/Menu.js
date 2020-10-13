import React, {Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {signout, isAuthenticated} from '../auth';

const isActive = (history, path)=>{
    if(history.location.pathname === path){
        return { color: '#FF8C00'}
    } else {
        return { color: '#FFFFFF'}
    }
}

const Menu = ({history}) => (
    <div>
        <ul className="nav nav-tabs bg-primary">
            <li className="nav-item">
                <Link className="nav-link" style={isActive(history, '/')} to="/">Home</Link> 
            </li>

            {isAuthenticated() && isAuthenticated().user.role === 0 && (
                <li className="nav-item">
                <Link className="nav-link" style={isActive(history, '/user/dashboard')} to="/user/dashboard">Dashboard</Link> 
            </li>
            )}

            {isAuthenticated() && isAuthenticated().user.role === 1 && (
                <li className="nav-item">
                    <Link className="nav-link" style={isActive(history, '/admin/dashboard')} to="/admin/dashboard">Dashboard</Link> 
                </li>
            )}

           {!isAuthenticated() &&  (
               <Fragment>
                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(history, '/signin')} to="/signin">Signin</Link> 
                    </li>

                     <li className="nav-item">
                        <Link className="nav-link" style={isActive(history, '/signup')}  to="/signup">Signup</Link> 
                    </li>
               </Fragment>
           )}

            {isAuthenticated() && (
                <div>
                    <li className="nav-item">
                        <Link className="nav-link" style={{cursor: "pointer", color: "#ffffff"}}  onClick={()=> signout(()=>{
                        history.push('/');
                        })}>Signout</Link> 
                    </li>
                </div>
            )}
        </ul>
    </div>
)

export default withRouter(Menu);