import {Link} from 'react-router-dom';
import Search from '../Search/Search';

const Header = () => {
    return ( 
        <header className='p-3 mb-2 bg-dark text-white container d-flex align-items-center justify-content-between mt-3'>
            <nav>
                <ul className="nav">
                    <li className="nav-item"><Link className="nav-link" to='/'>Login</Link></li>
                    <li className="nav-item"><Link className="nav-link" to='/movieList'>MovieList</Link></li>
                    <li className="nav-item"><Link className="nav-link" to='/favorite'>Favorite</Link></li>
                </ul>
            </nav>
            <Search/>
        </header>
     );
}
 
export default Header;


