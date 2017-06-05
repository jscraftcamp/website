var assert = require("assert");
var fs = require("fs");
var path = require("path");
var recursiveReaddirSync = require('recursive-readdir-sync')

describe("Participants JSON file", () => {
  var srcdir = "./participants";
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

      it("may contain a photo URL", () => {
        if(typeof object.urls.photo !== "undefined") {
          assert.equal(typeof object.urls.photo, "string", "'urls.photo' must be of type string");
          assert.ok(object.urls.photo.startsWith("http"), "'urls.photo' must be an URL");
        }
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

      it("must contain at least one tag", () => {
        assert.ok(typeof object.tags !== "undefined", "'tags' is mandatory");
        assert.ok(Array.isArray(object.tags), "'tags' must be an array");
        assert.ok(object.tags.length >= 1, 'minumum 1 tag');
        object.tags.forEach(item => {
            assert.equal(typeof item, "string", "Each item in 'tags' must be of type string");
            assert.ok(item.trim().length > 0, "Each item in 'tags' must not be empty");
            assert.ok(item.indexOf(',') === -1, "Tags can not contain commas - each tag must be an own element within the array");
        });
      });

      it("may contain additional URLs", () => {
        if(typeof object.urls.homepage !== "undefined") {
          assert.equal(typeof object.urls.homepage, "string", "'urls.homepage' must be of type string");
          assert.ok(object.urls.homepage.startsWith("http"), "'urls.homepage' must be an URL");
        }
        if(typeof object.urls.github !== "undefined") {
          assert.equal(typeof object.urls.github, "string", "'urls.github' must be of type string");
          assert.ok(object.urls.github.startsWith("http"), "'urls.github' must be an URL");
        }
        if(typeof object.urls.twitter !== "undefined") {
          assert.equal(typeof object.urls.twitter, "string", "'urls.twitter' must be of type string");
          assert.ok(object.urls.twitter.startsWith("http"), "'urls.twitter' must be an URL");
        }
      });
    });
  });
});

