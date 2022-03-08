import './less/index.less'

// Your code goes here!
const modal = document.querySelector('.modal')

//Number 1
const funBusHead = document.querySelector('.logo-heading');
funBusHead.addEventListener('mouseover', event => {
    event.target.style.color = 'pink'
    setTimeout(function() {
        event.target.style.color = ''
    }, 500 )
});


//Number 2
const homeNav = document.querySelector('nav a:nth-of-type(1)')
homeNav.addEventListener("click", event => {
    homeNav.textContent = `Click on Contact!`;
});


//Number 3

const aboutUs = document.querySelector('nav a:nth-of-type(2)');

aboutUs.addEventListener('focus', (event) => {
  event.target.style.background = 'cyan';

//   setTimeout(function() {
//       event.target.style.background = ''
//   }, 1000)
});

//Number 4
aboutUs.addEventListener('blur', (event) => {
  event.target.style.background = '';
});


//Number 5
const button = document.querySelector('div.btn');

function random(number) {
    return Math.floor(Math.random() * number);
  }
  
  function randomColor() {
      return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  }
  
  button.onclick = function() {
    button.style.backgroundColor = randomColor();
  };
  
  button.onauxclick = function(e) {
    e.preventDefault();
    button.style.color = randomColor();
  }
  
  button.oncontextmenu = function(e) {
    e.preventDefault();
  }



  //Number 6

  
  document.body.addEventListener('dblclick', function (e) {
     e.target.classList.toggle('large')
  });

  //Number 7

  window.addEventListener('copy', () => {
      navigator.clipboard.readText()
      .then(text => {
          console.log(text)
      })
  })

  //Number 8 
  window.addEventListener('keydown', evt => {
      console.log(evt)
  })

  //Number 9
window.onload = function (evt) {
    console.log(`event "${evt.type}" fired! NICE`)
    const heading = document.querySelector('h1')
heading.textContent = 'FUN BUS'
}

//Number 10
const contactNav = document.querySelector('nav a:nth-of-type(4)')
contactNav.addEventListener('click', evt => {
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
})


//Number 11 (because we have two "clicks")
const destinations = document.querySelectorAll('.destination');
for (let destination of destinations) {
    destination.addEventListener('mouseenter', () => {
        destination.style.fontWeight = 'bold'
    });
    destination.addEventListener('mouseleave', () => {
        setTimeout(() => {
            destination.style.fontWeight = 'initial'
        }, 500);
    });
};
