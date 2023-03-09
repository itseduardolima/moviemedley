import { Link } from 'react-router-dom';
import {BiSearchAlt2} from 'react-icons/bi'
import {Nav} from "./styles";
import Sidebar from '../Sidebar/Sidebar';

function Navbar() {
    return (
        <Nav>
            <div className="navbar" >
                <div className="burguer" >
                    <Sidebar/>
                </div>
                <h2>
                    <Link to="/"><span>M</span>ovie<span>M</span>edley</Link>
                </h2>
            </div>
            <form>
                <input type="text" placeholder="Busque por um filme"/>
                <button type="submit"><BiSearchAlt2/></button>
            </form>
        </Nav>
        
    )
}


export default Navbar