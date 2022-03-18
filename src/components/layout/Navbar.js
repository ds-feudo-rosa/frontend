import { Link } from 'react-router-dom'

function Navbar() {
    return(
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/feed">Feed</Link>
            </li>
            <li>
              <Link to="/comoVerificamos">Como verificamos</Link>
            </li>
            <li>
              <Link to="/acompanhamentos">Acompanhar solicitação</Link>
            </li>
            <li>
              <Link to="/debates">Debates</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
};

export default Navbar;