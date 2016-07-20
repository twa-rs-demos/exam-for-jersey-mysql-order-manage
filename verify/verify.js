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

var productId, productURI, userName, orderURI, orderId;

describe("Test", function () {
  this.timeout(60000);
  it("POST /products -> 201", function(done) {
    var options = {
      url: endpoint + '/products',
      method: 'POST',
      qs: {},
      json: {
        "name": "xxx",
        "description": "xxx",
        "price": 1.2
      },
      header: {}
    };

    request(options, function(error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 201, "Expect 201, got " + response.statusCode);
      var schema = "";
      if (schema != '') {
        // verify response body
        body = (body == '' ? '[empty]' : body);
        assert.doesNotThrow(function() {
          JSON.parse(body);
        }, JSON.SyntaxError, "Invalid JSON: " + body);
        var json = JSON.parse(body);
        var result = tv4.validateResult(json, schema);
        assert.lengthOf(result.missing, 0, "Missing/unresolved JSON schema $refs (" + result.missing && result.missing.join(', ') + ") in schema: " + JSON.stringify(schema, null, 4) + " Error");
        assert.ok(result.valid, "Got unexpected response body: " + result.error && result.error.message + " " + JSON.stringify(schema, null, 4) + " Error");
        product
      }
      productURI = response.headers['location'];
      var splits = productURI.split("/");
      productId = splits[splits.length - 1];
      done();
    });
  });


  it("GET /products/{productId} -> 200", function(done) {
    var options = {
      url: endpoint + '/products/' + productId,
      method: 'GET',
      qs: {},
      body: "",
      header: {}
    };

    request(options, function(error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 200, "Expect 200, got " + response.statusCode);
      var schema = {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "uri": {
            "type": "string"
          },
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "price": {
            "type": "number",
            "minimum": 0
          },
          "required": [
            "id",
            "uri",
            "name",
            "description",
            "price"
          ]
        }
      };
      if (schema != '') {
        // verify response body
        body = (body == '' ? '[empty]' : body);
        assert.doesNotThrow(function() {
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
  it("GET /products -> 200", function (done) {
    var options = {
      url: endpoint + '/products',
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
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "uri": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "price": {
              "type": "number",
              "minimum": 0
            },
            "id": {
              "type": "string"
            }
          },
          "required": [
            "uri",
            "id",
            "name",
            "description",
            "price"
          ]
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

  it("POST /users -> 201", function(done) {
    userName = 'scxu';
    var options = {
      url: endpoint + '/users',
      method: 'POST',
      qs: {},
      json: {
        "name": userName
      },
      header: {}
    };

    request(options, function(error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 201, "Expect 201, got " + response.statusCode);
      var schema = "";
      if (schema != '') {
        // verify response body
        body = (body == '' ? '[empty]' : body);
        assert.doesNotThrow(function() {
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
  //
  it("POST /users/{id}/orders -> 201", function(done) {
    var options = {
      url: endpoint + '/users/' + userName + '/orders',
      method: 'POST',
      qs: {},
      json: {
        "name": userName,
        "address": "beijing",
        "phone": "13200000000",
        "order_items": [{
          "product_id": productId,
          "quantity": 2
        }]
      },
      header: {}
    };

    request(options, function(error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 201, "Expect 201, got " + response.statusCode);
      var schema = "";
      if (schema != '') {
        // verify response body
        body = (body == '' ? '[empty]' : body);
        assert.doesNotThrow(function() {
          JSON.parse(body);
        }, JSON.SyntaxError, "Invalid JSON: " + body);
        var json = JSON.parse(body);
        var result = tv4.validateResult(json, schema);
        assert.lengthOf(result.missing, 0, "Missing/unresolved JSON schema $refs (" + result.missing && result.missing.join(', ') + ") in schema: " + JSON.stringify(schema, null, 4) + " Error");
        assert.ok(result.valid, "Got unexpected response body: " + (result.error && result.error.message) + " " + JSON.stringify(schema, null, 4) + " Error");
      }
      orderURI = response.headers['location'];
      orderId = orderURI.split("/")[orderURI.split("/").length - 1];
      console.log(orderURI);
      done();
    });
  });
  //
  it("GET /users/{id}/orders -> 200", function(done) {
    var options = {
      url: endpoint + '/users/' + userName + '/orders',
      method: 'GET',
      qs: {},
      json: "",
      header: {}
    };

    request(options, function(error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 200, "Expect 200, got " + response.statusCode);
      var schema = {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "array",
        "properties": {
          "name": {
            "type": "string"
          },
          "address": {
            "type": "string"
          },
          "phone": {
            "type": "string"
          },
          "created_at": {
            "type": "integer"
          },
          "price": {
            "type": "number",
            "minimum": 0
          },
          "uri": {
            "type": "string"
          },
          "required": [
            "uri",
            "name",
            "address",
            "phone",
            "total_price",
            "created_at"
          ]
        }
      };
      if (schema != '') {
        // verify response body
        body = (body == '' ? '[empty]' : body);
        assert.doesNotThrow(function() {
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

  it("GET /users/{id}/orders/{orderId} -> 200", function(done) {
    var options = {
      url: orderURI,
      method: 'GET',
      qs: {},
      body: null,
      header: {}
    };

    request(options, function(error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 200, "Expect 200, got " + response.statusCode);
      var schema = {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "uri": {
            "type": "string"
          },
          "address": {
            "type": "string"
          },
          "phone": {
            "type": "string"
          },
          "total_price": {
            "type": "number",
            "minimum": 0
          },
          "created_at": {
            "type": "integer"
          },
          "order_items": {
            "type": "array",
            "items": {
              "properties": {
                "uri": {
                  "type": "string"
                },
                "product_id": {
                  "type": "string"
                },
                "quantity": {
                  "type": "number"
                },
                "amount": {
                  "description": "price for single item",
                  "type": "number"
                }
              },
              "required": [
                "uri",
                "product_id",
                "quantity",
                "amount"
              ]
            }
          },
          "required": [
            "name",
            "address",
            "phone",
            "price",
            "order_items",
            "uri",
            "created_at"
          ]
        }
      };
      if (schema != '') {
        // verify response body
        body = (body == '' ? '[empty]' : body);
        assert.doesNotThrow(function() {
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
  //
  it("POST /users/{id}/orders/{orderId}/payment -> 201", function(done) {
    var options = {
      url: orderURI + '/payment',
      method: 'POST',
      qs: {},
      json: {
        "pay_type": "CASH",
        "amount": 100
      },
      header: {}
    };

    request(options, function(error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 201, "Expect 201, got " + response.statusCode);
      var schema = "";
      if (schema != '') {
        // verify response body
        body = (body == '' ? '[empty]' : body);
        assert.doesNotThrow(function() {
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

  it("GET /users/{id}/orders/{orderId}/payment -> 200", function(done) {
    var options = {
      url: orderURI + '/payment',
      method: 'GET',
      qs: {},
      body: "",
      header: {}
    };

    request(options, function(error, response, body) {
      assert.isNull(error);
      assert.isNotNull(response, 'Response');
      assert.equal(response.statusCode, 200, "Expect 200, got " + response.statusCode);
      var schema = {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "order_uri": {
            "type": "string"
          },
          "uri": {
            "type": "string"
          },
          "pay_type": {
            "enum": [
              "CASH",
              "CREDIT_CARD"
            ]
          },
          "amount": {
            "type": "number"
          },
          "total_price": {
            "type": "number",
            "minimum": 0
          },
          "created_at": {
            "type": "integer"
          },
          "required": [
            "order_uri",
            "uri",
            "pay_type",
            "amount",
            "created_at"
          ]
        }
      };
      if (schema != '') {
        // verify response body
        body = (body == '' ? '[empty]' : body);
        assert.doesNotThrow(function() {
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

});
