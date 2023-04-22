import { Table, Toast } from "./components";
import Loader from "./components/loader";
import { useFetch } from "./hooks";

import { prepareDataArray } from "./helper";

let DEFAULT_OBJ_STRUCTURE = {
  id: "",
  name: "",
  email: "",
  phone: "",
  website: "",
  username: "",
};

const columns = [
  { name: "ID", selector: (row) => row?.id },
  { name: "Name", selector: (row) => row?.name },
  { name: "Email", selector: (row) => row?.email },
  { name: "Phone", selector: (row) => row?.phone },
  { name: "Website", selector: (row) => row?.website },
  { name: "Username", selector: (row) => row?.username },
];

function App() {
  const [loading, data, error] = useFetch([], { url: "http://localhost:3000/users", updateOnUrlChange: true });

  let errorComponent = error ? <Toast variant={"error"} message={error} /> : null;

  if (loading) return <Loader fullscreen />;

  return (
    <>
      {errorComponent}
      <Table updateUrl pagination loading={loading} columns={columns} data={prepareDataArray(data, DEFAULT_OBJ_STRUCTURE)} />
    </>
  );
}

export default App;
