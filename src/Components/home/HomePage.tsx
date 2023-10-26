import React, { useState } from "react";
import Offer from "./Offer/Offer";
import { UserForm } from "./UserForm/UserForm";
import Layout from "../shared/Layout/Layout";

function HomePage() {
  const [showOffer, setShowOffer] = useState(true);
  const toggleForm = () => setShowOffer(!showOffer);

  return (
    <Layout>
      <Offer isVisible={showOffer} onOfferClick={toggleForm} />
      <UserForm isVisible={!showOffer} onClose={toggleForm}></UserForm>
    </Layout>
  );
}

export default HomePage;
