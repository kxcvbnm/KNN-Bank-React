import { apiService } from "../services/api";
import { ShieldUser, Smartphone, Clock } from "lucide-react";

const Home = () => {

    const isAuthenticated = apiService.isAuthenticated();

    return (
        <div className="home">
            <section className="hero">
                <div className="hero-content">
                    <h1>Banking Made Simple</h1>
                    <h1>Secure & Smart</h1>
                    <p>Experience the future of banking with our comprehensive digital solutions. Manage your finances with confidence and ease.</p>
                    {!isAuthenticated && (
                        <div className="hero-buttons">
                            <a href="/register" className="btn btn-primary">Get Started</a>
                            <a href="/login" className="btn btn-secondary">Login</a>
                        </div>
                    )}
                </div>
            </section>
            <section className="features">
                <div className="container">
                    <h2>Why Choose KNN Bank?</h2>
                    <p>We provide comprehensive banking solutions designed to meet your financial needs with security and convenience.</p>
                    <div className="features-grid">
                        <div className="feature">
                            <div className="feature-icon">
                                <ShieldUser size={60} strokeWidth={1.5} />
                            </div>
                            <h3>Bank-Level Security</h3>
                            <p>Advanced encryption and multi-factor authentication for secure transactions.</p>
                        </div>
                        <div className="feature">
                            <div className="feature-icon">
                                <Smartphone size={60} strokeWidth={1.5} />
                            </div>
                            <h3>Mobile Banking</h3>
                            <p>Manage your finances anywhere, anytime.</p>
                        </div>
                        <div className="feature">
                            <div className="feature-icon">
                                <Clock size={60} strokeWidth={1.5} />
                            </div>
                            <h3>24/7 Support</h3>
                            <p>Round-the-clock customer service to help you with any banking needs.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;