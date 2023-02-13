import axios from "axios";
import { toast } from "react-toastify";
import base64 from "base-64";

export const api = async (url, method, body, username, password) => {
  let authorization = "";
  if (url.includes("signin")) {
    authorization = `Basic ${base64.encode(`${username}:${password}`)}`;
  } else {
    authorization = `"Bearer " + ${
      JSON.parse(sessionStorage.getItem("userInfo")).token
    }`;
  }
  const options = {
    url: url,

    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: authorization,
    },
    data: body,
  };
  try {
    const response = await axios(options);
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e);

    let arr = JSON.parse(e.request?.responseText).errors;

    arr?.forEach((element) => {
      toast.error(element.msg);
    });

    arr?.length > 0 ? toast.error(arr[1]) : toast.error(e.request.responseText);
  }
};
