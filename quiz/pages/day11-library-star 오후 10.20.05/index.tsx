import { Rate } from "antd";
import { useState } from "react";
import ReactPlayer from "react-player";
import { DatePicker, Space } from "antd";

export default function StarPage() {
  const [value, setValue] = useState(5);
  const [date, setDate] = useState();
  const [month, setMonth] = useState();

  const handleChange = (value) => {
    setValue(value);
    alert(`${value}점`);
  };
  function monthChange(date, dateString) {
    setMonth(dateString);
  }

  function onChange(date, dateString) {
    setDate(dateString);
    console.log(dateString);
  }
  return (
    <div>
      <br />
      <br />
      <br />
      <Rate onChange={handleChange} value={value} />
      <div>{value}점</div>
      <br />
      <br />
      <br />
      <DatePicker onChange={onChange} />
      <br />
      <div>{date}</div>
      <br />
      <DatePicker onChange={monthChange} picker="month" />
      <br />
      {month}
      <br />
      <br />
      <br />

      <ReactPlayer
        url="https://www.youtube.com/watch?v=V-lqOdla2cA&t=1262s"
        width={800}
        height={600}
      />
    </div>
  );
}
