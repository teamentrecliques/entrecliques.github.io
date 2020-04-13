import $http from './http.service';

const submit = payload =>
  $http
    .post("/newmail", payload)
    .then(response => {
      console.log(response);
      const { status } = response;
      if (status >= 200 && status <= 201) return response.data;
      throw response;
    })
    .catch(err => {
      throw err.response;
    });

export default { submit };
