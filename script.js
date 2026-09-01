// We only add ONE click listener to the window
window.addEventListener('click', function(event) {
    
    // Create a list of the IDs that are allowed to be clicked
    const validJobIds = [
        'AmazonDSPDriver', 
        'ComputerRepairTechnician', 
        'FreelanceWebDeveloper', 
        'ITSupportAssociate'
    ];

    // Check if the thing the user clicked has an ID that exists in our list
    if (validJobIds.includes(event.target.id)) {
        
        // Dynamically build the description ID by adding "Description" to the end
        // Example: "AmazonDSPDriver" + "Description" = "AmazonDSPDriverDescription"
        let descriptionId = event.target.id + 'Description'; 
        
        // Find that description element
        let descriptionElement = document.getElementById(descriptionId);

        // Toggle the display
        if (descriptionElement.style.display === 'flex') {
            descriptionElement.style.display = 'none';
        } else {
            descriptionElement.style.display = 'flex';
        }
    }
});