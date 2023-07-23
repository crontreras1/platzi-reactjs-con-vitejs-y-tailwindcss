import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from "../../Context/index";

function Navbar () {
    const context = useContext(ShoppingCartContext);

    const activeStyle = 'underline underline-offset-4';

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-ligth">
            <ul className="flex items-center gap-5">
                <li className="font-semibold text-lg">
                    <NavLink 
                        to='/'
                    >
                        Shoppi
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to='/all'
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        }
                    >
                        All
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to='/clothes'
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        }
                    >
                        Clothes
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to='/electronics'
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        }
                    >
                        Electronics
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to='/fornitures'
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        }
                    >
                        Fornitures
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to='/toys'
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        }
                    >
                        Toys
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to='/others'
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        }
                    >
                        Others
                    </NavLink>
                </li>
            </ul>

            <ul className="flex items-center gap-5">
                <li className="text-black/60">
                    example@shoppi.com
                </li>

                <li>
                    <NavLink 
                        to='/my-orders'
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        }
                    >
                        My Orders
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to='/my-account'
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        }
                    >
                        My Accounts
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to='/sign-in'
                        className={({ isActive }) => 
                            isActive ? activeStyle : undefined
                        }
                    >
                        Sign In
                    </NavLink>
                </li>

                <li className="flex gap-2">
                    <ShoppingCartIcon className="h-6 w-6 text-black" /> 

                    { context.count }
                </li>
            </ul>            
        </nav>
    );
};

export default Navbar;