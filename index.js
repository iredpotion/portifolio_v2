/* Text Translator */
$(".translate-btn").on("click", function() {
    let y = $("#about").html();
    if (y == "RESUMO") {        
        $("#ignitionpoint h1").html('Hello, im <span class="my-name">Pedro</span>!')
        $("#ignitionpoint p").html('A Full-Stack student from Brazil.')
        $("#about").html('RESUME')
        $(".resume").html('<p>My passion for gaming has been ignited since childhood. From an early age, I was captivated by the ability to create and customize my own virtual worlds, exploring the endless possibilities that games offered. My journey into this universe began with Tibia, a game that immersed me in hours of learning and exploration, opening doors to a universe of customization and creation where I gained some knowledge of the C++ and LUA programming languages.</p><p>However, life took me down a different path. I decided to pursue a career in Mechanical Engineering, seeking a stable and promising future. Despite dedicating myself to my studies and graduating in the field, over time, I realized that this was not my true calling. The flame of my passion for games still burned brightly in my heart.❤️‍🔥</p><p>It was then that I made the decision to return to my original studies, dedicating myself to programming and game development.</p><p>My goal is to become a Software Engineer.</p>')
        $("#skills").html('SKILLS')
        $("#projects").html('PROJECTS')    
        $("#contacts").html('CONTACT ME')    
    } else {        
        $("#ignitionpoint h1").html('Olá, eu sou <span class="my-name">Pedro</span>!')
        $("#ignitionpoint p").html('Um estudante de Full-Stack do Brasil.')
        $("#about").html('RESUMO')
        $(".resume").html('<p>Sou um apaixonado por games desde a infância. Desde cedo, me fascinava a possibilidade de criar e personalizar meus próprios mundos virtuais, explorando as infinitas possibilidades que os jogos ofereciam. Minha jornada nesse universo começou com Tibia, um jogo que me proporcionou horas de imersão e aprendizado, abrindo as portas para um universo de customização e criação onde aprendi um pouco sobre as linguagens C++ e LUA.</p><p>No entanto, a vida me levou por um caminho diferente. Decidi seguir a carreira de Engenharia Mecânica, buscando um futuro estável e promissor. Apesar de ter me dedicado aos meus estudos e me formado na área, com o tempo, percebi que essa não era a minha verdadeira vocação. A chama da paixão por games ainda ardia em meu coração. ❤️‍🔥</p><p>Foi então que tomei a decisão de voltar aos meus estudos originais, dedicando-me à programação e ao desenvolvimento de jogos.</p><p>Meu objetivo é me tornar um Engenheiro de Software.</p>')
        $("#skills").html('HABILIDADES')
        $("#projects").html('PROJETOS')    
        $("#contacts").html('CONTATOS')
    }    
})

/* Open Menu */
$(".menu-btn").on("click", function() {
    $(".menu-container").css({"width": "100%"}); 
});

/* Close Menu */
$(".nav-link").on("click", function() {
    $(".menu-container").css({"width": "0"});
  });

  $(".closebtn").on("click", function() {
    $(".menu-container").css({"width": "0"});
  });


/* Turn Screen Dark */
function darkScreen () {   
    document.documentElement.style.setProperty('--black', '#ffffff');
    document.documentElement.style.setProperty('--white', '#1f1f1f');       
    $(".bi-brightness-high").css({"display": "inline"});
    $(".bi-moon").css({"display": "none"});
}

/* Turn Screen Light */
function lightScreen () {
    document.documentElement.style.setProperty('--black', '#1f1f1f');
    document.documentElement.style.setProperty('--white', '#ffffff');         
    $(".bi-brightness-high").css({"display": "none"});
    $(".bi-moon").css({"display": "inline"});
}


/* Dark / Light Mode */ 
$(".dark-mode-btn").on("click", function() {
    let x = $("body").css("background-color");
    if (x == "rgb(255, 255, 255)") {
        darkScreen ();
    }else if (x == "rgb(31, 31, 31)") {
        lightScreen (); 
    }   
});


