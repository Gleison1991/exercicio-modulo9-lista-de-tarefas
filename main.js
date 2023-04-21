$(document).ready(function() {

    $('form').on('submit',function(e) {
        e.preventDefault();

        const tarefa = $('#tarefa').val();
        const novaTarefa = $('<li></li>');
        $(novaTarefa).html(tarefa);
        $(novaTarefa).appendTo("ul");
        $("li").click(function(){
            $(this).addClass("riscar");
        });
        
        $('#tarefa').val('');
    });
});

