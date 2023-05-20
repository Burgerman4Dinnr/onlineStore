import { BsFacebook } from 'react-icons/bs'
import { BsInstagram} from 'react-icons/bs'
import { BsTwitter} from 'react-icons/bs'

const Footer =()=> {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="footer-stuff1">
                            <ul>
                                <li>
                                    <a href="./errorPage.html" className="footerLi">Careers</a>
                                </li>
                                <li>
                                    <a href="./errorPage.html" className="footerLi">Newsletter</a>
                                </li>
                                <li>
                                    <a href="./contact.html" className="footerLi">Support</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="socialIcons text-end">
                            <a href="./errorPage.html">
                            <BsFacebook />
                            <BsInstagram />
                            <BsTwitter />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="location text-center">
                        <a className="locationTag" href="https://goo.gl/maps/Z9xoMkWJq3YXAvds5" target="_blank">Jackson, Mississippi</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer