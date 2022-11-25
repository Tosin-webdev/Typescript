"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    //   console.log(response.data);
    var todo = response.data;
    var ID = todo.ID;
    var title = todo.title;
    var finished = todo.finished;
    console.log("The todo with ID: ".concat(ID, " has a title of: ").concat(title, " is it finished? ").concat(finished));
});
