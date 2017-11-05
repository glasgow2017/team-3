$(function() {

$.get('json/questions.json',function(response) {
    var allQuestions = response.questions;
    var random = [allQuestions.length];

    for (var i = 0; i < 10; i++) {
        random[i] = Math.floor(Math.random()*(allQuestions.length));
        var q = allQuestions[random[i]];
        if(q.question.answers[0] == null) {
            if(i!=0) i--;
            else i = 0;
        } else {
            appendQuestion(q, i);
        }
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
    $('#submitBt').on('click',function(e) {
        e.preventDefault();
        var resultsArr = [];
        for (var p = 0;p < 10;p++) {
            $('.question' + p + ' input').each(function (  index ) {
                if ($(this).is(':checked')) {
                    if (index == 0 ) {
                        resultsArr[p] = {"id" : p, "result" : true}
                    } else {
                        resultsArr[p] = {"id" : p, "result" : false}
                    }
                }
            });
        }

        var region = $('#regionIn').find(':selected').val();
        var age = $('#ageIn').val();
        var gender = $('#genderIn').find(':selected').val();
        var data = {  'gender':gender,
            'age':age,
            'region':region,
            'results':JSON.stringify(resultsArr) };
        console.log(data);
        $.post('cgi-bin/quizForm.py',data)
    });

    $('input').on('click', function (event) {
        var group = $(this).attr('name');

        $('.question' + group + ' input').each(function( index ) {
            $(this).attr('disabled','true');
            if ($(this).is(':checked')) {
                if (index == 0 ) {
                    $('.question' + group).addClass('correct');
                } else {
                    $('.question' + group).addClass('false');
                }
            }
        });
    });

});

});
