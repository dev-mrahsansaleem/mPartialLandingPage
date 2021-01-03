import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div class="col-md-6 col-sm-12">
              <p>
                mpartial, a 4D Schematics Company. Copyright 2020 all rights
                reserved.
              </p>
            </div>
            <div class="col-md-6 col-sm-12">
              <ul>
                <li>
                  <Link to="/">
                    <i class="fab fa-facebook-f" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i class="fab fa-instagram" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i class="fab fa-linkedin" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
