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
    if (tasks[taskId]) {
    $("#"+taskId)
    .children(".col-8")
    .children(".mt-2").text(tasks[taskId]);
    }
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
    // if empty print "Click here to enter task"
    if (!text) {
        text = "Click here to enter task";
    }

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

var auditTask = function() {
    for (i = 1; i < 10; i++) {
        // convert to moment object at 9:00am and 10:00am
        var time1 = moment().set("hour", (8+i)).set("minute", 0).set("second", 0).set("millisecond", 0);
        var time2 = moment().set("hour", (9+i)).set("minute", 0).set("second", 0).set("millisecond", 0);

        // remove any old classes
        $("#task"+i)
            .children(".col-8")
            .removeClass("past present future");
            
        // apply new class if task is in the future
        if (moment().isBefore(time1)) {
            $("#task"+i)
            .children(".col-8")
            .addClass("future");
        }
        if (moment().isBetween(time1, time2)) {
            $("#task"+i)
            .children(".col-8")
            .addClass("present");
        }
        if (moment().isAfter(time2)) {
            $("#task"+i)
            .children(".col-8")
            .addClass("past");
        }
    }

};
auditTask();











var date = moment().format('dddd, MMMM Do');
$("#today").text(date);

loadTasks();
