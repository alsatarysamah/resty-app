import axios from "axios";
import { toast } from "react-toastify";

export const api = (url, method, body,setResult) => {
  const options = {
    url: url,
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
      Authorization:
        "Bearer " + JSON.parse(sessionStorage.getItem("userInfo")).token,
    },
    data: body,
  };

  axios(options)
    .then((response) => {
      console.log("ressssssssssss", response.data);
      setResult(response.data)
      return response.data;
    })
    .catch((e) => {
      console.log(e);
      let s = new Set();
      JSON.parse(e.request?.responseText).errors?.forEach((element) => {
        s.add(element.msg);
        toast.error(element.msg);
      });
      console.log(s);
      s.size > 0
        ? toast.error(s.values[1])
        : toast.error(e.request.responseText);
    });
};
