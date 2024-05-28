import executeQuery from "../../../database";

export default async function handler(req, res) {
  const { id, name, url } = req.body;

  try {
    switch (url) {
      case "addData":
        // 보안을 위해서 ? 로 변환할때도 반드시 문자열로 넣어줘야함
        // 넘어오는 값이 이미 문자열인 경우에만 중복적용되지 않도록 생략 가능
        const query = `INSERT INTO test_table (id, name) VALUES(?, ?)`;
        console.log(query);

        const result = await executeQuery(query, [id, name]);
        if (result.affectedRows > 0) {
          res.status(200).json("성공");
        } else {
          res.status(200).json("실패");
        }
        console.log(result);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

  // 쿼리 날릴 때 보안
  //   const query = `select id, name from test_table where id = ?`;
  //   console.log(query);

  //   const result = await executeQuery(query, [id]);
  //   console.log(result);

  //   res.status(200).json(result);
}
