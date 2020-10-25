import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
export default class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item1: this.props.match.params.item,
      id1: this.props.match.params.id,
      data: [],
      data1: [],
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
    let n = result.find((a) => a[0] == this.state.id1);
    this.setState({
      data1: n,
    });
  };
  render() {
    console.log(this.state.data, this.state.data1[1]);
    const { item, id } = this.props.match.params;
    console.log(item, id);
    if (this.state.data1.length === 0) {
      return <h1>Page Not Found</h1>;
    } else if (this.state.data1.length > 0) {
      if (this.props.match.params.orderBy == "asc") {
        this.state.data1[1].sort((a, b) => a.cost - b.cost);
      } else if (this.props.match.params.orderBy == "desc") {
        this.state.data1[1].sort((a, b) => b.cost - a.cost);
      }
    }

    return (
      <>
        <div
          style={{ textAlign: "right", marginRight: "10%", marginTop: "5%" }}
        >
          <div style={{ textAlign: "center" }}>
            <h1
              style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif" }}
            >
              Welcome to {`${item} ${this.state.data1[0]}`}
            </h1>
          </div>
          <div style={{ fontSize: "20px", fontFamily: "cursive" }}>
            Sort by Price :
            <Link
              to={`/product/${this.state.itemType}/${this.state.itemName}/sort/asc`}
            >
              <button
                style={{
                  fontSize: "16px",
                  border: "none",
                  borderRadius: "5px",
                  fontFamily: "monospace",
                  background: "red",
                  color: "white",
                  padding: "1%",
                  margin: "1%",
                }}
              >
                Low to High
              </button>
            </Link>
            <Link
              to={`/product/${this.state.itemType}/${this.state.itemName}/sort/desc`}
            >
              <button
                style={{
                  fontSize: "16px",
                  border: "none",
                  borderRadius: "5px",
                  fontFamily: "monospace",
                  background: "red",
                  color: "white",
                  padding: "1%",
                  margin: "1%",
                }}
              >
                High to Low
              </button>
            </Link>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            padding: "1%",
            margin: "0% 7%",
            textAlign: "center",
          }}
        >
          {this.state.data1.length > 0 ? (
            this.state.data1[1].map((a) => (
              <>
                <div style={{ flex: 4, textAlign: "center" }}>
                  <Card
                    style={{
                      width: "25rem",
                      padding: "30px",
                      margin: "10px",
                      alignItems: "center",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={a.img}
                      style={{ height: "350px", padding: "2%", width: "300px" }}
                    />
                    <Card.Body>
                      <Card.Title>
                        <h3>₹{a.cost}</h3>
                      </Card.Title>
                      <Button variant="primary">
                        <Link
                          style={{
                            color: "white",
                            textDecoration: "none",
                            fontSize: "20px",
                          }}
                          to={`/products/${this.state.item1}/${this.state.id1}/moredetails/${a.id}`}
                        >
                          More Details
                        </Link>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              </>
            ))
          ) : (
            <></>
          )}
        </div>
      </>
    );
  }
}
