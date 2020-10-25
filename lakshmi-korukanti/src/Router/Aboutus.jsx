import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Aboutus extends Component {
  constructor(props) {
    super(props);
    this.props = {};
  }
  render() {
    return (
      <>
        <div style={{ alignContent: "center" }}>
          <img
            src="https://img.shein.com/images2/2018/11/29/15434606131933594897.jpg"
            style={{ width: "100%", marginLeft: "-50px" }}
          />
        </div>
        <div style={{ width: "80%", marginLeft: "10%" }}>
          <h5>About Us</h5>
          <p>
            SHEIN is an international B2C fast fashion e-commerce platform. The
            company mainly focuses on women's wear, but it also offers men's
            apparel, children's clothes, accessories, shoes, bags and other
            fashion items. SHEIN mainly targets Europe, America, Australia, and
            the Middle East along with other consumer markets. The brand was
            founded in October 2008, and since then it has upheld the philosophy
            that "everyone can enjoy the beauty of fashion." Its business covers
            more than 220 countries and regions around the world.
          </p>
        </div>
        <div style={{ marginLeft: "10%", marginTop: "5%", width: "80%" }}>
          <h5>Our Mission</h5>
          <p>
            SHEIN prides itself on offering on-trend styles catering to both
            young women and teens, that won’t break the bank. SHEIN adheres to
            the concept that "everyone can enjoy the beauty of fashion." SHEIN
            is able to stay on top of the latest fashion trends from around the
            globe while rapidly bringing these styles to market. So whether
            you're searching for boho dresses and graphic tees or patterned
            blouses and chic swimwear, SHEIN is the ultimate one-stop-shop for
            the modern yet economical fashionista. It aims to promptly offer
            stylish quality products at appealing prices to every user in the
            world.
          </p>
        </div>
        <div style={{ marginLeft: "10%", marginTop: "5%", width: "80%" }}>
          <h5>Where You Can Find Us</h5>
          <p>
            SHEIN now ships to over 220 countries and regions worldwide. With
            websites supporting the United States, Spain, France, Russia,
            Germany, Italy, Australia and the Middle East, SHEIN ships from one
            of its many globally positioned warehouses. SHEIN continues to
            thrive due in part to the company's values in controlling the
            excellence of in-house production. SHEIN aims to provide the highest
            value trendy pieces while also being dedicated to quality, value and
            service.
          </p>
        </div>
        <div style={{ marginLeft: "10%", marginTop: "5%", width: "80%" }}>
          <img
            src="https://img.shein.com/images2/2018/11/28/15433954093500468519.jpg"
            alt="map.png"
            style={{ width: "100%" }}
          />
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: "40px",
            width: "80%",
            marginLeft: "10%",
          }}
        >
          <h1>MEET SHEIN</h1>
          <div style={{ display: "flex" }}>
            <div
              style={{
                flex: "1px",
                width: "50%",
                padding: "15px",
                background: "#f6f5f3",
              }}
            >
              <img
                style={{ width: "99%" }}
                src="https://img.shein.com/images2/2018/11/29/15434606512441018221.jpg"
                alt="aboutproducts.png"
              />
            </div>
            <div
              style={{
                flex: "1px",
                marginTop: "10%",
                marginLeft: "20px",
                textAlign: "left",
              }}
            >
              <h5>Product Design</h5>
              <p>
                It all starts when an idea, or a thought, is conceived by the
                designer.
              </p>
              <p>
                The life of a product begins even before the designer's pen hits
                the paper.
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "40px",
            width: "80%",
            marginLeft: "10%",
          }}
        >
          <div
            style={{
              flex: "1px",
              marginTop: "10%",
              marginLeft: "20px",
              textAlign: "left",
            }}
          >
            <h5>Manufacturing</h5>
            <p>
              All of our products are created by machinery that emphasizes
              precision and attention to detail and style.
            </p>
            <p>
              We value quality and sometimes our products are crafted by
              individuals experienced in hand sewing.
            </p>
          </div>
          <div
            style={{
              flex: "1px",
              width: "50%",
              padding: "15px",
              background: "#f6f5f3",
              marginLeft: "25px",
            }}
          >
            <img
              style={{ width: "99%" }}
              src="https://img.shein.com/images2/2018/11/29/15434606851110958515.jpg"
              alt="aboutproducts.png"
            />
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: "40px",
            width: "80%",
            marginLeft: "10%",
          }}
        >
          <div style={{ display: "flex" }}>
            <div
              style={{
                flex: "1px",
                width: "50%",
                padding: "15px",
                background: "#f6f5f3",
              }}
            >
              <img
                style={{ width: "99%" }}
                src="https://img.shein.com/images2/2018/11/29/15434607113621832211.jpg"
                alt="aboutproducts.png"
              />
            </div>
            <div
              style={{
                flex: "1px",
                marginTop: "10%",
                marginLeft: "20px",
                textAlign: "left",
              }}
            >
              <h5>Quality Assurance</h5>
              <p>
                After rigorous testing and inspection, our products are made
                into something we can be proud of a fashionable and reliable
                item!
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "40px",
            width: "80%",
            marginLeft: "10%",
          }}
        >
          <div
            style={{
              flex: "1px",
              marginTop: "10%",
              marginLeft: "20px",
              textAlign: "left",
            }}
          >
            <h5>Photography</h5>
            <p>
              Through creative collaborations with photographers and models,we
              are able to capture the details of every style for you to preview
              before you make a purchase decision.
            </p>
          </div>
          <div
            style={{
              flex: "1px",
              width: "50%",
              padding: "15px",
              background: "#f6f5f3",
              marginLeft: "25px",
            }}
          >
            <img
              style={{ width: "99%" }}
              src="https://img.shein.com/images2/2018/11/29/15434607563513781311.jpg"
              alt="aboutproducts.png"
            />
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: "40px",
            width: "80%",
            marginLeft: "10%",
          }}
        >
          <div style={{ display: "flex" }}>
            <div
              style={{
                flex: "1px",
                width: "50%",
                padding: "15px",
                background: "#f6f5f3",
              }}
            >
              <img
                style={{ width: "99%" }}
                src="https://img.shein.com/images2/2018/11/29/15434607782056434179.jpg"
                alt="aboutproducts.png"
              />
            </div>
            <div
              style={{
                flex: "1px",
                marginTop: "10%",
                marginLeft: "20px",
                textAlign: "left",
              }}
            >
              <h5>Logistics and Transportation</h5>
              <p>
                After our products are specially designed and carefully
                packaged, they are loaded onto a cargo plane for a speedy
                transcontinental voyage to you.
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "40px",
            width: "80%",
            marginLeft: "10%",
            marginBottom: "10%",
          }}
        >
          <div
            style={{
              flex: "1px",
              marginTop: "10%",
              marginLeft: "20px",
              textAlign: "left",
            }}
          >
            <h5>Customer Service</h5>
            <p>
              You may have questions, but we've got you covered. Our team of
              customer service professionals can communicate with you in the
              following languages: English, French, German, Russian, and Arabic.
            </p>
          </div>
          <div
            style={{
              flex: "1px",
              width: "50%",
              padding: "15px",
              background: "#f6f5f3",
              marginLeft: "25px",
            }}
          >
            <img
              style={{ width: "99%" }}
              src="https://img.shein.com/images2/2018/11/29/15434608022137642733.jpg"
              alt="aboutproducts.png"
            />
          </div>
        </div>
      </>
    );
  }
}
