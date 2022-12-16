const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Set office number", () => {
    it("Can set office number via constructor argument", () => {
      const officeNumber = 13;

      const manager = new Manager(
        "Lou",
        666,
        "lucifer@gmail.com",
        officeNumber
      );

      expect(manager.officeNumber).toEqual(officeNumber);
    });
  });

  describe("Get role", () => {
    it('getRole() should return "Manager"', () => {
      const role = "Manager";

      const manager = new Manager("Lou", 666, "lucifer@gmail.com", 13);

      expect(manager.getRole()).toEqual(role);
    });
  });

  describe("Get office", () => {
    it("Can get office number via getOffice()", () => {
      const officeNumber = 13;

      const manager = new Manager(
        "Lou",
        666,
        "lucifer@gmail.com",
        officeNumber
      );

      expect(manager.getOfficeNumber()).toEqual(officeNumber);
    });
  });
});
