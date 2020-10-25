import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import styles from "../Components/index.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Home from "./Home";
export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <>
        <Home />
        <div className={styles.products}>
          {this.state.data &&
            this.state.data.map((item) => (
              <div style={{ flex: 1, marginLeft: "40px" }}>
                <div>
                  <img
                    src={item.img}
                    alt="image"
                    style={{ width: "250px", height: "200px" }}
                  />
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="danger"
                      className=" px-5 my-5"
                      style={{ fontSize: "20px" }}
                    >
                      {item.title}
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="p-5">
                      {item.array.map((a) => (
                        <>
                          <Dropdown.Item
                            variant="warning"
                            style={{ fontSize: "20px" }}
                          >
                            <Link
                              style={{
                                textDecoration: "none",
                                color: "black",
                                fontStyle: "italic",
                                fontFamily: "monospace",
                              }}
                              to={`/products/${item.title}/${a}`}
                            >
                              <h6 className={styles.linkhover}>{a}</h6>
                            </Link>
                          </Dropdown.Item>
                        </>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            ))}
        </div>
      </>
    );
  }
}
