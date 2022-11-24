import axios from "axios";

const mawa = async () => {
  const response = await axios.get("http://localhost:3001/react/aws");
  const data = response.data;
  return data;
};

export default mawa;
