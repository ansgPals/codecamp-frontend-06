* : 필수 인자
# : 선택 인자

// HeaderTitle
: 화면의 가장 상단 타이틀에 사용합니다.

입력 인자
    * title : (string) 타이틀명 (가장 큰 글씨로 보여지는 검정색 텍스트)
    # menu : (string) 메뉴명 (최상단에 보여지는 보라색 텍스트)
    # prev : (boolean) 이전 버튼이 필요할 경우 입력
    # label : (string) Q&A 상세 화면에서 상태를 노출할 경우 입력
    # marginBottom : (number) 하단 margin 변경 시 사용 (default: 81px)

사용 예시
      // Q&A 작성
      <HeaderTitle title={"모든 궁금증, 코캠러와 공유하세요"} />

      // Q&A 상세
      <HeaderTitle
        menu="개발 지식이 궁금해요."
        title="이럴때는 어떻게 해야하나요? 궁금 궁금궁금궁금궁금궁금해요!"
        prev
        label="해결"
        marginBottom={77}
      />