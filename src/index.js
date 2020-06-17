import "./styles.css";

const test = () => {
  promiseTest(!true)
    .then(data => {
      console.log("Result : ", data);
    })
    .catch(err => {
      console.log("Error : ", err);
    });

  let x = new promiseWithJS((resolve, reject) => {
    console.log("inner", resolve);
    resolve();
  });
  console.log(x.resolve());

  return "success";
};

const promiseTest = flag => {
  const prom = new Promise((resolve, reject) => {
    console.log("Start.. ", flag);
    setTimeout(() => {
      if (flag) resolve("Success");
      else reject("failed");
    }, 1000);
  });
  return prom;
};

function promiseWithJS(fn) {
  this.status = "";

  this.resolve = () => {
    this.status = "success fn";
    return "Success fn";
  };
  this.reject = () => {
    this.status = "failed fn";
    return "failed fn";
  };
  fn(this.resolve, this.reject);
}

let str = test();

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
${str}
</div>
`;
