/*  ABRE E FECHA O MENU QUANDO CLICAR NO ÍCONE: HAMBÚRGUER E X  */

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const div of toggle){
  div.addEventListener('click', function(){
    nav.classList.toggle('show')
  })
}

/*  MUDAR O SOMBREAMENTO DO HEADER DA PAGINA QUANDO DER SCROLL */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight; // pega o tamanho do header


/*  QUANDO CLICAR EM UM ITEM DO MENU, ESCONDER O MENU  */
const links = document.querySelectorAll('nav ul li a');
for (const link of links){
  link.addEventListener('click', function() {
    nav.classList.remove('show')
  })
}

/* TESTIMONIALS CAROUSEL SLIDER SWIPER */
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    797: {
      slidesPerView: 2,
      setWrapperSize: true,
  },
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

/*  ScrollReveal: Mostrar elementos quando der scroll na página  */
const scrollReveal = ScrollReveal({
  origin:'top',
  distance:'20px',
  duration: 700,
  reset: true,
});

scrollReveal.reveal(`
  #home .text, #home .image,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .link,
  footer .brand, footer .social`,
  {interval: 100}
);



/*  Botão voltar para o topo */
const backToTopButton = document.querySelector('.back-to-top');

function changeElementWhenScroll(navHeight,element, className){
  const scrollPosition = window.scrollY; // pega a posição do scroll
  if(scrollPosition > navHeight){
    // se o scroll for maior que o tamanho do header, adiciona a classe scroll
    element.classList.add(className);
  }else{
    // se o scroll for menor que o tamanho do header, remove a classe scroll
    element.classList.remove(className);
  }
}


/* Menu ativo conforme a seção visível na pagina */
const sections = document.querySelectorAll('main section[id]');
function activateMenuAtCurrentSection(){
  const checkpoint = window.pageYOffset + (window.innerHeight/2); // pega a posição do scroll + a metade da altura da tela
  for(const section of sections){
    const sectionTop = section.offsetTop; // pega a posição do topo da seção
    const sectionHight = section.offsetHeight; // pega a altura da seção
    const sectionId = section.getAttribute('id'); // pega o id da seção

    const checkpointStart = checkpoint >= sectionTop; // se o checkpoint for maior ou igual ao topo da seção
    // Se o checkpoint for menor ou igual ao topo da seção + a altura da seção
    const checkpointEnd = checkpoint <= sectionTop + sectionHight; 

    if(checkpointStart && checkpointEnd){
      // se o checkpoint estiver dentro da seção, adiciona a classe ativo
      document.querySelector(`nav ul li a[href*="${sectionId}"]`)
      .classList.add('active');
    } else {
      // se o checkpoint não estiver dentro da seção, remove a classe ativo
      document.querySelector(`nav ul li a[href*="${sectionId}"]`)
      .classList.remove('active');
    }
}
}

window.addEventListener('scroll', function(){
  changeElementWhenScroll(navHeight, header, 'scroll');
  changeElementWhenScroll(560, backToTopButton, 'show');
  activateMenuAtCurrentSection();
});
