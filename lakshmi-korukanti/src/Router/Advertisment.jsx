import React from "react";
import styles from "../Components/index.module.css";
import Timer from "../Router/Timer";
export default function Advertisment() {
  return (
    <div className={styles.Advertisment}>
      <div style={{ flex: "1px" }}>
        <div>
          <h6>
            Flat free Shipping on above ₹2000, Coupon Code:free2000
            <Timer />
          </h6>
        </div>
        <div></div>
      </div>
    </div>
  );
}
