

    function carre(){
        const section = document.querySelector('section');
        const square = document.createElement('span');

        var taille = Math.random() * 50;

        square.style.width = 100 + taille + 'px';
        square.style.height = 100 + taille + 'px';
       
        square.style.top = Math.random() * innerHeight + 'px';
        square.style.left = Math.random() * innerWidth + 'px';

        const bg = color[Math.floor(Math.random() * color.length)];
        square.style.background = bg;

        section.appendChild(square);

         setTimeout(() => {
             square.remove()
         },5000)

    }

    setInterval(carre , 150)


=======
const color = [
    '#37CA00',
    '#00CACA',
    '#4900CA',
    '#CA0071',



]

   function carre(){
       const section = document.querySelector('section');
       const square = document.createElement('span');

       var taille = Math.random() * 50;

       square.style.width = 100 + taille + 'px';
       square.style.height = 100 + taille + 'px';

       square.style.top = Math.random() * innerHeight + 'px';
       square.style.left = Math.random() * innerWidth + 'px';

       const bg = color[Math.floor(Math.random() * color.length)];
       square.style.background = bg;

       section.appendChild(square);

        setTimeout(() => {
            square.remove()
        },5000)

   }

   setInterval(carre , 150)

.alert {
        background: linear-gradient(90deg, rgb(3, 1, 46) 0%, rgb(2, 217, 255) 57%, rgba(0,212,255,1) 100% );
    }
    
    .breadcrumb {
        background: linear-gradient(90deg, rgb(3, 1, 46) 0%, rgb(2, 217, 255) 57%, rgba(0,212,255,1) 100%);
    }
}

