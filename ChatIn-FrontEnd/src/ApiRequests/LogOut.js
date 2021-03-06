import Axios from "axios";
import { ServerURI } from "./Config";

export const LogOutApiRequest = () => {
  Axios.post(ServerURI + "/ChatIn/Logout", {}, { withCredentials: true }).then(
    (res) => {
      window.location.replace("/");
    }
  );
};
