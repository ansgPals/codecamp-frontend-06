interface IParentProps {
  count: number;
}

export default function FunctionalComponentChildPage(aaa: IParentProps) {
  return (
    <>
      <div>나의 카운트는 {aaa.count}</div>
    </>
  );
}
