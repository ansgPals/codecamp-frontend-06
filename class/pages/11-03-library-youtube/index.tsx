import ReactPlayer from "react-player";

export default function LibraryYoutubePage() {
  return (
    <>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        width={500}
        height={500}
      />
    </>
  );
  // 리액트플레이어는 사이즈를 옆에서 작동해줘야함.
}
