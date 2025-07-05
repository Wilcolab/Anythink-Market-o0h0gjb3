'use strict';

exports.calculate = function(req, res) {
  req.app.use(function(err, _req, res, next) {
    if (res.headersSent) {
      return next(err);
    }

    res.status(400);
    res.json({ error: err.message });
  });

  // TODO: Add operator
  var operations = {
    'add':      function(a, b) { return Number(a) + Number(b) },
    'subtract': function(a, b) { return a - b },
    'multiply': function(a, b) { return a * b },
    'power':    function(a, b) { return Math.pow(Number(a), Number(b)) },
    'divide':   function(a, b) { return a / b },
    'sqrt':     function(a) { return Math.sqrt(Number(a)) },
  };

  if (!req.query.operation) {
    throw new Error("Unspecified operation");
  }

  var operation = operations[req.query.operation];

  if (!operation) {
    throw new Error("Invalid operation: " + req.query.operation);
  }

  // Handle single operand operations (like sqrt)
  if (req.query.operation === 'sqrt') {
    if (!req.query.operand1 ||
        !req.query.operand1.match(/^(-)?[0-9\.]+(e(-)?[0-9]+)?$/) ||
        req.query.operand1.replace(/[-0-9e]/g, '').length > 1) {
      throw new Error("Invalid operand1: " + req.query.operand1);
    }
    
    if (Number(req.query.operand1) < 0) {
      throw new Error("Cannot calculate square root of negative number");
    }
    
    res.json({ result: operation(req.query.operand1) });
    return;
  }

  // Handle two operand operations
  if (!req.query.operand1 ||
      !req.query.operand1.match(/^(-)?[0-9\.]+(e(-)?[0-9]+)?$/) ||
      req.query.operand1.replace(/[-0-9e]/g, '').length > 1) {
    throw new Error("Invalid operand1: " + req.query.operand1);
  }

  if (!req.query.operand2 ||
      !req.query.operand2.match(/^(-)?[0-9\.]+(e(-)?[0-9]+)?$/) ||
      req.query.operand2.replace(/[-0-9e]/g, '').length > 1) {
    throw new Error("Invalid operand2: " + req.query.operand2);
  }

  res.json({ result: operation(req.query.operand1, req.query.operand2) });
};
