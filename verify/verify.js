//
// Generated from RAML specification
// <https://github.com/aisensiy/raml2test>
//

var request = require('request');
var chai = require('chai');
var assert = chai.assert;
var tv4 = require('tv4');
var endpoint = process.env.ENDPOINT;

console.log(endpoint);

var providerId, providerURI, userName, orderURI, orderId;

describe("Test", function () {
  this.timeout(60000);
  it("POST /providers -> 201", function (done) {
    var options = {
      url: endpoint + '/providers',
      method: 'POST',
      qs: {},
      json: {
        "name": "Little Yellow Duck"
      },
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 201, "Expect 201, got " + response.statusCode);
      var schema = "";
      if (schema != '') {
        // verify response body
        body = (body == '' ? '[empty]' : body);
        assert.doesNotThrow(function () {
          JSON.parse(body);
        }, JSON.SyntaxError, "Invalid JSON: " + body);
        var json = JSON.parse(body);
        var result = tv4.validateResult(json, schema);
        assert.lengthOf(result.missing, 0, "Missing/unresolved JSON schema $refs (" + result.missing && result.missing.join(', ') + ") in schema: " + JSON.stringify(schema, null, 4) + " Error");
        assert.ok(result.valid, "Got unexpected response body: " + result.error && result.error.message + " " + JSON.stringify(schema, null, 4) + " Error");
        provider
      }
      providerURI = response.headers['location'];
      var splits = providerURI.split("/");
      providerId = splits[splits.length - 1];
      done();
    });
  });
  
  it("GET /providers/{providerId} -> 200", function (done) {
    var options = {
      url: endpoint + '/providers/' + providerId,
      method: 'GET',
      qs: {},
      body: "",
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 200, "Expect 200, got " + response.statusCode);
      var schema = {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "id": {
            "type": "integer"
          },
          "name": {
            "type": "string"
          },
          "required": ["id", "name"]
        }
      };
      if (schema != '') {
        // verify response body
        body = (body == '' ? '[empty]' : body);
        assert.doesNotThrow(function () {
          JSON.parse(body);
        }, JSON.SyntaxError, "Invalid JSON: " + body);
        var json = JSON.parse(body);
        var result = tv4.validateResult(json, schema);
        assert.lengthOf(result.missing, 0, "Missing/unresolved JSON schema $refs (" + result.missing && result.missing.join(', ') + ") in schema: " + JSON.stringify(schema, null, 4) + " Error");
        assert.ok(result.valid, "Got unexpected response body: " + (result.error && result.error.message) + " " + JSON.stringify(schema, null, 4) + " Error");
      }
      done();
    });
  });
  
  it("GET /providers -> 200", function (done) {
    var options = {
      url: endpoint + '/providers',
      method: 'GET',
      qs: {},
      body: '',
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 200, "Expect 200, got " + response.statusCode);
      var schema = {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "totalCount": {
          "type": "integer"
        },
        "providers": {
          "type": "array",
          "properties": {
            "id": {
              "type": "integer"
            },
            "name": {
              "type": "string"
            },
            "required": ["id", "name"]
          }
          
        }
      };
      if (schema != '') {
        // verify response body
        body = (body == '' ? '[empty]' : body);
        assert.doesNotThrow(function () {
          JSON.parse(body);
        }, JSON.SyntaxError, "Invalid JSON: " + body);
        var json = JSON.parse(body);
        var result = tv4.validateResult(json, schema);
        assert.lengthOf(result.missing, 0, "Missing/unresolved JSON schema $refs (" + result.missing && result.missing.join(', ') + ") in schema: " + JSON.stringify(schema, null, 4) + " Error");
        assert.ok(result.valid, "Got unexpected response body: " + (result.error && result.error.message) + " " + JSON.stringify(schema, null, 4) + " Error");
      }
      done();
    });
  });
  
  it("PUT /providers/{id} -> 204", function (done) {
    var options = {
      url: endpoint + '/providers/' + providerId,
      method: 'PUT',
      qs: {},
      json: {
        "id": 1,
        "name": "Little Yellow Duck"
      },
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 204, "Expect 204, got " + response.statusCode);
      var schema = "";
      if (schema != '') {
        // verify response body
        body = (body == '' ? '[empty]' : body);
        assert.doesNotThrow(function () {
          JSON.parse(body);
        }, JSON.SyntaxError, "Invalid JSON: " + body);
        var json = JSON.parse(body);
        var result = tv4.validateResult(json, schema);
        assert.lengthOf(result.missing, 0, "Missing/unresolved JSON schema $refs (" + result.missing && result.missing.join(', ') + ") in schema: " + JSON.stringify(schema, null, 4) + " Error");
        assert.ok(result.valid, "Got unexpected response body: " + (result.error && result.error.message) + " " + JSON.stringify(schema, null, 4) + " Error");
      }
      done();
    });
  });
  
  it("DELETE /providers -> 204", function (done) {
    var options = {
      url: endpoint + '/providers/' + providerId,
      method: 'DELETE',
      qs: {},
      json: "",
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 204, "Expect 204, got " + response.statusCode);
      done();
    });
  });
  
  
  it("POST /orders -> 201", function (done) {
    var options = {
      url: endpoint + '/orders',
      method: 'POST',
      qs: {},
      json: {
        "provider_id": 1,
        "product_id": 2,
        "count": 10000
      },
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 201, "Expect 201, got " + response.statusCode);
      orderURI = response.headers['location'];
      var splits = orderURI.split("/");
      orderId = splits[splits.length - 1];
      console.log(orderURI);
      done();
    });
  });
  
  it("GET /orders -> 200", function (done) {
    var options = {
      url: orderURI,
      method: 'GET',
      qs: {},
      body: null,
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 200, "Expect 200, got " + response.statusCode);
      var schema = {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "totalCount": {
          "type": "integer"
        },
        "orders": {
          "type": "array",
          "properties": {
            "provider_id": {
              "type": "integer"
            },
            "product_id": {
              "type": "integer"
            },
            "count": {
              "type": "integer"
            },
            "required": ["product_id", "provider_id", "count"]
          }
        }
      };
      if (schema != '') {
        // verify response body
        body = (body == '' ? '[empty]' : body);
        assert.doesNotThrow(function () {
          JSON.parse(body);
        }, JSON.SyntaxError, "Invalid JSON: " + body);
        var json = JSON.parse(body);
        var result = tv4.validateResult(json, schema);
        assert.lengthOf(result.missing, 0, "Missing/unresolved JSON schema $refs (" + result.missing && result.missing.join(', ') + ") in schema: " + JSON.stringify(schema, null, 4) + " Error");
        assert.ok(result.valid, "Got unexpected response body: " + (result.error && result.error.message) + " " + JSON.stringify(schema, null, 4) + " Error");
      }
      done();
    });
  });
  
  it("GET /orders/{orderId} -> 200", function (done) {
    var options = {
      url: endpoint + '/orders' + orderId,
      method: 'GET',
      qs: {},
      body: null,
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 200, "Expect 200, got " + response.statusCode);
      var schema = {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "array",
        "properties": {
          "provider_id": {
            "type": "integer"
          },
          "product_id": {
            "type": "integer"
          },
          "count": {
            "type": "integer"
          },
          "required": ["product_id", "provider_id", "count"]
        }
      };
      if (schema != '') {
        // verify response body
        body = (body == '' ? '[empty]' : body);
        assert.doesNotThrow(function () {
          JSON.parse(body);
        }, JSON.SyntaxError, "Invalid JSON: " + body);
        var json = JSON.parse(body);
        var result = tv4.validateResult(json, schema);
        assert.lengthOf(result.missing, 0, "Missing/unresolved JSON schema $refs (" + result.missing && result.missing.join(', ') + ") in schema: " + JSON.stringify(schema, null, 4) + " Error");
        assert.ok(result.valid, "Got unexpected response body: " + (result.error && result.error.message) + " " + JSON.stringify(schema, null, 4) + " Error");
      }
      done();
    });
  });
  
  it("PUT /orders/{orderId} -> 204", function (done) {
    var options = {
      url: endpoint + '/orders/' + orderId,
      method: 'PUT',
      qs: {},
      body: {
        "provider_id": 1,
        "product_id": 2,
        "count": 10000
      },
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 204, "Expect 204, got " + response.statusCode);
      done();
    });
  });
  
  it("DELETE /orders/{orderId} -> 204", function (done) {
    var options = {
      url: endpoint + '/orders/' + orderId,
      method: 'DELETE',
      qs: {},
      body: "",
      header: {}
    };
    
    request(options, function (error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 204, "Expect 204, got " + response.statusCode);
      done();
    });
  });
  
});
