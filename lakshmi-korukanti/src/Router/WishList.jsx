import React, { Component } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
export default class WishList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    this.handleData();
  }
  handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:3000/WishList/${id}`)
      .then(() => this.handleData());
  };
  handleCart = (id) => {
    const { history } = this.props;
    console.log(this.state.data[0]);
    axios
      .post("http://localhost:3000/cartArr", {
        item: this.state.data[0].item,
        size: this.state.size,
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(() => this.handleDelete(id))
      .then(() => history.push("/cart"));
  };
  handleData = () => {
    axios
      .get(`http://localhost:3000/WishList`)
      .then((res) => {
        console.log(this.state.res);
        this.setState({ data: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    console.log(this.state.data);
    return (
      <>
        <div style={{ margin: "30px 150px" }}>
          <h1>My WishList ({this.state.data.length} items) </h1>
          <div
            style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}
          >
            {this.state.data.length > 0 ? (
              <>
                {this.state.data.map((a) => (
                  <div>
                    <Card style={{ width: "24rem", marginBottom: "30px" }}>
                      <Card.Header style={{ height: "420px" }}>
                        {" "}
                        <div style={{ position: "absolute" }}>
                          <img
                            src={a.item.img}
                            style={{ width: "22rem", height: "400px" }}
                          />
                        </div>
                        <div
                          style={{
                            position: "relative",
                            marginLeft: "325px",
                            marginTop: "6px",
                          }}
                          onClick={() => this.handleDelete(a.id)}
                        >
                          <i class="far fa-times-circle"></i>
                        </div>
                      </Card.Header>
                      <Card.Body>
                        <Card.Title>
                          <div style={{ marginTop: "0%" }}>
                            <span
                              style={{ fontWeight: "bold", fontSize: "20px" }}
                            >
                              Price : Rs{a.item.cost}
                            </span>{" "}
                            &nbsp;
                            <span
                              style={{
                                textDecorationLine: "line-through",
                                color: "grey",
                              }}
                            >
                              {" "}
                              Rs{2 * a.item.cost}
                            </span>
                            <span style={{ color: "orangered" }}>
                              {" "}
                              (50% OFF)
                            </span>
                          </div>
                        </Card.Title>
                        <Card.Text>
                          <button
                            onClick={() => this.handleCart(a.id)}
                            style={{
                              width: "100%",
                              padding: "10px",
                              background: "black",
                              color: "white",
                            }}
                          >
                            <i class="fas fa-shopping-bag"></i> ADD TO BAG
                          </button>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
              </>
            ) : (
              <div style={{ alignItems: "center" }}>
                <img
                  style={{ margin: "20% 45%" }}
                  src="https://bollyglow.com/wp-content/themes/bollyglow/assets/images/empty_wishlist.png"
                />
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}
