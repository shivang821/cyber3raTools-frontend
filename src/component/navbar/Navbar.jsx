import React from 'react'
import './navbar.css'
import logo from '../../images/cyber3ra-1.png'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar1'>
                <div className='navbar11'>
                    <div>
                        <img className='logo' src={logo} alt="" />
                    </div>
                        <div className='navbar11Border' ></div>
                </div>
                <div className='navbar12'>
                    <div>
                        <NavLink activeClassName='active' to='/'>Home</NavLink>
                    </div>
                    <div><NavLink activeClassName='active' to='/about'>About</NavLink></div>
                    <div><NavLink activeClassName='active' to='/hackers'>Hackers</NavLink></div>
                    <div><NavLink activeClassName='active' to='/companies'>Companies</NavLink></div>
                    <div><NavLink activeClassName='active' to='/partners'>Partners</NavLink></div>
                    <div><NavLink activeClassName='active' to='/pricing'>Pricing</NavLink></div>
                    <div><NavLink activeClassName='active' to='/contact'>Contact</NavLink></div>
                    <div><NavLink activeClassName='active' to='/tools'>Tools</NavLink></div>
                </div>
                <div className='navbar13'>
                    <div>
                        <NavLink to='login' >
                            <button>
                                Login
                            </button>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to='/signup' >
                            <button>
                                Sign Up
                            </button>
                        </NavLink>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar