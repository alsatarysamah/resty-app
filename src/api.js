import axios from "axios";
import { toast } from "react-toastify";

export const api =async (url, method, body) => {
  console.log();
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
try{
 const response=await axios(options);
 console.log(response.data);
 return response.data;
}catch(e){
       console.log(e);
       toast.error("Invalid URL ")
  // let arr = JSON.parse(e.request?.responseText).errors;

  // arr.forEach((element) => {
    
  //   toast.error(element.msg);
  // });

  // arr.length > 0
  //   ? toast.error(arr[1])
  //   : toast.error(e.request.responseText);
}
 
  
};
