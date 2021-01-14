// var that; //class 需要一直和 that绑定在一起，太麻烦了，可以考虑bind方法
class Tab {
    constructor(id) {
            // 获取元素
            // console.log(1);
            // that = this;
            this.tab = document.querySelector(id);
            this.add = this.tab.querySelector('.tabadd');
            this.ul = this.tab.querySelector('.tabnav ul:first-child');
            this.tabcont = this.tab.querySelector('.tabcont');
            this.init();

        }
        //初始化函数
    init() {
        this.updateNode();
        //给+添加点击事件
        this.add.onclick = this.addTab.bind(this.add, this);
        // 给每个小li绑定点击事件
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab.bind(this.lis[i], this); //这里没有()是点击之后才会调用这个事件
            this.close[i].onclick = this.delTab.bind(this.close[i], this);
            this.spans[i].ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editTab;
        }
    }

    updateNode() {
        this.lis = this.tab.querySelectorAll('li');
        this.sections = this.tab.querySelectorAll('section');
        this.close = this.tab.querySelectorAll('.icon-guanbi');
        this.spans = this.tab.querySelectorAll('.tabnav li span:first-child');
    }

    //清除所有的类
    clearClass() {
            for (var i = 0; i < this.lis.length; i++) {
                this.lis[i].className = '';
                this.sections[i].className = '';
            }
        }
        //1 切换功能
    toggleTab(that) {
            that.clearClass(); //实例对象调用了这个类
            // console.log(this.index);
            // 当前li的下边框隐藏，添加active类
            this.className = 'active';
            //对应的内容section显示出来
            that.sections[this.index].className = 'conactive'; //这里的this指向的是点击的li，而不是实例，指向实例，此时用that替代
        }
        //2 添加功能
    addTab(that) {
            that.clearClass();
            // console.log(this);
            // 2.1 创建li 和section
            var i = Math.random();
            var li = '<li class="active"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>';
            var section = ' <section class="conactive">测试' + i + '</section>';
            that.ul.insertAdjacentHTML('beforeend', li);
            that.tabcont.insertAdjacentHTML('beforeend', section);
            that.init();
        }
        //3 删除功能 
    delTab(that, e) {
            e.stopPropagation(); //点击x冒泡会触发li的点击事件
            var index = this.parentNode.index; //小li的索引号
            // console.log(index);
            this.parentNode.remove();
            that.sections[index].remove(); //remove方法直接删除元素
            that.init();
            // 需要判断删除的元素是否为当前选中的元素
            if (document.querySelector('.active')) return;
            //如果不是当前选中元素，删除这个元素，就可以了，原来的选中状态li不变
            // 当我们删除了选中状态的这个li，让他的前一个li处于选中状态 此时也就相当于点击了前一个小li
            index--;
            // 手动调用我们的点击事件 不需要鼠标触发
            that.lis[index] && that.lis[index].onclick(); //如果只剩下一个li，点击删除之后，i为-1，lis[-1]是不存在的
        }
        //4 修改功能
    editTab() {
        // 双击禁止选定文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        var str = this.innerHTML;
        var index = this.parentNode.index; //小li的索引号
        console.log(index);
        this.innerHTML = '<input type="text" />';
        var input = this.children[0];
        input.value = str;
        input.select(); // 文本框里面的文字处于选定状态
        // 当我们离开文本框就把文本框里面的值给span 
        input.onblur = function() {
            this.parentNode.innerHTML = this.value;
        };
        // 按下回车也可以把文本框里面的值给span
        input.onkeyup = function(e) {
            if (e.keyCode === 13) {
                // 手动调用表单失去焦点事件  不需要鼠标离开操作
                this.blur();
            }
        }
    }
}
// 实例化
new Tab('#tab');