var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "P@ssw0rd1!",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});
function afterConnection() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      console.log(res);
      connection.end();
    });}
  
  function runSearch() {
    inquirer
    .prompt({
        name: "action",
        type: "rawlist",
        message: "What is the ID of the item you would like to buy?",
        choices: [
    "Enter an ID number between 1 and 10",
     ]})}
