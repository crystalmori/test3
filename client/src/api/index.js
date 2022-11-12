export const userApi = {
  users: [
    { usr: "u1@u.com", pwd: "123" },
    { usr: "u2@u.com", pwd: "456" },
    { usr: "u3@u.com", pwd: "789" },
  ],
  getAllUsers: async function () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.users);
      }, 500);
    });
  },
  addUser: async function (user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!user || !user.usr) {
          reject({ error: "user is empty !" });
          return;
        }
        this.users.push(user);
        resolve({ addUser: "succeed" });
      }, 500);
    });
  },

  modUser: async function (usrName) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.users = this.users.map((el) =>
          el.usr === usrName ? { ...el, pwd: "test" } : el
        );
        console.log(this.users);
        resolve({ modUser: "succeed" });
      }, 500);
    });
  },
};
