<<<<<<< Updated upstream
window.addEventListener('click', (e) => {
    const rond = document.createElement('div');
    rond.className = 'clickanim';
    rond.style.top = `${e.pageY - 15}px`
    rond.style.left = `${e.pageX - 15}px`
    document.body.appendChild(rond);
    setTimeout(() => {
        rond.remove();
    }, 1500)
})
=======
document.getElementsByTagName('body')[0].classList.add('override')
>>>>>>> Stashed changes
