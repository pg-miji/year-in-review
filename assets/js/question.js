var past_questions = [];
var next_questions = [];
$.getJSON("../assets/json/question_for_this_year.json", function (data) {
    past_questions = data.questions;
    get_random_question("past");
});
$.getJSON("../assets/json/question_for_next_year.json", function (data) {
    next_questions = data.questions;
});

function get_random_question(type) {
    var remaining_questions = (type === "next") ? next_questions : past_questions;
    if (remaining_questions.length === 0) {
        alert("준비한 질문을 모두 사용했습니다!");
        return;
    }

    const random_index = Math.floor(Math.random() * remaining_questions.length);
    const question = remaining_questions[random_index];
    remaining_questions.splice(random_index, 1);

    $("#text").empty();
    $("#text").append(question);
}