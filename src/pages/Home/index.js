import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import theme from "utils/theme";
import useIntersection from "hooks/useIntersection";
import IntroCard from "./components/IntroCard";
import PositionCard from "./components/PositionCard";
import PopularNowSection from "./components/PopularNowSection";
import HelpMeSection from "./components/HelpMeSection";
import QuarantineChallengeSection from "./components/QuarantineChallengeSection";
import QuarantineMateSection from "./components/QuarantineMateSection";
import DoTogetherSection from "./components/DoTogetherSection";
import AdCard from "reusables/AdCard";
import FloatWriteButton from "reusables/Buttons/FloatWriteButton";
import TrendingNow from "./components/TrendingNow";

const Home = () => {
  const introRef = useRef(null);
  const isIntroShowing = useIntersection(introRef, 1);
  let history = useHistory();

  return (
    <div>
      <IntroCard
        ref={introRef}
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
      <div>
        <PositionCard />
        <PopularNowSection />
        <HelpMeSection />
        <QuarantineChallengeSection />
        <QuarantineMateSection />
        <DoTogetherSection />
        <AdCard
          title="6 things travellers to Korea need to know"
          backgroundColor={theme.rawColors.blue1}
          image="https://user-images.githubusercontent.com/3839771/87845872-646be200-c906-11ea-96a4-f81128bd944d.png"
        />
        <TrendingNow />
      </div>
      <FloatWriteButton
        show={!isIntroShowing}
        onClick={() => history.push("/post")}
      />
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
