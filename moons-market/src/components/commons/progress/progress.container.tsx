import styled from "@emotion/styled";

const ProgressTop = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  width: 22.5333rem;
`;
const TotalBar = styled.div`
  width: 22.5333rem;
  height: 0.6rem;
  background: #f0f0f0;
  border-radius: 0.2666rem;
`;
interface IProgress {
  progress: number;
}
const ProgressBar = styled.div`
  width: ${(props: IProgress) => props.progress}%;
  height: 0.6rem;
  background: linear-gradient(90deg, #3a80ee -3.21%, #6400ff 78.6%);
  border-radius: 0.2666rem;
`;
const Iqon = styled.div`
  width: 2.5333rem;
  height: 2.5333rem;
  margin-left: ${(props: IProgress) =>
    props.progress > 94 ? 89 : props.progress - 5}%;

  display: flex;
  background-image: url("/progressbar/run.png");
  background-size: cover;
`;

export default function ProgressComponent({ progress }: { progress: number }) {
  return (
    <>
      <ProgressTop>
        <Iqon progress={progress}></Iqon>
      </ProgressTop>
      <TotalBar>
        <ProgressBar progress={progress}></ProgressBar>
      </TotalBar>
    </>
  );
}
