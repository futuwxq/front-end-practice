$(function() {

    // 1. 按下回车 把完整数据 存储到本地存储里面
    // 存储的数据格式  var todolist = [{title: "xxx", done: false}]
    $("#title").on("keyup", function(e) {
        if (e.keyCode === 13) { //enter键的ASCII是13
            var item = $(this).val();
            // console.log(item);
            // 先读取本地存储的数据
            if (item == "") {
                alert("请输入你的计划")
            } else {
                var local = getDate();
                local.push({ title: item, done: false });
                saveDate(local); //存储数据到本地
                // console.log(local);
                load();
                $(this).val("");
            }
        }

    });
    // 2. 删除操作
    $("ul ,ol").on("click", "a", function() {
        var data = getDate(); //获取数据
        var index = $(this).attr("id");
        data.splice(index, 1);
        saveDate(data); //重新保存数据
        load(); //重新渲染数据
    });
    // 3.点击待办事项复选框,就可以把当前数据添加到已完成事项里面
    $("ul , ol").on("click", "input", function() {
        var data = getDate(); //获取数据
        var index = $(this).siblings("a").attr("id");
        console.log(data[index]);
        data[index].done = $(this).prop("checked");
        saveDate(data); //保存数据
        load(); //重新渲染数据
    })

    // 读取本地存储的数据
    // 如果本地有todolist则返回这个数组，否则返回一个空数组
    function getDate() {
        var data = localStorage.getItem("todolist");
        if (data !== null) {
            return JSON.parse(data);
        } else {
            return [];
        }
    }
    // 把数据保存到本地存储
    function saveDate(data) {
        localStorage.setItem("todolist", JSON.stringify(data));
    }
    // 渲染数据
    load();

    function load() {
        var todoCount = 0; //统计正在进行的
        var doneCount = 0; //统计已经完成的
        var data = getDate(); //获取数据
        // console.log(data);
        // 遍历之前先要清空ol里面的元素内容 避免多次加载问题
        $("ol , ul").empty();
        $.each(data, function(i, ele) {
            // ele.done = true;
            // console.log(ele);

            if (ele.done) { //这件事已经做过了
                $("ul").prepend("<li><input type='checkbox' checked='checked' > <p>" + ele.title + "</p> <a href='javascript:;' id=" + i + " ></a></li>")
                doneCount++;
            } else { //这件事还没有做
                var li = $("<li><input type='checkbox'> <p>" + ele.title + "</p> <a href='javascript:;' id=" + i + "></a></li>");
                $("#todolist").prepend(li);
                todoCount++;
            }

        });
        $("#todocount").text(todoCount);
        $("#donecount").text(doneCount);
    }

})