import { useQuery } from "@apollo/client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenApiWithUseEffectPage() {
  const [dogImg, setDogImg] = useState("");

  useEffect(() => {
    const aaa = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogImg(result.data.message);
    };
    aaa();
  }, []);

  return (
    <div>
      <div>OPEN API 연습!!</div>
      <img src={dogImg} />
    </div>
  );
}
