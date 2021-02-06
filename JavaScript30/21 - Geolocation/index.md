### 总结
该项目利用浏览器内置的 Web Geolocation API ，将获取地理位置和速度显示在网页中。

>Geolocation API就是用来获取到当前设备的经纬度（位置），带有此接口的对象可以用由 Navigator实现的属性NavigatorGeolocation.geolocation 来获得。  

Geolocation的 3 中方法
+ getCurrentPosition :获取当前位置
+ watchPosition：监听位置改变，每当设备位置改变时，返回一个 long 类型的该监听器的ID
+ clearWatch：取消由 watchPosition()注册的位置监听器。在 watchPosition 函数 error 结果里面清除监听器