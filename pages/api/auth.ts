export const login = async (email, password) => {
  try {
    const { jwt, user } = await fetch(`${process.env.API_URL}/auth/local`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        identifier: email,
        password,
      }),
    }).then((response) => response.json());
    localStorage.setItem("token", jwt);
    return user;
  } catch (e) {
    console.log(e);
  }
};

// export const registration = async (email, password) => {
//   const { data } = await $host.post("api/user/registration", {
//     email,
//     password,
//     role: "USER",
//   });
//   localStorage.setItem("token", data.token);
//   return jwt_decode(data.token);
// };
