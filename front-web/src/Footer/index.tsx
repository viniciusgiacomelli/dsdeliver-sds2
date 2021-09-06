import './styles.css';

import logo from './logoG.png';
import { ReactComponent as YoutubeIcon} from './youtube.svg';
import { ReactComponent as InstagramIcon} from './instagram.svg';
import { ReactComponent as LinkedinIcon} from './linkedin.svg';

function Footer () {
    return (
        <footer className="main-footer">

            <p> App desnvolvido durante o evento SDS2 DevSuperior</p>
            <div className="footer-icons">
                <a href="https://www.youtube.com" target="_new">
                    <YoutubeIcon/>
                </a>
                <a href="https://www.linkedin.com/in/vinicius-giacomelli/" target="_new">
                    <LinkedinIcon/>
                </a>
                <a href="https://www.instagram.com/vinygiacomelli/" target="_new">
                    <InstagramIcon/>
                </a>
            </div>

            <div className="footer-dev">
                <a id="footer-dev" href="https://sites.google.com/view/viniciusgiacomelli" target="_new">
                <img src={logo} alt="logotipo"/>
                Vinicius Giacomelli 
                </a>
            </div>
        </footer>
    )
}

export default Footer;
