import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

export default function Navbar() {
    return(
      <header>
        <nav >
          <ul className={styles.oi}>
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
    );
};