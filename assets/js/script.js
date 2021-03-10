// when user click on the task to change
$("#task").on("click", "span", function(){
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
$("#task").on("blur", "textarea", function(){
    // get the textarea"s current value/text
    var text = $(this)
        .val()
        .trim();
    
    // saving part for arrays

    //recreate span element
    var taskSpan = $("<span>")
        .addClass("mt-2")
        .text(text);
    //replace text area with text element
    $(this).replaceWith(taskSpan);
});

var date = moment().format('dddd, MMMM Do');
$("#today").text(date);
