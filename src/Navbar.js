import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav>
            <h1>Phone Contact</h1>
            <div className="nav-menu">
                <Link to="/">Home</Link>
                <Link to="/create">New Contact</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;