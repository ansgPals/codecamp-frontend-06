import styled from "@emotion/styled";
import { MenuItem, Select } from "@material-ui/core";
import SelectInput from "@material-ui/core/Select/SelectInput";
import { Button, Modal } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

declare const window: typeof globalThis & {
  IMP: any;
};

const MyButton = styled(Button)`
  width: 300px;
  height: 50px;
  margin-top: 30px;
  border: 3px yellowgreen solid;
`;

export default function LoadingPage() {
  const router = useRouter();
  const [mount, setMount] = useState(0);
  const onChangeMoney = (event) => {
    console.log(event.target.value);
    setMount(event.target.value);
  };
  const requestPay = () => {
    if (mount === 0) {
      Modal.error({ content: "충전하실 금액을 선택해주세요!" });
      return;
    }
    var IMP = window.IMP;
    IMP.init("imp49910675");

    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        name: "노르웨이 회전 의자",
        amount: mount,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/quiz06/payment/loading",
      },
      (rsp) => {
        // callback
        if (rsp.success) {
          Modal.info({ content: `${mount}원이 충전되었습니다!` });
          router.push(`/quiz06/payment/complete`);
        } else {
          // 결제 실패 시 로직,
          Modal.error({ content: "결제실패" });
        }
      }
    );
  };
  return (
    <div>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <div>
        <Select
          style={{ width: "300px", height: "50px", backgroundColor: "white" }}
          placeholder="충전금액"
          onChange={onChangeMoney}
        >
          <MenuItem style={{ fontSize: "15px" }} value={500}>
            500원
          </MenuItem>
          <MenuItem style={{ fontSize: "15px" }} value={1000}>
            1000원
          </MenuItem>
          <MenuItem style={{ fontSize: "15px" }} value={2000}>
            2000원
          </MenuItem>
          <MenuItem style={{ fontSize: "15px" }} value={5000}>
            5000원
          </MenuItem>
        </Select>
      </div>
      <MyButton onClick={requestPay}>충전하기</MyButton>
    </div>
  );
}
