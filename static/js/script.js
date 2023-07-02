$(document).ready(function() {
  // Toggle Sidebar function
  function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("collapsed");
  }

  // Attach the toggleSidebar function to the button click event
  $('#sidebar-toggle').click(function() {
      toggleSidebar();
  });

  // Array of states in the USA
  const states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
    "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
    "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
    "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
    "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
    "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
    "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
  ];

  const stateSelect = document.getElementById("state");

  // Generate the options for the state dropdown
  states.forEach(function(state) {
    const option = document.createElement("option");
    option.value = state;
    option.textContent = state;
    stateSelect.appendChild(option);
  });

  // Initialize datepickers
	$('.datepicker').datepicker({
	  format: 'yyyy-mm-dd',
	  autoclose: true
	});
});