import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav>
            <h1>Phone Contact</h1>
            <div className="nav-menu">
                <NavLink to="/" exact activeClassName="active">Home</NavLink>
                <NavLink to="/create" activeClassName="active">New Contact</NavLink>
            </div>
        </nav>
     );
}
 
export default Navbar;