
let loginDto = {
  username: "ssar",
  password: "1234"
};

let rl = fetch({
    url: "http://192.168.0.101/login",
    body: JSON.stringify(loginDto),
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    } 
});

console.log(rl);
