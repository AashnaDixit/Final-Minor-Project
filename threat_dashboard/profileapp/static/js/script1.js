// This script will handle the toggling of the edit form and saving the changes

function editProfile() {
    document.getElementById('profile-info').style.display = 'none';  // Hide the profile display
    document.getElementById('edit-form').style.display = 'block';  // Show the edit form
    
    // Pre-populate fields with current profile data (this could be dynamic if using an API)
    document.getElementById('edit-mobile').value = document.getElementById('mobile').innerText;
    document.getElementById('edit-location').value = document.getElementById('location').innerText;
}

function saveChanges(event) {
    event.preventDefault();  // Prevent form submission

    // Get updated values
    const updatedMobile = document.getElementById('edit-mobile').value;
    const updatedLocation = document.getElementById('edit-location').value;

    // Send the updated data to the server (You need to implement the backend API)
    fetch('/api/update-profile/', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            mobile: updatedMobile,
            location: updatedLocation
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Update the profile display with new data
            document.getElementById('mobile').innerText = updatedMobile;
            document.getElementById('location').innerText = updatedLocation;

            // Hide the edit form and show the updated profile
            document.getElementById('edit-form').style.display = 'none';
            document.getElementById('profile-info').style.display = 'block';
        } else {
            alert("Error updating profile!");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("There was an issue updating your profile.");
    });
}
