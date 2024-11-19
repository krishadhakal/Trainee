document.addEventListener('DOMContentLoaded', () => { 

    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    document.body.appendChild(wrapper);
    wrapper.innerHTML = '<h2>DOM creation using JS along with animation</h2>'

    const box = document.createElement('div');
    box.classList.add('box');
    box.textContent = 'box';
    wrapper.appendChild(box);

    // box.style.backgroundColor = 'blue';
    // box.style.color = 'white';

    let position = 0;
    let direction = 1; //right direction
    const speed = 5;

    function animate() {
        position = position + speed * direction; 
        box.style.transform = `translateX(${position}px)`; 

        const wrapperWidth = document.body.clientWidth - 100;

        if (position >= wrapperWidth || position <= 0) {
            direction = direction * -1; //left direction
        }
        requestAnimationFrame(animate); 
        
    }

    requestAnimationFrame(animate); 
});
