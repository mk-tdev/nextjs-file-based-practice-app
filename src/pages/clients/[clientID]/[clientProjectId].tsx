import { useRouter } from "next/router";

function ClientProject() {
  const router = useRouter();

  console.log(router.query);

  return <div>ClientProject {router.pathname}</div>;
}

export default ClientProject;
