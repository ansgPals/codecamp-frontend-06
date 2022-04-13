export default function LoginPage() {
  const onClickButton = (e) => () => {
    console.log(e);
  };

  return (
    <>
      <div>
        <br />
        <button onClick={onClickButton(123)}>버튼누르기!</button>
      </div>
    </>
  );
}
