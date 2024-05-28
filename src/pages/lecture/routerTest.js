import { useRouter } from "next/router";

export default function () {
  const router = useRouter();
  console.log(router);
  const { param } = router.query;
  console.log(param);

  return <>Router test 페이지</>;
}
