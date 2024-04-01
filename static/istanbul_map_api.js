class SehirHaritasiAPI {
    constructor(param, callback) {
        this.mapFrame = param.mapFrame;
        this.apiKey = param.apiKey;
        this.callback = callback;

        // Call a method to initialize the map
        this.initializeMap();
    }

initializeMap() {
    // Create the map initialization function
    const initMap = () => {
        // Initialize the map using the provided API key and attach it to the specified map container
        const map = new SehirHaritasiAPI.Map(this.mapFrame, {
            apiKey: this.apiKey,
            // You can specify additional options for the map here, such as initial center and zoom level
        });

        // Optionally, call the callback function once the map is initialized
        if (typeof this.callback === 'function') {
            this.callback();
        }
    };

    // Call the initialization function
    initMap();
}



}

document.addEventListener("DOMContentLoaded", function() {
    var ibbMAP = new SehirHaritasiAPI({
        mapFrame: "map-container",
        apiKey: "3092b66e352f44bcba3be31d7f5192c2" // Replace 'YOUR_API_KEY' with your actual API key
    }, function() {
        // Map initialization completed
    });
});
