const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Set GitHub", () => {
    it("Can set GitHUb account via constructor", () => {
      const employee = new Employee();

      expect(typeof employee).toEqual("object");
    });
  });

//   describe("Set name", () => {
//     it("Can set name via constructor arguments", () => {
//       const name = "Joe";

//       const employee = new Employee(name);

//       expect(employee.name).toEqual(name);
//     });
//   });

//   describe("Set id", () => {
//     it("Can set id via constructor argument", () => {
//       const id = 666;

//       const employee = new Employee("Lou", id);

//       expect(employee.id).toEqual(id);
//     });
//   });
});
