import styles from "./styles/cookieButtons.module.scss";
import {
  getCookies,
  sendPostRequest,
  parseCookies,
} from "../lesson-topics/cookies";
import { useEffect } from "react";

const CookieButtons = () => {
  useEffect(() => {
    const parsedCookies = parseCookies();
    console.log(parsedCookies);
  }, []);

  return (
    <div className={styles["CookieButtons"]}>
      <button className={styles["getCookieBtn"]} onClick={getCookies}>
        Get Cookies
      </button>
      <button className={styles["getCookieBtn"]} onClick={sendPostRequest}>
        Send Post Request
      </button>
    </div>
  );
};

export default CookieButtons;
