// Math and functionality for Squares per side button
const btnSPR = document.querySelector('#spr');
const spanSPR = document.querySelector('.square');
const bodyDiv = document.querySelector('.container');

// default squres per side frame (4 x 4)
let docFragment = document.createDocumentFragment();
for (let i = 0; i <= 16 - 1; i++) {
    const div = document.createElement('div');     
    spanSPR.textContent = `4 x 4`;
    docFragment.appendChild(div); 
};
bodyDiv.appendChild(docFragment);  

btnSPR.addEventListener('click', () => {
    // checks if there are div before updating it with new squares per slides
    while (bodyDiv.hasChildNodes()) {
        bodyDiv.removeChild(bodyDiv.firstChild);
      };
    promptPopUp = Number(prompt('Type the number of squares per side: '));
    if (Number.isNaN(promptPopUp)) {
        spanSPR.textContent = 'Invalid data type (should be a number)';
    } else if (promptPopUp > 100) {
        spanSPR.textContent = 'I guess it\'s too much';
    } else if (promptPopUp <= 0) {
        spanSPR.textContent = 'Negative number, 0 or other errors';
    } else {
        docFragment = document.createDocumentFragment();
        for (let i = 0; i <= promptPopUp * promptPopUp -1; i++) {
            const div = document.createElement('div');           
            let height = 360 / promptPopUp; // height of .container divided by prompPopUp
            let width = 960 / promptPopUp; // width of .container divided by prompPopUp
            div.style.cssText = `height: ${height}px; width: ${width}px;`;
            spanSPR.textContent = `${promptPopUp} x ${promptPopUp}`;
            docFragment.appendChild(div); 
        };
        bodyDiv.appendChild(docFragment);  
    };
});

// adding random colors on random divs (default)
// const bodyDiv = document.querySelector('.container');
const btnRes = document.querySelector('#reset');
const btnEr = document.querySelector('#eraser');
const btnBl = document.querySelector('#black');
const btnRan = document.querySelector('#random');
const btnOp = document.querySelector('#opacity-drop');

bodyDiv.addEventListener('mouseover', (e) => {   

    // when mousing out of .container deleting additional random color on top of .container
    bodyDiv.addEventListener('mouseout', () => {
        bodyDiv.style.background = '';
    });

    // default color
    e.target.style.background = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}`;   
    // adding reset button
    btnRes.addEventListener('click', () => {
        btnRan.style.cssText = '';
        btnBl.style.cssText = '';
        btnEr.style.cssText = '';
        btnOp.style.cssText = '';
        e.target.style.background = '';
    });

    // adding eraser
    btnEr.addEventListener('click', () => {
        // button switching animation
        btnEr.style.cssText = 'transform: translate3d(3px, 3px, 10px); box-shadow: -3px -3px 5px 0px rgba(0,0,0,0.75);';
        btnRan.style.cssText = '';
        btnBl.style.cssText = '';
        btnOp.style.cssText = '';
        bodyDiv.addEventListener('mouseover', (e) => {
            e.target.style.background = '';
        });
    });

    // adding black color to divs
    btnBl.addEventListener('click', () => {
        btnOp.style.cssText = '';
        btnEr.style.cssText = '';
        btnRan.style.cssText = '';
        btnBl.style.cssText = 'transform: translate3d(3px, 3px, 10px); box-shadow: -3px -3px 5px 0px rgba(0,0,0,0.75);';
        e.target.style.background = '' // reseting in case there are other colors left
        bodyDiv.addEventListener('mouseover', (e) => {
            e.target.style.background = 'black';
        });
    });

    // switching back to default (random colors)
    btnRan.addEventListener('click', () => {
        btnOp.style.cssText = '';
        btnEr.style.cssText = '';
        btnBl.style.cssText = '';
        btnRan.style.cssText = 'transform: translate3d(3px, 3px, 10px); box-shadow: -3px -3px 5px 0px rgba(0,0,0,0.75);';
        e.target.style.background = ''; // reseting in case there are other colors left
        bodyDiv.addEventListener('mouseover', (e) => {
            e.target.style.background = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}`; 
        });
    });

    // adding darkening effect where each interaction darkens the square by 10%
    btnOp.addEventListener('click', () => {
        btnEr.style.cssText = '';
        btnBl.style.cssText = '';
        btnRan.style.cssText = '';
        btnOp.style.cssText = 'transform: translate3d(3px, 3px, 10px); box-shadow: -3px -3px 5px 0px rgba(0,0,0,0.75);';
        e.target.style.background = ''; // reseting in case there are other colors left 
        let opacityLevel = 0.1;
        bodyDiv.addEventListener('mouseover', (e) => {
                e.target.style.background = 'black';
                e.target.style.opacity = opacityLevel;
                opacityLevel += 0.1;
                if (opacityLevel > 1) {
                    opacityLevel = 1;
                }
        });
    });
});



