const { NODE_ENV: mode = "development" } = process.env;

const headers = {
  Accept: "application/json; charset=utf-8",
  "Content-Type": "application/json; charset=utf-8"
};

const config = {
  development: { baseURL: "http://localhost:5000/api", headers },
  production: { baseURL: "https://vlab-psnl-api.herokuapp.com/api", headers }
};

export default Object.freeze(config[mode]);
