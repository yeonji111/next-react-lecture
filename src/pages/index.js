// index.js = /
// 그 자체가 경로가 되는 페이지 소문자 시작
// 화면의 한 부분에만 적용되는 컴포넌트에 대한 페이지라면 대문자 시작

export default function Home() {
  return (
    <>
      <ul>
        <li>
          <a href="/lecture/apiSend">api통신</a>
        </li>
      </ul>
    </>
  );
}
