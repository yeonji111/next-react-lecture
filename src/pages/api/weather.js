export default async function handler(req, res) {
  /* get 방식의 통신 : parameter가 담긴 위치 : request.query */
  //   const { method, query } = req;
  //   console.log("query =>", query);
  /* post 방식의 통신 : parameter가 담긴 위치 : request.body */
  const { method, body } = req;
  console.log("method =>", method);
  console.log("body =>", body);

  const serviceKey =
    "WOX88LV9CJfxoI%2FQ6nDfxyNOTVxAyhC3xfcuWdBbKkzKkbPrriTVsfPSJDyI5pCaXEY%2FpT%2BRCCgY2jW99Pm1ww%3D%3D";
  const url = `http://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst?serviceKey=${serviceKey}&numOfRows=10&pageNo=1&regId=11B00000&tmFc=202405221800&dataType=JSON`;

  try {
    const weatherRes = await fetch(url);
    const result = await weatherRes.json();
    console.log(result.response.body.items);

    // res.status(200).json(result.response.body.items);
  } catch (err) {
    console.log("er======>", err);
    res.status(500).json({ message: "server error" });
  }
}
