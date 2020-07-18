import React from "react";
import PropTypes from "prop-types";

import { useAppContext } from "hooks/useAppState";
import IntroCard from "./components/IntroCard";
import PositionCard from "./components/PositionCard";
import PopularNowSection from "./components/PopularNowSection";

const Home = ({ name }) => {
  const { state, actions } = useAppContext();
  console.log({ state, actions });

  return (
    <div>
      <IntroCard
        top="Today’s Challenge"
        backgroundImage="https://user-images.githubusercontent.com/3839771/87841999-43929500-c8e4-11ea-8968-a2b1f2c24102.png"
        title={
          <>
            What’s your favorite
            <br />
            Quarantine cuisine?
          </>
        }
        buttonText="Post my story"
      />
      <PositionCard />
      <PopularNowSection />
      {name}
      <div>
        <span>{state.count}</span>
        <button onClick={actions.increment}> + </button>
        <button onClick={actions.decrement}> - </button>
      </div>
    </div>
  );
};

Home.propTypes = {
  name: PropTypes.string,
};

Home.defaultProps = {
  name: "no name",
};

export default Home;
