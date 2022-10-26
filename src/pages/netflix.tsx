import { NextPage } from "next";
import Header from "./Header";

const Netflix: NextPage = () => {
  return (
    <div className="">
      <Header />
      <div></div>
      <img
        className="w-full h-full"
        alt="img"
        src="https://occ-0-3666-2774.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZEqhBYvsYU_03eiE9f3f0O9hMnpDnXrqsErUR0KegSASl8vyCmDBBAfBLcGwnllQMDpbSFuH7grIwacIwy9a2hyo5neV75fZblH.webp?r=47b"
      />
    </div>
  );
};

export default Netflix;
