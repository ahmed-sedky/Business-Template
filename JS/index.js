
var div1 =document.getElementById('container3');
var h =document.getElementById('typeWriter');
div1.onclick =function(){
    'use strict';
    this.style.display ='block';
    //div1.classList.add("animate1");
    h.classList.add("typewriter");
};
window.onload =function(){
    'use strict';
    setTimeout(function(){
        'use strict';
        div1.click();
    },2500);
};


var button1 =document.getElementById('button1');

function flip(){
    'use strict'
    button1.style.display ='block';
    button1.classList.add("flip");
};
setTimeout(flip,6000);

var card1 =document.getElementById("Card1"),
    card2 =document.getElementById("Card2"),
    card3 =document.getElementById("Card3"),
    content3 =document.getElementById("content3"),
    content4 =document.getElementById("content4"),
    img =document.getElementById("img"),
    pre3 =document.getElementById("pre3"),
    cardCustomer1 =document.getElementById("cardCustomer1"),
    cardCustomer2 =document.getElementById("cardCustomer2"),
    cardCustomer3 =document.getElementById("cardCustomer3");

window.onscroll = function () {
    "use strict";
        if (document.documentElement.scrollTop >= card1.offsetTop -600 ) { //offsetTop returns the top position in pixels
            setTimeout(function(){
                card1.style.visibility='visible';
                card1.classList.add("pulse")
            },3000);
        }
        if (document.documentElement.scrollTop >= card2.offsetTop -600 ) { 
            setTimeout(function(){
                card2.style.visibility='visible';
                card2.classList.add("pulse")
            },1000);
        }
        if (document.documentElement.scrollTop >= card3.offsetTop -600 ) { 
            setTimeout(function(){
                card3.style.visibility='visible';
                card3.classList.add("pulse")
            },5000);
        } 
        if (document.documentElement.scrollTop >= content3.offsetTop -600 ) { 
            content3.style.visibility='visible';
            content3.classList.add("fadeInLeft")
        }
        if (document.documentElement.scrollTop >= content4.offsetTop -600 ) { 
            content4.style.visibility='visible';
            content4.classList.add("fadeInRight")
        }
        if (document.documentElement.scrollTop >= img.offsetTop -600 ) { 
            img.style.visibility='visible';
            img.classList.add("fadeInLeft")
        }
        if (document.documentElement.scrollTop >= pre3.offsetTop -600 ) { 
            pre3.style.visibility='visible';
            pre3.classList.add("fadeInRight")
        }
        if (document.documentElement.scrollTop >= cardCustomer1.offsetTop -600 ) { //offsetTop returns the top position in pixels
            setTimeout(function(){
                cardCustomer1.style.visibility='visible';
                cardCustomer1.classList.add("pulse")
            },3000);
        }
        if (document.documentElement.scrollTop >= cardCustomer2.offsetTop -600 ) { 
            setTimeout(function(){
                cardCustomer2.style.visibility='visible';
                cardCustomer2.classList.add("pulse")
            },1000);
        }
        if (document.documentElement.scrollTop >= cardCustomer3.offsetTop -600 ) { 
            setTimeout(function(){
                cardCustomer3.style.visibility='visible';
                cardCustomer3.classList.add("pulse")
            },5000);
        } 
        /*
        if (document.documentElement.scrollTop >= cardCustomer2.offsetTop -600){
                'use strict';
                var mytext ="WHO WE ARE";
                var typeEffect =document.getElementsByClassName("type-effect");
                var myTime =setInterval(function(){
                    for(var i = 0;i<mytext.length ;i++){
                        typeEffect.textContent += mytext[i];
                        console.log(typeEffect.textContent);
                        if(i>= mytext.length - 1 ){
                            clearInterval(myTime);
                        }
                    }  
                },50)
            }
            */
        }
            /*
            var myTextEffect = "WHO WE ARE";
            var i=0;
            console.log(myTextEffect)
            //typeEffect.style.visibility = "visible";
            var myTime2 =setInterval(function(){
                'use strict';
                typeEffect.textContent += myTextEffect[i]
                if(i >= myTextEffect.length -1){
                    clearInterval(myTime2);
                }
                i = i+1;
            },100);
            */

var element =document.querySelectorAll('.colorSwitcher li'),
    classList =[],
    body = document.getElementById('body');

    body.classList.add(localStorage.getItem('page-color')||"white");
    for(var i =0 ; i< element.length ; i++){
        classList.push(element[i].getAttribute('data-color'));
        element[i].addEventListener('click',function(){
        body.classList.remove(...classList);
        body.classList.add(this.getAttribute('data-color'));
        localStorage.setItem('page-color',this.getAttribute('data-color'));
    },false);
    }
var comment =document.getElementById('comment'),
    count =document.getElementById('count'),
    maxLength = comment.getAttribute('maxlength');
comment.oninput =function(){
    'use strict';
    count.textContent =maxLength - comment.value.length;
    if (count.textContent == 0){
        count.style.color ='red';
    }
}
var welcome = document.getElementById('welcome'),
    myName =document.getElementById('myName');
    console.log(welcome.textContent);
myName.onchange =function(){
    'use strict';
    welcome.style.fontSize = '0.9em'
    welcome.textContent =" Welcome To Our Page "+ myName.value ;
}
console.log(welcome.textContent);

var myInput1 =document.getElementById('myName'),
    myInput2 =document.getElementById('myEmail'),
    textArea =document.querySelector('textarea');

myInput1.onfocus =function(){
    'use strict';
    if(this.placeholder === 'Full Name'){
        this.placeholder = '';
    }
}
myInput1.onblur =function(){
    'use strict';
    if(this.placeholder === ''){
        this.placeholder = 'Full Name';
    }
}
myInput2.onfocus =function(){
    'use strict';
    if(this.placeholder === 'E-mail Address'){
        this.placeholder = '';
    }
}
myInput2.onblur =function(){
    'use strict';
    if(this.placeholder === ''){
        this.placeholder = 'E-mail Address';
    }
}

textArea.onfocus =function(){
    'use strict';
    this.setAttribute('backUp',this.getAttribute('placeholder'));
    this.setAttribute('placeholder','');
}
textArea.onblur =function(){
    'use strict';
    this.setAttribute('placeholder',this.getAttribute('backUp'));
    this.setAttribute('backUp','');
}
