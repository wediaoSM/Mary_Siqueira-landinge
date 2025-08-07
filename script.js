
// Menu mobile
const menuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.innerHTML = navLinks.classList.contains('active')
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Efeito de scroll na navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll suave para as seções (já ativado via CSS scroll-behavior)
function abrirModal(tipo) {
    // Modal — sem mais botões dentro do HTML do conteúdo
    const conteudos = {
        mentoria: {
            html: `
      <h2 style="color:#d4af7f; margin-bottom: 16px;">CONECT IA</h2>
      <p><strong>Agência estratégica que transforma comunicação em conexão real.</strong></p>
      <br>
      <p>Ajudamos marcas a se expressarem com autenticidade, propósito e presença — criando conteúdos que geram confiança, despertam emoção e impulsionam vendas.</p>
      <br>
      <p>Combinamos estratégia, posicionamento e sensibilidade para que o seu negócio encontre sua voz, comunique com verdade e se conecte com quem importa.</p>
      <br>
      <p>Porque vender é consequência de uma comunicação que gera laços, transmite valor e dá sentido ao marketing.</p>
      <br>
      <p><strong>CONECT IA — Conexão que gera resultado.</strong></p>
    `,
            img: 'fotos mary/img teste.jpeg'
        },
        ebook: {
            html: `
      <h2 style="color:#d4af7f; margin-bottom: 16px;">MANUAL DA FEMINILIDADE</h2>
      <p>Esse não é apenas um manual. É um chamado. Um convite para a mulher que já cansou de se perder tentando ser forte o tempo todo... e que, no fundo, deseja ser olhada, valorizada e amada por aquilo que ela é na essência.</p>
      <br>
      <p>O Manual da Feminilidade nasceu da necessidade de resgatar o valor real do ser mulher — não como um papel a ser representado, mas como uma identidade a ser honrada.</p>
      <br>
      <p>Unimos histórias reais com princípios atemporais. Leis que regem a energia feminina, sabedorias esquecidas, e verdades espirituais que libertam a mulher da busca por aprovação e a conduzem de volta ao seu centro.</p>
    `,
            img: 'fotos mary/img ebook.jpg'
        },
        marketing: {
            html: `
      <h2 style="color:#d4af7f; margin-bottom: 16px;">MARKETING CONECT IA</h2>
      <p>Transforme sua marca com estratégias inteligentes de marketing digital. Conteúdos que convertem, campanhas que engajam e resultados que impressionam.</p>
      <br>
      <p>Oferecemos soluções personalizadas para que sua empresa se destaque no mercado e construa relacionamentos duradouros com seu público.</p>
    `,
            img: 'fotos mary/img marketing.jpg'
        }
    };

    function abrirModal(tipo) {
        const c = conteudos[tipo];
        modalImgBg.style.backgroundImage = `url(${c.img})`;
        modalConteudo.innerHTML = c.html;
        modalOverlay.classList.add('active');
    }


    // Aplica conteúdo HTML
    document.getElementById('modalConteudo').innerHTML = conteudos[tipo].html;

    // Aplica imagem de fundo se houver
    const imgBg = document.getElementById('modalImgBg');
    if (imgBg && conteudos[tipo].img) {
        imgBg.style.backgroundImage = `url('${conteudos[tipo].img}')`;
    }

    // Exibe modal
    document.getElementById('modalOverlay').style.display = 'flex';
}

// Fecha o modal
function fecharModal() {
    document.getElementById('modalOverlay').style.display = 'none';
}


// Fecha o modal com ESC
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        fecharModal();
    }
});

// Fecha ao clicar fora da .modal-box
document.getElementById('modalOverlay').addEventListener('click', function (e) {
    const modalBox = document.querySelector('.modal-box');
    if (!modalBox.contains(e.target)) {
        fecharModal();
    }
});

// Sua função existente
function fecharModal() {
    document.getElementById('modalOverlay').style.display = 'none';
}

// Seleciona a navbar
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// remove o onclick inline, se ainda existir
const mentoriaCard = document.querySelector('.card-mentoria');
mentoriaCard.removeAttribute('onclick');

mentoriaCard.addEventListener('click', function (e) {
    e.preventDefault();

    // caminho relativo ao PDF na sua pasta pública
    const pdfURL = 'PDF%20MENTORIA/Proposta%20mentoria%20ID.pdf';
    const downloadName = 'Proposta_Mentoria_MarySiqueira.pdf';

    // cria um <a> oculto com download
    const a = document.createElement('a');
    a.href = pdfURL;
    a.download = downloadName;
    document.body.appendChild(a);

    // dispara o clique para baixar
    a.click();

    // remove o <a>
    document.body.removeChild(a);
});


