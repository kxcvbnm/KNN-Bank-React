import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiService } from "../services/api";
import { CircleUserRound, Landmark, LogOut, Menu, X } from "lucide-react"; // 🟢 ADDED Menu, X icons

const Navbar = () => {
  const isAdmin = apiService.isAdmin();
  const isAuthenticated = apiService.isAuthenticated();
  const isAuditor = apiService.isAuditor();

  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // 🟢 ADDED new state for mobile toggle
  const navigate = useNavigate();

  const handleLogout = () => setShowModal(true);

  const confirmLogout = () => {
    apiService.logout();
    setShowModal(false);
    navigate("/login");
  };

  const cancelLogout = () => setShowModal(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Landmark size={35} strokeWidth={1.5} />
          <Link to="/home" className="navbar-logo">
            KNN BANK
          </Link>
        </div>

        {/* 🟢 Mobile Menu Button */}
        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          <li className="navbar-item">
            <Link to="/home" className="navbar-link" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>

          {isAuthenticated ? (
            <>
              <li className="navbar-item">
                <Link to="/profile" className="navbar-link" onClick={() => setMenuOpen(false)}>Profile</Link>
              </li>
              <li className="navbar-item">
                <Link to="/transfer" className="navbar-link" onClick={() => setMenuOpen(false)}>Transfer</Link>
              </li>
              <li className="navbar-item">
                <Link to="/transactions" className="navbar-link" onClick={() => setMenuOpen(false)}>Transactions</Link>
              </li>

              {(isAdmin || isAuditor) && (
                <>
                  <li className="navbar-item">
                    <Link to="/auditor-dashboard" className="navbar-link" onClick={() => setMenuOpen(false)}>Auditor Dashboard</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/deposit" className="navbar-link" onClick={() => setMenuOpen(false)}>Deposit</Link>
                  </li>
                </>
              )}

              <li className="navbar-item">
                <button
                  className="navbar-link logout-btn"
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                >
                  Logout
                </button>
                <LogOut size={20} strokeWidth={1.5} />
              </li>
            </>
          ) : (
            <>
              <li className="navbar-item">
                <Link to="/login" className="navbar-link" onClick={() => setMenuOpen(false)}>Login</Link>
                <CircleUserRound size={20} strokeWidth={1.5} />
              </li>
              <li className="navbar-item">
                <Link to="/register" className="navbar-link" onClick={() => setMenuOpen(false)}>Register</Link>
                <CircleUserRound size={20} strokeWidth={1.5} />
              </li>
            </>
          )}
        </ul>
      </div>

      {showModal && (
        <div className="modal-backdrop">
          <div className="modal">
            <p>Are you sure you want to logout?</p>
            <div className="modal-actions">
              <button onClick={confirmLogout} className="btn-confirm">Yes</button>
              <button onClick={cancelLogout} className="btn-cancel">No</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
