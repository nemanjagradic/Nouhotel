import Wrapper from "../components/Layout/Wrapper/Wrapper";
import Memories from "../components/Layout/Memories/Memories";
import Discover from "../components/Layout/Discover/Discover";
import Featured from "../components/Layout/Featured/Featured";
import ExclusiveOffers from "../components/Layout/Offers/Exclusive Offers/ExclusiveOffers";

function HomePage() {
  return (
    <>
      <Wrapper />
      <Memories />
      <Discover />
      <Featured />
      <ExclusiveOffers />
    </>
  );
}

export default HomePage;
