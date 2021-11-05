import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";
import Map from './Components/Map'

export default function Home() {
  return (
    <Wrapper>
      <Map/>
      <ActionItems>Start</ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col bg-red-300 h-screen
`;

const ActionItems = tw.div`
  flex-1
`;
