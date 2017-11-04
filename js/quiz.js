$(function() {

    var allQuestions;

    $.get('json/questions.json',function(response) {
        allQuestions = response.questions;
        console.log(allQuestions);
        for (var i = 0; i < 10;i++) {
            var q = allQuestions[i];
            appendQuestion(q,i);
        }

        function appendQuestion(q,i) {
            var questionContainer = $('<div></div>').addClass('questionask' + i);
            var askQuestion = $('<p></p>').addClass('ask-question' + i).text(q.question.title)
                                      .appendTo(questionContainer);
            for (var n = 0; n < 3; n++) {
                var answerQuestionContainer = $('<div></div>').addClass('question' + i);
                var answerQuestionLabel = $('<label></label>').appendTo(answerQuestionContainer)
                                                            .text('Answer: ' + q.question.answers[n])
                                                            .prop('for', 'question' + i);
                var answerQuestionInput = $('<input></input>').prop('type','input')
                                                      .prop('id','question' + i)
                                                      .prop('type','radio')
                                                      .appendTo(answerQuestionLabel);
                //answerQuestionLabel.text('Answer: ' + n);
                questionContainer.append(answerQuestionContainer);
            }
            console.log(askQuestion);
            $('#allQuestions').append(questionContainer);
        }
    });

    $('#allQuestions').on('click', 'input[id^=question]', function (event) {
        var i = event.target.id.substr(8);
        if(i == 3) {
            localStorage.setItem(i, "correct");
        } else {
            localStorage.setItem(i, "wrong");
        } $('input#question' + i).prop('disabled', 'true');
    });

    $('#submit').on('click', function () {
        if(localStorage.length == 10) {
            for(var i = 0; i < 10; i++) {
                var q = allQuestions[i];
                getAnswer(q, i);
            }
        } localStorage.clear()
    });

    function getAnswer(q, i) {
        if(localStorage.getItem(i) == "correct") {
            $('div.questionask' + i).css('background-color', 'green');
            var answer = $('<p></p>').text("<b>Did you know...</b>")
                .appendTo($('div.questionask' + i));
        } else {
            $('div.questionask' + i).css('background-color', 'red');
            var answer = $('<p></p>').text("<b>Did you know... You are :(</b>")
                .appendTo($('div.questionask' + i));
        }
    }
});
/*

<div class="question">
        <p class="ask-question">What is the name of my pet dolphin ?</p>
        <div class="answer-question radio radio-group">
            <label><input type="radio" name="question2">mathew</label>
        </div>
        <div class="radio">
            <label><input type="radio" name="question2">mark</label>
        </div>
        <div class="radio">
            <label><input type="radio" name="question2">luke</label>
        </div>
        <div class="radio">
            <label><input type="radio" name="question2">dolphin</label>
        </div>
    </div>*/

/*    {"questions":
    [
    {"question" : {
    "title" : "What is the income shared by the lowest 20% of the population?",
    "IND-key" : "SI.DST.FRST.20",
    "numberUsersCorrect" : "0",
    "totalUsersAnswered" : "0",
    "answers" : ["4.7", "10", "15", "2"]
    }},*/
