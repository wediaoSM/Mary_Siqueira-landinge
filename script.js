
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
                <div style="margin-top: 30px; text-align: center;">
                    <a href="https://wa.me/5516999013467" target="_blank" style="
                        display: inline-block;
                        padding: 12px 24px;
                        background-color: #d4af7f;
                        color: #1c1b1a;
                        text-decoration: none;
                        font-weight: bold;
                        border-radius: 8px;
                        box-shadow: 0 0 12px rgba(212, 175, 127, 0.4);
                        transition: background 0.3s;">
                        📞 Falar com a Agência
                    </a>
                </div>
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
            <br>
            <p>Este manual é para a mulher que deseja:</p>
            <ul style="padding-left: 20px; margin-top: 8px; margin-bottom: 16px;">
                <li>Entender seu valor antes de exigir reconhecimento;</li>
                <li>Parar de se masculinizar para ser respeitada;</li>
                <li>Atrair com doçura e postura, e não com medo e controle;</li>
                <li>Viver relações com propósito — começando pela relação com ela mesma.</li>
            </ul>
            <p><strong style="color:#d4af7f;">Feminilidade não é fraqueza.</strong> Se você sente que está pronta para ser olhada com os olhos certos, amada com honra e respeitada sem ter que lutar... Este manual foi escrito para você.</p>
            <div style="margin-top: 30px; text-align: center;">
                <a href="https://www.instagram.com/manualdafeminilidade/" download target="_blank" style="
                    display: inline-block;
                    padding: 12px 24px;
                    background-color: #d4af7f;
                    color: #1c1b1a;
                    text-decoration: none;
                    font-weight: bold;
                    border-radius: 8px;
                    box-shadow: 0 0 12px rgba(212, 175, 127, 0.4);
                    transition: background 0.3s;">
                    Ir à Página
                </a>
            </div>
            `,
            img: 'fotos mary/img vermelho.jpg'
        },
        marketing: {
            html: `
                 <h2 style="color:#d4af7f; margin-bottom: 16px;">EBOOKS – Trilogia da Feminilidade com Propósito</h2>
            <p>A Trilogia da Feminilidade com Propósito é um convite para a mulher que deseja se transformar de dentro pra fora — com sabedoria, poder feminino e espiritualidade.</p>
            <br>
            <p>São três eBooks que se complementam e conduzem a um caminho de reconexão com a essência, fortalecimento da identidade feminina e construção de uma presença que inspira, atrai e edifica.</p>
            <br>
            <p>Essa trilogia é para mulheres que não querem mais se perder tentando agradar ou se provar, mas que desejam caminhar com leveza, valor e direção.</p>
            <div style="margin-top: 30px; text-align: center;">
                <a href="https://pay.hotmart.com/Y98815848G?bid=1752506322525" download target="_blank" style="
                    display: inline-block;
                    padding: 12px 24px;
                    background-color: #d4af7f;
                    color: #1c1b1a;
                    text-decoration: none;
                    font-weight: bold;
                    border-radius: 8px;
                    box-shadow: 0 0 12px rgba(212, 175, 127, 0.4);
                    transition: background 0.3s;">
                    📚 Comprar Ebook
                </a>
            </div>
            `,
            img: 'fotos mary/img branco.jpg'
        }
    };

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


