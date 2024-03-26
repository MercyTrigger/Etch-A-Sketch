// creating divs for grid represenation on a page
const bodyDiv = document.querySelector('.container');

const docFragment = document.createDocumentFragment();
for (let i = 0; i <= 15; i++) {
    const div = document.createElement('div');
    docFragment.appendChild(div);
}
bodyDiv.appendChild(docFragment);

// creating coordinates on each div
const body = document.querySelector('body')
const span = document.createElement('span');
body.append(span)

bodyDiv.addEventListener('mousemove', (e) => {
    let x = e.clientX;
    let y = e.clientY;
    let coor = `Cordinates X: ${x} Y: ${y}`;
    span.textContent = coor;
    // deleting when not hovering span
    bodyDiv.addEventListener('mouseout', () => {
        span.textContent = ''
    })
});

// adding random colors on random divs (default)
const btnRes = document.querySelector('#reset');
const btnEr = document.querySelector('#eraser');
const btnBl = document.querySelector('#black');
const btnRan = document.querySelector('#random');

bodyDiv.addEventListener('mouseover', (e) => {
    // default 
    e.target.style.background = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}`;   
    // adding reset button
    btnRes.addEventListener('click', () => {
        // button switching animation
        btnRan.style.cssText = ''
        btnBl.style.cssText = ''
        btnEr.style.cssText = ''
        e.target.style.background = '';
    });

    // adding eraser
    btnEr.addEventListener('click', () => {
        // button switching animation
        btnEr.style.cssText = 'transform: translate3d(3px, 3px, 10px); box-shadow: -3px -3px 5px 0px rgba(0,0,0,0.75);'
        btnRan.style.cssText = ''
        btnBl.style.cssText = ''
        bodyDiv.addEventListener('mouseover', (e) => {
            e.target.style.background = ''
        });
    });

    // adding black color to divs
    btnBl.addEventListener('click', () => {
        // button switching animation
        btnEr.style.cssText = ''
        btnRan.style.cssText = ''
        btnBl.style.cssText = 'transform: translate3d(3px, 3px, 10px); box-shadow: -3px -3px 5px 0px rgba(0,0,0,0.75);'
        e.target.style.background = '' // reseting in case there are other colors left
        bodyDiv.addEventListener('mouseover', (e) => {
            e.target.style.background = 'black'
        });
    })

    // switching back to default (random colors)
    btnRan.addEventListener('click', () => {
        // button switching animation
        btnEr.style.cssText = ''
        btnBl.style.cssText = ''
        btnRan.style.cssText = 'transform: translate3d(3px, 3px, 10px); box-shadow: -3px -3px 5px 0px rgba(0,0,0,0.75);'
        e.target.style.background = '' // reseting in case there are other colors left
        bodyDiv.addEventListener('mouseover', (e) => {
            e.target.style.background = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}`;   
        })

    })
});


