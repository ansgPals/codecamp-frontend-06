import { useForm } from "react-hook-form";

interface IFormValues {
  writer?: string;
  title?: string;
  contents?: string;
}
export default function ReactHookFormPage() {
  const { register, handleSubmit, formState } = useForm();

  const onClickSubmit = (data: IFormValues) => {
    console.log(data);
    try {
    } catch (error) {
      senty.send(error);
      // 위에처럼 하면(결제같은??) 에러를 센트리에서 수집해서 나한테 알림이 오게 할 수 있다!!
    }
  };
  console.log("리랜더링체크");
  return (
    <>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        작성자: <input type="text" {...register("writer")} />
        <br />
        제목: <input type="text" {...register("title")} />
        <br />
        내용: <input type="text" {...register("contents")} />
        <br />
        <button disabled={formState.isSubmitting}>등록하기</button>
        {/* // formState.isSubmitting 한번 리퀘스트 날라가서 리폰스 올때 까지 안정성을 주는 기능
// 리스폰스오면 자동으로 펄스로 바뀜! */}
      </form>
    </>
  );
}
