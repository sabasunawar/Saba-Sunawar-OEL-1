document.getElementById("btn").addEventListener("click", (e) => {
    e.preventDefault();
    const text = document.getElementById("search").value.trim();
    if (text !== "") {
      alert("Food category Available\n" + text);
    } else {
      alert("Invalid Input");
    }
    document.getElementById("input").value = "";
  });

  document.getElementById("feedbackbtn").addEventListener("click", (e) => {
      let feedback=[""];
      let print=document.getElementById("feedback-details").value;
      if(print!==""){
      alert(`Recorded Feedback:\n ${print}\n Thnak You For Your Feedback.`);
      feedback.push([print]);
      }
      else{
          alert("Empty Field,Enter something");
      }
      console.log(feedback);
      document.write(print);
  });

  