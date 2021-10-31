let count = 0;
window.addEventListener('scroll', function() {
    const counters = document.querySelectorAll('.counter');
    let countY = window.scrollY;

    let countOffset = document.querySelector(".benefits").offsetTop;
    
    if ((countY >= countOffset - 500) && (count == 0)) {
        counters.forEach(counter => {
            // start with 0 by default
            counter.innerText = '0';
            
            const updateCounter = () => {
                const target = +counter.getAttribute('data-target');
                const c = +counter.innerText;
                
                // get the 0.1% to speed up things
                const increment = target / 500;
                
                if(c < target) {
                    counter.innerText = `${Math.ceil(c + increment)}`;
                    setTimeout(updateCounter, 1)
                } else {
                    counter.innerText = target;
                }
            };
            
            updateCounter();
        });
        count = 1;
    }
})