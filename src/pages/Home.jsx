import { apiService } from "../services/api";
import { ShieldUser, Smartphone, Clock } from "lucide-react";

const Home = () => {

    const isAuthenticated = apiService.isAuthenticated();

    return (
        <div className="home">
            <section className="hero">
                <div className="hero-content">
                    <h1>Welcome to KNN Bank</h1>
                    <h1>Your Banking Simulator</h1>
                    <p>
                        Practice real-world banking in a safe, simulated environment. 
                        Manage virtual accounts, make transfers, deposits, and experience how digital banking really works — without the risk.
                    </p>
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
                    <p>
                        KNN Bank is a realistic banking simulation built for learners, developers, 
                        and enthusiasts who want to understand modern financial systems hands-on.
                    </p>

                    <div className="features-grid">
                        <div className="feature">
                            <div className="feature-icon">
                                <ShieldUser size={60} strokeWidth={1.5} />
                            </div>
                            <h3>Secure Transactions</h3>
                            <p>
                                Experience authentic banking logic — complete with verification and transaction safety mechanisms.
                            </p>
                        </div>

                        <div className="feature">
                            <div className="feature-icon">
                                <Smartphone size={60} strokeWidth={1.5} />
                            </div>
                            <h3>Full Banking Simulation</h3>
                            <p>
                                Create accounts, make transfers, and deposit funds in a realistic digital interface designed for exploration.
                            </p>
                        </div>

                        <div className="feature">
                            <div className="feature-icon">
                                <Clock size={60} strokeWidth={1.5} />
                            </div>
                            <h3>Always Available</h3>
                            <p>
                                Train your skills or test banking workflows anytime — the KNN Bank simulation is open 24/7.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
