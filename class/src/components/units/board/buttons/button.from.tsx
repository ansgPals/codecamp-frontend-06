const forms = {
  submit: {
    backgroundColor: "#6400ff",
    border: "none",
  },
  bigSubmit: {
    width: "280px",
    height: "44px",
    lineHeight: "44px",
    backgroundColor: "#6400ff",
    border: "none",
    fontSize: "15px",
    color: "white",
    fontWeight: "700",
  },
  smallSubmit: {
    height: "21px",
    lineHeight: "21px",
    backgroundColor: "#6400ff",
    border: "none",
    fontSize: "12px",
    color: "white",
    fontWeight: "700",
  },
  delete: {
    backgroundColor: "#ff0000",
    border: "none",
  },

  list: {
    border: "1px solid black",
    backgroundColor: "white",
    color: "black",
  },
  search: {
    backgroundColor: "#6400ff",
    border: "none",
    fontSize: "14px",
    color: "white",
    fontWeight: "400",
    width: "45px",
  },
};

export const ButtonForm: {
  [key: string]: {
    [key: string]: string;
  };
} = {
  저장하기: forms.submit,
  삭제하기: forms.delete,
  등록하기: forms.bigSubmit,
  보기: forms.list,
  삭제: forms.list,
  "+ 강좌등록": forms.submit,
  환불하기: forms.delete,
  파일선택: forms.submit,
  "자료 등록하기": forms.smallSubmit,
  검색: forms.search,
};
