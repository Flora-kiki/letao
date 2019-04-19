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
                    }
                } 
            }
        }
    })
})