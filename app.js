var express = require('express');

/*
 * body-parser is a piece of express middleware that 
 *   reads a form's input and stores it as a javascript
 *   object accessible through `req.body` 
 *
 * 'body-parser' must be installed (via `npm install --save body-parser`)
 * For more info see: https://github.com/expressjs/body-parser
 */
var bodyParser = require('body-parser');

// create our app
var app = express();

// instruct the app to use the `bodyParser()` middleware for all routes
app.use(bodyParser());

// A browser's default method is 'GET', so this
// is the route that express uses when we visit
// our site initially.
app.get('/orderStatus', function(req, res){
  // The form's action is '/' and its method is 'POST',
  // so the `app.post('/', ...` route will receive the
  // result of our form
  var html = '<form action="/" method="post">' +
               '<button type="submit">Order Mode</button>' +
               '<button type="submit">Training Mode</button>' +
               '<button type="submit">Breakdown Mode</button>' +
            '</form>';
               
  res.send(html);
});


app.get('/receiveNotification', function(req, res){
  // The form's action is '/' and its method is 'POST',
  // so the `app.post('/', ...` route will receive the
  // result of our form
  var html = '<form action="/" method="post">' +
               '<p>Receive order</p>' + '<button type="submit">Yes</button>' + '<button type="submit">No</button>' +
               '<br>'+ '<br>' +
               'Vendor Address' +
               '<br>' + 
               'Customer Address' +
               '<br>' + 
               'Total Estimated Time' +
               '<br>'+
             '</form>'
            ;
               
  res.send(html);
});


app.get('/reachingVendor', function(req, res){
  // The form's action is '/' and its method is 'POST',
  // so the `app.post('/', ...` route will receive the
  // result of our form
  var html = '<form action="/" method="post">' +
               '<b>Status</b>    Reaching vendor' + '<br>' +
               'Vendor Address  ' + '<button type="submit">Maps</button>' + '<br>'+
               '<b>Call Vendor</b>    93768299292' + '<br>' +
               '<b>Delay Warning</b>' + '<br>' + 
               'Reached  ' + '<button type="submit">Yes</button>' + '<button type="submit">No</button>' + '<br>'+
             '</form>'
            ;
               
  res.send(html);
});


app.get('/checkingOrder', function(req, res){
  // The form's action is '/' and its method is 'POST',
  // so the `app.post('/', ...` route will receive the
  // result of our form
  var html = '<form action="/" method="post">' +
               '<b>Customer Name</b>    XYZ' + '<br>' +
               '<button type="submit">Invoice</button>' + '<br>'+
               '<b>Address</b>    skadjsaljd;K;Ds;dksadksapdodkPSAJDLSDJasldk' + '<br>' +
               '<b>Order Amount</b>    500' + '<br>' +
               'Order Correct  ' + '<button type="submit">Yes</button>' + '<button type="submit">No</button>' + '<br>'+
             '</form>'
            ;
               
  res.send(html);
});

app.get('/reachingCustomer', function(req, res){
  // The form's action is '/' and its method is 'POST',
  // so the `app.post('/', ...` route will receive the
  // result of our form
  var html = '<form action="/" method="post">' +
               '<b>Customer Name</b>    XYZ' + '<br>' +
               '<b>Call Customer</b>    93768299292' + '<br>' +
               'Customer Address  ' + '<button type="submit">Maps</button>' + '<br>'+
               'Reached  ' + '<button type="submit">Yes</button>' + '<button type="submit">No</button>' + '<br>'+
             '</form>'
            ;
               
  res.send(html);
});

app.get('/confirmOrder', function(req, res){
  // The form's action is '/' and its method is 'POST',
  // so the `app.post('/', ...` route will receive the
  // result of our form
  var html = '<form action="/" method="post">' +
                'Enter the code:' +
               '<input type="text" name="orderCode"/>' +
               '<br>' +
               '<button type="submit">Verify</button>' +               
             '</form>'
            ;
               
  res.send(html);
});



// This route receives the posted form.
// As explained above, usage of 'body-parser' means
// that `req.body` will be filled in with the form elements
/*
app.post('/', function(req, res){
  var userName = req.body.userName;
  var html = 'Hello: ' + userName + '.<br>' +
             '<a href="/">Try again.</a>';
  res.send(html);
});
*/
app.listen(3000);