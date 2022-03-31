import { useState } from "react";
import DaumPostcode from "react-daum-postcode";

export default function StarPage() {
  const handleComplete = (data) => {
    console.log(data);
  };

  return (
    <div>
      <DaumPostcode onComplete={handleComplete} />
    </div>
  );
}
