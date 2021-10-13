export const login = async (email, password) => {
  try {
    const { jwt, user } = await fetch(`${process.env.API_URL}/auth/local`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: email,
        password,
      }),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
    localStorage.setItem("token", jwt);
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  } catch (e) {
    console.log(e);
  }
};

export const registration = async (
  username,
  firstName,
  secondName,
  email,
  password
) => {
  try {
    const { jwt, user } = await fetch(
      `${process.env.API_URL}/auth/local/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          firstName,
          secondName,
          email,
          password,
        }),
      }
    )
      .then((response) => response.json())
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
    localStorage.setItem("token", jwt);
    return user;
  } catch (e) {
    console.log(e);
  }
};
