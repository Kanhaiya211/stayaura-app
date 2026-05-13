import "./Footer.css";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
    FaWhatsapp
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function FooterNew() {
    const navigate = useNavigate();
    return (
        <div className="footer">

            <div
                className="footer-overlay"
                style={{ pointerEvents: "none" }}
            ></div>

            <div className="footer-content">

                {/* LEFT */}
                <div>

                    <h1 className="footer-heading">
                        Discover Luxury Villas with StayAura
                    </h1>

                    <div className="footer-socials">

                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noreferrer"
                            className="footer-icon"
                        >
                            <FaFacebookF />
                        </a>

                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                            className="footer-icon"
                        >
                            <FaLinkedinIn />
                        </a>

                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noreferrer"
                            className="footer-icon"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="https://wa.me/919356452017"
                            target="_blank"
                            rel="noreferrer"
                            className="footer-icon"
                        >
                            <FaWhatsapp />
                        </a>

                    </div>

                </div>

                {/* CENTER */}
                <div>

                    <h3 className="footer-title">
                        Quick Links
                    </h3>

                    <span
                        className="footer-link"
                        onClick={() => navigate("/")}
                    >
                        Home
                    </span>
                    <span className="footer-link">About Us</span>
                    <span className="footer-link">Contact Us</span>
                    <span className="footer-link">FAQ</span>

                </div>

                {/* RIGHT */}
                <div>

                    <h3 className="footer-title">
                        Properties
                    </h3>

                    <span
                        className="footer-link"
                        onClick={() => navigate("/properties")}
                    >
                        Luxury Villas
                    </span>
                    <span className="footer-link">Categories</span>
                    <span className="footer-link">Blogs</span>

                </div>

            </div>

            <div className="footer-bottom">

                <p>© 2026 StayAura</p>

                <p>Terms & Conditions</p>

            </div>

        </div>
    );
}

// const styles = {

// footer: {
//     position: "relative",
//     backgroundImage:
//         "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",

//     backgroundSize: "cover",
//     backgroundPosition: "center",

//     padding: "80px 8%",
//     color: "#111",

//     marginTop: "80px"
// },

// overlay: {
//     position: "absolute",
//     inset: 0,
//     background: "rgba(255,255,255,0.75)"
// },

// content: {
//     position: "relative",
//     zIndex: 2,

//     display: "grid",
//     gridTemplateColumns: "2fr 1fr 1fr",
//     gap: "50px"
// },

// heading: {
//     fontSize: "42px",
//     fontWeight: "600",
//     lineHeight: "1.2",
//     marginBottom: "20px"
// },

// socials: {
//     display: "flex",
//     gap: "12px"
// },

// icon: {
//     width: "40px",
//     height: "40px",
//     borderRadius: "10px",

//     background: "#111",
//     color: "white",

//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",

//     cursor: "pointer"
// },

// title: {
//     marginBottom: "20px",
//     fontSize: "22px"
// },

// link: {
//     marginBottom: "12px",
//     cursor: "pointer",
//     color: "#333"
// },

// bottom: {
//     position: "relative",
//     zIndex: 2,

//     marginTop: "70px",
//     paddingTop: "20px",

//     borderTop: "1px solid rgba(0,0,0,0.2)",

//     display: "flex",
//     justifyContent: "space-between"
// }


export default FooterNew;