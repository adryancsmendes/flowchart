// Seleciona todas as caixas e todos os containers
const boxes = document.querySelectorAll('.box');
const containers = document.querySelectorAll('.container');

// Função para atualizar o container exibido
function updateContent(item) {
    // Esconde todos os containers
    containers.forEach(container => {
        container.style.display = 'none';
    });

    // Exibe o container correspondente ao item clicado
    const targetContainer = document.querySelector(`.container[data-item="${item}"]`);
    if (targetContainer) {
        targetContainer.style.display = 'flex';

        // Remove a classe 'active' de todas as tabs dentro do container
        targetContainer.querySelectorAll('.tab').forEach(tab => {
            tab.classList.remove('active');
        });

        // Exibe apenas o conteúdo padrão (data-subtopic="first-topic") dentro do container
        targetContainer.querySelectorAll('.content').forEach(content => {
            content.style.display = content.getAttribute('data-subtopic') === 'first-topic' ? 'flex' : 'none';
        });
    }
}

// Define o primeiro container e tabs como visíveis e acessíveis na inicialização
document.addEventListener('DOMContentLoaded', () => {
    const firstContainer = document.querySelector('.container[data-item="neoadjuvant-therapy"]');
    if (firstContainer) {
        firstContainer.style.display = 'flex';

        // Garante que o conteúdo padrão ("first-topic") esteja visível ao carregar a página
        firstContainer.querySelectorAll('.content').forEach(content => {
            content.style.display = content.getAttribute('data-subtopic') === 'first-topic' ? 'flex' : 'none';
        });

        // Remove a classe 'active' de todas as tabs no container inicial
        firstContainer.querySelectorAll('.tab').forEach(tab => {
            tab.classList.remove('active');
        });
    }
});

// Adiciona um evento de clique para cada caixa
boxes.forEach(box => {
    box.addEventListener('click', () => {
        // Remove a classe 'active' e o atributo 'data-active' de todas as caixas
        boxes.forEach(b => {
            b.classList.remove('active');
            b.removeAttribute('data-active');
        });

        // Adiciona a classe 'active' e define 'data-active="true"' na caixa clicada
        box.classList.add('active');
        box.setAttribute('data-active', 'true');

        // Atualiza o conteúdo do container baseado no data-item da caixa clicada
        const item = box.getAttribute('data-item');
        updateContent(item);
    });
});

// Sistema de Tabs para cada container
const tabs = document.querySelectorAll('.tab');

// Adiciona evento de clique para cada tab
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const subtopic = tab.getAttribute('data-subtopic');

        // Identifica o container ativo
        const activeContainer = document.querySelector('.container[style*="display: flex"]');
        if (!activeContainer) return;  // Se não houver container ativo, encerra a função

        // Remove a classe 'active' de todas as tabs no container ativo e adiciona apenas na tab clicada
        activeContainer.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Esconde todos os conteúdos no container ativo e exibe apenas o conteúdo correspondente
        activeContainer.querySelectorAll('.content').forEach(content => {
            content.style.display = content.getAttribute('data-subtopic') === subtopic ? 'flex' : 'none';
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const modalText = document.getElementById("modal-text");
    const closeModal = document.querySelector(".close");

    // Conteúdo com HTML estruturado
    const modalContent = {
        bowelDysfunction: `
            <div class="modal-text">
            <h2>Bowel Dysfunction</h2>
            <p>Your bowel movements after treatment can be very abnormal. Many patients suffer from:</p>
            <ul>
                <li>Going often</li>
                <li>Going urgently</li>
                <li>Needing to go many times over a short period to fully evacuate</li>
                <li>Possible stool accidents</li>
                <li>Possible gas accidents</li>
            </ul>
            <p>This group of symptoms is called Low Anterior Resection Syndrome (LARS). The severity of these symptoms increases depending on how low your anastomosis (i.e., bowel connection) is. The closer we have to make the anastomosis to your anus, the worse your symptoms will be. These symptoms can have a major negative impact on your activities and quality of life. It is important to discuss with your surgeon about any concerns you may have.</p>
            <p>It is usually very severe in the first 3 months after treatment, and it continues to improve up to 12-18 months.</p>
            <p>We know from experience that how your bowel movements were before you started treatment is usually the best that you can expect.</p>
            <p>There are some medications that may help regulate your bowel movements, but your bowel habits are unlikely to ever return to ‘normal’.</p>
            <p>However, if the hole is larger, then we may need to bring you back to surgery. We may re-do the connection if possible, or if the hole is too big or you are too sick, we may have to undo the connection fully and give you a permanent stoma.</p>
            </div>
        `,
        anastomoticLeak: `
            <div class="modal-text">
            <h2>Anastomotic Leak</h2>
            <p>Whenever we remove a piece of your intestine and make an anastomosis (i.e., connection), we will use staples and sutures to make the connection. Your body has to then heal around this connection.</p>
            <p>In about 10-15% of patients, the healing will be incomplete and an anastomotic leak (i.e., hole in the connection) will develop. This usually happens around 1-2 weeks after surgery.</p>
            <p>Symptoms may include:</p>
            <ul>
                <li>Fever</li>
                <li>Abdominal pain</li>
                <li>Nausea and vomiting</li>
                <li>Pus draining from your anus</li>
            </ul>
            <p>If you experience any of these symptoms, you will need to come back to the emergency room ASAP to be evaluated by our team. We will do blood tests and a CT scan to check the connection.</p>
            <p>If the hole in your connection is small, then antibiotics is usually the only treatment that is needed. This is because of your temporary stoma diverting all stool away from the connection (i.e., no stool reaches the connection).</p>
            </div>`,
            anastomoticLeak: `
            <div class="modal-text">
            <h2>Anastomotic Leak</h2>
            <p>Whenever we remove a piece of your intestine and make an anastomosis (i.e., connection), we will use staples and sutures to make the connection. Your body has to then heal around this connection.</p>
            <p>In about 10-15% of patients, the healing will be incomplete and an anastomotic leak (i.e., hole in the connection) will develop. This usually happens around 1-2 weeks after surgery.</p>
            <p>Symptoms may include:</p>
            <ul>
                <li>Fever</li>
                <li>Abdominal pain</li>
                <li>Nausea and vomiting</li>
                <li>Pus draining from your anus</li>
            </ul>
            <p>If you experience any of these symptoms, you will need to come back to the emergency room ASAP to be evaluated by our team. We will do blood tests and a CT scan to check the connection.</p>
            <p>If the hole in your connection is small, then antibiotics is usually the only treatment that is needed. This is because of your temporary stoma diverting all stool away from the connection (i.e., no stool reaches the connection).</p>
            </div>
        `,
        temporaryStoma: `
            <div class="modal-text">
            <h2>Temporary Stoma</h2>
            <p>We will be making a temporary stoma bag as part of your surgery. We do this to protect your anastomosis (i.e., bowel connection) because it is at higher risk of non-healing (i.e., anastomotic leak) due to the radiation. You will keep this temporary stoma bag for at least 3 months to let your connection heal and for you to recover from your operation. You may need to keep the stoma bag longer if your connection does not heal fully, or if you need more treatments for your cancer after your surgery.</p>
            <p>You will meet the stoma nurse and receive some teaching about your stoma (how it works, how to change it, how to care for it, etc.) before your surgery. After your surgery, you will also have regular follow-ups with the stoma nurse.</p>
            <p>The government of Quebec will reimburse part of your stoma bag costs (about 800$ per year). Depending on how long you keep your stoma, patients may have to pay up to $1000 more per year out of their own pockets to cover the remaining costs. If you have private insurance, it is likely they will also reimburse part of these costs.</p>
            <p>You will need to have another surgery to close the stoma bag when it is appropriate. It is important to know that once your stoma bag is closed and you start having bowel movements again, you are likely to have major issues with your bowel habits</p>
            </div>
        `,
        genitounaryDysfunction: `
            <div class="modal-text">
            <h2>Genitounary Dysfunction</h2>
            <p>About 30% of patients will have issues with their sexual and urinary function after surgery. This is because all of these nerves are exactly where we need to operate. These nerves are often too small to be seen and can be damaged during surgery. These symptoms can be permanent and may have a major negative impact on your activities and quality of life.</p>
            <p>Urinary function: You can be either difficulty urinating or urinating too much without control.</p>
            <p>Sexual function</p>
            <ul>
                <li>Men: Erectile dysfunction (difficulty having erections) or retrograde ejaculations (cannot ejaculate). If this occurs, the problem is usually caused by nerve damage, and medications such as Viagra or Cialis are not very effective.</li>
                <li>Think about sperm banking if you are still planning on having children in the future</li>
            </ul>
            <ul>
                <li>Women: dyspareunia (pain with sexual intercourse), vaginal dryness, vaginal stricture (abnormal tightening)</li>
                <li>Think about egg banking if you are still planning on having children in the future</li>
            </ul>
            </div>
        `
    };

    // Exibir modal ao clicar no botão
    document.querySelectorAll(".button").forEach(button => {
        button.addEventListener("click", function() {
            const key = this.getAttribute("data-modal");
            modalText.innerHTML = modalContent[key];  // Usando innerHTML para HTML estruturado
            modal.style.display = "flex";
        });
    });

    // Fechar modal ao clicar no 'x' ou fora do conteúdo
    closeModal.onclick = function() {
        modal.style.display = "none";
    };
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});
