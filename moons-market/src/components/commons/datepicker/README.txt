* : 필수 인자
# : 선택 인자

// DatePicker
: 데이트피커를 이용해 시작 날짜와 종료 날짜를 입력받습니다.

입력 인자
    * startDate : 시작 날짜 (string)
                  초기값으로 현재 날짜를 string 으로 변환하여 전달해주세요.
                  (libraries/utils.ts 의 getDate 함수를 이용하면 Date 타입이 '2022.05.10' 형식으로 변환됩니다.)

    * endDate : 종료 날짜 (string)
                startDate와 마찬가지로 초기값으로 현재 날짜를 string 으로 변환하여 전달해주세요.

    * setStartDate : 시작 날짜를 수정하는 함수

    * setEndDate : 종료 날짜를 수정하는 함수

    # noLabel : '일자' 텍스트를 미포함할 경우 추가해주세요.

사용 예시

import { useState } from "react";
import { getDate, getStartDate } from "../../src/commons/libraries/utils";
import CustomDatePicker from "../../src/components/commons/datepicker/Datepicker";

export default function TestPage() {
  const [startDate, setStartDate] = useState<string>(getStartDate());
  const [endDate, setEndDate] = useState<string>(getDate(new Date()));

  return (
    <>
      <CustomDatePicker
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        noLabel
      />
    </>
  );
}
