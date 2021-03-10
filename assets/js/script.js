var tasks = {};

// load task function
var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));

    // if nothing in localStorage, create object for hours tasks
    if (!tasks) {
        tasks = {
            task1: "",
            task2: "",
            task3: "",
            task4: "",
            task5: "",
            task6: "",
            task7: "",
            task8: "",
            task9: ""
        };
        return
    }
    // load tasks into each span element
    for (i = 1; i < 10; i++) {
    var taskId = "task" + i;
    console.log(tasks[taskId]);
    $("#"+taskId)
    .children(".col-8")
    .children(".mt-2").text(tasks[taskId]);
    }


};
// save tasks function
var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
// when user click on the task to change
$(".col-8").on("click", "span", function(){
    var text = $(this)
        .text()
        .trim();
    var textInput = $("<textarea>")
        .addClass("form-control future")
        .val(text);
    textInput.trigger("focus");
    $(this).replaceWith(textInput);
});
// when user click in other part of the page
$(".col-8").on("blur", "textarea", function(){
    // get the textarea"s current value/text
    var text = $(this)
        .val()
        .trim();

    //recreate span element
    var taskSpan = $("<span>")
        .addClass("mt-2")
        .text(text);
    //replace text area with text element
    $(this).replaceWith(taskSpan);
});

// when a saving button is clicked
$(".saveBtn").on("click", function(){
    var taskId = $(this)
        .closest(".row")
        .attr("id");
    var text = $(this)
        .closest(".row")
        .children(".col-8")
        .children(".mt-2")
        .text();
    tasks[taskId] = text;
    saveTasks();
});














var date = moment().format('dddd, MMMM Do');
$("#today").text(date);

loadTasks();
