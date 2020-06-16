let heading = `<h1>Restaurant page</h1>`;

let backgroundDiv = document.createElement('div');
backgroundDiv.style = `background-image: url("background.jpeg");
                       background-repeat: no-repeat;
                       background-position: center;
                       background-size: cover;
                       position: absolute;
                       height: 100vh;
                       width: 100vw;
                       left: 0;
                       top: 0;
                       opacity: 0.9;
                       z-index: -1;`;

const initialPageLoad = () => {
    content.innerHTML = heading;
    document.querySelector('h1').style = `background: #fff;
                                          margin-bottom: 2.5rem;
                                          max-width: 23rem;
                                          text-align: center;
                                          border-radius: 0.2rem;`;
    document.body.appendChild(backgroundDiv);
};

export { initialPageLoad }