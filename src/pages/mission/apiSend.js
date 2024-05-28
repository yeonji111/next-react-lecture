import axios from "axios";
import { useEffect, useState } from "react";

export default function ApiSend() {
  // res.js api 호출

  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);

  /* api 데이터 가져오기 */
  const getList = async () => {
    const res = await axios.get(`/api/restaurant?pageNo=${pageNo}`);
    console.log(res.data); // 배열
    const data = res.data;
    if (data) {
      // react -> undefined -> rendering -> error
      setList(data.items || []);
      setTotal(data.totalCount || 0);
    }
  };

  /* 페이징처리 : 한번에 데이터 가져와서 for문 돌려서 자르는 경우 없음 */
  const [pageNo, setPageNo] = useState(1);
  const goNextPage = async () => {
    // total 최대 조회 숫자 이상으로 넘어가지 않도록 막기
    const pageLimit = (pageNo + 1) * 9;
    if (pageLimit < total) {
      setPageNo(pageNo + 1);
    } else {
      alert("더 이상 자료가 없습니다");
    }
  };

  const goPreviousPage = async () => {
    setPageNo(pageNo - 1);
    if (pageNo == 1) {
      alert("더 이상 자료가 없습니다");
      setPageNo(1);
    }
  };

  const goFirstPage = async () => {
    setPageNo(1);
  };

  useEffect(() => {
    getList();
  }, [pageNo]);

  return (
    <>
      <section>
        <div className="dark:bg-violet-600">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50">
              대전광역시 모범음식점{" "}
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">
              대전광역시 문화관광 모범음식점입니다.
              <br />
              2022년 대전광역시 기업매칭 지원사업 결과물입니다.
            </p>
            <div className="flex flex-wrap justify-center"></div>
          </div>
        </div>
      </section>

      <div className="p-6">
        {/* 반복문 돌려서 내용물 채우기 */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {list.map((v, i) => {
            return (
              <div className="overflow-hidden rounded-2xl bg-gray-50" key={i}>
                <div className="flex items-center h-[180px] overflow-hidden">
                  <img
                    src={`https://source.unsplash.com/random/400x300/?food&${Math.random()}`}
                    alt="Hamburger"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
                    <div>
                      <p className="text-gray-400">{v.restrntSumm}</p>
                      <h2 className="mt-2 text-lg font-semibold text-gray-800">
                        {v.restrntNm}
                      </h2>
                      <p className="text-gray-400">{v.restrntAddr}</p>
                    </div>
                  </div>
                  <hr className="mt-4 mb-4" />
                  <div className="flex flex-wrap justify-between">
                    <p className="inline-flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 stroke-orange-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <span className="ml-2 text-gray-600">{v.salsTime}</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <button
        onClick={goPreviousPage}
        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-l-md"
      >
        이전
      </button>
      <button
        onClick={goFirstPage}
        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-l-md"
      >
        초기화
      </button>
      <button
        onClick={goNextPage}
        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-l-md"
      >
        다음
      </button>
    </>
  );
}
