$(function() {

$.get('json/questions.json',function(response) {
    var allQuestions = response.questions;
    for (var i = 0; i < 10;i++) {
        var q = allQuestions[i];
        appendQuestion(q,i);
    }

    function appendQuestion(q,i) {
        var questionContainer = $('<div></div>').addClass('question question' + i);
        var askQuestion = $('<p></p>').addClass('ask-question').text(q.question.title)
                                      .appendTo(questionContainer);
        for (var n = 0; n < 4; n++) {
            var answerQuestionContainer = $('<div></div>');
            var answerQuestionLabel = $('<label></label>').appendTo(answerQuestionContainer)
                                                            .text('Answer: ' + q.question.answers[n]);

            var answerQuestionInput = $('<input></input>').prop('type','input')
                                                      .prop('name',i)
                                                      .addClass('radioGroup' + i)
                                                      .prop('type','radio')
                                                      .css('margin','10px')
                                                      .appendTo(answerQuestionLabel);
            questionContainer.append(answerQuestionContainer);
        }
       $('#allQuestions').append(questionContainer);
    }

    $('#submitBt').on('click',function() {
    var resultsArr = [];
            for (var p = 0;p < 10;p++) {
                $('.question radioGroup' + p).each(function (index) {
                if ($(this':checked')) {
                    if (index == 0 ) {
                        resultsArr[p] = {"id" : p, "result" : true}
                    }
                    else {
                       resultsArr[p] = {"id" : p, "result" : false}
                    }
                }



                })
            }
         var region = $('#regionIn:selected').val();
         var age = $('#ageIn').val();
         var gender = $('#genderIn:selected').val();
         var data = { 'gender':gender,
                       'age':age,
                       'region':region,
                        'results':results }
        $.pos('cgi-bin/',data)
      })




});

});