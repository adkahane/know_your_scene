$(document).ready(function() {
	// Toggle Sidebar function
	function toggleSidebar() {
		var sidebar = document.getElementById("sidebar");
		sidebar.classList.toggle("collapsed");
	}

	// Show error message if forms left empty
	document.getElementById('searchForm').addEventListener('submit', function(event) {
		// Prevent the form from submitting
		event.preventDefault();

		// Reset the error message
		var errorElement = document.getElementById("error");
		errorElement.style.display = "none";

		var stateField = document.getElementById('state');
		var sceneField = document.getElementById('scene');
		
		if (stateField.value === "") {
			displayErrorMessage('Please select a state.');
			//event.preventDefault();
			errorElement.style.display = "block";
			//return;
		} else if (sceneField.value === "") {
			displayErrorMessage('Please enter a music scene.');
			//event.preventDefault();
			errorElement.style.display = "block";
			//return;
		} else {
			this.submit()
		}
		
		// Continue form submission if all mandatory fields have values
	});
	
	function displayErrorMessage(message) {
		var errorElement = document.getElementById('error');
		errorElement.innerText = message;
		errorElement.style.display = 'block';
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