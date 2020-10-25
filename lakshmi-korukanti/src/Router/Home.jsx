import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.props = {};
  }
  render() {
    return (
      <>
        <Carousel>
          <Carousel.Item>
            <img
              style={{ height: "600px" }}
              className="d-block w-100"
              src="https://img.ltwebstatic.com/images3_ach/2020/09/19/1600501306d0c89dc7efd9156413fa36f71a81e242.webp"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "600px" }}
              className="d-block w-100"
              src="https://img.ltwebstatic.com/images3_ach/2020/09/23/16008455809cfd665cba1c0aa4f890bcf809f4b1d1.webp"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "600px" }}
              className="d-block w-100"
              src="https://img.ltwebstatic.com/images3_ach/2020/09/23/16008424986fa0f7e4e491a6537f6632eac2c7491a.webp"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "600px" }}
              className="d-block w-100"
              src="https://img.ltwebstatic.com/images3_ach/2020/09/20/1600573166826e158773866dd654bb99d3c56d9013.webp"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}
