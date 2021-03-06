import { useRouter } from "next/router";
import Head from "next/head";
import { gql, request } from "graphql-request";

export default function BardDetailPage(props) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <meta property="og:title" content={props.myboardData?.title} />
        <meta property="og:description" content={props.myboardData?.contents} />
        <meta property="og:image" content={props.myboardData?.images[0]} />
      </Head>

      <div>
        안녕하세요 게시글 상세 페이지 입니다.게시글 아이디는
        {router.query.boardId}
        입니다.
      </div>
    </div>
  );
}

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      title
      contents
      images
    }
  }
`;

// 이페이지는 서버사이드 랜더링 할랭
export const getServerSideProps = async (context) => {
  // 데이터 요청 할 것! 아폴로셋팅 안된상태니까 아폴로셋팅 리퀘스트!
  // const {data}=useQuery(FETCH_BOARD)
  // 이건안됨
  const result = await request(
    "https://backend06.codebootcamp.co.kr/graphql",
    FETCH_BOARD,
    { boardId: context.query.boardId }
  );
  return {
    props: {
      myboardData: {
        title: result.fetchBoard.title,
        contents: result.fetchBoard.contents,
        images: result.fetchBoard.images,
      },
    },
  };
};
