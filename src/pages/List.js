import React from "react";
import PropTypes from "prop-types";

const List = ({ name }) => {
  return <div>{name}</div>;
};

List.propTypes = {
  name: PropTypes.string,
};

List.defaultProps = {
  name: "no name",
};

export default List;
