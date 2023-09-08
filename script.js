/////////////////////
// This is for the current date and time
let today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY, h:mm A'));

let currentHour = today.hour();

const timeBlocks = document.querySelectorAll('.time-block');

timeBlocks.forEach((timeBlocks) => {
const hour = parseInt(timeBlocks.id);

if (hour < currentHour) {
  timeBlocks.classList.add('past'); 
} else if (hour === currentHour) {
  timeBlocks.classList.add('present');
} else {
  timeBlocks.classList.add('future');
}
});
 
///////////////////////////////////
// This is for saving the text in the text area to local storage
let saveBtn = $('.saveBtn');


function handleTxt(event)  {
 let block = $(this).parent().attr('id');
  event.preventDefault();
  let txt = $(this).siblings('.description').val();
  localStorage.setItem("Hour: " + block, txt);
  
  console.log(txt);
  if (!txt) {
    return;
  }

  alert("Saved!");
}

// This is for retrieving the text from local storage
function retrieveText() {
  saveBtn.each(function() {
    let block = $(this).parent().attr('id');
    let txt = localStorage.getItem("Hour: " + block);
    $(this).siblings('.description').val(txt);
  });
}

$(document).ready(function() {
  retrieveText();
}
);


saveBtn.on('click', handleTxt);