$(function() {

$.get('json/questions.json',function(response) {
    var allQuestions = response.questions;
    for (var i = 0; i < 10;i++) {
        var q = allQuestions[i];
        appendQuestion(q,i);
    }

    function appendQuestion(q,i) {
        var questionContainer = $('<div></div>').addClass('question');
        var askQuestion = $('<p></p>').addClass('ask-question').text(q.question.title)
                                      .appendTo(questionContainer);
        for (var n = 0; n < 4; n++) {
            var answerQuestionContainer = $('<div></div>');
            var answerQuestionLabel = $('<label></label>').appendTo(answerQuestionContainer)
                                                            .text('Answer: ' + q.question.answers[n]);

            var answerQuestionInput = $('<input></input>').prop('type','input')
                                                      .prop('name',i)
                                                      .prop('type','radio')
                                                      .css('margin','10px')
                                                      .appendTo(answerQuestionLabel);
            questionContainer.append(answerQuestionContainer);
        }
       $('#allQuestions').append(questionContainer);
    }

    $('.question').on('click',function() {
        $(this).children().prop('disabled', true);

    })


});

});