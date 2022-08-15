const Footer = () => {
    return ( 
        <footer className='p-3 mb-2 bg-dark text-white container mt-3'>
            <nav>
                <ul className="nav d-flex">
                    <li className="nav-item"><a className="nav-link active" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                    <li className="nav-item"><a className="nav-link" href="https://google.com" target="_blank" rel="noopener noreferrer">Porfolio</a></li>
                    <li className="nav-item"><a className="nav-link" href="https://github.com" target="_blank" rel="noopener noreferrer">Github</a></li>
                </ul>
            </nav>
            <p className="nav justify-content-center">copyright alkemy challenge</p>
        </footer>
     );
}
 
export default Footer;