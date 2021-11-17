import tw from "tailwind-styled-components";
import Map from "./Components/Map";
import Link from 'next/link'

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
        <ActionButtons>
          <Link href="/Search">
          <ActionButton>
            <ActionButtonImage src={"https://i.ibb.co/cyvcpfF/uberx.png"} />
            Ride
          </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src={"https://i.ibb.co/n776JLm/bike.png"} />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage
              src={"https://i.ibb.co/5RjchBg/uberschedule.png"}
            />
            Reserve
          </ActionButton>
        </ActionButtons>
        <InputButtons>Where to</InputButtons>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col h-screen
`;

const ActionItems = tw.div`
  flex-1 p-4
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
  mr-4 w-20 text-small
`;

const UserImage = tw.img`
  h-12 w-12 rounded-full border border-gray-200 p-px
`;

const ActionButtons = tw.div`
  flex 
`;
const ActionButton = tw.button`
  bg-gray-200 flex-1 m-1 h-32 items-center flex flex-col justify-center rounded-lg transform hover:scale-105 transition
  text-xl
`;

const ActionButtonImage = tw.img`
h-3/5
`;

const InputButtons = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`;
