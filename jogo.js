// definindo const, lets e outras variaveis
const peneiraTimes = ['Grêmio', 'Vasco', 'Cruzeiro', 'Bragantino'];
const posicoes = ['Goleiro', 'Zagueiro', 'Meio-campo', 'Atacante'];
const europaTimes = ['Bayern', 'Real Madrid', 'City', 'Milan'];
const brasilTimes = ['Corinthians', 'Flamengo', 'Palmeiras', 'São Paulo'];
const aposentadoriaTimes = ['Santos', 'Cuiabá', 'Amazonas', 'Paysandu'];
 
 
const Opcoes = ['1', '2', '3', '4', '5'];
let jogador = '';
let Nacao = '';
// começo
function Comeco() {
    const inicio = prompt(`Seja bem-vindo ao Soccer Life Br! Você tem duas opções:
    1- Continuar e criar sua carreira
    2- Sair`);
 
    if (inicio === '1') {
        EscolherJogador();
    } else if (inicio === '2') {
        alert("Obrigado por jogar!");
    } else {
        alert("Opção inválida. Tente novamente.");
        Comeco(); // Reinicia o jogo em caso de opção inválida
    }
}
 
// escolhe o nome do jogador
function EscolherJogador() {
    //o while true faz ocom que o loop continue ate seguir a condiçao do if
    while (true) {
        jogador = prompt("Escolha o nome do jogador:"); // Armazena o nome do jogador

        if (jogador && jogador.trim() !== "" && isNaN(parseInt(jogador))) {
            alert(`Bem-vindo, ${jogador}! Vamos começar sua carreira.`);
            alert(`${jogador}, você tem um sonho desde criança: ser um jogador de futebol. Agora, é sua chance de começar sua carreira!`);
            break; 
        } else {
            alert("Por favor, insira apenas letras, sem números.");
        }
    }

    Escolhernacionalidade(); // Chama a função para escolher a nacionalidade
}

// escolhe o nome do jogador
function Escolhernacionalidade() {
    let Nacao;

    //o while true faz ocom que o loop continue ate seguir a condiçao do if
    while (true) {
        Nacao = prompt("Escolha o seu país (exemplo: Brasil, Argentina, Chile etc...):");

        if (Nacao && Nacao.trim() !== "" && isNaN(parseInt(Nacao))) {
            break; 
        } else {
            alert("Por favor, insira apenas letras, sem números.");
        }
    }

    alert(`${jogador}, você nasceu no país ${Nacao} e podera representa-lo no futuro.`);
    Escolherposicao();
}

// Escolher posiçao
function Escolherposicao() {
    const posicion = Math.floor(Math.random() * posicoes.length);
    const posicaoEscolhido = posicoes[posicion];
    alert(`Vamos decidir sua posição, ${jogador}! Na qual tem mais potencial.`);
    alert(`Sua posição é: ${posicaoEscolhido}.   Voce sera um grande jogador nesta posição!!`);
    EscolherTime();
}
// Escolher time na peneira
 
function EscolherTime() {
    const time = Math.floor(Math.random() * peneiraTimes.length);
    const timeEscolhido = peneiraTimes[time];
    alert(`Seu primeiro time profissional é o ${timeEscolhido}. Sua jornada começa agora!`);
    alert(`Você começa o seu primeiro treino no ${timeEscolhido}. Os treinos são intensos, mas você está determinado a dar seu melhor.`);
    DecidirPenalti(timeEscolhido); 
}
 
function DecidirPenalti(timeEscolhido) {
    alert(`Você se destacou no ano, ajudando seu time a chegar à final da Copa do Brasil.
Agora, o jogo empatou, então vai para a disputa de pênaltis, e você tem a chance de decidir o título.`);
 
    let golaco = 0;
    let adversarioGol = 0;
 
    for (let cdb = 0; cdb < 5; cdb++) {
        const Neymar = prompt(`Rodada ${cdb + 1} - Escolha onde você vai chutar:\n1 - canto superior esquerdo\n2 - canto superior direito\n3 - meio\n4 - canto inferior esquerdo\n5 - canto inferior direito`);
       
        const erro = Math.random() < 0.3 ? Math.floor(Math.random() * 5) + 1 : 0; // 70% de chance de marcar
 
        if ((Neymar === '1' && erro !== 1) ||
            (Neymar === '2' && erro !== 2) ||
            (Neymar === '3' && erro !== 3) ||
            (Neymar === '4' && erro !== 4) ||
            (Neymar === '5' && erro !== 5)) {
            alert(`Goooool! do ${timeEscolhido}`);
            golaco++;
        } else {
            alert('Pênalti perdido!');
        }
 
        const adversario = Math.random() < 0.7 ? Math.floor(Math.random() * 5) + 1 : 0; // 30% de chance de marcar
        const tafarel = parseInt(Neymar);
 
        if ((adversario === 1 && tafarel !== 1) ||
            (adversario === 2 && tafarel !== 2) ||
            (adversario === 3 && tafarel !== 3) ||
            (adversario === 4 && tafarel !== 4) ||
            (adversario === 5 && tafarel !== 5)) {
            alert('Gooool do adversario!');
            adversarioGol++;
        } else {
            alert('Vai que é tua, Tafarel!');
        }
    }
 
    // Resultados finais
    if (golaco > adversarioGol) {
        alert(`Você ganhou! Placar final: Você ${golaco} - ${adversarioGol} Adversario. Seu time é campeão da Copa do Brasil!`);
        alert(`O  ${jogador} esta sendo observado por times europeus, uma nova chance esta por vir`);
        EscolherTimeEuropeu();
    } else if (golaco < adversarioGol) {
        alert(`Você perdeu! Placar final: Você ${golaco} - ${adversarioGol} Adversario. Mas um time no Brasil está interessado em você.`);
        alert(`O  ${jogador} esta sendo observado por times brasileiros, uma nova chance esta por vir`);
        EscolherTimeBrasil();
    } else {
        alert(`Empate! Placar final: Você ${golaco} - ${adversarioGol} Adversario. Uma nova oportunidade virá!`);
        alert(`O  ${jogador} esta sendo observado por times brasileiros, uma nova chance esta por vir`);
        EscolherTimeBrasil();
    }
}
 
 

// Escolher time europeu
function EscolherTimeEuropeu() {
    const time = Math.floor(Math.random() * europaTimes.length);
    const timeEuropeu = europaTimes[time];
    alert(`Parabéns, ${jogador}! Você foi contratado pelo ${timeEuropeu}.
    Sua carreira está no auge!`);
    alert(`Você fez uma temporada espetacular no ${timeEuropeu}. Agora, após muito treinamento e dedicação, você vai disputar sua primeira Champions League.`);
    ChampionsLeague(timeEuropeu);
}
 
// Escolher time no Brasil
function EscolherTimeBrasil() {
    const time = Math.floor(Math.random() * brasilTimes.length);
    const timeBrasil = brasilTimes[time];
    alert(`Você foi contratado pelo ${timeBrasil}. Agora, você tem a chance de brilhar no Brasil!`);
    alert(`Após uma temporada de grandes atuações, seu time chegou à final da Libertadores. Se prepare para fazer história!`);
    Libertadores(timeBrasil);
}
 
// Champions League
function ChampionsLeague(time) {
    alert(`Chegou o grande dia! Após uma temporada brilhante, você está pronto para disputar sua primeira final de Champions League.`);
    const jogada = prompt(`Seu time está empatando 0 a 0. A bola chega na área pelo alto, o que você faz?
    ${Opcoes[0]} - Bicicleta
    ${Opcoes[1]} - Voleio
    ${Opcoes[2]} - Jogada Individual
    ${Opcoes[3]} - Domina para chutar
    ${Opcoes[4]} - Chuta de primeira`);
 
    switch (jogada) {
        case '1':
            alert(`Golaçooooooooo! O ${jogador} virou um CR7 e agora é campeão da Champions com um gol de bicicleta proibido para menores de 18 anos!`);
            break;
        case '2':
            alert(`Golaçooooooooo  de videogame! ${jogador}  Você é campeão da Champions com um gol incrivel de voleio!`);
            break;
        case '3':
            alert(`Golaçooooooooo, ‘tá com frio? Pega essa lençol!! o  ${jogador} faz um lindo lance individual na area dando um lençol no marcador e fazendo um golaço e se consagrando campeão da Champions!`);
            break;
        case '4':
        case '5':
            alert(`Você isolou, tentou chutar colocado e colocou no meio da arquibancada! O time  do  ${jogador} foi eliminado.`);
            break;
        default:
            alert('Jogada inválida!');
            ChampionsLeague(time); // Reinicia caso a jogada seja inválida
            return;
    }
    JOGO1();
}
 
// Libertadores
function Libertadores(time) {
    alert(`Depois de uma temporada brilhante, você e seu time chegaram à final da Libertadores. `);
    const jogada = prompt(`Seu time está empatando 0 a 0. A bola chega na área pelo alto, o que você faz?
    ${Opcoes[0]} - Bicicleta
    ${Opcoes[1]} - Voleio
    ${Opcoes[2]} - Cabeceio
    ${Opcoes[3]} - Domina para chutar
    ${Opcoes[4]} - Chuta de primeira
    6 - Não chuta, deixa para o outro jogador`);
 
    switch (jogada) {
        case '1':
            alert(`Golaçooooooooo! O ${jogador} virou um CR7 e agora é campeão da Libertadores com um gol de bicicleta proibido para menores de 18 anos!`);
            break;
        case '2':
            alert(`Golaçooooooooo  de videogame! ${jogador}  Você é campeão da Libertadores com um gol incrivel de voleio!`);
            break;
        case '3':
            alert(`Golaçooooooooo, ‘tá com frio? Pega essa lençol!! o  ${jogador} faz um lindo lance individual na area dando um lençol no marcador e fazendo um golaço e se consagrando campeão da Libertadores!`);
            break;
        case '4':
        case '5':
            alert(`Você isolou, tentou chutar colocado e colocou no meio da arquibancada! O time  do  ${jogador} foi eliminado.`);
            break;
        default:
            alert('Jogada inválida!');
            Libertadores(time); // Reinicia caso a jogada seja inválida
            return;
    }
 
    JOGO1();
}
function JOGO1(time) {
    alert(`Depois de anos em seu auge chegou o momento mais esperado, a copa do mundo!. `);
    alert(`Voce ira representar a sua ${Nacao}  na copa do mundo`);
    const jogada = prompt(`No primeiro jogo sua seleção adversario é a seleção da Arabia saudita, Em um jogo pegado seu time está empatando 0 a 0. seu time sofre uma falta, e voce e o batedor, o que você faz?
    ${Opcoes[0]} - Mete a bomba
    ${Opcoes[1]} - Tento chutar colocado
    ${Opcoes[2]} - Faço jogada ensaida
    ${Opcoes[3]} - Cruza na area
    ${Opcoes[4]} - Deixa para outra pessoa
    `);
 
    switch (jogada) {
        case '1':
            alert(`Golaçooooooooo! O ${jogador} mete uma bicuda na bola ala Roberto Carlos!`);
            break;
        case '2':
            alert(`Você isolou, tentou chutar colocado e colocou no meio da arquibancada! O time  do  ${jogador} perdeu o 1 jogo`);
            break;
        case '3':
            alert(`Golaçooooooooo, jogada ensaida, parecia ate uma partida de FIFA ${jogador}`);
            break;
        case '4':
            alert(`Voce cruzou na area e um jogador do seu time cabecou na trave ${jogador} voces perderam o 1 jogo.`);
        case '5':
            alert(` isolou, deixou para outro jogador e ele errou, voces perderam o 1 jogo.`);
            break;
        default:
            alert('Jogada inválida!');
            JOGO1(time); // Reinicia caso a jogada seja inválida
            return;
    }
 
    JOGO2();
}
function JOGO2(time) {
    alert(`Depois dessa 1 partida agora enfrentara sua seleção rival `);
    const jogada = prompt(`2 jogo  e contra a seleção rival que esta dominando a partida porem o jogo esta 0 a 0, voce entra no 2 tempo o que voce faz?
    ${Opcoes[0]} - Cruzo na area
    ${Opcoes[1]} - Tento chutar colocado
    ${Opcoes[2]} - espero na area para cabecear
    ${Opcoes[3]} - tento fazer jogadas individuais
    ${Opcoes[4]} - Chuta de primeira toda bola que vier
    `);
 
    switch (jogada) {
        case '1':
            alert(`Goooooooooollllllllll! O ${jogador} deu um lindo passe para seu companheiro marcar um golaço`);
            break;
        case '2':
            alert(`Golaçooooooooo  de videogame! ${jogador} da um lindo chute e a bola vai la onde a coruja dorme`);
            break;
        case '3':
            alert(`Golll de quem sabe, de quem e decisivo  ${jogador}salva seu time no jogo`);
            break;
        case '4':
        case '5':
            alert(`Você isolou, tentou chutar colocado, criar jogadas e colocou no meio da arquibancada! O time  do  ${jogador} perdeu o 2 jogo e foi eliminado.`);
            break;
        default:
            alert('Jogada inválida!');
            JOGO2(time); // Reinicia caso a jogada seja inválida
            return;
    }
 
    JOGO3();
}
function JOGO3(time) {
    alert(`Agora vem a ultima rodada seu time acaba vencendo por 3 x 2`);
    const jogada = prompt(`veja se seu time passa da fase de grupos
    ${Opcoes[0]}
    ${Opcoes[1]}
    ${Opcoes[2]}
    ${Opcoes[3]}
    ${Opcoes[4]}
`);
 
    switch (jogada) {
        case '1':
            alert(`Voces passam tranquilamente em 1 no grupo ${jogador}`);
            break;
        case '2':
            alert(`Empataram em pontos porem perderam pelo saldo de gols  ${jogador}`);
            break;
        case '3':
            alert(`Empataram em pontos porem passaram pelo saldo de gols   ${jogador} `);
            break;
        case '4':
        case '5':
            alert(`Voces foram guerreiros mas acabaram sendo eliminados  ${jogador} .`);
            break;
        default:
            alert('Nem se classificou inválida!');
            JOGO3(time); // Reinicia caso a jogada seja inválida
            return;
    }
    if (jogada === '1' || jogada === '3' ) {
        alert('Voce se classificaram para a proxima fase');
        OITAVAS();
    } else {
        alert('Infelizmente foram eliminados na fase de grupos');
       aposentadoria();
    }
 
}
function OITAVAS(time) {
    alert(`Depois dessa fase de grupos voce enfrenta uma poderosa seleçao nas oitavas de final`);
    const jogada = prompt(`o jogo esta na prorrogação, os 2 lados estao cansado, voce vai para a area no ultimo lance o que voce faz
    ${Opcoes[0]} - Cruzo na area
    ${Opcoes[1]} - Tento chutar colocado
    ${Opcoes[2]} - espero na area para cabecear
    ${Opcoes[3]} - tento fazer jogadas individuais
    ${Opcoes[4]} - Chuta de primeira toda bola que vier
    `);
 
    switch (jogada) {
        case '1':
            alert(`Goooooooooollllllllll! O ${jogador} deu um lindo passe para seu companheiro marcar um golaço`);
            break;
        case '2':
            alert(`Golaçooooooooo  de videogame! ${jogador} da um lindo chute e a bola vai la onde a coruja dorme`);
            break;
        case '3':
            alert(`Golll de quem sabe, de quem e decisivo  ${jogador} salva seu time no jogo`);
            break;
        case '4':
        case '5':
            alert(`Você isolou, tentou chutar colocado, criar jogadas e colocou no meio da arquibancada! O time  do  ${jogador} perdeu o jogo e foi eliminado.`);
            break;
        default:
            alert('Jogada inválida!');
            OITAVAS(time); // Reinicia caso a jogada seja inválida
            return;
    }
    if (jogada === '1' || jogada === '2' || jogada === '3') {
        alert('Voce se classificaram para as quartas');
        quartas();
    } else {
        alert('Voces foram eliminados');
        aposentadoria();
    }
 
}
 
function quartas(time) {
    alert(`Depois dessa fase de grupos voce enfrentar mais uma das poderosas seleçao`);
    alert(`Voce ira representar a sua ${Nacao} nesse jogo decisivo`);
    const jogada = prompt(`o jogo esta na prorrogação, seu time vence por 1 x 0 faltando 4 minutos para acabar o jogo
    ${Opcoes[0]} - Ajudo na defesa
    ${Opcoes[1]} - Tento fazer contra-ataques
    ${Opcoes[2]} - Tento fazer pressao
    ${Opcoes[3]} - Retranca tudo
    ${Opcoes[4]} - Chuta de primeira toda bola que vier
    6 - Não faz nada, deixa para o outro jogador`);
 
    switch (jogada) {
        case '1':
            alert(`Parabens ${jogador} voces se classificaram para a semi final depois de muito esforço`);
            break;
        case '2':
            alert(`Pelo amor de DEUSSS ${jogador} voces foram eliminados pois voce deu espaço pro time aversario`);
            break;
        case '3':
            alert(`seu time conseguiu fazer mais um gol ${jogador} e passaram de fase`);
            break;
        case '4':
        case '5':
            alert(`Voces nao deixaram o adversario pegar ritmo de jogo logo conseguiram se classificar  ${jogador} .`);
            break;
        default:
            alert('ai se zuo ne fred inválida!');
            quartas(time); // Reinicia caso a jogada seja inválida
            return;
    }
    if (jogada === '1' || jogada === '2' || jogada === '4' || jogada === '5') {
        alert('Voces se classificaram para a semi final');
        Semifinal();
    } else {
        alert('Seu time foi eliminado nas quartas, que pena faltava 4 m');
        aposentadoria();
    }
 
}
 
function Semifinal(time) {
    alert(`Depois de tantos jogos voce ira enfrentar a seleçao favorita a ganhar a copa`);
    alert(`Voce ira representar a sua ${Nacao} nesse jogo decisivo`);
    const jogada = prompt(`o jogo começa mas que tatica seu time devera seguir
    ${Opcoes[0]} - Retrancar
    ${Opcoes[1]} - Tentar sair jogando com controle
    ${Opcoes[2]} - Passes em profundidade
    ${Opcoes[3]} - Jogadas individuais
    ${Opcoes[4]} - ser muito ofensivo
    `);
 
    switch (jogada) {
        case '1':
            alert(`Que pena seu time nao aguentou a pressao e acabaram sendo eliminados ${jogador}`);
            break;
        case '2':
            alert(`7X1 PROS CARA.... ${jogador}  `);
            break;
        case '3':
            alert(`Seu time conseguiu levar para o penalti porem acabaram perdendo ${jogador} `);
            break;
        case '4':
        case '5':
            alert(`parabens   ${jogador} voces conseguiram passar de fase e agora vao disputar a grande final`);
            break;
        default:
            alert('tente dnv inválida!');
            Semifinal(time); // Reinicia caso a jogada seja inválida
            return;
    }
    if (jogada === '4' || jogada === '5' ) {
        alert('Voce se classificou para a final da copa do mundo');
        Final();
    } else {
        alert('Infelizmente foram elimados');
        aposentadoria();
    }
 
 
}
 
function Final(time) {
    alert(`Depois de tudo pelo o que passou, agora a ansiedade esta a milhoes`);
    alert(`Voce ira representar a sua ${Nacao} nesse jogo decisivo da final da copa do mundo`);
    const jogada = prompt(`o jogo empatou na prorrogação 3x3 um jogaço voce fez um hat-trick quando precisou empatar, agora e sua hora, o ultimo penalti a bater e seu se voce fiz e campeao mas se errar perde o titulo
    ${Opcoes[0]} - Canto superior direito
    ${Opcoes[1]} - Canto superior esquerdo
    ${Opcoes[2]} - meio
    ${Opcoes[3]} - Canto inferior direito
    ${Opcoes[4]} - canto inferior esquerdo
    `);
 
    switch (jogada) {
        case '1':
            alert(`Bateu muito forte e isolou ${jogador} perdeu o titulo`);
            break;
        case '2':
            alert(`Bateu muito forte e isolou ${jogador}  perdeu o titulo`);
            break;
        case '3':
            alert(`Golaçooooooooo, de cavadinha, olha o que o voce fez  ${jogador} voce e campeao`);
            break;
        case '4':
        case '5':
            alert(`PEGOOOOO TAFARELLLLL O GOLEIRO DO TIME ADVERSARIO CATOU E   ${jogador} Perdeu o titulo`);
            break;
        default:
            alert('Jogada inválida!');
            Final(time); // Reinicia caso a jogada seja inválida
            return;
    }
    if (jogada === '3' ) {
        alert('VOCE E CAMPEAO DA COPA DO MUNDO');
        aposentadoria();
    } else {
        alert('voce acabou perdendo a copa do mundo');
        aposentadoria();
    }
 
    aposentadoria();
}
 
// Aposentadoria
function aposentadoria() {
    const final = Math.floor(Math.random() * aposentadoriaTimes.length);
    const timeAposentadoria = aposentadoriaTimes[final];
    alert(`Depois de tantos anos esta acabando, apos a copa do mundo o jogador decidiu se aposentar.`);
    alert(`Chegou o fim da sua brilhante carreira. Seu último time será o ${timeAposentadoria}.`);
    alert(`Na ultima rodada do Brasileirao serie B seu time precisa vencer para subir de divisão.`);
 
    const jogada = prompt(`Seu time está perdendo de 2 a 0, faltam 25 minutos para acabar o jogo. O que você faz?
    ${Opcoes[0]} - Chamo a responsabilidade
    ${Opcoes[1]} - Tento finalizar de fora da área
    ${Opcoes[2]} - Saio do jogo por cansaço
    ${Opcoes[3]} - Tento sair driblando
    ${Opcoes[4]} - Chuto de primeira toda bola que vier`);
 
    switch (jogada) {
        case '1':
        case '2':
        case '4':
            alert('Você é decisivo marcando gol e ajudando o time, salvando seu time! Agora vocês são da série A!');
            break;
        case '3':
        case '5':
            alert('Você isolou! Pelo desespero, acabou pipocando e seu time não subiu de divisão.');
            break;
        default:
            alert('Jogada inválida!');
            aposentadoria();
            return;
    }
   
    Fimcarreira();
}
// FIM DE CARREIRA
function Fimcarreira() {
    alert(`Infelizmente tudo tem um fim, com esta partida o ${jogador} olha para trás e percebe quantas conquistas teve. Obrigado por toda a sua dedicação ao futebol, voce e uma lenda fazendo tudo que pode em todos os jogos ${jogador}!`);
    alert(`Depois de tantos anos o ${jogador} encerra sua carreira, vamos ver tudo que ele conquistou.`);
 
    const jogada = prompt(`Que titulos individuais voce ganhou em sua carreira
    ${Opcoes[0]} - Opção 
    ${Opcoes[1]} - Opção 
    ${Opcoes[2]} - Opção 
    ${Opcoes[3]} - Opção 
    ${Opcoes[4]} - Opção `);
 
    switch (jogada) {
        case '1':
            alert('Você não ganhou nem um titulo individual');
        case '2':
            alert('Voce foi MVP da copa do mundo');
        case '4':
            alert('Você foi artilheiro do ano');
            break;
        case '3':
            alert('Você não ganhou nem um titulo individual');
        case '5':
            alert('Parabens voce foi bola de ouro');
            break;
        default:
            alert('faça corretamente.-.!');
            Fimcarreira();
            return;
    }
   
   Fimcarreira2();
}
 
// FIM DE CARREIRA
function Fimcarreira2() {  
    const jogada = prompt(`Historicamente de forma individual que recordes voce bateu?
    ${Opcoes[0]} - Opção 
    ${Opcoes[1]} - Opção 
    ${Opcoes[2]} - Opção 
    ${Opcoes[3]} - Opção 
    ${Opcoes[4]} - Opção `);
 
    switch (jogada) {
        case '1':
            alert('95 gols em uma temporada');
        case '2':
            alert('Conquistou todos os titulos possiveis em uma temporada');
        case '4':
            alert('Maior artilheiro da historia em sua posição');
            break;
        case '3':
            alert('Você não foi historicamente relevante');
        case '5':
            alert('Voce foi o maior vencedor da bola de ouro');
            break;
        default:
            alert('faça corretamente.-.!');
            aposentadoria();
            return;
    }
   
    alert(`Infelizmente tudo tem um fim,  o ${jogador} foi um grande vencedor em sua carreira! um idolo e um heroi!! foi um presente  ver voce jogar G.O.A.T`);
    alert(`OBRIGADO POR JOGAR ${jogador}`);
}
window.onload = function() { //usamos esse script com chat gpt para que a pagina do css carregase antes do script, pq tava fazendo o contrario mesmo usando defer
    Comeco();  // Chama a função de início após todo o conteúdo ser carregado
}
 