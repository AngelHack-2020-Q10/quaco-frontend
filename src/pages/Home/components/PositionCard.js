import React, { useState, useEffect } from "react";
import { MapIcon } from "reusables/Icons";
import Divider from "reusables/Divider";
import MapBottomSheet from "./MapBottomSheet";
import styled from "@emotion/styled";
import { css } from "emotion";
import useGeolocation from "react-hook-geolocation";

export default () => {
  const [regionValue, setRegionValue] = useState(null);
  const [latlng, setLatLng] = useState({ lat: null, lng: null });
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const geolocation = useGeolocation();

  useEffect(() => {
    const getRegion = async (lat, lng) => {
      const region = await getGeo(lat, lng);
      setRegionValue(region);
    };

    if (geolocation.latitude != null && regionValue === null) {
      setRegionValue("");
      setLatLng({ lat: geolocation.latitude, lng: geolocation.longitude });
      getRegion(geolocation.latitude, geolocation.longitude);
    }
  }, [geolocation, regionValue]);

  return (
    <Container>
      <div
        className={css`
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        `}
      >
        <h2>
          You see stories in
          <br />
          {regionValue} (+1km)
        </h2>
        <div onClick={() => setShowBottomSheet(prev => !prev)}>
          <MapIcon />
        </div>
      </div>
      <Divider color="white" />
      <MapBottomSheet
        show={showBottomSheet}
        latlng={latlng}
        onClickSave={() => setShowBottomSheet(false)}
      />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 40px;
`;

const getGeo = async (lat, lng) => {
  return await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyDrx5BO-OfUWYDuqmhqFlXCKgMpaRLpbYI`,
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log({ myJson }, myJson.plus_code);
      if (myJson.plus_code === undefined) {
        return "";
      }
      const regionText = myJson.plus_code.compound_code;
      return regionText
        .split(" ")
        .splice(2)
        .join(" ");
    });
};
