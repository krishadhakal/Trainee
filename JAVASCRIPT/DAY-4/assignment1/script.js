document.addEventListener('DOMContentLoaded', function () {
    const options = {
        root: null,             
        rootMargin: "100px",    
        threshold: 0.5          
    };

    const observer = new IntersectionObserver(rotateElement, options);

    const box1 = document.querySelector('.box1');
    const box2 = document.querySelector('.box2');

    observer.observe(box1);
    observer.observe(box2);

    function rotateElement(entries, observer) {
        entries.forEach(entry => {
            if(entry.target == box1 && entry.isIntersecting){
                entry.target.style.transform = 'rotate(90deg)';
                entry.target.style.transition = 'all 1s';
            }

            if(entry.target == box2 && entry.isIntersecting){
                entry.target.style.transform = 'rotate(90deg)';
                entry.target.style.transition = 'all 1s';
            }
            else if(entry.target == box2 && !entry.isIntersecting){
                entry.target.style.transform = 'rotate(0deg)';
            }
        });
    }
});
