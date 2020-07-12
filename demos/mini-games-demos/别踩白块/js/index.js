// window.addEventListener('load', function() {
//     var state = 0;
//     var speed = 6;
//     var flag = false;
//     // createrow();

//     var start = document.querySelector('.start');
//     start.addEventListener('click', function() {
//         if (!flag) {
//             init();
//         } else {
//             alert('游戏已经开始，无须再次点击！')
//         }
//     })

//     /*
//      *    初始化 init
//      */
//     function init() {
//         flag = true;
//         for (var i = 0; i < 4; i++) {
//             createrow();
//         }
//         var main = document.querySelector("#main");
//         // 添加onclick事件
//         main.onclick = function(ev) {
//             ev = ev || event
//             judge(ev);
//         }

//         // 定时器 每30毫秒调用一次move()
//         clock = window.setInterval(move(), 30);
//     }

//     //创建div，参数className是类名

//     function creatediv(className) {
//         var div = document.createElement('div');
//         div.className = className;
//         return div;
//     }


//     // start.addEventListener('c')

//     //创建row，每个row是一行，一行有四个cel格子
//     function createrow() {
//         var con = document.querySelector('#con');
//         var row = creatediv('row'); //创建row
//         var arr = createcell(); //创建cell

//         con.appendChild(row);

//         for (var i = 0; i < 4; i++) {
//             row.appendChild(creatediv(arr[i]));
//         }

//         if (con.firstChild == null) {
//             con.appendChild(row);
//         } else {
//             con.insertBefore(row, con.firstChild);
//         }
//     }

//     //当框内纵向有6列的时候，需要删除最后一个row
//     function delrow() {
//         var con = document.querySelector('#con');
//         if (con.childNodes.length == 6) {
//             con.removeChild(con.lastChild);
//         }
//     }

//     //创建一个类名的数组，其中一个为cell black 其余为cell
//     function createcell() {
//         var temp = ['cell', 'cell', 'cell', 'cell', ];
//         var i = Math.floor(Math.random() * 4);
//         temp[i] = 'cell black';
//         return temp;
//     }

//     //让黑块动起来
//     function move() {
//         var con = document.querySelector('#main');
//         var top = parseInt(window.getComputedStyle(con, null)['top']);

//         if (speed + top > 0) {
//             top = 0;
//         } else {
//             top += speed;
//         }
//         con.style.top = top + 'px'; //不断移动top值，使它动起来
//         over();
//         if (top == 0) {
//             createrow();
//             con.style.top = '-102px';
//             delrow();
//         }
//     }

//     //加速函数
//     function speedup() {
//         speed += 2;
//         if (speed == 20) {
//             alert('你超神');
//         }
//     }

//     // 判断游戏是否结束

//     function over() {
//         var rows = con.childNodes;
//         if ((rows.length == 5) && (rows[rows.length - 1].pass !== 1)) {
//             fail();
//         }
//         for (let i = 0; i < rows.length; i++) {
//             if (rows[i].pass1 == 1) {
//                 fail();
//             }
//         }

//     }

//     // 游戏结束
//     function fail() {
//         clearInterval(clock);
//         flag = false;
//         confirm('你的最终得分为 ' + parseInt($('score').innerHTML));
//         var con = $('con');
//         con.innerHTML = "";
//         $('score').innerHTML = 0;
//         con.style.top = '-408px';

//     }

//     // 判断是否点击黑块、白块
//     function judge(ev) {
//         if (ev.target.className.indexOf('black') == -1 && ev.target.className.indexOf('cell') !== -1) {
//             ev.target.parentNode.pass1 = 1; //定义属性pass，表示此行row的白块已经被点击
//         }

//         if (ev.target.className.indexOf('black') !== -1) { //点击目标元素 类名中包含 black 说明是黑块
//             ev.target.className = 'cell';
//             ev.target.parentNode.pass = 1; //定义属性pass，表明此行row的黑块已经被点击
//             score();
//         }
//     }

//     // 记分
//     function score() {
//         var score = document.querySelector('#score');
//         var newscore = parseInt(score.innerHTML) + 1; //分数加一
//         score.innerHTML = newscore; //修改分数
//         if (newscore % 10 == 0) { //当分数是10 的倍数时使用加速函数，越来越快
//             speedup();
//         }
//     }

// })

// //创建每行row块
// //创建每行里面的4个白块和黑块，可以利用随机数来做
// //当纵向有6个row时，开始删除最底层的row

// 工具封装
// 根据id来获取元素
function $(id) {
    return document.getElementById(id);
}

// 创建div, className是其类名
function creatediv(className) {
    var div = document.createElement('div');
    div.className = className;
    return div;
}
var clock = null;
var state = 0;
var speed = 6;
var flag = false;


//点击开始游戏按钮 开始游戏
function start() {
    if (!flag) {
        init();
    } else {
        alert('游戏已经开始，无须再次点击！')
    }
}

/*
 *    初始化 init
 */
function init() {
    flag = true;
    for (var i = 0; i < 4; i++) {
        createrow();
    }

    // 添加onclick事件
    $('main').onclick = function(ev) {
        ev = ev || event
        judge(ev);
    }

    // 定时器 每30毫秒调用一次move()
    clock = window.setInterval('move()', 30);
}


// 判断是否点击黑块、白块
function judge(ev) {
    if (ev.target.className.indexOf('black') == -1 && ev.target.className.indexOf('cell') !== -1) {
        ev.target.parentNode.pass1 = 1; //定义属性pass，表示此行row的白块已经被点击
    }

    if (ev.target.className.indexOf('black') !== -1) { //点击目标元素 类名中包含 black 说明是黑块
        ev.target.className = 'cell';
        ev.target.parentNode.pass = 1; //定义属性pass，表明此行row的黑块已经被点击
        score();
    }


}

// 判断游戏是否结束

function over() {
    var rows = con.childNodes;
    if ((rows.length == 5) && (rows[rows.length - 1].pass !== 1)) {
        fail();
    }
    for (let i = 0; i < rows.length; i++) {
        if (rows[i].pass1 == 1) {
            fail();
        }
    }

}

// 游戏结束
function fail() {
    clearInterval(clock);
    flag = false;
    confirm('你的最终得分为 ' + parseInt($('score').innerHTML));
    var con = $('con');
    con.innerHTML = "";
    $('score').innerHTML = 0;
    con.style.top = '-408px';

}

// 创造一个<div class="row">并且有四个子节点<div class="cell">
function createrow() {
    var con = $('con');
    var row = creatediv('row'); //创建div className=row
    var arr = creatcell(); //定义div cell的类名,其中一个为cell black

    con.appendChild(row); // 添加row为con的子节点

    for (var i = 0; i < 4; i++) {
        row.appendChild(creatediv(arr[i])); //添加row的子节点 cell
    }

    if (con.firstChild == null) {
        con.appendChild(row);
    } else {
        con.insertBefore(row, con.firstChild);
    }
}


// 创建一个类名的数组，其中一个为cell black, 其余为cell
function creatcell() {
    var temp = ['cell', 'cell', 'cell', 'cell', ];
    var i = Math.floor(Math.random() * 4); //随机产生黑块的位置 Math.random()函数参数 0~1的随机数
    temp[i] = 'cell black';
    return temp;
}

//让黑块动起来
function move() {
    var con = $('con');
    var top = parseInt(window.getComputedStyle(con, null)['top']);

    if (speed + top > 0) {
        top = 0;
    } else {
        top += speed;
    }
    con.style.top = top + 'px'; //不断移动top值，使它动起来
    over();
    if (top == 0) {
        createrow();
        con.style.top = '-102px';
        delrow();
    }
}


// 加速函数
function speedup() {
    speed += 2;
    if (speed == 20) {
        alert('你超神了');
    }
}

//删除某行
function delrow() {
    var con = $('con');
    if (con.childNodes.length == 6) {
        con.removeChild(con.lastChild);
    }
}

// 记分
function score() {
    var newscore = parseInt($('score').innerHTML) + 1; //分数加一
    $('score').innerHTML = newscore; //修改分数
    if (newscore % 10 == 0) { //当分数是10 的倍数时使用加速函数，越来越快
        speedup();
    }
}