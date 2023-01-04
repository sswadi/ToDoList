document.addEventListener("DOMContentLoaded", function() {

    var deleteButton = document.getElementById('delete-button');
    var checkBoxes = document.getElementsByClassName('taskLists')[0];


    // function to fetch only the names of boxes(tasks) that are ticked
    function getCheckedBoxesIds(){
        var checkedBoxesIds = checkBoxes.querySelectorAll('input[type=checkbox]');
        let responseBoxesChecked = [];

        checkedBoxesIds.forEach((item)=>{
            if(item.checked){
                responseBoxesChecked.push(item.name);
            }
        });
        return responseBoxesChecked;
    }

    // adding event listener to click button; when clicked it appends the names(checked) to the query url
    deleteButton.addEventListener('click', function submitDelete(e){
        var deleteIds = getCheckedBoxesIds();
        var deleteIdsAsString = JSON.stringify(deleteIds);//this changes to string from array object; When sending data to a web server, the data has to be a string. A common use of JSON is to exchange data to/from a web server.
        e.preventDefault();
        window.location.href = `/delete-task?deleteIds=${deleteIdsAsString}`; // redirecting it to delete task by adding query params
    });



});

