const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("Can instantiate Employee instance", () => {
      const employee = new Employee();

      expect(typeof employee).toEqual("object");
    });
  });

  describe("Set name", () => {
    it("Can set name via constructor arguments", () => {
      const name = "Joe";

      const employee = new Employee(name);

      expect(employee.name).toEqual(name);
    });
  });

  describe("Set id", () => {
    it("Can set id via constructor argument", () => {
      const id = 666;

      const employee = new Employee("Lou", id);

      expect(employee.id).toEqual(id);
    });
  });

  describe("Set email", () => {
    it("Can set email via constructor argument", () => {
      const email = "lucifer@gmail.com";

      const employee = new Employee("Lou", 666, email);

      expect(employee.email).toEqual(email);
    });
  });

  // Can get name via getName()
  describe("Get name", () => {
    it("Can get name via getName()", () => {
      const name = "Lou";

      const employee = new Employee(name);

      expect(employee.getName()).toEqual(name);
    });
  });

  describe("Get id", () => {
    it("Can get id via getId()", () => {
      const id = 666;

      const employee = new Employee("Lou", id);

      expect(employee.getId()).toEqual(id);
    });
  });

  describe("Get email", () => {
    it("Can get email via getEmail()", () => {
      const email = "lucifer@gmail.com";

      const employee = new Employee("Lou", 666, email);

      expect(employee.getEmail()).toEqual(email);
    });
  });

  describe("Get role", () => {
    it('getRole() should return "Employee"', () => {
      const role = "Employee";

      const employee = new Employee("Lou", 666, "lucifer@gmail.com");

      expect(employee.getRole()).toEqual(role);
    });
  });
});
