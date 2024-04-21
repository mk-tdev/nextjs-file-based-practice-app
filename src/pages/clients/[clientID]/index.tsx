import { useRouter } from "next/router";

function ClientProject() {
  const router = useRouter();
  console.log(router.query);

  const loadProject1 = () => {
    router.push({
      pathname: `/clients/${router.query.clientID}/project1`,
    });
  };

  return (
    <div>
      <p>Client Project Main</p>

      <button onClick={loadProject1}>Load Project 1</button>
    </div>
  );
}

export default ClientProject;
