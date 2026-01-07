import axios from "axios";
export async function getUser() {
  let res;
  try {
    res = await axios.get("http://localhost:8080/api/v1/user", {
      withCredentials: true,
    });
    console.log(res);
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.log("inside error");

      return (res = undefined);
    }
  }

  return res;
}
