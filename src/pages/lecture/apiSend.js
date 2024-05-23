import axios from "axios";
import { useEffect } from "react";

export default function ApiSend() {
  /* API 통신해서 DATA를 가져와 화면에 뿌려주는 작업 
     1. Client-side : 
     2. Server-side : API routes 
  */
  const serviceKey =
    "WOX88LV9CJfxoI%2FQ6nDfxyNOTVxAyhC3xfcuWdBbKkzKkbPrriTVsfPSJDyI5pCaXEY%2FpT%2BRCCgY2jW99Pm1ww%3D%3D";
  const url = `http://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst?serviceKey=${serviceKey}&numOfRows=10&pageNo=1&regId=11B00000&tmFc=202405221800&dataType=JSON`;

  /* version1. client - fetch api */
  const getDate = async () => {
    // const res = await fetch(url);
    // const result = await res.json();
    // console.log(result);

    /* version2. client - axios */
    // const res2 = await axios.get(url);
    // const result2 = res2.data;
    // console.log(result2);

    /* version3. api routes - server 단 */
    const res3 = await fetch("/api/weather"); // response 객체
    const result3 = await res3.json(); // 응답객체 -> obj
    // console.log(result3);

    // const res4 = await axios.get("/api/weather?test=123");
    // const result4 = res4.data;
    // console.log(result4);

    const res5 = await axios.post("/api/weather", { test: 123 });
  };

  useEffect(() => {
    getDate();
  }, []);

  return (
    <>
      <h1>API 통신</h1>
    </>
  );
}
