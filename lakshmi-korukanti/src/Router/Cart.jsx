import React, { Component } from "react";
import axios from "axios";
import { AppContext } from "../Context/AppContext";
import { Redirect, Link } from "react-router-dom";
export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      quantity: 1,
      total: 0,
    };
  }
  componentDidMount() {
    this.handleData();
  }

  handleData = () => {
    axios
      .get(`http://localhost:3000/cartArr`)
      .then((res) => {
        console.log(this.state.res);
        this.setState({ data: res.data });
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        if (this.state.data.length > 0) {
          let sum = 0;
          for (let z = 0; z < this.state.data.length; z++) {
            sum +=
              Number(this.state.data[z].item.cost) *
              Number(this.state.data[z].quantity);
            console.log(sum);
            console.log(
              Number(this.state.data[z].item.cost),
              "cost",
              Number(this.state.data[z].quantity)
            );
          }
          this.setState({
            total: sum,
          });
        } else {
          this.setState({
            total: 0,
          });
        }
      });
    console.log(this.state.total);
  };

  handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:3000/cartArr/${id}`)
      .then(() => this.handleData());
  };

  handleAddQuantity = (id) => {
    axios
      .get(`http://localhost:3000/cartArr/${id}`)
      .then((res) => {
        console.log(res);
        this.setState({
          quantity: res.data.quantity + 1,
        });
      })
      .then(() =>
        axios
          .patch(`http://localhost:3000/cartArr/${id}`, {
            quantity: this.state.quantity,
          })
          .then(() => this.handleData())
      );
  };
  handleReduceQuantity = (id) => {
    axios
      .get(`http://localhost:3000/cartArr/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.quantity <= 1) {
          this.setState({
            quantity: 1,
          });
        } else {
          this.setState({
            quantity: res.data.quantity - 1,
          });
        }
      })
      .then(() =>
        axios
          .patch(`http://localhost:3000/cartArr/${id}`, {
            quantity: this.state.quantity,
          })
          .then(() => this.handleData())
      );
  };
  render() {
    console.log(this.state.data);

    console.log(this.state.data, this.props.match.params.orderBy);
    const { isAuth } = this.context;
    if (this.props.match.params.orderBy == "asc") {
      this.state.data.sort((a, b) => a.item.cost - b.item.cost);
    } else if (this.props.match.params.orderBy == "desc") {
      this.state.data.sort((a, b) => b.item.cost - a.item.cost);
    }
    console.log(isAuth);
    if (!isAuth) {
      return <Redirect push to="/login" />;
    }
    return (
      <>
        <div
          style={{
            marginLeft: "7%",
            lineHeight: 1.5,
            width: "100%",
            display: "flex",
          }}
        >
          <div style={{ marginTop: "4%", flex: 5 }}>
            <div
              style={{ marginBottom: "2%", fontSize: "12px", lineHeight: 2.5 }}
            >
              <h3 style={{ color: "black" }}>
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/879/879757.svg"
                  alt=""
                  style={{ height: "20px", width: "20px" }}
                />{" "}
                Available Offers
              </h3>
              <ul style={{ marginLeft: "-1%" }} className="text-muted">
                <li>
                  <span>
                    5% Unlimited Cashback on Flipkart Axis Bank Credit Card. TCA
                  </span>
                </li>
                <li>
                  <span>
                    10% Cashback upto Rs 300 on a minimum spend of Rs 1,000 on
                    PayZapp. TCA
                  </span>
                </li>
                <li>
                  <span>
                    Flat Rs 200 Cashback on first Airtel Payments Bank
                    transaction on Myntra on a min spend of Rs 2000. TCA
                  </span>
                </li>
                <li>
                  <span>
                    10% SuperCash upto Rs 200 on transaction with Mobikwik
                    Wallet . TCA
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h2 style={{ float: "left", marginBottom: "20px" }}>
                My Shopping Bag( {this.state.data.length} items)
              </h2>
              <h2 style={{ float: "right", marginRight: "50%" }}>
                Total : ₹{this.state.total}
              </h2>
            </div>
            {this.state.data.map((a) => (
              <>
                <div
                  style={{
                    clear: "both",
                    border: "1px solid lightgrey",
                    marginRight: "38%",
                  }}
                >
                  <div className="d-flex mt-2">
                    <div className="flex-1">
                      <img
                        src={a.item.img}
                        style={{
                          height: "150px",
                          width: "100px",
                          marginLeft: "10px",
                        }}
                      />
                    </div>
                    <div
                      className="flex-1 ml-5"
                      style={{ float: "left", marginRight: "50%" }}
                    >
                      <h4 style={{ color: "black" }}>{a.item.name}</h4>
                      <div>
                        <h5>Size : {a.item.size}</h5>
                      </div>
                      <div style={{ marginTop: "30%" }}>
                        <span style={{ fontSize: "15px", fontWeight: "600" }}>
                          Qty :{" "}
                        </span>
                        <button
                          style={{ borderRadius: "5px" }}
                          onClick={() => this.handleReduceQuantity(a.id)}
                        >
                          -
                        </button>
                        <span style={{ fontWeight: "bolder" }}>
                          {" "}
                          &nbsp; {a.quantity} &nbsp;
                        </span>
                        <button
                          style={{ borderRadius: "5px" }}
                          onClick={() => this.handleAddQuantity(a.id)}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div
                      className="flex-1"
                      style={{ float: "right", marginRight: "10px" }}
                    >
                      <div style={{ fontWeight: "bold", fontSize: "20px" }}>
                        Price :₹{a.quantity * a.item.cost}
                      </div>
                      <div>
                        <span
                          style={{
                            textDecorationLine: "line-through",
                            color: "grey",
                            fontSize: "20px",
                          }}
                        >
                          ₹{2 * a.quantity * a.item.cost} &nbsp;
                        </span>

                        <span style={{ color: "orangered", fontSize: "18px" }}>
                          &nbsp; (50% OFF)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      className="btn text-secondary font-weight-bold"
                      style={{
                        height: "40px",
                        width: "200px",
                        border: "1px solid lightgrey",
                        fontSize: "16px",
                        margin: "1% 0%",
                        marginLeft: "10px",
                      }}
                      onClick={() => this.handleDelete(a.id)}
                    >
                      REMOVE
                    </button>
                    <button
                      className="btn text-secondary font-weight-bold"
                      style={{
                        height: "40px",
                        width: "500px",
                        fontSize: "16px",
                        border: "1px solid lightgrey",
                        margin: "1% 0%",
                        marginLeft: "10px",
                      }}
                    >
                      ADD TO WISHLIST
                    </button>
                  </div>
                </div>
              </>
            ))}
          </div>

          {/* Coupons */}
          <div
            style={{
              flex: 1,
              marginTop: "2%",
              marginLeft: "-40%",
              marginRight: "14%",
              verticalAlign: "top",
              display: "inline-block",
              width: "29%",
              padding: "24px 0 0 16px",
            }}
          >
            <div>
              <div>
                <div>
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "#535766",
                      textTransform: "uppercase",
                      marginBottom: "12px",
                    }}
                  >
                    Coupons
                  </div>
                  <div
                    style={{
                      paddingBottom: "12px",
                      position: "relative",
                      borderBottom: "1px solid #f5f5f6",
                      paddingLeft: "36px",
                    }}
                  >
                    <img
                      style={{
                        position: "absolute",
                        left: 0,
                        top: "7px",
                        height: "20px",
                        width: "20px",
                      }}
                      src="https://www.flaticon.com/svg/static/icons/svg/1415/1415051.svg"
                      alt=""
                    />
                    <div
                      style={{
                        fontWeight: "600",
                        fontSize: "14px",
                        lineHeight: "16px",
                        padding: "7px 0",
                      }}
                    >
                      Apply Coupons
                    </div>
                    <div>
                      <button
                        style={{
                          float: "right",
                          padding: "4px 16px",
                          position: "absolute",
                          color: "#ff3f6c",
                          border: "1px solid #ff3f6c",
                          borderRadius: "3px",
                          textTransform: "none",
                          cursor: "pointer",
                          fontWeight: 600,
                          top: 0,
                          right: 0,
                        }}
                      >
                        APPLY
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    paddingBottom: "12px",
                    borderBottom: "1px solid #f5f5f6",
                  }}
                >
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#535766",
                      margin: "24px 0 12px",
                    }}
                  >
                    GIFTING &amp; PERSONALISATION
                  </div>
                  <div
                    style={{
                      background: "#fff1ec",
                      padding: "12px 12px 12px 63px",
                      fontSize: "12px",
                      position: "relative",
                      borderRadius: "4px",
                      lineHeight: "16px",
                    }}
                  >
                    <img
                      src="https://www.vectorjunky.com/wp-content/uploads/2017/02/Pr%20074%20-%20TRI%20-%2018_11_10%20-%20042.jpg"
                      alt=""
                      style={{
                        height: "70px",
                        width: "50px",
                        marginTop: "6%",
                        position: "absolute",
                        top: "-1px",
                        left: "10px",
                      }}
                    />
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: 600,
                        marginBottom: "1px",
                      }}
                    >
                      Buying for a loved one?
                    </div>
                    <div>
                      <span>
                        Gift wrap and personalised message on card, Only for{" "}
                      </span>

                      <span>₹5</span>
                    </div>
                    <div
                      style={{
                        marginTop: "8px",
                        fontWeight: 600,
                        color: "#ff3f6c",
                        display: "inline-block",
                      }}
                    >
                      ADD GIFT WRAP
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  margin: "24px 0 16px",
                  color: "#535766",
                }}
              >
                PRICE DETAILS
              </div>
              <div style={{ fontSize: "14px" }}>
                <div style={{ marginBottom: "12px", lineHeight: "16px" }}>
                  <span>Total MRP</span>
                  <span style={{ float: "right" }}>
                    <span></span>

                    <span>₹ 1,299</span>
                  </span>
                </div>
                <div style={{ marginBottom: "12px", lineHeight: "16px" }}>
                  <span>Discount on MRP</span>
                  <span style={{ float: "right" }}>
                    <span>-</span>

                    <span>₹650</span>
                  </span>
                </div>
                <div style={{ marginBottom: "12px", lineHeight: "16px" }}>
                  <span>Coupon Discount</span>
                  <span
                    style={{
                      float: "right",
                      fontSize: "14px",
                      color: "#ff3f6c",
                      cursor: "pointer",
                    }}
                  >
                    Apply Coupon
                  </span>
                </div>
                <div style={{ marginBottom: "12px", lineHeight: "16px" }}>
                  <span>Platform Handling Fee </span>
                  <div
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    <div style={{ display: "inline-block", cursor: "pointer" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        class="priceDetail-base-infoIcon"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <circle
                            cx="6"
                            cy="6"
                            r="5.75"
                            stroke="#000"
                            stroke-width=".5"
                          ></circle>
                          <g fill="#000" transform="translate(5.5 3)">
                            <rect width="1" height="4" y="2" rx=".5"></rect>
                            <rect width="1" height="1" rx=".5"></rect>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <span style={{ float: "right" }}>
                    <span></span>
                    <span>₹99</span>
                  </span>
                </div>
                <div style={{ marginBottom: "12px", lineHeight: "16px" }}>
                  <span>Total Amount</span>
                  <span style={{ float: "right" }}>
                    <span></span>
                    <span>₹748</span>
                  </span>
                </div>
              </div>
            </div>
            <div>
              <a>
                <div
                  style={{
                    color: "white",
                    fontSize: "14px",
                    fontWeight: 600,
                    padding: "10px",
                    background: "#ff3f6c",
                    cursor: "pointer",
                    textAlign: "center",
                    border: "none",
                    borderRadius: "2px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Place Order
                </div>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
Cart.contextType = AppContext;
