$(window).on('load', function(){
  setTimeout(function(){
    console.log("Set execute")
    $('.steps-buttons a').on('click', function(){
      let thisReq = $(this).parents('.steps');
      console.log(thisReq)

      let require = [];
      $(thisReq).find('.hs-input[required]').each(function(){
        require.push($(this).val())
      })
      if(require.includes(null) || require.includes("")){
        console.log("not")
        $(thisReq).find('.hs-input[required]').each(function(){
          $('.custom-error').remove();
        })
        $(':not(select).hs-input[required]').each(function(){
          $(this).after('<span class="custom-error">Please enter a value <span>')
        })
        $('select.hs-input[required]').each(function(){
          $(this).next().after('<span class="custom-error">Please choose an answer from above options.<span>')
        })

      } else {
       $(thisReq).find('.hs-input[required]').each(function(){
          $('.custom-error').remove();
        })


        let id = $(this).attr('href');


        $(this).parent().parent().hide()
        $(this).parent().parent().siblings().hide()
        $(id).fadeIn();


        let totalSteps = $('.progress').attr('total');
        let curStep = $(id).attr('data-length');

        let pwid = (100 / parseInt(totalSteps)) * parseInt(curStep);
        $('.progress').children().css('width', pwid+"%" )

        console.log(pwid)


      }
    })
    
//     $('.hs-input[required]').change(function(){
//       var error =$(this).parent().find('.custom-error');
//       $(error).remove()
//     })
    
  }, 1000)
})