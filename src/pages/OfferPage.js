import { useParams } from "react-router-dom";
import { offers } from "../components/Layout/Offers/Offers Page Content/OffersContent";
import SingleOfferDetails from "../components/Layout/Offers/Single Offer Details/SingleOfferDetails";

const OfferPage = () => {
  const { offerId } = useParams();
  const currentOffer = offers.find((offer) => offer.id === parseInt(offerId));

  return <SingleOfferDetails offer={currentOffer} />;
};

export default OfferPage;
