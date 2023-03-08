import { Link } from 'react-router-dom';
import {BiSearchAlt2} from 'react-icons/bi'
import {Nav} from "./styles";

function Navbar() {
    return (
        <Nav>
            <h2>
                <Link to="/"><span>M</span>ovie<span>M</span>edley</Link>
            </h2>
            <form>
                <input type="text" placeholder="Busque por um filme"/>
                <button type="submit"><BiSearchAlt2/></button>
            </form>
        </Nav>
        
    )
}


export default Navbar