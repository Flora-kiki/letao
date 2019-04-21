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
},4000)
    
})
