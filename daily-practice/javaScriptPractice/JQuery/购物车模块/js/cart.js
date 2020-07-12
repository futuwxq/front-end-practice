$(function() {


    //  1 里面3个小的复选框按钮( j-checkbox )选中状态( checked )跟着全选按钮( checkall )走
    $(".checkall").change(function() {
        // alert(1);
        // 1.1 选中全选按钮，其他按钮都是选中状态
        $(".j-checkbox, .checkall").prop("checked", $(this).prop("checked"));
        // 7.1 判读全选是否被选中，选中就给cart-item添加背景属性
        if ($(this).prop("checked")) {
            $(".cart-item").addClass("check-cart-item");
        } else {
            $(".cart-item").removeClass("check-cart-item");
        }
    });
    $(".j-checkbox").change(function() {
        // 1.2 小的复选框全选， 全选按钮是选择状态， 否则未选择
        if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            $(".checkall").prop("checked", true);

            $(".checkall").prop("checked", false);

        }
        // 7.2 判读复选框是否被选中，选中就给cart-item添加背景属性
        if ($(this).prop("checked")) {
            $(this).parents(".cart-item").addClass("check-cart-item");
        } else {
            $(this).parents(".cart-item").removeClass("check-cart-item");
        }
    });
    //2.增减商品数量
    // 3. + 和 - 变化修改商品小计
    // 2.1 点击+ 就会让当前元素的兄弟input标签里面的值+1
    $(".increment").click(function() {
        // 获取文本框的数字
        var n = $(this).siblings(".itxt").val();
        n++;
        $(this).siblings(".itxt").val(n);
        // 3.1 获取商品单价， 小计 = 单价 * 数量
        var price = $(this).parents(".p-num").siblings(".p-price").text().substr(1);
        // console.log(price);
        // toFixed(2) 可以让我们保留2位小数
        var sum = (price * n).toFixed(2);
        // console.log(sum);
        $(this).parents(".p-num").siblings(".p-sum").text("￥" + sum);
        // 计算总数量和总金额
        getSum();
    });
    // 2.2 点击 - 数量 - 1 当数量为1不能在执行－号
    $(".decrement").click(function() {
        // 获取文本框的数字
        var n = $(this).siblings(".itxt").val();
        if (n === '1') {
            return;
        }
        n--;
        $(this).siblings(".itxt").val(n);
        var price = $(this).parents(".p-num").siblings(".p-price").text().substr(1);
        var sum = (price * n).toFixed(2);
        $(this).parents(".p-num").siblings(".p-sum").text("￥" + sum);
        // 计算总数量和总金额
        getSum();
    });
    // 4. 直接修改表单里面的值修改商品小计
    $(".itxt").change(function() {
        var n = $(this).val();
        var price = $(this).parents(".p-num").siblings(".p-price").text().substr(1);
        $(this).parents(".p-num").siblings(".p-sum").text("￥" + (n * price).toFixed(2));
        // 计算总数量和总金额
        getSum();
    });
    // 5.计算总计和总额
    // 计算总数量和总金额
    getSum();

    function getSum() {
        // alert(1);
        var count = 0;
        var money = 0;
        // 5.1通过遍历叠加每一行的商品数量
        $(".itxt").each(function(i, ele) {
            count += parseInt($(ele).val());
        });
        // 赋值
        $(".amount-sum em").text(count);
        // 5.2遍历叠加商品的小计
        $(".p-sum").each(function(i, ele) {
            // console.log($(ele).text());
            money += parseFloat($(ele).text().substr(1));
        });
        // 赋值
        $(".price-sum em").text("￥" + money.toFixed(2));
    };

    // 6. 删除商品
    // 6.1 点击每行右边的删除按钮，删除这一行
    $(".p-action a").click(function() {
        $(this).parents(".cart-item").remove();
        getSum();
    });
    // 6.2 删除选中的按钮，检查按钮选择状态 删除
    $(".remove-batch").click(function() {
            $(".j-checkbox:checked").parents(".cart-item").remove();
            getSum();
        })
        // 6.3 点击清除购物车，删除所有的商品
    $(".clear-all").click(function() {
        $(".cart-item").remove();
        getSum();
    })
})