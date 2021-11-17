import React from "react";
import tw from "tailwind-styled-components";
import Link from "next/link";

const Search = () => {
  return (
    <Wrapper>
      <Link href="/">
        <ButtonContainer>
          <BackButton
            src={"https://img.icons8.com/ios-filled/50/000000/left.png"}
          />
        </ButtonContainer>
      </Link>

      <InputContainer>
        <Icons>
          <Circle
            src={
              "https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png"
            }
          />
          <Line
            src={"https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"}
          />
          <Square
            src={" https://img.icons8.com/windows/50/000000/square-full.png"}
          />
        </Icons>

        <InputForms>
          <Input placeholder={"Enter Pickup location"} />
          <Input placeholder={"Where to?"} />
        </InputForms>

        <Plus src={"https://img.icons8.com/ios/50/000000/plus-math.png"} />
      </InputContainer>

      <SavedPlaces>
        <Star
          src={"https://img.icons8.com/ios-filled/50/ffffff/star--v1.png"}
        />
        Saved Places
      </SavedPlaces>
      <ConfirmContainer>
        <ConfirmButton>Confirm Location</ConfirmButton>
      </ConfirmContainer>
    </Wrapper>
  );
};

export default Search;

const Wrapper = tw.div`
bg-gray-200 h-screen
`;

const ButtonContainer = tw.div`
bg-white px-4
`;

const BackButton = tw.img`
h-12
`;

const InputContainer = tw.div`
bg-white flex items-center px-4
`;

const Icons = tw.div`
w-10 flex flex-col mr-2 mb-4 items-center
`;

const Circle = tw.img`
h-2.5
`;

const Line = tw.img`
h-10
`;

const Square = tw.img`
h-3
`;

const InputForms = tw.div`
flex flex-col flex-1
`;

const Input = tw.input`
h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none
`;

const Plus = tw.img`
w-10 h-10 bg-gray-200 rounded-full ml-3
`;

const SavedPlaces = tw.div`
flex items-center bg-white px-4 mt-2 py-2
`;

const Star = tw.img`
bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`;

const ConfirmContainer = tw.div`
flex
`;

const ConfirmButton = tw.button`
bg-black text-white my-4 h-10 mx-2 rounded-2 flex-1
`;
