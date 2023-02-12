const endpoints = new Array(10).fill(
  "https://jsonplaceholder.typicode.com/todos/1"
);

/**@fulfilled */
export const allSettledFulfilled = async () => {
  const promises = endpoints.map((endpoint) => fetch(endpoint));
  const res = await Promise.allSettled(promises);
  console.log(res);
};

/*#################################################################################*/
/**@filtering */
export const allSettledFiltering = async () => {
  const promises = [
    Promise.resolve("Passed"),
    Promise.resolve("Passed"),
    Promise.reject("Error occured"),
    Promise.resolve("Passed"),
  ];

  const res = await Promise.allSettled(promises);
  const fulfilled = res.filter((promise) => promise.status === "fulfilled");
  const rejected = res.filter((promise) => promise.status === "rejected");
  console.log("All promises - ", res);
  console.log("Rejected promises - ", rejected);
  console.log("Fulfilled promises - ", fulfilled);
};

/*#################################################################################*/
/**@fulfilled */
export const promiseAllFulfilled = async () => {
  const promises = endpoints.map((endpoint) => fetch(endpoint));
  const res = await Promise.all(promises);
  console.log(res);
};

/*#################################################################################*/
/**if one promise fails */
export const promiseAllIfOneFails = async () => {
  try {
    const promises = [
      Promise.resolve("Passed"),
      Promise.resolve("Passed"),
      Promise.reject("Error occured"),
      Promise.resolve("Passed"),
    ];

    const res = await Promise.all(promises);
    console.log("All promises - ", res);
  } catch (err) {
    console.log(err);
  }
};
