import { Mail, Phone } from "lucide-react";

const Footer = () => {

    return(
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>KNN BANK</h3>
                        <p>Your trusted partner for all banking and financial needs</p>
                    </div>
                    <div className="footer-section">
                        <h4>Support</h4>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                            <h4>Contact</h4>
                        <div className="footer-contact">
                            <Mail size={15} />
                            <p>Email: knn.bank.th@gmail.com</p>
                        </div>
                        <div className="footer-contact">
                            <Phone size={15} />
                            <p>Phone: +66 94 878 5880</p>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                        <p>&copy; {new Date().getFullYear()} KNN Bank. Your pocket buddy.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;