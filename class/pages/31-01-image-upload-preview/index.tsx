import { ChangeEvent, useState } from "react";

export default function ImageUploadPreviewPage() {
  const [imgUrl, setImgUrl] = useState("");

  const onChengfile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      alert("파일이 없습니다.");
      return;
    }
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    // Blob 은 바이러니 라이오브젝트
    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        console.log(data.target?.result);
        setImgUrl(data.target?.result);
      }
    };
  };
  return (
    <div>
      <input type="file" onChange={onChengfile} />
      <img src={imgUrl} />
    </div>
  );
}
