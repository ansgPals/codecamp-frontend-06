import { useState, useEffect } from "react";
import axios from "axios";

export default function QuizPage() {
  const [APIimg, setAPIimg] = useState("");

  useEffect(() => {
    const LoadAPI = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setAPIimg(result.data.message);
    };
    LoadAPI();
  }, []);
  return (
    <>
      <div>꺄르르르르르</div>
      <img src={APIimg} />
    </>
  );
}
