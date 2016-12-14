/**
 * Created by Kevin on 18/8/2016.
 */
const Router = require('koa-router');
const co = require('co');
const fs = require('fs');
const mainRouter = new Router();

mainRouter.get('/', co.wrap(function*(ctx, next) {
    yield ctx.render('index', {content: 'Hello World!'});
}));

var readFile = function (line) {
    return `这是一个文件，第${line}行`;
}

mainRouter.get('/demo4', co.wrap(function*(ctx, next) {
    ctx.body = "我的名字是" + ctx.query.name + "," + "今年" + ctx.query.age + "岁";
    yield next();
}));

mainRouter.get("/demo5", co.wrap(function *(ctx, next) {
    // ctx.body = "第1个的参数值为:"+ ctx.query.value +" * 1 = "+ ctx.query.value ;
    let s = ctx.query.value;
    s = s.split(",");
    let strNew = '';
    for (i = 0; i < s.length; i++) {
        let jieguo = s[i] * [i + 1]
        strNew += `第${i + 1}个参数的值为：${s[i]} * ${i + 1} = ${jieguo}\n`;
        //ctx.body = "第"+ [i+1] +"个参数的值为:"+s[i]+"*"+[i+1]+"="+ [s[ i] * [i+1]];
        // console.log(typeof (ctx.body));
    }
    ctx.body = strNew;
    yield next();
}));

mainRouter.get("/demo6", co.wrap(function *(ctx, newValues) {
    let tValues = ctx.query.values.split('|');
    let result = {};
    for (let t of tValues) {
        let count = result[t];
        if (!count) {
            result[t] = 1;
        } else {
            count += 1;
            result[t] = count;

        }
    }
    ctx.body = '';
    let allKeys = Object.keys(result);
    for (let key of allKeys) {
        ctx.body += `${key} 出现了: ${result[key]} 次\n`;
    }
    // let content = ctx.query.content;
    // let newStr;
    // let vuleB = 'b';
    // let countB = 0;
    // newStr = tValues.replace(/1/g, content)
    // console.log(newStr)
    // for(let i = 0; i < newStr.length; i ++) {
    //     console.log(newStr[i])
    //     if(newStr[i].toLowerCase() == vuleB.toLowerCase()) {
    //         countB++;
    //     }
    // }
    //
    // return {newArr: newArr, newStr: newStr, countB: 'B出现了' + countB};


// var use ={
//     kevin:{
//         name:"Kevin",
//         phone:"13632672159"
//     },
//     Abc:{
//         name:"sbc",
//         phone:"123456"
//     }
// }
// console.log(Object.keys(use).length)
// mainRouter.get('/user',co.wrap(function *(ctx,next) {
//     let quanbu = ctx.query.action;
//     let mingzi = ctx.query.name;
//     let dianhua = ctx.query.phone
//     ctx.body = '';
//     if (quanbu == "list"){
//         ctx.body = `总共有${Object.keys(use).length}个数据:\n`
//         for( let i in use){
//             ctx.body += `用户名:${use[i].name}\n电话:${use[i].phone}\n`;
//         }
//     }else if (quanbu == "info"){
//         let mingzi1 = mingzi.toLowerCase();
//             ctx.body = `查询结果为:\n用户名:${use[mingzi1].name}\n电话:${use[mingzi1].phone}\n列表:\n`
//         for (let i in use) {
//             console.log(use[i]);
//             ctx.body += `Name:${use[i].name}\nPhone:${use[i].phone}\n`;
//         }
//     }else if (quanbu =="add"){
//         let mingzi2 = mingzi.toLowerCase();
//
//             if (mingzi2 in use) {
//                 ctx.body = `用户已经存在`;
//             }else {
//                 use[mingzi2] = {name: mingzi, phone: dianhua}
//                 ctx.body = `添加成功\n列表:\n`
//                 for (let i in use) {
//                     ctx.body += `\nName:${use[i].name}\nPhone:${use[i].phone}\n`;
//                 }
//             }
//     }else if (quanbu == "delete"){
//         let mingzi3 = mingzi.toLowerCase();
//         delete use[mingzi3];
//         ctx.body=`删除成功\n列表:\n`
//         for (let i in use) {
//             ctx.body += `Name:${use[i].name}\nPhone:${use[i].phone}\n`;
//         }
//
//     }else if (quanbu == "update"){
//         let mingzi4 = mingzi.toLowerCase();
//              if (mingzi4 in use){
//                  use[mingzi4] = {name:mingzi,phone:dianhua};
//                  ctx.body += `用户名:${mingzi}\n更新成功\n列表:\n`
//                  for (let i in use) {
//                      ctx.body += `Name:${use[i].name}\nPhone:${use[i].phone}\n`;
//                  }
//              }else {
//                  ctx.body =`用户名不存在`
//              }
//
//
//     }


//     let user ={
//         name:"Kevin",phone:"13632672159"
// }
//     if (action = "info") {
//         let newStr2 = '';
//         for (let key in Kevin) {
//             if (name.toLowerCase() == key.toLowerCase()) {
//              console.log(key)
//                 newStr2 += '用户名：' + key + '\n' + '手机号码：' + Kevin[key];
//             }
//         }
//         ctx.body = newStr2;
//     }
}));


mainRouter.get('/a', co.wrap(function*(ctx, next) {
    let line = parseInt(ctx.query.line);
    let content = readFile(line);
    ctx.body = content;
    // if (ctx.query.line == 39)
}));


mainRouter.get('/order/list', co.wrap(function*(ctx, next) {
    let page = parseInt(ctx.query.page);
    if (page == 1) {
        ctx.body = "这是第一页"
    } else if (page == 2) {
        ctx.body = {code: 0, data: [1, 2, 3]}
    } else {
        ctx.body = "不支持";
    }
}));


mainRouter.get('/test2', co.wrap(function*(ctx, next) {
    ctx.body = '123';
}));

// mainRouter.get('/info', co.wrap(function*(ctx, next){
//     ctx.body = {code: 0, data: [1, 2, 3]};
//     yield next();
// }));


//     let name = ctx.query.name;
//     let vip = "kevin"
//     let user = {
//         name : "Kevin" ,
//         phone : 13632672159
//     }
//
//     if (name == vip){
//         ctx.body = user.name +"\n"+ user.phone
//     }else {
//         return""
//     }
//


var use = [
    {
        name: 'Kevin',
        phone: '13632672159'
    },
    {
        name: 'AA',
        phone: '13632677777'
    }
];

mainRouter.get('/user', co.wrap(function *(ctx, next) {
    let act = ctx.query.action;
    let obj = ctx.query.name;
    let nub = ctx.query.phone;
    ctx.body = "";
    if (act == "list") {
        ctx.body = (`总共有${use.length}条数据\n列表:\n`);
        return newobj()

    } else if (act == "info") {
        for (var i in use)
            if (use[i].name == obj) {
                ctx.body += (`查询结果:\n用户名:${use[i].name}\n手机号码:${use[i].phone}\n列表:\n`);
                return newobj()
            }
    } else if (act == "add") {
        var arr = {name: `${obj}`, phone: `${nub}`}
        use.push(arr)
        ctx.body = `用户名:${obj}\n添加成功\n列表:\n`
        return newobj()

    } else if (act == "delete") {
        for (var s=use.length-1;s>-1;s--) {
            if (use[s].name == obj) {
                use.splice(s, 1);
            }
        }
        return newobj();
    }
    function newobj() {
        for (var i = 0; i < use.length; i++) {
            ctx.body += (`${(i + 1)}.name:${use[i].name}\n phone:${use[i].phone}\n`);

        }

    }
}));

mainRouter.get('/file', co.wrap(function *(ctx, next) {
    let act = ctx.query.action;
    let text = ctx.query.text;
    let New = ctx.query.new;
    let nsevent = fs.readFileSync(`IBCollectionItemView.m`, `utf-8`);

    ctx.body = '';

    if (act == 'query') {
        let n = (nsevent.split(text)).length-1;
        ctx.body += `${text} 出现了: ${n} 次\n分别在:\n`;
        let line = (nsevent.split(`\n`));
        for (let i=0;i<line.length;i++){
            if(line[i].toString().indexOf(text)>-1) {
                let index = -1;
                do
                {
                    index = line[i].indexOf(text, index+1);
                    if (index != -1) {
                        ctx.body+= `第${i+1}行 ${index}之后开始\n`;
                    }
                } while (index != -1);
            }
                }
    }else if (act=='replace'){
        let reg = new RegExp(text,'g');
        let newstr = nsevent.replace(reg,New);
        console.log(newstr)
                fs.writeFileSync("IBCollectionItemView_New.m",newstr)

        let n = (nsevent.split(text)).length-1;
        ctx.body += `替换 ${text} ${n}处`;

    };

}));
var mysql = require('mysql');
mainRouter.get('/person', co.wrap(function *(ctx, next) {
    let newName = ctx.query.newName;
    let name = ctx.query.name;
    let action = ctx.query.action;
    let power = ctx.query.power;
    let pass = ctx.query.password;
    let chinese = ctx.query.chinese;
    let math = ctx.query.math;
    let english = ctx.query.english;
    let operation = ctx.query.operation
    ctx.body=''
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '820213838',
        database: 'lily'
    });
    connection.connect();
    if (action=="login"){
        yield(function(cb){
                connection.query(`SELECT * FROM admin`,function(err,admin){
                    if(err){
                        throw err;
                    }else {
                        for (let i = 0; i < admin.length; i++) {
                            if (name == admin[i].name && pass == admin[i].password) {
                                if (admin[i].power == 0) {
                                    ctx.response.redirect('/person?action=lily&operation=list');
                                } else if (admin[i].power == 1) {
                                    ctx.response.redirect('/person?action=teacher&operation=list');
                                } else if (admin[i].power == 2) {
                                    ctx.response.redirect(`/person?action=student&name=${name}`);
                                }
                            } else {
                                ctx.body = '用户名或密码不正确，请确认！';
                            }
                        }
                    }
                    cb(err,admin);
                });
                connection.end();
            });
    }
      if (action=="lily"&&operation=="list"){
          yield (function (cb) {
                      connection.query(`SELECT * FROM admin `,function (err, list) {
                          for (let s = 0; s < list.length; s++){
                              ctx.body+=`用户名:${list[s].name}\n密码:${list[s].password}\n`
                          }
                          cb(err)
                      });
                      connection.end();
                  })

      }
    if (action=="lily"&&operation=="add"){
        yield (function (cb) {
            connection.query(`INSERT INTO admin SET name =? ,password=?,power="1"`, [name, pass], function (err, rows) {
                ctx.body = '添加成功'
                cb(err)
            });
            connection.end();
        })
    }
    if (action=="lily"&&operation=="delete"){
            yield (function (cb) {
                connection.query(`DELETE FROM admin WHERE name = ?`, [name], function (err, rows) {
                    ctx.body = '删除成功'
                    cb(err)
                });
                connection.end();
            })
    }
    if (action=="lily"&&operation=="update"){
        yield (function (cb) {
                    connection.query(`UPDATE admin SET  password = ? WHERE name = ?` ,[pass,name], function (err, update) {
                        ctx.body = `更新成功`
                        cb(err)
                    });
                    connection.end();
            })
    }
    if (action=="teacher"&&operation=="list"){
        yield (function (cb) {
            connection.query(`SELECT *,(chinese+math+english)/3 as average,chinese+math+english as total FROM  student  `,function (err, list) {
                for (let s = 0; s < list.length; s++){
                    ctx.body+=`学生:${list[s].name}\n语文成绩:${list[s].chinese}\n数学成绩:${list[s].math}\n英语成绩:${list[s].english}\n平均分:${list[s].average}分\n总分${list[s].total}分\n\n`
                }
                cb(err)
            });
            connection.end();
        })
    }
    if (action=="teacher"&&operation=="add"){
        yield (function (cb) {
            connection.query(`INSERT INTO student SET name =?,chinese=?,math=?,english=?`, [name,chinese,math,english], function (err, rows) {
                ctx.body = '添加成功'
                cb(err)
            });
            connection.end();
        })
    }
    if (action=="teacher"&&operation=="delete"){
        yield (function (cb) {
            connection.query(`DELETE FROM student  WHERE name = ?`, [name], function (err, rows) {
                ctx.body = '删除成功'
                cb(err)
            });
            connection.end();
        })
    }
    if (action=="teacher"&&operation=="update"){
        yield (function (cb) {
            connection.query(`UPDATE student SET chinese=?,math=?,english=? WHERE name = ?`, [chinese,math,english,name], function (err, rows) {
                ctx.body = '修改成功'
                cb(err)
            });
            connection.end();
        })
    }
    if (action=="student"){
        yield (function (cb) {
            connection.query(`SELECT *,(chinese+math+english)/3 as average,chinese+math+english as total FROM  student WHERE name = ? `,[name],function (err, info) {
                ctx.body=''
                           for (i=0;i<info.length;i++){
                                ctx.body =`你的成绩为:\n语文:${info[i].chinese}分\n数学:${info[i].math}分\n英语:${info[i].english}分\n平均分:${info[i].average}分\n总分${info[i].total}分`
                           }
                cb(err)
            });
            connection.end();
        })
    }


    // if (action=="add"&&power==0) {
    //     yield (function (cb) {
    //         connection.query(`INSERT INTO admin SET name =? ,password=?,power="1"`,[name,pass], function (err, rows) {
    //             ctx.body = '添加成功'
    //             cb(err)
    //         });
    //         connection.end();
    //     })
    // }else if (action=="add"&&power==1){
    //     yield (function (cb) {
    //         connection.query(`INSERT INTO student SET name =? ,chinese=?,math=?,english=?`,[name,chinese,math,english], function (err, rows) {
    //             ctx.body = '添加学生成绩成功'
    //             cb(err)
    //         });
    //         connection.end();
    //     })
    // }
    // if (action=="delete"&&power==0) {
    //     yield (function (cb) {
    //         connection.query(`DELETE FROM admin WHERE name = ?`, [name], function (err, rows) {
    //             ctx.body = '删除成功'
    //             cb(err)
    //         });
    //         connection.end();
    //     })
    // }else if (action=="delete"&&power==1){
    //     yield (function (cb) {
    //         connection.query(`DELETE FROM admin WHERE name = ?`, [name], function (err, rows) {
    //             ctx.body = '删除学生成功'
    //             cb(err)
    //         });
    //         connection.end();
    //     })
    // };
    // if (action=="info") {
    //     yield (function (cb) {
    //         connection.query(`SELECT *,(chinese+math+english)/3 as average,chinese+math+english as total FROM  student WHERE name = ?`, [name], function (err, info) {
    //             ctx.body=''
    //            for (i=0;i<info.length;i++){
    //                 ctx.body =`${info[i].name}的成绩为:\n语文:${info[i].chinese}分\n数学:${info[i].math}分\n英语:${info[i].english}分\n平均分:${info[i].average}分\n总分${info[i].total}分`
    //            }
    //             cb(err)
    //         });
    //         connection.end();
    //     })
    // };
    // if (action=="update"&&power==0) {
    //     yield (function (cb) {
    //         connection.query(`UPDATE admin SET  password = ? WHERE name = ?` ,[pass,name], function (err, update) {
    //
    //             ctx.body = `更新成功`
    //
    //             cb(err)
    //         });
    //         connection.end();
    //     })
    // }else if (action=="update"&&power==1){
    //     yield (function (cb) {
    //         connection.query(`UPDATE admin SET  password = ? WHERE name = ?` ,[pass,name], function (err, update) {
    //             ctx.body = `更新学生成功`
    //             cb(err)
    //         });
    //         connection.end();
    //     })
    // }
    //
    // connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
    //     if (err) throw err;
    //
    //     console.log('The solution is: ', rows[0].solution);
    //     connection.end();
    // });
}));




module.exports = [mainRouter.routes()];