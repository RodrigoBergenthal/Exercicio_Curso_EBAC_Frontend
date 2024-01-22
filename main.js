$(document).ready(function() {
    // Adiciona uma tarefa à lista
    $('#taskForm').submit(function(event) {
        event.preventDefault();
        var taskName = $('#taskName').val();
        if (taskName.trim() !== '') {
            $('#taskList').append('<li>' + taskName + '</li>');
            $('#taskName').val(''); // Limpa o campo após adicionar a tarefa
        }
    });

    // Adiciona/remova o efeito de linha através da classe 'completed'
    $('#taskList').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
