import axios from "axios";
import { toast } from "react-toastify";
import base64 from "base-64";

export const api = async (url, method, token, body, username, password) => {
  try {
    let authorization = "";
    if (url.includes("signin")) {
      if (username && password)
        authorization = ` Basic ${base64.encode(`${username}:${password}`)}`;
      else throw new Error("You should enter basic auth");
    } else {
      authorization = `"Bearer " + ${token}`;
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

    const response = await axios(options);
    console.log(response.data);
    return response.data;
  } catch (e) {
   
    if (e.response) {
      switch (e.response.status) {
        case 401:
          toast.error("Unauthorized");
          break;
        case 403:
          toast.error("Forbidden");
          break;
        case 404:
          toast.error("Not Found");
          break;
        case 500:
          toast.error("Internal Server Error");
          break;
        default:
          toast.error(e.response.data);
      }
    }
e.message&&toast.error(e.message)
    let arr = JSON.parse(e.request?.responseText).errors;

    arr?.forEach((element) => {
      toast.error(element.msg);
    });
    
    arr?.length > 0 ? toast.error(arr[1]) : toast.error(e.request.responseText);
  }
};
