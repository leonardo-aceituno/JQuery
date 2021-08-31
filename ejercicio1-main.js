$(document).ready(function () {
    $('#box-01').on('click', function (e) {
        // $('#box-02').css({ 
        //     'fontSize' : '100px', 
        //     'color' : 'white',
        //     'backgroundColor': 'red',
        //     'text-align':'center'
        // })




        let box02 =  $('#box-02')
        if(box02.hasClass('clase01')){
            box02
            .addClass('clase02')
            .removeClass('clase01')
        }else{
            box02
            .addClass('clase01')
            .removeClass('clase02')
        }



    })



  
})