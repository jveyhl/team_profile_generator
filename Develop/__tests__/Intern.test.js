const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Set school", () => {
    it("Can set school via constructor", () => {
      const school = "University of Hades";

      const intern = new Intern("Lou", 666, "lucifer@gmail.com", school);

      expect(intern.school).toEqual(school);
    });
  });

  describe("Get role", () => {
    it('getRole() should return "Intern"', () => {
      const role = "Intern";

      const intern = new Intern(
        "Lou",
        666,
        "lucifer@gmail.com",
        "University of Hades"
      );

      expect(intern.getRole()).toEqual(role);
    });
  });

  describe("Get school", () => {
    it("Can get school via getSchool()", () => {
      const school = "University of Hades";

      const intern = new Intern("Lou", 666, "lucifer@gmail.com", school);

      expect(intern.getSchool()).toEqual(school);
    });
  });
});
