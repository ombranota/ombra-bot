const ownerNumber = ["393338958677@s.whatsapp.net"] 
// mude somente o numero e não tire o @s.whatsapp.net

const OriginalOwner = '393338958677' 
// mude para seu numero

const callbotmsgs = ['Pingu', 'pingu']

var gimagenotregister = false
// quando não há comando registrado o bot procura no google image

var sgooglenotregister = false
// quando não há comando registrado o bot procura uma pesquisa no google

const antinewchatmsg = 'O anti chat novo está ativado e você não é meu proprietário, logo será bloqueado'
//mensagem do antinewchat

const urlaudiomenu = 'https://b.top4top.io/m_19923zx481.mp3'
// link direto da url do audio

const antipvmsg = '*🚫 PRIVATO BLOCCATO 🚫*'
//mensagem do antipv

const limitqnt = 9999

const delayantispamcmd = 3
//tempo de delay do antispamcmd (medido por segundos)

const delaystealcmd = 60
//tempo de delay dos comandos steal (medido por segundos)

const delaygamescmd = 60
//tempo de delay dos comandos de games (medido por segundos)

const msgwelcomeimg = (numero, groupname) => {
    return `Seja bem-vindo ${numero}\n\nEscreve ${prefix}menu para lista de comandos`
}
//Texto de boas vindas na imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const byemsgimg = (numero, groupname) => {
    return `Adeus ${numero}`
}
//Texto de despedidas na imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const menumsgimg = (numero, groupname, bat) => {
    return `MENU DO BRIZAS-BOT COM 434 COMANDOS, BATERIA %${bat}`
}
//Texto no menu da imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const titlemenumsgimg = 'BENVENUTA'
//Título no menu da imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const backgroundmenuimg = `https://i.imgur.com/tVKFNFk.png`
//Link direto da imagem de fundo TAMANHO RECOMENDADO: 1280x720
//Obs: não coloque o texto longo para a imagem não sumir

const backgroundwelcomeimg = `https://i.imgur.com/tVKFNFk.png`
//Link direto da imagem de fundo da boas-vindas TAMANHO RECOMENDADO: 1280x720
//Obs: não coloque o texto longo para a imagem não sumir

const backgroundbyeimg = `https://i.imgur.com/2TCj9ri.jpg`
//Link direto da imagem de fundo das despedidas TAMANHO RECOMENDADO: 1280x720
//Obs: não coloque o texto longo para a imagem não sumir

const apikeyimgbb = 'c9cf132756510ad171587fb5a5a0389f'
// sua key do imgbb para ativar o antiporn e mais alguns comando que necessita de baixar imagem

const cr = '🐧️✨𝐏𝐢𝐧𝐠𝐮 𝐁𝐨𝐭✨🐧️\n' 
// texto do simbolo de verificado

const prefix = '!' 
// prefixo

const blockedmsg = '*😜 Il tuo numero è bloccato, quindi non ti ascolta 😜*'
// mensagem quando alguem bloqueado solicita um comando

const blockedcmdmsg = '*🚫Questo comando è bloccato, contatta il proprietario del bot per scoprire il motivo🚫*'
// mensagem quando alguem solicita um comando bloqueado 

// MENSAGENS DE BAN

const banmsgtype = '*membro comune, il ban è vicino *'
// mensagem de ban no anti tipos de mensagem

const ativohelp = `O sistema de contagem de mensagens é por grupo e consiste em rankear, listar, remover pessoas de acordo
com a frequência de mensagens no grupo, veja abaixo os comandos para administrar as mensagens do grupo:

checkativo (marcar) - lista a frequência de mensagens do membro marcado
rankativo - rankea as pessoas mais ativas do grupo
banativos (num) - remove membros com uma certa qnt de numeros de msg pra baixo
filtroativo (num) - lista membros com uma certa qnt de numeros de msg pra baixo]
atividade - lista a atividade de todos membros do grupo

Obs: O número de mensagens pode estar impreciso devido a contagem ser pelo bot.`

const adminmsgtype = '*Sei un amministratore quindi non ti bandirò per aver inviato un tipo di messaggio proibito *'
// mensagem de quando adm manda tipos de mensagens proibidas

const banmsgporn = 'Hmmm porno con antiporno attivato , verrai bannato..'
// mensagem de ban no antiporn

const adminmsgporn = '*Sei un amministratorenon ti bannerò *'
// mensagem de quando adm manda porn com antiporn ativado

const banmsglink = 'Membro comune il ban sta arrivando....'
// mensagem de ban no antilink

const adminmsglink = 'Questo è un link amico attento ahah🙃'
// mensagem de quando adm manda link

const adminmsgpalavra = 'Questa parola è nella lista delle parole proibite'
// mensagem de quando adm manda uma palavra proibida pelo bot

const banmsgpalavra = 'Palora proibita ? il ban è alle porte'
// mensagem de ban quando manda uma palavra proibida pelo bot

const qnttravahardroleta = 2
// quantidade de travas que mandam no roleta russa hard
// Obs: O valor é multiplicado por 12 ent tenha cuidado

// MENSAGENS DE BOM DIA BOA TARDE E BOA NOITE

const linkimgday = 'https://i.imgur.com/RR18JiI.jpg'
const textmsgday = 'Ohayo gozaimasu, Onii-chan 👉👈'
// link e mensagem de bom dia

const linkimgeve = 'https://i.ibb.co/bLXgcBW/lp-tarde-anime-by-hitsukinyan-db7fpqr-fullview.jpg'
const textmsgeve = `Kon'nichiwa Onii-chan, tieni un café ☕`
// link e mensagem de boa tarde

const linkimgnig = 'https://i.ibb.co/VJCd34F/EKvo372-X0-AEd-Hz.jpg'
const textmsgnig = 'Konbanwa Onii-chan, ☺️'
// link e mensagem de boa noite 

// MENSAGENS DE ERRO

const msgerr = 'Errore, ritenta :/'
// mensagem de erro

const notregister = `*Comando non registrato*`

// MENSAGENS DE AUTOREPLY

const botlindo = 'Bakaaaa 😣😣'
const linkbotlindo = 'https://photos1.iorbix.com/00/00/00/00/02/72/43/64/C--6tZwaASQH-b.jpg'
const botfeio = 'Sembri un granchio, un granchio schiacciato 😡'
const cadebot = 'Mi hai chiamato onii-chan 👉👈?'
const botfdp = 'Vaffanculo ragazzo, fottiti quando dormi'
const botgostoso = 'Arigato vai sai masu 😳👉👈'
const botfofo = 'Arigato vai sai masu 😳👉👈'
const botbaianor = 'Ho invitato la tua scheda madre nella mia rete, il tuo clacson'
const botcorno = 'Vaffanculo, giocatore compratore di foot pack'
const botputa = 'Signora tua madre 😡'
const botgay = 'Parla 😡'
const botviado = 'Parla la manja rola 😡'
const numbotfeio = 'signora tua madre'
// KEYS

// MENSAGENS DE EXCLUSIVIDADE
let mess = {
    wait: '⌛ Pingu sta creando lo sticker attendere prego ⌛',
    success: '✔️ Sucesso! ✔️',
    error: {
        stick: '❌ Fallito, si è verificato un errore durante la conversione dell'immagine in sticker ❌ ',
        Iv: '❌ Link invalido ❌'
    },
    only: {
        group: '❌ Questo comando si può usare solo nei gruppi! ❌',
        ownerG: '❌ Questo comando può essere utilizzato solo dal propetario del gruppo! ❌',
        ownerB: '❌ Questo comando può essere utilizzato solo dal numero del proprietario!  ❌',
        admin: '❌ SILENZIO MEMBRO COMUNE NON HAI IL POTERE PER USARE QUESTO COMANDO ❌',
        Badmin: '❌ Questo comando può essere utilizzato solo quando il bot torna adm! ❌'
    }
}

// CONTATO DO CRIADOR

const vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN:Meu criador^~^\n' 
+ 'ORG:Ian;\n'
+ 'TEL;type=CELL;type=VOICE;waid=393338958677:+39 333 895 8677\n' 
+ 'END:VCARD'
//vcard do propietário, mude os numeros de acordo com o formato que
//ele corresponde

const gpvotohelp = `O sistema de voto gp consiste no sistema normal de voto, porém feito somente para grupos
veja abaixo os comandos e suas funções a seguir:

${prefix}gpinitvoto
${prefix}gpvotoinit - Inicia a votação em grupo
Ex: ${prefix}gpvotoinit tema | opção 1 | opção 2
Obs: pode acrescentar quantas opções quiser

${prefix}gpclearvoto
${prefix}gpvotoclear - Limpa todos os votos

${prefix}gpvotostatus
${prefix}gpstatusvoto - Vê o status atual do voto

${prefix}gpvoto - Vota em uma opção
Ex: ${prefix}gpvoto opção1

${prefix}gpvotofinish
${prefix}gpfinishvoto - Encerra a votação

${prefix}gpbroadvoto
${prefix}gpvotobroad - Faz uma transmissão da votação para todos membros do grupo`

const votohelp = `O sistema de voto consistem em todos os usuários do bot poderem votar e para ter uma boa
experiência, há comandos para administrar essa votação. Veja abaixo os comandos e suas funções a seguir:

${prefix}initvoto
${prefix}votoinit - Inicia a votação geral
Ex: ${prefix}votoinit tema | opção 1 | opção 2
Obs: pode acrescentar quantas opções quiser

${prefix}clearvoto
${prefix}votoclear - Limpa todos os votos

${prefix}votostatus
${prefix}statusvoto - Vê o status atual do voto

${prefix}voto - Vota em uma opção
Ex: ${prefix}voto opção1

${prefix}votofinish
${prefix}finishvoto - Encerra a votação

${prefix}broadvoto
${prefix}votobroad - Faz uma transmissão da votação para todos que usam o bot`

// Nem ouse mexer aqui se n quiser que de erro
exports.delaygamescmd = delaygamescmd
exports.delaystealcmd = delaystealcmd
exports.gpvotohelp = gpvotohelp
exports.votohelp = votohelp
exports.ativohelp = ativohelp
exports.limitqnt = limitqnt
exports.urlaudiomenu = urlaudiomenu
exports.delayantispamcmd = delayantispamcmd
exports.antinewchatmsg = antinewchatmsg
exports.antipvmsg = antipvmsg
exports.backgroundbyeimg = backgroundbyeimg
exports.backgroundwelcomeimg = backgroundwelcomeimg
exports.backgroundmenuimg = backgroundmenuimg
exports.titlemenumsgimg = titlemenumsgimg
exports.menumsgimg = menumsgimg
exports.gimagenotregister = gimagenotregister
exports.sgooglenotregister = sgooglenotregister
exports.byemsgimg = byemsgimg
exports.msgwelcomeimg = msgwelcomeimg
exports.notregister = notregister
exports.qnttravahardroleta = qnttravahardroleta
exports.blockedcmdmsg = blockedcmdmsg
exports.blockedmsg = blockedmsg
exports.banmsgpalavra = banmsgpalavra
exports.adminmsgpalavra = adminmsgpalavra
exports.apikeyimgbb = apikeyimgbb
exports.linkbotlindo = linkbotlindo
exports.botlindo = botlindo
exports.botfeio = botfeio
exports.cadebot = cadebot
exports.botfdp = botfdp
exports.botgostoso = botgostoso
exports.botfofo = botfofo
exports.botbaianor = botbaianor
exports.botcorno = botcorno
exports.botputa = botputa
exports.botgay = botgay
exports.botviado = botviado
exports.numbotfeio = numbotfeio
exports.linkimgday = linkimgday
exports.textmsgday = textmsgday
exports.textmsgnig = textmsgnig
exports.linkimgnig = linkimgnig
exports.textmsgeve = textmsgeve
exports.linkimgeve = linkimgeve
exports.adminmsgtype = adminmsgtype
exports.adminmsgporn = adminmsgporn
exports.adminmsglink = adminmsglink
exports.banmsglink = banmsglink
exports.banmsgporn = banmsgporn
exports.banmsgtype = banmsgtype
exports.msgerr = msgerr
exports.mess = mess
exports.prefix = prefix
exports.cr = cr
exports.vcard = vcard
exports.OriginalOwner = OriginalOwner
exports.ownerNumber = ownerNumber
exports.callbotmsgs = callbotmsgsconst ownerNumber = ["393338958677@s.whatsapp.net"] 
// mude somente o numero e não tire o @s.whatsapp.net

const OriginalOwner = '393338958677' 
// mude para seu numero

const callbotmsgs = ['Pingu', 'pingu']

var gimagenotregister = false
// quando não há comando registrado o bot procura no google image

var sgooglenotregister = false
// quando não há comando registrado o bot procura uma pesquisa no google

const antinewchatmsg = 'O anti chat novo está ativado e você não é meu proprietário, logo será bloqueado'
//mensagem do antinewchat

const urlaudiomenu = 'https://b.top4top.io/m_19923zx481.mp3'
// link direto da url do audio

const antipvmsg = '*🚫 PRIVATO BLOCCATO 🚫*'
//mensagem do antipv

const limitqnt = 9999

const delayantispamcmd = 3
//tempo de delay do antispamcmd (medido por segundos)

const delaystealcmd = 60
//tempo de delay dos comandos steal (medido por segundos)

const delaygamescmd = 60
//tempo de delay dos comandos de games (medido por segundos)

const msgwelcomeimg = (numero, groupname) => {
    return `Seja bem-vindo ${numero}\n\nEscreve ${prefix}menu para lista de comandos`
}
//Texto de boas vindas na imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const byemsgimg = (numero, groupname) => {
    return `Adeus ${numero}`
}
//Texto de despedidas na imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const menumsgimg = (numero, groupname, bat) => {
    return `MENU DO BRIZAS-BOT COM 434 COMANDOS, BATERIA %${bat}`
}
//Texto no menu da imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const titlemenumsgimg = 'BENVENUTA'
//Título no menu da imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const backgroundmenuimg = `https://i.imgur.com/tVKFNFk.png`
//Link direto da imagem de fundo TAMANHO RECOMENDADO: 1280x720
//Obs: não coloque o texto longo para a imagem não sumir

const backgroundwelcomeimg = `https://i.imgur.com/tVKFNFk.png`
//Link direto da imagem de fundo da boas-vindas TAMANHO RECOMENDADO: 1280x720
//Obs: não coloque o texto longo para a imagem não sumir

const backgroundbyeimg = `https://i.imgur.com/2TCj9ri.jpg`
//Link direto da imagem de fundo das despedidas TAMANHO RECOMENDADO: 1280x720
//Obs: não coloque o texto longo para a imagem não sumir

const apikeyimgbb = 'c9cf132756510ad171587fb5a5a0389f'
// sua key do imgbb para ativar o antiporn e mais alguns comando que necessita de baixar imagem

const cr = '🐧️✨𝐏𝐢𝐧𝐠𝐮 𝐁𝐨𝐭✨🐧️\n' 
// texto do simbolo de verificado

const prefix = '!' 
// prefixo

const blockedmsg = '*😜 Il tuo numero è bloccato, quindi non ti ascolta 😜*'
// mensagem quando alguem bloqueado solicita um comando

const blockedcmdmsg = '*🚫Questo comando è bloccato, contatta il proprietario del bot per scoprire il motivo🚫*'
// mensagem quando alguem solicita um comando bloqueado 

// MENSAGENS DE BAN

const banmsgtype = '*membro comune, il ban è vicino *'
// mensagem de ban no anti tipos de mensagem

const ativohelp = `O sistema de contagem de mensagens é por grupo e consiste em rankear, listar, remover pessoas de acordo
com a frequência de mensagens no grupo, veja abaixo os comandos para administrar as mensagens do grupo:

checkativo (marcar) - lista a frequência de mensagens do membro marcado
rankativo - rankea as pessoas mais ativas do grupo
banativos (num) - remove membros com uma certa qnt de numeros de msg pra baixo
filtroativo (num) - lista membros com uma certa qnt de numeros de msg pra baixo]
atividade - lista a atividade de todos membros do grupo

Obs: O número de mensagens pode estar impreciso devido a contagem ser pelo bot.`

const adminmsgtype = '*Sei un amministratore quindi non ti bandirò per aver inviato un tipo di messaggio proibito *'
// mensagem de quando adm manda tipos de mensagens proibidas

const banmsgporn = 'Hmmm porno con antiporno attivato , verrai bannato..'
// mensagem de ban no antiporn

const adminmsgporn = '*Sei un amministratorenon ti bannerò *'
// mensagem de quando adm manda porn com antiporn ativado

const banmsglink = 'Membro comune il ban sta arrivando....'
// mensagem de ban no antilink

const adminmsglink = 'Questo è un link amico attento ahah🙃'
// mensagem de quando adm manda link

const adminmsgpalavra = 'Questa parola è nella lista delle parole proibite'
// mensagem de quando adm manda uma palavra proibida pelo bot

const banmsgpalavra = 'Palora proibita ? il ban è alle porte'
// mensagem de ban quando manda uma palavra proibida pelo bot

const qnttravahardroleta = 2
// quantidade de travas que mandam no roleta russa hard
// Obs: O valor é multiplicado por 12 ent tenha cuidado

// MENSAGENS DE BOM DIA BOA TARDE E BOA NOITE

const linkimgday = 'https://i.imgur.com/RR18JiI.jpg'
const textmsgday = 'Ohayo gozaimasu, Onii-chan 👉👈'
// link e mensagem de bom dia

const linkimgeve = 'https://i.ibb.co/bLXgcBW/lp-tarde-anime-by-hitsukinyan-db7fpqr-fullview.jpg'
const textmsgeve = `Kon'nichiwa Onii-chan, tieni un café ☕`
// link e mensagem de boa tarde

const linkimgnig = 'https://i.ibb.co/VJCd34F/EKvo372-X0-AEd-Hz.jpg'
const textmsgnig = 'Konbanwa Onii-chan, ☺️'
// link e mensagem de boa noite 

// MENSAGENS DE ERRO

const msgerr = 'Errore, ritenta :/'
// mensagem de erro

const notregister = `*Comando non registrato*`

// MENSAGENS DE AUTOREPLY

const botlindo = 'Bakaaaa 😣😣'
const linkbotlindo = 'https://photos1.iorbix.com/00/00/00/00/02/72/43/64/C--6tZwaASQH-b.jpg'
const botfeio = 'Sembri un granchio, un granchio schiacciato 😡'
const cadebot = 'Mi hai chiamato onii-chan 👉👈?'
const botfdp = 'Vaffanculo ragazzo, fottiti quando dormi'
const botgostoso = 'Arigato vai sai masu 😳👉👈'
const botfofo = 'Arigato vai sai masu 😳👉👈'
const botbaianor = 'Ho invitato la tua scheda madre nella mia rete, il tuo clacson'
const botcorno = 'Vaffanculo, giocatore compratore di foot pack'
const botputa = 'Signora tua madre 😡'
const botgay = 'Parla 😡'
const botviado = 'Parla la manja rola 😡'
const numbotfeio = 'signora tua madre'
// KEYS

// MENSAGENS DE EXCLUSIVIDADE
let mess = {
    wait: '⌛ Pingu sta creando lo sticker attendere prego ⌛',
    success: '✔️ Sucesso! ✔️',
    error: {
        stick: '❌ Fallito, si è verificato un errore durante la conversione dell'immagine in sticker ❌ ',
        Iv: '❌ Link invalido ❌'
    },
    only: {
        group: '❌ Questo comando si può usare solo nei gruppi! ❌',
        ownerG: '❌ Questo comando può essere utilizzato solo dal propetario del gruppo! ❌',
        ownerB: '❌ Questo comando può essere utilizzato solo dal numero del proprietario!  ❌',
        admin: '❌ SILENZIO MEMBRO COMUNE NON HAI IL POTERE PER USARE QUESTO COMANDO ❌',
        Badmin: '❌ Questo comando può essere utilizzato solo quando il bot torna adm! ❌'
    }
}

// CONTATO DO CRIADOR

const vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN:Meu criador^~^\n' 
+ 'ORG:Ian;\n'
+ 'TEL;type=CELL;type=VOICE;waid=393338958677:+39 333 895 8677\n' 
+ 'END:VCARD'
//vcard do propietário, mude os numeros de acordo com o formato que
//ele corresponde

const gpvotohelp = `O sistema de voto gp consiste no sistema normal de voto, porém feito somente para grupos
veja abaixo os comandos e suas funções a seguir:

${prefix}gpinitvoto
${prefix}gpvotoinit - Inicia a votação em grupo
Ex: ${prefix}gpvotoinit tema | opção 1 | opção 2
Obs: pode acrescentar quantas opções quiser

${prefix}gpclearvoto
${prefix}gpvotoclear - Limpa todos os votos

${prefix}gpvotostatus
${prefix}gpstatusvoto - Vê o status atual do voto

${prefix}gpvoto - Vota em uma opção
Ex: ${prefix}gpvoto opção1

${prefix}gpvotofinish
${prefix}gpfinishvoto - Encerra a votação

${prefix}gpbroadvoto
${prefix}gpvotobroad - Faz uma transmissão da votação para todos membros do grupo`

const votohelp = `O sistema de voto consistem em todos os usuários do bot poderem votar e para ter uma boa
experiência, há comandos para administrar essa votação. Veja abaixo os comandos e suas funções a seguir:

${prefix}initvoto
${prefix}votoinit - Inicia a votação geral
Ex: ${prefix}votoinit tema | opção 1 | opção 2
Obs: pode acrescentar quantas opções quiser

${prefix}clearvoto
${prefix}votoclear - Limpa todos os votos

${prefix}votostatus
${prefix}statusvoto - Vê o status atual do voto

${prefix}voto - Vota em uma opção
Ex: ${prefix}voto opção1

${prefix}votofinish
${prefix}finishvoto - Encerra a votação

${prefix}broadvoto
${prefix}votobroad - Faz uma transmissão da votação para todos que usam o bot`

// Nem ouse mexer aqui se n quiser que de erro
exports.delaygamescmd = delaygamescmd
exports.delaystealcmd = delaystealcmd
exports.gpvotohelp = gpvotohelp
exports.votohelp = votohelp
exports.ativohelp = ativohelp
exports.limitqnt = limitqnt
exports.urlaudiomenu = urlaudiomenu
exports.delayantispamcmd = delayantispamcmd
exports.antinewchatmsg = antinewchatmsg
exports.antipvmsg = antipvmsg
exports.backgroundbyeimg = backgroundbyeimg
exports.backgroundwelcomeimg = backgroundwelcomeimg
exports.backgroundmenuimg = backgroundmenuimg
exports.titlemenumsgimg = titlemenumsgimg
exports.menumsgimg = menumsgimg
exports.gimagenotregister = gimagenotregister
exports.sgooglenotregister = sgooglenotregister
exports.byemsgimg = byemsgimg
exports.msgwelcomeimg = msgwelcomeimg
exports.notregister = notregister
exports.qnttravahardroleta = qnttravahardroleta
exports.blockedcmdmsg = blockedcmdmsg
exports.blockedmsg = blockedmsg
exports.banmsgpalavra = banmsgpalavra
exports.adminmsgpalavra = adminmsgpalavra
exports.apikeyimgbb = apikeyimgbb
exports.linkbotlindo = linkbotlindo
exports.botlindo = botlindo
exports.botfeio = botfeio
exports.cadebot = cadebot
exports.botfdp = botfdp
exports.botgostoso = botgostoso
exports.botfofo = botfofo
exports.botbaianor = botbaianor
exports.botcorno = botcorno
exports.botputa = botputa
exports.botgay = botgay
exports.botviado = botviado
exports.numbotfeio = numbotfeio
exports.linkimgday = linkimgday
exports.textmsgday = textmsgday
exports.textmsgnig = textmsgnig
exports.linkimgnig = linkimgnig
exports.textmsgeve = textmsgeve
exports.linkimgeve = linkimgeve
exports.adminmsgtype = adminmsgtype
exports.adminmsgporn = adminmsgporn
exports.adminmsglink = adminmsglink
exports.banmsglink = banmsglink
exports.banmsgporn = banmsgporn
exports.banmsgtype = banmsgtype
exports.msgerr = msgerr
exports.mess = mess
exports.prefix = prefix
exports.cr = cr
exports.vcard = vcard
exports.OriginalOwner = OriginalOwner
exports.ownerNumber = ownerNumber
exports.callbotmsgs = callbotmsgs
