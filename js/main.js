$(function(){
  // 点击用户名显示详情
  $('.dialog-tit').click(function(e){
    e.stopPropagation();
    $(this).next('.dialog-panel').addClass('active')
  })

  $('.user-info').click(function(e){
    e.stopPropagation();
    $('.dialog-panel').addClass('active')
  })

  $(document).click(function(e){
    console.log(e.target)
    if(e.target.className !== 'user-info'){
      $('.dialog-panel').removeClass('active')
    }
  })
})