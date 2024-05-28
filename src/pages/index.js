// index.js = /
// 그 자체가 경로가 되는 페이지 소문자 시작
// 화면의 한 부분에만 적용되는 컴포넌트에 대한 페이지라면 대문자 시작
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  /* a태그 : href="#" >> 페이지 전체 렌더링 --> e.prventDefault 
     Link태그 / useRouter >> 페이지 이동
     >> 전체 페이지를 로드하지 않고 부분 업데이트
  */
  const router = useRouter();
  console.log(router);
  return (
    <>
      <ul>
        <p> lecture 메뉴 </p>
        <li>
          <Link href="/lecture/apiSend">API 통신 페이지 이동</Link>
          {/* <Link
            href={{
              pathname: "/lecture/routerTest",
              query: { param: "파람1" },
            }}
          >
            API 통신 페이지 이동
          </Link> */}
          {/* <a href="/lecture/apiSend">api통신</a> */}
        </li>
        {/* <li
          onClick={() => {
            // router.push("/lecture/routerTest"); 직접 경로를 지정하는 방법
            router.push({
              pathname: "/lecture/routerTest",
              query: { param: "파람2" },
            });
          }}
        >
          <span>API 통신 페이지 이동2</span>
        </li> */}

        <li>
          <Link href="/lecture/dbConnection">dbConnection 페이지 이동</Link>
        </li>
      </ul>
      <p> misson 메뉴 </p>
      <ul>
        <li
          onClick={() => {
            router.push({
              pathname: "/mission/apiSend",
            });
          }}
        >
          <span>API 통신 미션</span>
        </li>
      </ul>
    </>
  );
}
