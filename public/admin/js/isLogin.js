

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

