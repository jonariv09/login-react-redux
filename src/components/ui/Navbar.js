import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Database, GoogleProvider, Auth, SignInWithPopup } from '../../utils/firebase'

import { GoogleAuthProvider } from "firebase/auth";
import { updateUser } from '../../utils/querys';


export const Navbar = () => {

  const [loading, setLoading] = useState(false);

  const signInWithGoogle = async () => {

    const provider = new GoogleAuthProvider();

    try {  
      setLoading(true);
      console.log(Auth);
      console.log(GoogleProvider);
      const { user } = await SignInWithPopup(Auth, GoogleProvider);

      if(user)
        await updateUser(user);
    } catch (e) {
      console.log(e)
    }
  }

    return (
      <> 

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavLink 
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/"
              >
                Home
              </NavLink>

              <NavLink 
                  activeClassName="active"
                  className="nav-item nav-link" 
                  exact
                  to="/screener"
              >
                  Screener
              </NavLink>
            </ul>
            <div className="d-flex">
              <a
                className="btn btn-outline-light"
                role="button"
                aria-disabled="true"
                onClick={signInWithGoogle}
              > Login </a>
            </div>
          </div>
        </div>
      </nav>

        {/* <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Search hero
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/login"
                    >
                        Logout
                    </NavLink>
                </ul>
            </div>
        </nav> */}

      </>
    )
}