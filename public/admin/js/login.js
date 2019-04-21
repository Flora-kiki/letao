$(function(){
    $('#form').bootstrapValidator({
        feedbackIcons:{
            valid:"glyphicon glyphicon-ok",
            invalid:'glyphicon glyphicon-remove',
            validating:'glyphicon glyphicon-refresh',
        },
        fields:{
            username:{
                validators: {
                    notEmpty:'用户名不能为空',
                    stringLength:{
                        min:2,
                        max:6,
                        message:'用户名长度为2-6位'
                    },
                    callback:{
                        message:'用户名错误'
                    }
                } 
            },
            passwprd:{
                validators: {
                    notEmpty:'密码不能为空',
                    stringLength:{
                        min:6,
                        max:12,
                        message:'密码长度为6-12位'
                    },
                    callback:{
                        message:'密码错误'
                    }
                } 
            }
        }
    })
    $('#form').on('success.form.bv',function(e){
        e.preventDefault();
        
        $.ajax({
            type:'post',
            url:'/employee/employeeLogin',
            // 表单序列化
            data:$('#form').serialize(),
            dataType:'json',
            success:function(data){
                console.log(1)
                if(data.error===1000){
                    // alert('用户名不存在')
                  $('#form').data('bootstrapValidator').updateStatus('username','INVALID','callback');
                }
                if(data.error===1001){
                 $('#form').data('bootstrapValidator').updateStatus('password','INVALID','callback');
                }
                if(data.success){
                    // location.href='index.html';
                    console.log(1)
                }
            }
        })
    })
    // 表单重置功能
    $('[type="reset"]').click(function(){
        $('#form').data('bootstrapValidator').resetForm();
    })
})