// NProgress.start();
// setTimeout(function(){
//     NProgress.done();
// },2000)


$(document).ajaxStart(function(){
    // 开始进步条
    NProgress.start();
    console.log(2)
    
})

$(document).ajaxStop(function(){
    console.log(3)
    
    // 开始进步条
    // NProgress.done();
    setTimeout(function(){
    NProgress.done();
},500)
    
})
// 公用的功能
// 1、左侧二级菜单的切换
// 2、左侧整体菜单的切换
// 3、公共的退出gon
// 等待dom结构加载完成后，才会执行
$(function(){
    // 分类
    $('.lt-aside .category').click(function(){
        // console.log(1)
        $(this).next().stop().slideToggle();
    });
    // 汉堡
    $('.lt-topbar .icon_menu').click(function(){
        // console.log(11)
        $('.lt-aside').toggleClass('hidemenu');
        $('.lt-topbar').toggleClass('hidemenu');
    })
    // 退出模态框
    $('.lt-topbar .icon_logout').click(function(){
        // console.log(2)
        $('#logoutModal').modal('show');
    })
    // 点击模态框的退出按钮，来确认退出
    // 发送ajax请求，让服务器销毁用户的登录状态
    // $('#logoutBtn').click(function(){
    //    $.ajax({
    //     type: 'get',
    //     url: '/employee/employeeLogout',
    //     dataType: 'json',
    //     success: function( info ) {
    //     //   console.log( info );
    //       if (info.success) {
    //         // 退出成功, 跳转登录页
    //         location.href = 'login.html';
    //       }
    //     }
    //    })
    // })
    $('#logoutBtn').click(function() {

        $.ajax({
          type: 'get',
          url: '/employee/employeeLogout',
          dataType: 'json',
          success: function( info ) {
            console.log( info );
            if (info.success) {
              // 退出成功, 跳转登录页
              location.href = 'login.html';
            }
          }
        })
    
      })


})
