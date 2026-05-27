import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <div className="container-fluid">
            <div className="nav-logo text-white fw-bold">
                 react App
            </div>
            <div className="nav-links d-flex gap-4 align-items-center">
                <NavLink to= "/home" className= {({isActive})=>isActive ? 'nav-link active':'nav-link'}>Home</NavLink>
                <NavLink to="/product" className ={({isActive})=> isActive? 'nav-link active':'nav-link'}>Product</NavLink>
                <NavLink to="/settings" className= {({isActive})=> isActive? 'nav-link active':'nav-link'}>Settings</NavLink>
                <div className="dropdown">
                    <button className='btn btn-secondary dropdown-toggle' data-bs-toggle="dropdown">Effects</button>
                    <ul className= "dropdown-menu">
                        <li><NavLink className="dropdown-item" to="/effects/todo">Todo</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/effects/showhide">Show Hide</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/effects/onchange">On Change</NavLink></li>
                    </ul>
                </div>
                <div className="dropdown">
                    <button className='btn btn-secondary dropdown-toggle' data-bs-toggle="dropdown">Hooks</button>
                    <ul className="dropdown-menu">
                        <li><NavLink className="dropdown-item" to="/hooks/counter">Counter Hook</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/hooks/image">Image Hook</NavLink></li>
                    </ul>
                </div>
                <div className="dropdown">
                    <button className='btn btn-secondary dropdown-toggle' data-bs-toggle="dropdown">Count</button>
                    <ul className="dropdown-menu">
                        <li><NavLink className="dropdown-item" to="/count/like">Count Like</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/count/seconds">Seconds Count</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}