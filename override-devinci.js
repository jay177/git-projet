
    function carre(){
        const section = document.querySelector('section');
        const square = document.createElement('span');

        var taille = Math.random() * 50;

        square.style.width = 20 + taille + 'px';
        square.style.height = 20 + taille + 'px';
       
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


