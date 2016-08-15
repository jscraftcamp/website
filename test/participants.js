var assert = require("assert");
var fs = require("fs");
var path = require("path");

describe("Participants JSON file", () => {
  var srcdir = "./participants";
  fs.readdirSync(srcdir)
  .filter(file => file.endsWith(".json"))
  .filter(file => file != "_template.json")
  .forEach(file => {
    describe(file, () => {
      var object;
      before(() => {
        var content = fs.readFileSync(path.join(srcdir, file), "utf8");
        object = JSON.parse(content);
      });
      it("must contain a name", () => {
        assert.equal(typeof object.name, "string");
        assert.ok(object.name.trim().length > 1);
      });
      it("may contain a photo URL", () => {
        if(object.photo_url) {
          assert.equal(typeof object.photo_url, "string");
          assert.ok(object.photo_url.startsWith("http"));
        }
      });
      it('must contain participation time', () => {
        assert.equal(typeof object.when, "object");
        assert.equal(typeof object.when.saturday, "boolean");
        assert.equal(typeof object.when.sunday, "boolean");
      });
      it("must contain a connection to JS statement", () => {
        assert.equal(typeof object.what_is_my_connection_to_javascript, "string");
        assert.ok(object.what_is_my_connection_to_javascript.trim().length > 1);
      });
      it("must contain a contribution to JSCC statement", () => {
        assert.equal(typeof object.what_can_i_contribute_to_js_craftcamp, "string");
        assert.ok(object.what_can_i_contribute_to_js_craftcamp.trim().length > 1);
      });
      it("must contain tags", () => {
        assert.equal(typeof object.tags, "object");
        assert.ok(object.tags.length > 0);
	assert.ok(object.tags.length < 6);
      });
      it("may contain additional URLs", () => {
        if(object.urls) {
          assert.equal(typeof object.urls, "object");
          if(object.urls.homepage) {
            assert.equal(typeof object.urls.homepage, "string");
            assert.ok(object.urls.homepage.startsWith("http"));
          }
          if(object.urls.github) {
            assert.equal(typeof object.urls.github, "string");
            assert.ok(object.urls.github.startsWith("http"));
          }
          if(object.urls.homepage) {
            assert.equal(typeof object.urls.twitter, "string");
            assert.ok(object.urls.twitter.startsWith("http"));
          }
        }
      });
    });
  });
});

