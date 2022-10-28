



const h1Ele = document.createElement('h1');

h1Ele.className = "h1";

document.body.style.textAlign = 'center';

document.body.append(h1Ele);

console.log(h1Ele);

var countDown = 10;











var countDown = 10;
setTimeout(() => {
  h1Ele.innerText = '';
  h1Ele.innerText = countDown;
  countDown--;
  setTimeout(() => {
    h1Ele.innerText = '';
    h1Ele.innerText = countDown;
    setTimeout(() => {
      h1Ele.innerText = '';
      h1Ele.innerText = countDown;
      countDown--;
      setTimeout(() => {
        h1Ele.innerText = '';
        h1Ele.innerText = countDown;
        countDown--;
        setTimeout(() => {
          h1Ele.innerText = '';
          h1Ele.innerText = countDown;
          countDown--;
          setTimeout(() => {
            h1Ele.innerText = '';
            h1Ele.innerText = countDown;
            countDown--;
            setTimeout(() => {
              h1Ele.innerText = '';
              h1Ele.innerText = countDown;
              countDown--;
              setTimeout(() => {
                h1Ele.innerText = '';
                h1Ele.innerText = countDown;
                countDown--;
                setTimeout(() => {
                    h1Ele.innerText = '';
                    h1Ele.innerText = countDown;
                    countDown--;
                    setTimeout(() => {
                        h1Ele.innerText = '';
                        h1Ele.innerText = countDown;
                        countDown--;
                        setTimeout(() => {
                            h1Ele.innerText = '';
                            h1Ele.innerText = countDown;
                            countDown--;
                            setTimeout(() => {
                                h1Ele.innerText = '';
                                h1Ele.innerText = 'Happpy Independence Day';
                                countDown--;
                              }, 1000);
                          }, 1000);
                      }, 1000);
                  }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);