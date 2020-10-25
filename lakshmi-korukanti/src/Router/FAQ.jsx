import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Accordion, Card, Button } from "react-bootstrap";
export default class FAQ extends Component {
  constructor(props) {
    super(props);
    this.props = {};
  }
  render() {
    return (
      <>
        <div style={{ width: "80%", margin: "10%", marginTop: "5%" }}>
          <h1
            className="display-4"
            style={{ fontWeight: "600", float: "left" }}
          >
            Frequently Asked Questions
          </h1>
          <span
            style={{ float: "right", fontSize: "18px" }}
            className="text-muted mt-3"
          >
            Still need help ? &nbsp;
            <button
              style={{
                border: "1px solid lightgrey",
                color: "indigo",
                borderRadius: "5px",
                padding: "5px",
              }}
            >
              <Link to="/contacts" style={{ color: "red" }}>
                Contact Us
              </Link>
            </button>
          </span>
          <hr style={{ clear: "both" }} />
          <br />

          <Accordion>
            <Card
              style={{ background: "white", border: "none", outline: "none" }}
            >
              <Card.Header
                style={{ background: "white", border: "none", outline: "none" }}
              >
                <Accordion.Toggle
                  style={{
                    background: "white",
                    border: "none",
                    outline: "none",
                  }}
                  variant="link"
                  eventKey="0"
                >
                  {" "}
                  <h5>What is Try and Buy Service?</h5>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body style={{ marginLeft: "5px" }}>
                  <p>
                    This service entitles you to try out your purchases at the
                    time of delivery, pay only for what you like and return the
                    rest on-the-spot. Try and Buy is a paid service, available
                    on most of the products and in 31 Cities, you can enter pin
                    code on product page to check service availability. Try and
                    Buy is only available on orders containing &lt;=5 items in
                    cart. To avail this service min. order value should be
                    Rs.1199 and above. To avail the service, please ensure that
                    you tick the 'Try and Buy' box on check-out page and choose
                    delivery address where you are comfortable trying product.
                    Terms of service may differ for our new customers.
                  </p>
                  <p>
                    Try and Buy will not be available during big sale days; We
                    will re-offer the service, post such events.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card
              style={{ background: "white", border: "none", outline: "none" }}
            >
              <Card.Header
                style={{ background: "white", border: "none", outline: "none" }}
              >
                <Accordion.Toggle
                  style={{
                    background: "white",
                    border: "none",
                    outline: "none",
                  }}
                  variant="link"
                  eventKey="1"
                >
                  {" "}
                  <h5>
                    Why are there different prices for the same product? Is it
                    legal?
                  </h5>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body style={{ marginLeft: "5px" }}>
                  SheIn is an online marketplace platform that enables
                  independent sellers to sell their products to buyers. The
                  prices are solely decided by the sellers, and SheIn does not
                  interfere in the same. There could be a possibility that the
                  same product is sold by different sellers at different prices.
                  SheIn rightfully fulfils all legal compliances of onboarding
                  multiple sellers on its forum as it is a marketplace platform.
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card
              style={{ background: "white", border: "none", outline: "none" }}
            >
              <Card.Header
                style={{ background: "white", border: "none", outline: "none" }}
              >
                <Accordion.Toggle
                  style={{
                    background: "white",
                    border: "none",
                    textAlign: "left",
                    outline: "none",
                  }}
                  variant="link"
                  eventKey="2"
                >
                  {" "}
                  <h5>
                    I saw the product at Rs. 1000 but post clicking on the
                    product, there are multiple prices and the size which I want
                    is being sold for Rs. 1600. Why is there a change in price
                    in the product description page?
                  </h5>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body style={{ marginLeft: "5px" }}>
                  <p>
                    SheIn is an online marketplace, and multiple sellers could
                    be selling a particular style at different prices as may be
                    set by each such seller respectively. The product price on
                    the listing page of the platform, may not always reflect the
                    lowest price for that particular style. This is because the
                    seller whose price is displayed on the list page is selected
                    based on the application of a number of parameters and price
                    is only one such parameter. However, once you land on the
                    product display page on the platform for a specific style,
                    you will have access to the price offered by all sellers on
                    the platform for the relevant style.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card
              style={{ background: "white", border: "none", outline: "none" }}
            >
              <Card.Header
                style={{ background: "white", border: "none", outline: "none" }}
              >
                <Accordion.Toggle
                  style={{
                    background: "white",
                    border: "none",
                    outline: "none",
                  }}
                  variant="link"
                  eventKey="3"
                >
                  {" "}
                  <h5>
                    How will I detect fraudulent emails/calls seeking sensitive
                    personal and confidential information?
                  </h5>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body style={{ marginLeft: "5px" }}>
                  <p>
                    If you receive an e-mail, a call from a person/association
                    claiming to be from SheIn seeking sensitive confidential
                    information like debit/credit card PIN, net-banking or
                    mobile banking password, we request you to never provide
                    such confidential and personal data. We at SheIn or our
                    affiliate logistics partner never ask for such confidential
                    and personal data. If you have already revealed such
                    information, report it immediately to an appropriate law
                    enforcement agency.
                  </p>
                  <p>
                    Here are a couple of baits fraudsters often use to cheat
                    consumers:
                  </p>
                  <p>
                    Congratulations! You have been nominated as a ‘Top SheIn
                    customer’ and are now eligible for a luxury gift item.
                    Please share your proof of address and your debit/credit
                    card details to avail this great offer.
                  </p>
                  <p>
                    Hi, I’m calling from SheIn. We are happy to let you know
                    that you have won an exclusive lucky draw coupon of Rs. 5000
                    on your latest purchase. Please share your credit/debit card
                    number so we can credit the money directly into your bank
                    account.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card
              style={{ background: "white", border: "none", outline: "none" }}
            >
              <Card.Header
                style={{ background: "white", border: "none", outline: "none" }}
              >
                <Accordion.Toggle
                  style={{
                    background: "white",
                    border: "none",
                    outline: "none",
                  }}
                  variant="link"
                  eventKey="4"
                >
                  {" "}
                  <h5>How will I identify a genuine appointment letter?</h5>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
                <Card.Body style={{ marginLeft: "5px" }}>
                  <p>
                    Please beware of the fraudulent individuals/agencies that
                    are enticing job seekers by promising them career
                    opportunities at SheIn in lieu of 1.) recruitment fee 2.)
                    processing fee 3.) security deposit 4.) software or
                    equipment charges 5.) on-boarding charges etc. Please be
                    cautious that, SheIn and its recruitment partners never ask
                    for any fee in exchange for an offer letter or interview
                    calls. All offer related communications are sent from an
                    official SheIn email id only.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card
              style={{ background: "white", border: "none", outline: "none" }}
            >
              <Card.Header
                style={{ background: "white", border: "none", outline: "none" }}
              >
                <Accordion.Toggle
                  style={{
                    background: "white",
                    border: "none",
                    outline: "none",
                  }}
                  variant="link"
                  eventKey="5"
                >
                  {" "}
                  <h5>Why will 'My Cashback' not be available on SheIn?</h5>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="5">
                <Card.Body style={{ marginLeft: "5px" }}>
                  To make your shopping experience easier and simpler, 'My
                  Cashback' will be replaced by PhonePe. PhonePe wallet can be
                  used on SheIn and other PhonePe partners. To use your PhonePe
                  balance, you will have to activate/verify your PhonePe account
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card
              style={{ background: "white", border: "none", outline: "none" }}
            >
              <Card.Header
                style={{ background: "white", border: "none", outline: "none" }}
              >
                <Accordion.Toggle
                  style={{
                    background: "white",
                    border: "none",
                    textAlign: "left",
                    outline: "none",
                  }}
                  variant="link"
                  eventKey="6"
                >
                  {" "}
                  <h5>How do I cancel the order, I have placed?</h5>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="6">
                <Card.Body style={{ marginLeft: "5px" }}>
                  <p>
                    Order can be canceled till the same is out for delivery.
                    Note: This may not be applicable for certain logistics
                    partner. You would see an option to cancel within 'My
                    Orders' section under the main menu of your
                    App/Website/M-site then select the item or order you want to
                    cancel. In case you are unable to cancel the order from'My
                    Orders' section, you can refuse it at the time of delivery
                    and refund will be processed into the source account, if
                    order amount was paid online.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card
              style={{ background: "white", border: "none", outline: "none" }}
            >
              <Card.Header
                style={{ background: "white", border: "none", outline: "none" }}
              >
                <Accordion.Toggle
                  style={{
                    background: "white",
                    border: "none",
                    outline: "none",
                  }}
                  variant="link"
                  eventKey="7"
                >
                  {" "}
                  <h5>How do I create a Return Request?</h5>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="7">
                <Card.Body style={{ marginLeft: "5px" }}>
                  <p>
                    You can create a Return in three simple steps
                    <li>Tap on MyOrders </li>
                    <li>Choose the item to be Returned </li>
                    <li>Enter details requested and create a return request</li>
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card
              style={{ background: "white", border: "none", outline: "none" }}
            >
              <Card.Header
                style={{ background: "white", border: "none", outline: "none" }}
              >
                <Accordion.Toggle
                  style={{
                    background: "white",
                    border: "none",
                    outline: "none",
                  }}
                  variant="link"
                  eventKey="8"
                >
                  {" "}
                  <h5>
                    I have created a Return request. When will the product be
                    picked up?
                  </h5>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="8">
                <Card.Body style={{ marginLeft: "5px" }}>
                  <p>
                    Number of days to pickup a product may vary as per the
                    Logistics team that will be assigned to pickup your product.
                    The product will be picked anywhere between 4 – 7 days.
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card
              style={{ background: "white", border: "none", outline: "none" }}
            >
              <Card.Header
                style={{ background: "white", border: "none", outline: "none" }}
              >
                <Accordion.Toggle
                  style={{
                    background: "white",
                    border: "none",
                    outline: "none",
                  }}
                  variant="link"
                  eventKey="9"
                >
                  {" "}
                  <h5>
                    I have created a Return request. When will I get the refund?
                  </h5>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="9">
                <Card.Body style={{ marginLeft: "5px" }}>
                  <p>
                    Refund will be initiated upon successful pickup as per the
                    Returns Policy. The refund amount is expected to reflect in
                    the customer account within the following timelines:
                  </p>
                  <ol>
                    <li>NEFT - 1 to 3 business days post refund initiation</li>
                    <li>SheIn Credit - Instant</li>
                    <li>
                      Online Refund – 7 to 10 days post refund initiation,
                      depending on your bank partner
                    </li>
                    <li>“PhonePe wallet” – Instant</li>
                  </ol>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card
              style={{ background: "white", border: "none", outline: "none" }}
            >
              <Card.Header
                style={{ background: "white", border: "none", outline: "none" }}
              >
                <Accordion.Toggle
                  style={{
                    background: "white",
                    border: "none",
                    outline: "none",
                  }}
                  variant="link"
                  eventKey="0"
                >
                  <h5>Where should I self-ship the Returns?</h5>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body style={{ marginLeft: "5px" }}>
                  <p>
                    You can send the return to any one of the following returns
                    processing facilities depending on your location. Kindly do
                    not send it to on any other address as the package would not
                    be acceptable then. Please address the return shipments to
                    the seller you purchased the products from, details of which
                    can be found on your order invoice
                  </p>
                  <p>**South</p>
                  <p>
                    InstaKart Services Pvt. Ltd, A/C Seller Name: Survey Numbers
                    231, 232 and 233, Soukya Road, Samethanahalli Village,
                    Anugondanahalli Hobli, Hoskote Taluk, Bangalore - 560067,
                  </p>
                  <p>
                    (Professional courier are not accepted at Bangalore return
                    desk)
                  </p>
                  <p>**North</p>
                  <p>
                    Instakart Pvt. Ltd, Plot No. GP-53, Sec-18, Near Saral
                    Diagnostics, Gurgaon-122001
                  </p>
                  <p>**West</p>
                  <p>
                    InstaKart Services Pvt. Ltd, Avon Eng Compound Makwana Road
                    Marol Naka, near Indiana building, behind Marol metro
                    station , Andheri East Mumbai 400059
                  </p>
                  <p>**East</p>
                  <p>
                    InstaKart Services Pvt. Ltd, 237 N S C Bose Road, , Kolkata
                    - 700047,
                  </p>
                  <p>(DTDC courier are not accepted at Kolkata return desk)</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </>
    );
  }
}
