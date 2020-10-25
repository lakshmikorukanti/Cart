import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
const TopsSize = ["XS", "S", "M", "L", "XL"];
const Onesize = ["ONESIZE"];
const FootSize = ["5", "6", "7", "8", "9", "10"];
export default class MoreDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item1: this.props.match.params.item,
      id: this.props.match.params.id,
      id1: this.props.match.params.id1,
      data: [],
      size: "",
      data1: [],
      tempData: [],
      cartArr: [],
    };
  }
  componentDidMount() {
    axios
      .get(`http://localhost:3000/products?title=${this.state.item1}`)
      .then((res) => {
        this.setState({ data: res.data[0] });
      })
      .then(() => this.handlechange())

      .catch((error) => {
        console.log(error);
      });
  }
  handlechange = () => {
    var result = Object.keys(this.state.data).map((key) => [
      key,
      this.state.data[key],
    ]);
    console.log(result);
    let n = result.find((a) => a[0] == this.state.id);
    console.log(n);
    let m = n[1].find((a) => a.id == this.state.id1);
    console.log(m);

    this.setState({
      data1: m,
    });
  };
  handleWishList = () => {
    console.log(this.state.data1);
    Object.assign(
      this.state.data1,
      { size: this.state.size },
      { name: this.state.id }
    );
    this.setState({
      data1: this.state.data1,
    });
    const { history } = this.props;
    axios
      .post("http://localhost:3000/WishList", {
        item: this.state.data1,
        quantity: 1,
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(() => history.push("/wishlist"));
  };
  handleSize = (value) => {
    this.setState({
      size: value,
    });
  };
  handleCart = () => {
    let { history } = this.props;
    let target = [];
    console.log(target);
    let count = 0;
    axios
      .get(`http://localhost:3000/cartArr/`)
      .then((res) =>
        this.setState({
          cartArr: res.data,
        })
      )
      .then(
        () =>
          (target = this.state.cartArr.find(
            (item) =>
              item.item.id === this.state.id1 &&
              item.item.name === this.state.id
          ))
      )
      .then(() => {
        if (this.state.cartArr.length > 0) {
          for (var i = 0; i < this.state.cartArr.length; i++) {
            if (
              this.state.cartArr[i].item.id == this.state.id1 &&
              this.state.cartArr[i].item.name == this.state.id &&
              this.state.cartArr[i].item.size == this.state.size
            ) {
              target = this.state.cartArr[i];
              console.log(target, this.state.cartArr[i], "target");
              axios
                .get(`http://localhost:3000/cartArr/${target.id}`)
                .then((res) => {
                  console.log(res);
                  this.setState({
                    quantity: res.data.quantity + 1,
                  });
                })
                .then(() =>
                  axios
                    .patch(`http://localhost:3000/cartArr/${target.id}`, {
                      quantity: this.state.quantity,
                    })
                    .then(() => history.push("/cart"))
                );
            } else {
              count++;
            }
          }
        } else {
          this.handlecart2(history);
        }

        if (
          this.state.cartArr.length > 0 &&
          count === this.state.cartArr.length
        ) {
          this.handlecart2(history);
        }
      });
  };
  handlecart2 = (history) => {
    Object.assign(
      this.state.data1,
      { size: this.state.size },
      { name: this.state.id }
    );
    this.setState({
      data1: this.state.data1,
    });
    axios
      .post("http://localhost:3000/cartArr", {
        item: this.state.data1,
        quantity: 1,
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(() => history.push("/cart"));
  };

  render() {
    console.log(this.state.data, this.state.data1);
    const { item, id } = this.props.match.params;
    console.group(this.state.item1, this.state.id1, this.state.id);
    return (
      <>
        <div>
          {this.state.data1.length != [] ? (
            <>
              <div style={{ display: "flex", lineHeight: 2 }}>
                <div style={{ flex: 1 }}>
                  <img
                    src={this.state.data1.img}
                    style={{
                      height: "670px",
                      marginLeft: "10%",
                      padding: "6%",
                      width: "600px",
                    }}
                  ></img>
                </div>
                <div style={{ flex: 1, marginTop: "4%" }}>
                  <h1 style={{ fontSize: "45px" }}>{this.state.item1}</h1>
                  <div style={{ fontSize: "x-large" }}>
                    <span style={{ fontWeight: "bold" }}>
                      Price : Rs{this.state.data1.cost}
                    </span>{" "}
                    &nbsp;
                    <span
                      style={{
                        textDecorationLine: "line-through",
                        color: "grey",
                      }}
                    >
                      {" "}
                      Rs{2 * this.state.data1.cost}
                    </span>
                    <span style={{ color: "orangered" }}> (50% OFF)</span>
                  </div>
                  <div
                    style={{
                      color: "green",
                      fontSize: "13px",
                      fontWeight: "bold",
                    }}
                  >
                    inclusive of all taxes
                  </div>

                  <div style={{ margin: "4% 0%" }}>
                    {(() => {
                      if (
                        this.state.item1 === "ACCESSORIES" &&
                        this.state.id === "FootWear"
                      ) {
                        return (
                          <div>
                            <h5 style={{ color: "black" }}>
                              SELECT SIZE (UK Size) SIZE CHART
                            </h5>
                            {FootSize.map((a) => (
                              <button
                                style={{
                                  background: "white",
                                  fontSize: "14px",
                                  fontWeight: "bold",
                                  borderRadius: "50%",
                                  border: "1px solid lightgrey",
                                  padding: "1% 2%",
                                  margin: "1%",
                                }}
                                onClick={() => this.handleSize(a)}
                              >
                                {a}
                              </button>
                            ))}
                          </div>
                        );
                      } else if (
                        this.state.item1 === "ACCESSORIES" &&
                        this.state.id != "FootWear"
                      ) {
                        return (
                          <div>
                            {Onesize.map((a) => (
                              <div>
                                <h4 style={{ color: "black" }}>Size : </h4>
                                <button
                                  style={{
                                    background: "white",
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    borderRadius: "50%",
                                    border: "1px solid lightgrey",
                                    padding: "1% 2%",
                                    margin: "1%",
                                  }}
                                  onClick={() => this.handleSize(a)}
                                >
                                  {a}
                                </button>
                              </div>
                            ))}
                          </div>
                        );
                      } else {
                        return (
                          <div>
                            <h5 style={{ color: "black" }}>
                              <span
                                style={{ fontWeight: "bold", fontSize: "16px" }}
                              >
                                SELECT SIZE
                              </span>
                              <span
                                style={{ color: "#fc036b", fontWeight: "bold" }}
                              >
                                {" "}
                                &nbsp; &nbsp; SIZE CHART →{" "}
                              </span>
                            </h5>
                            {TopsSize.map((a) => (
                              <button
                                style={{
                                  background: "white",
                                  fontSize: "14px",
                                  fontWeight: "bold",
                                  borderRadius: "50%",
                                  border: "1px solid lightgrey",
                                  padding: "1% 2%",
                                  margin: "1%",
                                }}
                                onClick={() => this.handleSize(a)}
                              >
                                {a}
                              </button>
                            ))}
                          </div>
                        );
                      }
                    })()}
                  </div>

                  <div style={{ display: "flex", margin: "4% 0%" }}>
                    <div style={{ flex: 1 }}>
                      <Button
                        style={{
                          fontSize: "20px",
                          background: "black",
                          color: "white",
                          border: "none",
                          padding: "4% 30%",
                        }}
                        onClick={this.handleCart}
                      >
                        <i class="fas fa-shopping-bag"></i> ADD TO BAG
                      </Button>
                    </div>
                    <div style={{ flex: 1, marginLeft: "5%" }}>
                      <Button
                        style={{
                          fontSize: "20px",
                          background: "white",
                          color: "black",
                          border: "1px solid lightgrey",
                          padding: "4% 20%",
                        }}
                        onClick={this.handleWishList}
                      >
                        <i class="fas fa-bookmark"></i> WISHLIST
                      </Button>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",

                      width: "300px",
                    }}
                    className="bg-light"
                  >
                    <div style={{ padding: "0px 10px" }}>
                      <i class="fas fa-shipping-fast"></i>
                    </div>
                    <div>
                      <h6 style={{ fontSize: "15px" }}> Free Shipping</h6>
                      <p
                        style={{ fontSize: "14px", marginTop: "-5px" }}
                        className="text-muted"
                      >
                        Free Standard Shippings
                      </p>
                      <p
                        style={{ fontSize: "14px", marginTop: "-15px" }}
                        className="text-muted"
                      >
                        9-15 Business Days
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",

                      width: "300px",
                    }}
                    className="bg-light"
                  >
                    <div style={{ padding: "0px 10px" }}>
                      <i class="far fa-shield-check"></i>
                    </div>
                    <div>
                      <h6 style={{ fontSize: "15px" }}> Return Policy</h6>
                      <p
                        style={{ fontSize: "14px", marginTop: "-5px" }}
                        className="text-muted"
                      >
                        Return and exchange goods are supported.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </>
    );
  }
}
