export const getUser = async () => {
  try {
    return await fetch(`${process.env.API_URL}/users/me`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
  } catch (e) {
    console.log(e);
  }
};
