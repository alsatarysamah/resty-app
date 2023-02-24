
import { When } from "react-if";
import { getItem } from "../sessionStorage";

export default function Auth(props) {
  return (
    <>
      <When condition={getItem("userInfo") && can(props.role)}>
        {props.children}
      </When>
    </>
  );
}

const can = (role) => {
  return JSON.parse(getItem("userInfo"))?.role?.includes(role);
};
