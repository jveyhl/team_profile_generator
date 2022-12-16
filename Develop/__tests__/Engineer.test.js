const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Set GitHub", () => {
    it("Can set GitHUb account via constructor", () => {
      const github = "biglou";

      const engineer = new Engineer("Lou", 666, "lucifer@gmail.com", github);

      expect(engineer.github).toEqual(github);
    });
  });

  describe("Get Role", () => {
    it("getRole() should return \"Engineer\"", () => {
      const role = "Engineer";

      const engineer = new Engineer("Lou", 666, "lucifer@gmail.com", "biglou");

      expect(engineer.getRole()).toEqual(role);
    });
  });

  describe("Get Role", () => {
    it("getRole() should return \"Engineer\"", () => {
      const role = "Engineer";

      const engineer = new Engineer("Lou", 666, "lucifer@gmail.com", "biglou");

      expect(engineer.getRole()).toEqual(role);
    });
  });
});
