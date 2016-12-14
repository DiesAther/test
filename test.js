/**
 * Created by Fizz on 2016/11/27 0027.
 */

// var arr = [1,1,1,2,2,2,3,3,3,44,4,4,4];
// var asd = [1,1,1,2,2,2,3,3,3,44,4,4,4];
//
// Array.prototype.heavy = function () {
//     var n = []; //一个新的临时数组
//     for (var i = 0; i < this.length; i++) //遍历当前数组
//     {
//         if (n.indexOf(this[i]) == -1) n.push(this[i]);
//         //如果当前数组的第i已经保存进了临时数组，那么跳过，
//         //否则把当前项push到临时数组里面
//     }
//     return n;
// }
// console.log(asd.heavy());

// 菱形
// for(var i=1;i<=5;i++){
//     for(var j=0;j<5-i;j++) {
//         process.stdout.write(" ");
//     }
//     for(var k=0;k<2*i-1;k++){
//         process.stdout.write("*");
//     }
//     process.stdout.write("\n");
// }
//
//
// for(var i=1;i<=5-1;i++){
//     for(var j=0;j<i;j++) {
//         process.stdout.write(" ");
//     }
//     for(var k=1;k<=2*5-1-2*i;k++){
//         process.stdout.write("*");
//     }
//     process.stdout.write("\n");
// }


// var http = require("http");
// function handle_incoming_request(req, res) {
//     console.log("INCOMING REQUEST:" + req.method + " " +req.url);
//     res.writeHead(200,{"Comtent-Type":"application/json"});
//     res.end(JSON.stringify({error:null})+`\n`);
// }
// var s = http.createServer(handle_incoming_request);
// s.listen(8080);
// var arr = [1,1,2,3,2,1,2,3,4,1,2];  //数字
// var res = [];
// var obj = {};
// arr.map(function(item){
//     if(res.indexOf(item) == -1){
//         res.push(item);
//     }
//     if(!obj[item]){
//         res.push(item);
//         obj[item] = 1;
//     }
// });
// console.log(res);
//
//
// var arr = ["a", "b", "c"];
// console.log(Object.keys(arr));
//
//
// var my_obj = Object.create({}, { getFoo : { value : function () { return this.foo } } });
// my_obj.foo = 1;
//
// console.log(Object.keys(my_obj));

multiply(0.5,3);
function multiply(num1,num2) {
    var result = num1 * num2;
    console.log(result) ;
}


