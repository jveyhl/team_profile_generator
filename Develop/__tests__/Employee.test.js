const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an Employee object", () => {
      const employee = new Employee();

      expect(typeof employee).toEqual("object");
    });
  });
});
