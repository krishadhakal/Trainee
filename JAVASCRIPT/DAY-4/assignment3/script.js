document.addEventListener('DOMContentLoaded', function(){
    // Throttle function implementation
    function throttle(func, delay) {
        let prevCall = 0;
        return (...args) => {
            let now = Date.now();

            console.log(now-prevCall, delay);
            // if the difference is greater than delay then call the function again
            if(now - prevCall > delay) {
                prevCall = now;
                return func(...args);
            }
        }
    }

    function clickButton(){
        console.log(`Button is clicked`);
    }
    const button = document.getElementById('button');
    button.addEventListener('click', throttle(clickButton, 1000));
});
