import React, { Component } from "react";
import axios from "axios";
import { FormControl, InputGroup } from "react-bootstrap";
import styles from "../Components/index.module.css";
import { Link } from "react-router-dom";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3000/links")
      .then((res) => {
        this.setState({ links: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <div className={styles.navbar}>
          <div>
            <img
              className={styles.logoImg}
              src="data:image/png;base64,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"
              alt="logo.png"
            />
          </div>
          <div>
            <InputGroup
              style={{
                marginTop: "-8px",
                marginLeft: "-230px",
              }}
            >
              <FormControl
                style={{ width: "200px" }}
                placeholder="Search...."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append style={{ marginTop: "20px", height: "38px" }}>
                <InputGroup.Text id="basic-addon2">
                  <img
                    src="https://www.flaticon.com/svg/static/icons/svg/751/751463.svg"
                    style={{ width: "30px", height: "30px" }}
                  />
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </div>
          <div style={{ marginLeft: "0px", display: "flex" }}>
            {this.state.links.map(({ to, title }) => (
              <Link
                key={to}
                style={{
                  marginTop: "16px",
                  textDecoration: "none",
                  marginLeft: "-45px",
                }}
                className={styles.links}
                to={to}
              >
                <h4 style={{ fontSize: "18px" }}>{title}</h4>
              </Link>
            ))}
            <div style={{ paddingRight: "30px", marginTop: "15px" }}>
              <Link to="/wishlist">
                <i class="far fa-heart" style={{ color: "white" }}></i>
              </Link>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "20px",
              }}
            >
              <Link to="/cart" style={{ color: "white", display: "flex" }}>
                <i class="far fa-shopping-cart"></i>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Navbar;
