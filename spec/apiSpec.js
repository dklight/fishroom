let request = require("request");

let base_url = "http://localhost:3000/"

describe("Fishroom API", function() {
  var server;
  beforeAll(() => {
    server = require("../server");
  });

  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns Welcome to fishroom version", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(body).toBe("Welcome to fishroom 0.1.0!");
        done();
      });
    });

    it("turns port 8 on", function(done) {
      request.get(base_url + "port/8/on", function(error, response, body) {
        expect(body).toBe("Turning on port 8!");
        done();
      });
    });

    it("turns port 8 off", function(done) {
      request.get(base_url + "port/8/off", function(error, response, body) {
        expect(body).toBe("Turning off port 8!");
        done();
      });
    });
  });
});