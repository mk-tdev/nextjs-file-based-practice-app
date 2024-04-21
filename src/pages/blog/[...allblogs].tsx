import { useRouter } from "next/router";

function AllBlogs() {
  const router = useRouter();

  console.log(router.query);

  return <div>AllBlogs</div>;
}

export default AllBlogs;
