// event listeners
$(`form div:nth-child(1) input`).keypress(() => {
  $(`form div:nth-child(1)`).removeClass("data-error");
});
$(`form div:nth-child(2) input`).keypress(() => {
  $(`form div:nth-child(2)`).removeClass("data-error");
});
$(`form div:nth-child(3) input`).keypress(() => {
  $(`form div:nth-child(3)`).removeClass("data-error");
});
$(`form div:nth-child(4) input`).keypress(() => {
  $(`form div:nth-child(4)`).removeClass("data-error");
});
// validation function
function formValidation() {
  let isError = false;
  for (let i = 1; i < 5; i++) {
    if ($(`form div:nth-child(${i}) input`).val() == "") {
      $(`form div:nth-child(${i})`).addClass("data-error");
      $(`form div:nth-child(${i}) input`).removeAttr("placeholder");
      isError = true;
    }
  }
  if ($(`form div:nth-child(3) input`).val() == "") {
    $(`form div:nth-child(3) input`).attr("placeholder", "email@example/com");
    $("form div:nth-child(3) input::placeholder").css({"opacity": "0"});
  }
  if (isError) {
    return false;
  }
  else {
    return true;
  }
}
