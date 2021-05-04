import API, { graphqlOperation } from "@aws-amplify/api";
import { processOrder } from "../graphql/mutations";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const handleclick = () => {
    const input = {
      id: uuidv4(),
      total: 666,
      note: "from client",
    };
    API.graphql(graphqlOperation(processOrder, { input: input }));
  };

  return (
    <div>
      {/* <button onClick={handleclick}>
        call lamda functions (process payment, create order)
      </button> */}
    </div>
  );
}
