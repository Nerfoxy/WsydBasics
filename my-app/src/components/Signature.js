import React from "react";
import "../styles/style.css"
const Signature = () => {
  return (
    <div className="signature-container">
      <div className="signature-title">
        <h1>Providing you with high-quality, non-branded, blank garments.</h1>
      </div>
      <div className="signature-paragraph">
        <p>Providing you with high-quality, non-branded, blank garments.</p>
      </div>
      <div className="signature-buttons">
        <button className="signature-button">SIGNATURE T-SHIRT COLLECTION</button>
        <button className="signature-button-inverse">SIGNATURE HOODIE COLLECTION</button>
      </div>
    </div>
  );
};
export default Signature;
