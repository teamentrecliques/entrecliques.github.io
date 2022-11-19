const { NODE_ENV: mode = "development" } = process.env;

const headers = {
  Accept: "application/json; charset=utf-8",
  "Content-Type": "application/json; charset=utf-8"
};

const config = {
  development: { baseURL: "https://etc-mail-services.onrender.com/api", headers },
  production: { baseURL: "https://etc-mail-services.onrender.com/api", headers }
};

export default Object.freeze(config[mode]);
