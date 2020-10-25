import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "../Components/index.module.css";
var CompanyInfo = ["About SHEIN", "Affliate", "Fashion Blooger"];
var Help = [
  "Shipping Info",
  "Returns",
  "How To Order",
  "How To Track",
  "Size Guide",
];
var appArr = [
  "data:image/jpeg;base64,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",
  "https://www.flaticon.com/premium-icon/icons/svg/722/722460.svg",
];
const Customer = ["Contact Us", "Payment Method", "Bonus Point"];
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/images")
      .then((res) => {
        this.setState({ images: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <>
        <div
          style={{
            display: "flex",
            padding: "40px",
            background: "black",
            marginTop: "20px",
          }}
        >
          <div style={{ flex: "1px" }}>
            <h6 style={{ padding: "10px", color: "white" }}>COMPANY INFO</h6>
            {CompanyInfo.map((a) => (
              <p style={{ paddingLeft: "10px", color: "white" }}>{a}</p>
            ))}
          </div>
          <div style={{ flex: "1px" }}>
            <h6 style={{ padding: "10px", color: "white" }}>HELP & SUPPORT</h6>
            {Help.map((a) => (
              <p style={{ paddingLeft: "10px", color: "white" }}>{a}</p>
            ))}
          </div>
          <div style={{ flex: "1px" }}>
            <h6 style={{ padding: "10px", color: "white" }}>CUSTOMER CARE</h6>
            {Customer.map((a) => (
              <p style={{ paddingLeft: "10px", color: "white" }}>{a}</p>
            ))}
          </div>
          <div style={{ flex: "1px", textAlign: "center" }}>
            <div>
              <h6 style={{ color: "white", paddingBottom: "20px" }}>
                Find Us On
              </h6>
            </div>
            <div style={{ display: "flex" }}>
              {this.state.images.map(({ to, link }) => (
                <div style={{ flex: "1px" }}>
                  <img
                    src={link}
                    style={{ width: "30px", paddingLeft: "10px" }}
                  />
                </div>
              ))}
            </div>
            <div
              style={{ flex: "1px", marginTop: "20px", textAlign: "center" }}
            >
              <div>
                <h6 style={{ color: "white" }}>App On</h6>
              </div>
              <div style={{ display: "flex", marginLeft: "70px" }}>
                {appArr.map((a) => (
                  <div>
                    <img
                      src={a}
                      alt="img"
                      style={{
                        width: "50px",
                        height: "40px",
                        paddingLeft: "10px",
                        marginTop: "20px",
                        marginLeft: "20px",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ flex: "1px", marginTop: "20px", textAlign: "center" }}>
            <div style={{ flex: "1px" }}>
              <Link to="/FAQ" className={styles.links}>
                <h6
                  style={{
                    marginTop: "-10px",
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  FAQ
                </h6>
              </Link>
            </div>
            <div style={{ flex: "1px" }}>
              <Link to="/joboppurtunities" className={styles.links}>
                <h6
                  style={{
                    marginTop: "-10px",
                    padding: "0px",
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  Job Oppurtunities
                </h6>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Footer;
