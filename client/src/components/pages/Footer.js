import { FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="copyRight"> &copy; 2022 All Rights Reserved</div>
        <div className="footer-icons">
          <p>
            <FaYoutube />{" "}
          </p>
          <p>
            <FaTwitter />
          </p>
          <p>
            <FaFacebook />
          </p>
        </div>
        <div className="footer-notes">
          <p>Contact us</p>
          <p>Privacy Policies</p>
          <p>Help</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
