console.log("타입스크립트를 실행했어요!!");

import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";

import { ApolloServer, gql } from "apollo-server";
// 1 타입

const typeDefs = gql`
  input CreateBoardInput {
    writer: String
    title: String
    contents: String
  }
  #  인풋데이터는 타입이 아니라 인풋으로 해야함

  type Board {
    number: Int

    writer: String
    title: String
    contents: String
  }
  # 타입스크립트 타입 number 는 그래프큐엘에서는 Int

  type Query {
    fetchBoards: [Board]
  }
  type Mutation {
    # createBoard(writer: String, title: String, contents: String): String --example 연습용
    createBoard(createBoardInput: CreateBoardInput!): String # 실제사용(backend06)
  }
`;
// 2 API
const resolvers = {
  Query: {
    fetchBoards: async () => {
      // 데이터베이스에 접속해서 게시물 가져오기
      const result = await Board.find();

      return result;
    },
  },
  Mutation: {
    // 데이터베이스에 접속해서 게시물 등록하기
    createBoard: async (_: any, args: any) => {
      // parents ,데이터는 args로 들어옴 ,context 기타요약정보(헤더) ,info 정보

      await Board.insert({
        ...args.createBoardInput,
        // writer: args.createBoardInput.writer,
        // title: args.createBoardInput.title,
        // contents: args.createBoardInput.contents,
      });
      // Board.update({writer : "철수"},{title:"제목"})===>수정
      // Board.update({writer: "철수"},{deletedAt: new Date()}) ==>소프트 딜리트
      // Board.delete({writer: "철수"}) ===>완전삭제
      return "게시물을 등록했습니다.";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true,
  // 콜스를 여기서 켰다컸다 해줄 수 있음!
  // cors : {
  //   origin: 'http://naver.com'
  //   // 네이버에서만 받을 수있게 했을때
  // }
});

const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.124.189",
  port: 5021,
  username: "postgres",
  password: "postgres2021",
  database: "postgres",
  entities: [Board],
  synchronize: true,
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log("연결성공!");
    // 백엔드 API오픈(리슨)(24시간동안 접속가능하게끔 대기상태로 만들어주기)
    server.listen(4000).then(({ url }) => {
      // 포트번호 4000
      console.log(`🚀 Server ready at ${url}`);
    });
  })
  .catch(() => {
    console.log("연결실패!");
  });
