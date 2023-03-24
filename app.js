const hamburger = document.querySelector('.hamburger'),
      overlay = document.querySelector('.overlay'),
      navigation = document.querySelector('.navigation'),
      drop = document.querySelectorAll(".drop");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    overlay.classList.toggle('active');
    navigation.classList.toggle('active');
});

drop.forEach((e) => {
    e.addEventListener('click', (link) =>{
        const drop_link = link.target.nextElementSibling;
        link.target.classList.toggle('open');
        drop_link.classList.toggle('open');
    })
});

