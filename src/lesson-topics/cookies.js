export const getCookies = async () => {
  try {
    const res = await fetch("http://localhost:3000/cookies-request");
    return res;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const sendPostRequest = async () => {
  try {
    const res = await fetch("http://localhost:3000/cookies-request", {
      method: "POST",
    });
    return res;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const parseCookies = () => {
  const splittedCookies = document.cookie.split("; ");
  return Object.fromEntries(splittedCookies.map((item) => item.split("=")));
};
