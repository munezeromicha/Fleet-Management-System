function startTrip() {
    const statusElement = document.getElementById("tripStatus");
    statusElement.textContent = "In Progress";
    statusElement.classList.remove("pending");
    statusElement.classList.add("in-progress");
    alert("Trip status updated to 'In Progress'.");
  }
  
  function reportIssue() {
    const issue = document.getElementById("issueInput").value.trim();
    if (!issue) {
      alert("Please enter a description of the issue.");
      return;
    }
  
    alert("Issue reported: " + issue);
    document.getElementById("issueInput").value = "";
  }
  