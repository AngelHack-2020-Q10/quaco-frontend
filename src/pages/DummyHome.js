import React from "react";
import PropTypes from "prop-types";

import { useAppContext } from "hooks/useAppState";

const Home = ({ name }) => {
  const { state, actions } = useAppContext();
  console.log({ state, actions });

  return (
    <div>
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
