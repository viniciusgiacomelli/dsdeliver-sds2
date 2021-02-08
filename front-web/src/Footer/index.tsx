import './styles.css';
import { ReactComponent as YoutubeIcon} from './youtube.svg';
import { ReactComponent as InstagramIcon} from './instagram.svg';
import { ReactComponent as LinkedinIcon} from './linkedin.svg';

function Footer () {
    return (
        <footer className="main-footer">
            App desenvolvido por VINICIUS GIACOMELLI durante a 2º ed. do evento Semana DevSuperior  
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
        </footer>
    )
}

export default Footer;