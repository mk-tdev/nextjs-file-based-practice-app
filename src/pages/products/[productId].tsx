import { useRouter } from "next/router";

const DynamicProduct = () => {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);
  return <div>DynamicProduct</div>;
};

export default DynamicProduct;
