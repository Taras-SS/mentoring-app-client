export const sendCorsRequests = async () => {
  try {
    const res = await fetch("http://localhost:9999", {
      // method: "DELETE",
      //headers: { Authentication: "fake-token" },
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
