import axios from "axios";
import { useEffect } from "react";

export default async function handler(req, res) {
  // 모범음식공공api 활용
  const serviceKey =
    "WOX88LV9CJfxoI%2FQ6nDfxyNOTVxAyhC3xfcuWdBbKkzKkbPrriTVsfPSJDyI5pCaXEY%2FpT%2BRCCgY2jW99Pm1ww%3D%3D";
  let pageNo = req.query.pageNo;
  let numOfRows = "9";

  const url = `https://apis.data.go.kr/6300000/openapi2022/restrnt/getrestrnt?serviceKey=${serviceKey}&pageNo=${pageNo}&numOfRows=${numOfRows}`;

  try {
    // api 호출 -> method 문서 확인
    const restRes = await axios.get(url);
    const result = restRes.data;
    // console.log(restRes);
    // console.log("axios로 가져온 값 : ", result);

    // 가게 정보들만 담은 배열로
    const rest = result.response.body; // => 선생님버전 : {totalCount, items}
    // const rest = result.response.body.items; // => 내 버전 : items 만
    console.log("axios로 가져온 값 : ", rest);
    res.status(200).json(rest);
  } catch (err) {
    res.status(500).json({ message: "server error" });
    console.log("error: ", err);
  }
}
