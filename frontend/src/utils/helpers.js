export const getAuth = () => {
  const auth = localStorage.getItem("token");
  return typeof auth === "string" ? JSON.parse(auth) : {};
};

export const setAuth = (token) => {
  localStorage.setItem("token", token);
};
