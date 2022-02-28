const ownerNumber = ["393338958677@s.whatsapp.net"]
 // cambia solo il numero e non rimuove @s.whatsapp.net

 const OriginalOwner = '393338958677'
 // cambia nel tuo numero

 const callbotmsgs = ['orion', 'brizas']

 var gimagenotregister = false
 // quando non c'è nessun comando registrato, il bot cerca su google image

 var sgooglenotregister = false
 // quando non c'è nessun comando registrato, il bot cerca una ricerca su Google

 const antinewchatmsg = 'La nuova anti-chat è attivata e tu non sei il mio proprietario, quindi sarai bloccato'
 // messaggio da antinewchat

 const urlaudiomenu = 'https://b.top4top.io/m_19923zx481.mp3'
 // collegamento diretto all'URL dell'audio

 const antipvmsg = '*🚫 BLOCCATO PRIVATO 🚫*'
 // messaggio da antipv

 const limitqnt = 9999

 const delayantispamcmd = 3
 // tempo di ritardo antispamcmd (misurato in secondi)

 const delaystealcmd = 60
 // tempo di ritardo dei comandi di furto (misurato in secondi)

 const delaygamescmd = 60
 // Tempo di ritardo dei comandi di gioco (misurato in secondi)

 const msgwelcomeimg = (numero, nome gruppo) => {
     return `Benvenuto ${numero}\n\nScrivi il menu ${prefisso} per l'elenco dei comandi`
 }
 //Testo di benvenuto nell'immagine quando il benvenuto è attivato
 //Nota: non inserire il testo lungo in modo che l'immagine non scompaia

 const byemsgimg = (numero, nome gruppo) => {
     restituisce `Addio ${numero}`
 }
 //Testo di addio nell'immagine quando il benvenuto è attivato
 //Nota: non inserire il testo lungo in modo che l'immagine non scompaia

 const menumsgimg = (numero, nome gruppo, pipistrello) => {
     return `MENU CON 434 COMANDI, BATTERIA %${bat}`
 }
 //Testo nel menu immagine quando è attivato il benvenuto
 //Nota: non inserire il testo lungo in modo che l'immagine non scompaia

 const titlemenumsgimg = 'BENVENUTO'
 // Titolo nel menu immagine quando viene attivato il benvenuto
 //Nota: non inserire il testo lungo in modo che l'immagine non scompaia

 const backgroundmenuimg = `https://i.imgur.com/tVKFNFk.png`
 //Link diretto all'immagine di sfondo DIMENSIONE CONSIGLIATA: 1280x720
 //Nota: non inserire il testo lungo in modo che l'immagine non scompaia

 const backgroundwelcomeimg = `https://i.imgur.com/tVKFNFk.png`
 //Link diretto all'immagine di sfondo di benvenuto DIMENSIONE CONSIGLIATA: 1280x720
 //Nota: non inserire il testo lungo in modo che l'immagine non scompaia

 const backgroundbyeimg = `https://i.imgur.com/2TCj9ri.jpg`
 //Link diretto all'immagine di sfondo dell'addio DIMENSIONE CONSIGLIATA: 1280x720
 //Nota: non inserire il testo lungo in modo che l'immagine non scompaia

 const apikeyimgbb = 'c9cf132756510ad171587fb5a5a0389f'
 // la tua chiave imgbb per attivare antiporn e alcuni altri comandi che devono scaricare l'immagine

 const cr = '🐧𝐏𝐢𝐧𝐠𝐮 𝐁𝐨𝐭🐧️\n'
 // controlla il testo del simbolo

 prefisso const = '!'
 // prefisso

 const blockmsg = '*😜 Il tuo numero è bloccato,  non ti ascolta 😜*'
 // messaggio quando qualcuno bloccato richiede un comando

 const blockcmdmsg = '*🚫Questo comando è bloccato contatta il proprietario del bot per sapere perché🚫*'
 // messaggio quando qualcuno richiede un comando bloccato

 // MESSAGGI DI BAN

 const banmsgtype = '*Esegui membro comune, il divieto è vicino*'
 // vieta il messaggio sui tipi di anti messaggio

 const activahelp = `Il sistema di conteggio dei messaggi è per gruppo e consiste in classifica, elenco, rimozione di persone in base a
 con la frequenza dei messaggi nel gruppo, vedere di seguito i comandi per gestire i messaggi del gruppo:

 checkactive (mark) - elenca la frequenza dei messaggi del membro contrassegnato
 classificato - classifica le persone più attive nel gruppo
 banatives (num) - rimuove i membri con un certo qnt di numeri di msg in basso
 filteractive(num) - elenca i membri con un certo qnt di numeri di msg in basso]
 attività - elenca l'attività di tutti i membri del gruppo

 Nota: il numero di messaggi potrebbe essere impreciso a causa del conteggio effettuato dal bot.`

 const adminmsgtype = '*Sei amministratore quindi non ti bandirò per aver inviato un tipo di messaggio proibito*'
 // messaggio quando adm invia tipi di messaggi vietati

 const banmsgporn = 'Hmmm pornozinho con antiporno attivato, lo sai bene...'
 // vieta il messaggio in antiporn

 const adminmsgporn = '*Sei amministratore quindi non ti bandirò per l'invio di materiale pornografico*'
 // messaggio quando adm invia porno con antiporno abilitato

 const banmsglink = 'Esegui membro comune, il ban è vicino...'
 // bannare il messaggio su antilink

 const adminmsglink = 'Questo è un link amichevole... oh sì sei amministratore quindi puoi lol 🙃'
 // messaggio quando l'amministratore invia il collegamento

 const adminmsgpalavra = 'questo è nell'elenco delle parole vietate del bot'
 // messaggio quando adm invia una parola proibita dal bot

 const banmsgpalavra = 'Parola proibita?  Lo sai già, vero?
 // messaggio di ban quando si invia una parola bannata dal bot

 const qntlockshardroulette = 2
 // numero di lucchetti nella roulette russa hard
 // Nota: il valore viene moltiplicato per 12 quindi fai attenzione

 // MESSAGGI DEL BUONGIORNO BUON POMERIGGIO E BUONA NOTTE

 const linkimgday = 'https://i.imgur.com/RR18JiI.jpg'
 const textmsgday = 'Ohayo gozaimasu, Onii-chan 👉👈'
 // link e messaggio di buongiorno

 const linkimgeve = 'https://i.ibb.co/bLXgcBW/lp-tarde-anime-by-hitsukinyan-db7fpqr-fullview.jpg'
 const textmsgeve = `Kon'nichiwa Onii-chan, accetta questo caffè ☕`
 // link e messaggio del buon pomeriggio

 const linkimgign = 'https://i.ibb.co/VJCd34F/EKvo372-X0-AEd-Hz.jpg'
 const textmsgnig = 'Konbanwa Onii-chan, spero che tu abbia avuto una buona giornata ☺️'
 // link e messaggio della buona notte

 // MESSAGGIO DI ERRORE

 const msgerr = 'Si è verificato un errore, riprova :/'
 // messaggio di errore

 const notregister = `*Comando non registrato, digita ${prefix}menu per vedere l'elenco dei comandi*`

 // MESSAGGI DI RISPOSTA AUTOMATICA

 const botlindo = 'Bakaaaa 😣😣'
 const linkbotlindo = 'https://photos1.iorbix.com/00/00/00/00/02/72/43/64/C--6tZwaASQH-b.jpg'
 const botfeio = 'Sembri un granchio, un granchio schiacciato 😡'
 const cadebot = 'Mi hai chiamato onii-chan 👉👈?'
 const botfdp = 'Vaffanculo ragazzo, fottiti quando dormi'
 const botgostoso = 'Arigato vai sai masu 😳👉👈'
 const botfofo = 'Arigato vai sai masu 😳👉👈'
 const botbaianor = 'Ho invitato la tua scheda madre nella mia rete, il tuo clacson'
 const botcorno = 'Vaffanculo, giocatore ff, compratore di foot pack'
 const botputa = 'Signora tua madre 😡'
 const botgay = 'Parla 😡'
 const botviado = 'Parla la manja rola 😡'
 const numbotfeio = 'signora tua madre 😡'
 // CHIAVI

 // MESSAGGI ESCLUSIVI
 lascia disordine = {
     wait: '⌛ Aspetta un po'... ⌛',
     successo: '✔️ Successo!  ✔️',
     errore: {
         stick: '❌ Fallito, si è verificato un errore durante la conversione dell'immagine in adesivo ❌',
         Iv: '❌Link non valido ❌'
     },
     solo: {
         gruppo: '❌ Questo comando può essere utilizzato solo in gruppi!  ❌',
         proprietarioG: '❌ Questo comando può essere utilizzato solo dal gruppo proprietario!  ❌',
         proprietarioB: '❌ Questo comando può essere utilizzato solo dal numero del proprietario!  ❌',
         admin: '❌ SILENZIO MEMBRO COMUNE NON HAI MORALE PER USARE QUESTO COMANDO ❌',
         Badmin: '❌ Questo comando può essere utilizzato solo quando il bot diventa admin!  ❌'
     }
 }

 // CONTATTO CREATORE

 const vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN:Mio creatore^~^\n' 
+ 'ORG:Ian;\n'
+ 'TEL;type=CELL;type=VOICE;waid=393338958677:+39 333 895 8677\n' 
+ 'END:VCARD'
 //vcard del proprietario, cambia i numeri in base al formato che hai
 // corrisponde

 const gpvotohelp = `Il sistema di voto gp è il normale sistema di voto, ma fatto solo per i gruppi
 Vedi i comandi e le loro funzioni di seguito:

 ${prefisso}gpinitvoto
 ${prefix}gpvotoinit - Avvia la votazione di gruppo
 Es: ${prefix}tema gpvotoinit |  opzione 1 |  opzione 2
 Nota: puoi aggiungere tutte le opzioni che desideri.

 ${prefisso}gpclearvoto
 ${prefix}gpvotoclear - Cancella tutti i voti

 ${prefisso}gpvotostatus
 ${prefix}gpstatusvoto - Visualizza lo stato attuale della votazione

 ${prefix}gpvoto - Vota per un'opzione
 Es: ${prefix}gpvoto opzione1

 ${prefix}gpvotofinish
 ${prefix}gpfinishvoto - Chiude la votazione

 ${prefisso}gpbroadvoto
 ${prefix}gpvotobroad - Trasmette il voto a tutti i membri del gruppo`

 const votohelp = `Il sistema di voto consiste in tutti gli utenti bot che possono votare e divertirsi
 esperienza, ci sono comandi per amministrare questo sondaggio.  Vedi i comandi e le loro funzioni di seguito:

 ${prefisso}Initvoto
 ${prefix}votoinit - Avvia la votazione generale
 Es: ${prefix}tema votoinit |  opzione 1 |  opzione 2
 Nota: puoi aggiungere tutte le opzioni che desideri.

 ${prefix}clearvoto
 ${prefix}votoclear - Cancella tutti i voti

 ${prefix}votostatus
 ${prefix}statusvoto - Visualizza lo stato attuale della votazione

 ${prefix}vote - Vota per un'opzione
 Es: ${prefix}opzione di voto1

 ${prefix}votofinitura
 ${prefix}finishvoto - Termina la votazione

 ${prefisso}voto diffuso
 ${prefix}votobroad - Trasmette il voto a tutti coloro che usano il bot`

 // Non osare spostarti qui se non vuoi un errore
 exports.delaygamescmd = delaygamescmd
 exports.delaystealcmd = delaystealcmd
 exports.gpvotohelp = gpvotohelp
 exports.votohelp = votehelp
 exports.activehelp = activehelp
 exports.limitqnt = limitqnt
 exports.urlaudiomenu = urlaaudiomenu
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
 exports.blockedcmdmsg = bloccatocmdmsg
 exports.blockedmsg = messaggi bloccati
 exports.banmsgpalavra = banmsgpalavra
 exports.adminmsgword = adminmsgword
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
 exports.textmsgign = textmsgign
 exports.linkimgign = linkimgign
 exports.textmsgeve = textmsgeve
 exports.linkimgeve = linkimgeve
 exports.adminmsgtype = adminmsgtype
 exports.adminmsgporn = adminmsgporn
 exports.adminmsglink = adminmsglink
 exports.banmsglink = banmsglink
 exports.banmsgporn = banmsgporn
 exports.banmsgtype = banmsgtype
 exports.msgerr = msgerr
 exports.mess = pasticcio
 exports.prefix = prefisso
 esportazioni.cr = cr
 exports.vcard = vcard
 exports.OriginalOwner = OriginalOwner
exports.ownerNumber = ownerNumber
 exports.callbotmsgs = callbotmsgs
