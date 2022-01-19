function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("click");
    // Get the output text
    var text = document.getElementById("long");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.style.top = "100px";
    } else {
      text.style.top = "-500px";
    }

  }

 function validation(event) {
    var words = document.getElementById("message").value;
    var trimWords = words.trim();
    var text = trimWords.split(/\s+/);
    var count = text.length;
    
    console.log(count);

    if(count<5){
      event.preventDefault();
      document.getElementById("message").setCustomValidity("Please lengthen this text to 5 or more words");
    }
    
  };