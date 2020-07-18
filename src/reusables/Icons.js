import React from "react";
import styled from "@emotion/styled";

import chevronRightIcon from "assets/icons/chevron-right.svg";
import mapIcon from "assets/icons/map.svg";

export const MapIcon = () => <Icon src={mapIcon} alt="Map" />;
export const ChevronRightIcon = () => <Icon src={chevronRightIcon} alt="Map" />;

const Icon = styled.img`
  width: 24px;
  height: 100%;
`;