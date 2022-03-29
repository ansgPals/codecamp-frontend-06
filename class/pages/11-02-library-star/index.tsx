import { Rate } from "antd";
import { useState } from "react";

export default function LibraryStarPage() {
  const [value, setValue] = useState(2);

  const handleChange = (value) => {
    setValue(value);
  };

  return (
    <>
      <Rate onChange={handleChange} value={value} />
    </>
  );
  // 안트디자인 css 를 앱.js에 임폴트해씀
}
