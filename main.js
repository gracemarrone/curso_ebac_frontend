$(document).ready(function(){

    $('form').on('submit',function(e){
        e.preventDefault();
        const tarefa = $('input').val();
        $(`<li>${tarefa}</li>`).appendTo('ol');
        $('input').val('');

    })

    $('ol').on('click','li', function(){
        $(this).toggleClass('tarefa-concluida');
    })


})

