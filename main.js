$(document).ready(function () {
    $('header button').click(function () {
        $('form').slideDown();
    });

    $('#botao-cancelar').click(function () {
        $('form').slideUp();
    });

    $('form').on('submit', function (e) {
        e.preventDefault();

        const novaTarefa = $('#nova-tarefa').val();
        if (novaTarefa) {

            if ($('#lista-tarefas').css('display') === 'none') {
                $('#lista-tarefas').slideDown();
            }

            const adcTarefa = $('<li style="display: none"></li>').text(novaTarefa);

            $('#lista-tarefas').append(adcTarefa);
            adcTarefa.slideDown();

            $('#nova-tarefa').val('');
        }
    });

    $(document).on('click', '#lista-tarefas li', function () {
        $(this).toggleClass('riscar');
    });
});