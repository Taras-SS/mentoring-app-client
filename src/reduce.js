export const combineArrays = () => {
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [1, 6, 3, 2, 9, 10];

  const combinedArray = arr2.reduce((acc, current) => {
    if (acc.includes(current)) {
      return acc;
    }

    return [...acc, current];
  }, arr1);

  console.log(combinedArray);
};

/*#################################################################################*/
export const combineObjects = () => {
  const users = [
    {
      age: 19,
      firstName: "Unknown",
      lastName: "Unknown",
      hobbies: ["Tennis", "Football"],
    },
    {
      age: 22,
      firstName: "Secret",
      lastName: "Secret",
      hobbies: ["Programming", "Tennis"],
    },
    {
      age: 30,
      firstName: "Secret",
      lastName: "Secret",
      hobbies: ["Football"],
    },
  ];

  const hobbies = users.reduce((acc, user) => {
    const hobbies = { ...acc };
    user.hobbies.forEach((hobbie) => {
      if (!hobbies[hobbie]) {
        hobbies[hobbie] = 1;
        return;
      }

      hobbies[hobbie]++;
    });

    return hobbies;
  }, {});

  console.log(hobbies);
};
