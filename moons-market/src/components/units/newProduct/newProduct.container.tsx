import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import NewProductUI from "./newProduct.presenter";
import { IMutation, IMutationCreateUseditemArgs, IMutationUpdateUseditemArgs } from "../../../commons/types/generated/types";
import { useMutation } from "@apollo/client";
import { CREATE_USEDITEM, UPDATE_USEDITEM } from "./newProduct.query";
import { useRouter } from "next/router";
import { async } from "@firebase/util";
import dynamic from "next/dynamic";


const schema = yup.object({
    name: yup.string().required("상품명은 필수 입력 사항입니다."),
    remarks: yup.string().required("한줄요약은 필수 입력 사항입니다."),
    contents: yup.string().required("상세내용은 필수 입력 사항입니다."),
    price: yup.number().required("가격은 필수 입력 사항입니다."),
  });
  
  export interface ImyUpdateUseditemInput {
    name?: string;
    remarks?: string;
    price?: number;
    contents?:string;
    images?: string[];
  }
  export default function NewProductContainer(props) {
    const { register, handleSubmit, formState,setValue,trigger } = useForm({
      resolver: !props.isEdit && yupResolver(schema),
      mode: "onChange",
    });
    const [isActive, setIsActive] = useState(false);
    const [newId, setNewId] = useState<any>("");
    const [fileUrls, setFileUrls] = useState(["", "", ""]);
  
    const [okModalOpen, setOkModalOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [noEditModal, setNoEditModal] = useState(false);
    
    const [createUseditem] = useMutation<
      Pick<IMutation, "createUseditem">,
      IMutationCreateUseditemArgs
    >(CREATE_USEDITEM);

    const [updateUseditem] = useMutation<
      Pick<IMutation,"updateUseditem" >,
      IMutationUpdateUseditemArgs
    >(UPDATE_USEDITEM);

    const router = useRouter();
    const onOkModalOpen = () => {
      setOkModalOpen((prev) => !prev);
    };
    const EditModalOpen = () => {
      setNoEditModal((prev) => !prev);
    };
  
    const onModalOpen = () => {
      setModalOpen((prev) => !prev);
    };
  
    const onClickPostNumber = () => {
      onModalOpen();
    };

  
    const onChangeFileUrls = (fileUrl: string, index: number) => {
      const newFileUrls = [...fileUrls];
      newFileUrls[index] = fileUrl;
      setFileUrls(newFileUrls);
    };
    const onChangeContents = (value: string) => {
      console.log(value);
  
      // register로 등록하지 않고 강제로 값을 넣어주는 기능!
      setValue("contents", value === "<p><br></p>" ? "" : value);
  
      // onChange 됐다고 react-hook-form에 알려주는 기능
      trigger("contents");
    };
    interface IFormValues {
        name?: string;
        remarks?: string;
        contents?: string;
        price?: number;
      }
  
    const PutOk = async (data: IFormValues) => {
      console.log("엘렐레레레" + data.name);
      try {
        const result = await createUseditem({
          variables: {
            createUseditemInput: {
              name: data.name,
              remarks: data.remarks,
              contents: data.contents,
              price: data.price,
              images: fileUrls,
              tags: ["#아하"],
            },
          },
        });
        console.log(result.data?.createUseditem._id);
        setNewId(result.data?.createUseditem._id);
        onOkModalOpen();
      } catch (error: any) {
        console.log(error.message);
      }
    };

    const EditOk =async(editD)=>{
      const currentFiles = JSON.stringify(fileUrls);
      const defaultFiles = JSON.stringify(props.data.fetchUseditem.images);
      const isChangedFiles = currentFiles !== defaultFiles;

     const myUpdateUseditemInput : ImyUpdateUseditemInput= {};
     const myVariables = {
      useditemId: router.query.productId,
      updateUseditemInput: myUpdateUseditemInput,
    };

     if(editD.name){myUpdateUseditemInput.name =editD.name}
     if(editD.price){myUpdateUseditemInput.name =editD.price}
     if(editD.contents){myUpdateUseditemInput.name =editD.contents}
     if(editD.remarks){myUpdateUseditemInput.name =editD.remarks}
     if(isChangedFiles){myUpdateUseditemInput.images =fileUrls}
     try {
      await updateUseditem({
        variables: myVariables,
      });

      onOkModalOpen();
    } catch (error) {
      console.log(error);
      alert(error);
    }
    }
    const Exit = () => {
      router.push(`/usedItem/${newId}`);
    };
    useEffect(() => {
      if (props.data?.fetchUseditem.images?.length) {
        setFileUrls([...props.data?.fetchUseditem.images]);
      }
    }, [props.data]);
  
    return <NewProductUI
    Exit={Exit}
    PutOk={PutOk}
    onChangeFileUrls={onChangeFileUrls}
    register={register} 
    handleSubmit={ handleSubmit} 
    formState={formState}
    onOkModalOpen={onOkModalOpen}
    EditModalOpen={EditModalOpen}
    onModalOpen={onModalOpen}
    onClickPostNumber={onClickPostNumber}
    isEdit={props.isEdit}
    fileUrls={fileUrls}
    okModalOpen={okModalOpen}
    modalOpen={modalOpen}
    noEditModal={noEditModal}
    data={props.data}
    EditOk={EditOk}
    onChangeContents={onChangeContents}
    
    />
}