document.addEventListener('DOMContentLoaded', function() {
    // debouncing technique
    function debounce(func, delay) {
        let timeoutId;
        
        return function (...args) {
        // Clear the timeout if a new event is triggered
        clearTimeout(timeoutId);
        
        // Set a new timeout to call the function after the delay
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
        };
    }

    function resizeEvent(){
        console.log("Window is resized");
    }

    window.addEventListener("resize", debounce(resizeEvent, 500));
});