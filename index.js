function displayYouTubeResults(){
    // this function will display youtube results
    console.log('displayYouTubeResults ran');

}

function getYouTubeResults(){
    // this function will get youtube results
    console.log('getYouTubeResults ran');
}

function displayActivity(){
    //this function will display the activity to the DOM
    console.log(`displayActivity ran`);
}

function getActivity(){
    //this function will get the activity
    console.log(`getActivity ran`);
}

function handleFormSubmission(){
// this function will handle the form submission
console.log(`handleFormSubmission ran`);

$('#activity-form').on('submit', function(evt){
    let activityType = $('.activity-type').val();
    $("option:selected").prop("selected", false);
    evt.preventDefault();
    getActivity(activityType);
})
}

$(handleFormSubmission);