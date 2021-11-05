import React from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";
import { useEffect } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWJoaXNoZWtrdXR0aWtrb2wiLCJhIjoiY2t2bTV1ZGtoOWM4bTJ1czd5bmk3ZnVwYyJ9.b72hhU4wYQJ0rnHzg7k9Mw";

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [75.368, 12.0419],
      zoom: 10,
    });
  }, []);

  return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
    flex-1
`;
