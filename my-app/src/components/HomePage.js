import React from "react";
import SignatureShirts from "./SignatureShirts";
import Signature from "./Signature";
import VisualContainer from "./VIsualContainer";
import NewArrivals from "./NewArrivals";

const HomePage = () => {
  return (
    <div>
    <VisualContainer/>
    <Signature/>
    <NewArrivals/>
    <SignatureShirts/>
    </div>
  );
};
export default HomePage;
