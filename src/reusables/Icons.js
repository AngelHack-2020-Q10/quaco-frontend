import React from "react";
import styled from "@emotion/styled";

import chevronRightIcon from "assets/icons/chevron-right.svg";
import mapIcon from "assets/icons/map.svg";
import pencilIcon from "assets/icons/edit.svg";
import chevronLeftIcon from "assets/icons/chevron-left.svg";
import chevronUpIcon from "assets/icons/chevron-up.svg";
import chevronBottomIcon from "assets/icons/chevron-bottom.svg";
import closeIcon from "assets/icons/close.svg";
import searchIcon from "assets/icons/search.svg";
import googleIcon from "assets/icons/google.svg";
import locationIcon from "assets/icons/current-location.svg";

export const MapIcon = () => <Icon src={mapIcon} alt="Map" />;
export const ChevronRightIcon = () => <Icon src={chevronRightIcon} alt="Map" />;
export const PencilIcon = () => <Icon src={pencilIcon} alt="Pencil" />;
export const SearchIcon = () => <Icon src={searchIcon} alt="Search" />;
export const GoogleIcon = ({ className }) => (
  <Icon className={className} src={googleIcon} alt="Google logo" />
);
export const ChevronLeftIcon = () => (
  <Icon src={chevronLeftIcon} alt="Pencil" />
);
export const LocationIcon = () => <Icon src={locationIcon} alt="location" />;
export const UpOrDownIcon = ({ isUp }) => (
  <Icon src={isUp ? chevronUpIcon : chevronBottomIcon} alt="Chevron" />
);
export const CloseIcon = () => <Icon src={closeIcon} alt="Pencil" />;

const Icon = styled.img`
  width: 24px;
  height: 100%;
`;
