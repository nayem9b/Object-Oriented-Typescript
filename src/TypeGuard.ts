// Key of guard
type Alphaneumeric = number | string;

function add(param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}
add("1", "2");
add(1, 2);

// In gurad
type NormalUser = {
  name: string;
};
type AdminUser = {
  name: string;
  role: "admin";
};

function getUser(user: NormalUser | AdminUser) {
  if ("role" in user) {
    return "I'm an Admin User";
  } else {
    return "I'm a normal user";
  }
}

const normalUser1: NormalUser = { name: "Mr Reshob" };
const adminUser1: AdminUser = { name: "Mr Reshob", role: "admin" };
console.log(getUser(normalUser1));
console.log(getUser(adminUser1));
