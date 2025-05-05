import { useAuth } from "../context/authContext";

const { VITE_API_URL } = import.meta.env;
const { token } = useAuth;

export async function registerService(formData) {
  let res = await fetch(VITE_API_URL + "/users/register", {
    method: "POST",
    body: formData,
    /*  headers: {
      "Content-Type": "application/json",
    }, */
  });
  //console.log(formData);
  console.log(res);

  let json = await res.json();
  if (!res.ok) {
    throw new Error(json.message);
  }
  return json;
}

export async function loginService(userData) {
  let res = await fetch(VITE_API_URL + "/users/login", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(res);

  let json = await res.json();
  if (!res.ok) {
    throw new Error(json.message);
  }
  return json;
}

export async function changePasswordService(userData) {
  let res = await fetch(VITE_API_URL + "/users/updatepassword", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  });
  let json = await res.json();
  if (!res.ok) {
    throw new Error(json.message);
  }
  return json;
}

export async function resetPasswordService(
  recoverPassCode,
  newPassword,
  repeatedPassword
) {
  const res = await fetch(
    `${VITE_API_URL}/users/password/reset/${recoverPassCode}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newPassword, repeatedPassword }),
    }
  );

  const body = await res.json();

  if (!res.ok) {
    throw new Error(body.message);
  }

  return body;
}
