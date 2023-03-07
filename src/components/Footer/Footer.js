import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { List, P, Rodape } from './styles'

function Footer() {
    return (
        <Rodape>
            <List>
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaLinkedin /></li>
            </List>
            <P><span>&copy; 2023</span></P>
        </Rodape>
    )
}

export default Footer