import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";
import Map from "./Components/Map";

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg" />
          <Profile>
            <Name>Abhishek P</Name>
            <UserImage src="https://avatars.githubusercontent.com/u/75170385?s=400&u=cde40c21f41797dee49ec39acf0e21b259ecee89&v=4" />
          </Profile>
        </Header>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col h-screen
`;

const ActionItems = tw.div`
  flex-1
`;

const Header = tw.div`
  flex justify-between items-center
`;

const UberLogo = tw.img`
  h-28
`;

const Profile = tw.div`
  flex items-center
`;

const Name = tw.div`
  mr-4 w-20
`;

const UserImage = tw.img`
  h-12 w-12 rounded-full border border-gray-200 p-px
`;
