let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  arr.map((emp) => {
    if (emp.profession === "developer") {
      console.log(
        `id : ${emp.id}, Name : ${emp.name}, Age : ${emp.age}, Profession : ${emp.profession}`
      );
    }
  });
}

function PrintDeveloperbyForEach() {
  arr.forEach((emp) => {
    if (emp.profession === "developer") {
      console.log(
        `id : ${emp.id}, Name : ${emp.name}, Age : ${emp.age}, Profession : ${emp.profession}`
      );
    }
  });
}

function addData() {
  const newEmp = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmp);
  arr.map((emp) => {
    console.log(
      `id : ${emp.id}, Name : ${emp.name}, Age : ${emp.age}, Profession : ${emp.profession}`
    );
  });
}

function removeAdmin() {
  arr = arr.filter((emp) => emp.profession !== "admin");
  arr.map((emp) => {
    console.log(
      `id : ${emp.id}, Name : ${emp.name}, Age : ${emp.age}, Profession : ${emp.profession}`
    );
  });
}

function concatenateArray() {
  let friends = [
    { id: 5, name: "Venkat", age: "19", profession: "developer" },
    { id: 6, name: "Suresh", age: "21", profession: "developer" },
    { id: 7, name: "Shanmukh", age: "29", profession: "analyst" },
  ];
  arr = arr.concat(friends);
  arr.map((emp) => {
    console.log(
      `id : ${emp.id}, Name : ${emp.name}, Age : ${emp.age}, Profession : ${emp.profession}`
    );
  });
}
