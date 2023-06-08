import { useMutation } from "react-query";
import axios from "axios";

const createClient = async (clientData) => {
  try {
    const response = await axios.post(
      "localhost:5000/api/client/createClient",
      clientData
    );
    return response.data;
  } catch (error) {
    throw new Error("An error occurred while creating the client.");
  }
};

const useClient = () => {
  return useMutation(createClient);
};

export default useClient;
