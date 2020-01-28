const assert = require("assert");
const fs = require("fs");
const recursiveReaddirSync = require('recursive-readdir-sync');

describe("Participants JSON file", () => {
  const srcdir = "./participants";

  it('the participants directory only contains JSON files', () => {
    const noJsonFiles = recursiveReaddirSync(srcdir)
      .filter(file => !file.endsWith('.json'));
    assert.deepEqual(noJsonFiles, []);
  });

  recursiveReaddirSync(srcdir)
  .filter(file => file.endsWith(".json"))
  .filter(file => !file.endsWith("/_template.json"))
  .forEach(file => {
    describe(file, () => {
      var object;

      before(() => {
        var content = fs.readFileSync(file, "utf8");
        object = JSON.parse(content);
      });

      it("must contain a name", () => {
        assert.ok(typeof object.name !== "undefined", "'name' is mandatory");
        assert.equal(typeof object.name, "string", "'name' must be of type string");
        assert.ok(object.name.trim().length > 0, "'name' must not be empty");
      });
    
      it("may contain a company name", () => {
        if(typeof object.company !== "undefined") {
          assert.equal(typeof object.company, "string", "'company' must be of type string");
          assert.ok(object.company.trim().length > 0, "'company' must not be empty");
        }
      });

      it("may contain tshirt information", () => {
        if(typeof object.tshirt !== "undefined") {
          assert.equal(typeof object.tshirt, "string", "'tshirt' must be of type string");
          assert.ok(object.tshirt.match(/^(W|M)-(S|M|L|XL)$/), "'tshirt' must match pattern /^(W|M)-(S|M|L|XL)$/");
        }
      });

      it('must contain participation time', () => {
        assert.ok(typeof object.when !== "undefined", "'when' is mandatory");
        assert.equal(typeof object.when, "object");
        assert.ok(typeof object.when.friday !== "undefined", "'when.friday' is mandatory");
        assert.equal(typeof object.when.friday, "boolean", "'when.friday' must be of type boolean");
        assert.ok(typeof object.when.friday_party !== "undefined", "'when.friday_party' is mandatory. We need this information to better plan the party.");
        assert.equal(typeof object.when.friday_party, "boolean", "'when.friday_party' must be of type boolean");
        assert.ok(typeof object.when.saturday !== "undefined", "'when.saturday' is mandatory");
        assert.equal(typeof object.when.saturday, "boolean", "'when.saturday' must be of type boolean");
      });

      it("must contain a connection to JS statement", () => {
        assert.ok(typeof object.what_is_my_connection_to_javascript !== "undefined", "'what_is_my_connection_to_javascript' is mandatory");
        assert.equal(typeof object.what_is_my_connection_to_javascript, "string", "'what_is_my_connection_to_javascript' must be of type string");
        assert.ok(object.what_is_my_connection_to_javascript.trim().length > 0, "'what_is_my_connection_to_javascript' must not be empty");
      });

      it("may contain a what_can_i_contribute statement", () => {
        if(typeof object.what_can_i_contribute !== "undefined"){
          assert.equal(typeof object.what_can_i_contribute, "string", "'what_can_i_contribute' must be of type string");
          assert.ok(object.what_can_i_contribute.trim().length > 0, "'what_can_i_contribute' must not be empty");
        }
      });

      it('must contain tags', () => {
        assert.ok('tags' in object);
        assert.ok(Array.isArray(object.tags));
        assert.ok(object.tags.length > 0);
        assert.ok(object.tags.every((tag) => !!tag));
      });

      it("may contain `allergies`", () => {
          if(typeof object.allergies !== "undefined") {
              assert.equal(typeof object.allergies, "string", "'allergies' must be a string");
          }
      });

      it("vegan must be boolean", () => {
          assert.equal(typeof object.vegan, "boolean", "'vegan' must be a boolean");
      });

      it("vegetarian must be boolean", () => {
          assert.equal(typeof object.vegetarian, "boolean", "'vegetarian' must be a boolean");
      });

      it("may contain a twitter handle", () => {
        if(typeof object.twitter !== "undefined") {
            assert.equal(typeof object.twitter, "string", "'twitter' must be of type string");
            assert.ok(/^[a-z_]{1}[a-z0-9_]{0,14}$/i.test(object.twitter), "'twitter' must be a valid twitter handle");
        }
      });
    });
  });
});

