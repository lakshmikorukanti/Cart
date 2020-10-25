import React, { Component } from "react";
import { AppContext } from "../Context/AppContext";
import { Redirect } from "react-router-dom";
import styles from "../Components/index.module.css";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(this.context);
    const { checkUser } = this.context;
    console.log(checkUser);
    checkUser({ email, password });
  };
  render() {
    const { email, password } = this.state;
    const { isAuth } = this.context;
    console.log(this.context, isAuth);

    if (isAuth) {
      return <Redirect push to="/cart" />;
    } else {
      return (
        <div
          style={{
            height: "100%",
            width: "100%",
            background: "#f6f5f3",
            marginTop: "0px",
          }}
        >
          <div>
            <div
              style={{
                width: "30%",
                height: "800px",
                marginLeft: "35%",
              }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNHv36bj4iVo5PUrRcj1hjTLxLSEXpt6ntEA&usqp=CAU"
                style={{ width: "455px", height: "300px", marginTop: "10%" }}
              />
              <div
                style={{
                  background: "white",
                  marginTop: "-20px",
                  padding: "30px",
                }}
              >
                <h3 style={{ margin: "20px 30px" }}>LOGIN</h3>
                <form onSubmit={this.handleSubmit}>
                  <input
                    value={email}
                    name="email"
                    placeholder="email"
                    onChange={this.handleChange}
                    style={{ width: "90%", marginLeft: "0px" }}
                  />
                  <br />

                  <input
                    value={password}
                    name="password"
                    placeholder="password"
                    onChange={this.handleChange}
                    style={{ width: "90%", marginLeft: "0px" }}
                  />
                  <br />
                  <input
                    type="submit"
                    className={styles.loginButton}
                    style={{
                      width: "90%",
                      marginLeft: "20px",
                      background: "black",
                      color: "white",
                    }}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

Login.contextType = AppContext;
