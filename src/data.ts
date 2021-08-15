import { ActivityTypes, News, PresenterData, StaticData, TextTypes } from "./types";

export const news: News = {
  version: 1,
  data: [
    {
      title: "Blabla",
      description: "Blabla",
      image: "",
      imageUrl: "",
      date: new Date(),
    },
    {
      title: "Blabla1",
      description: "Blabla1",
      image: "",
      imageUrl: "",
      date: new Date(),
    },
  ],
};

export const staticData: StaticData = {
  version: 1,
  data: {
    presenters: [
      {
        id: 0,
        firstName: "Org tým",
        lastName: "AV21",
        display: false,
        avatar: require("../assets/presenters/org-tym.jpg"),
        description:
          "Mějte s námi slitování, přece jen jsme připravovali AVčko po nocích pro nás, pro Vás.",
        activities: [1],
      },
      {
        id: 2,
        firstName: "Marek Orko",
        lastName: "Vácha",
        display: true,
        avatar: require("../assets/presenters/marek-vacha.jpg"),
        description:
          "Kněz, teolog, přírodovědec, pedagog, spisovatel a skaut, působící jako administrátor ve farnosti Lechovice u Znojma.",
        activities: [200],
      },
      {
        id: 3,
        firstName: "Jan",
        lastName: "Vepřek",
        display: true,
        avatar: require("../assets/presenters/jan-veprek.jpg"),
        description:
          "Pedagog a ředitel Základní školy Navis. Je ženatý, má čtyři děti a rád se věnuje svým dětem a hudbě; píše o vizích ve vzdělávání, o výchově, o ctnostech a o hudbě.",
        activities: [201],
      },
      {
        id: 4,
        firstName: "Škola evangelizace sv. Ondřeje",
        lastName: "",
        display: true,
        avatar: require("../assets/presenters/skola-evangelizace.jpg"),
        description:
          `Jan Svoboda: farář z Českého Těšína, ředitel první české pobočky Školy evangelizace svatého Ondřeje 
          Maria Paskuda: farnice z Jablunkova, psycholog na mateřské, koordinátorka školy`,
       activities: [202],
      },
      {
        id: 5,
        firstName: "Daniel",
        lastName: "Raška",
        display: true,
        avatar: require("../assets/presenters/daniel-raska.jpg"),
        description:
          "Modlitebník, plynař, rybář, studiový zvukař, manžel a otec dvou dětí a vedoucí hnutí Modliteb 24-7.",
        activities: [203],
      },
      {
        id: 6,
        firstName: "Sestra M. Filoména",
        lastName: "Truhlíková z Kongregace Dcer Božské Lásky v Opavě",
        display: true,
        avatar: require("../assets/presenters/sestra-filomena.jpg"),
        description:
          "Autorka mnoha knih, je platnou členkou vězeňské duchovní péče. Aktivně přednáší ve farnostech a je externí vyučující Ústavu ošetřovatelství Fakulty veřejných politik Slezské univerzity v Opavě. Podílí se na výuce předmětu Filozofie a etika v ošetřovatelství.",
        activities: [204],
      },
      {
        id: 7,
        firstName: "Jiří",
        lastName: "Pospíšil",
        display: true,
        avatar: "",
        description: "",
        activities: [205],
      },
      {
        id: 8,
        firstName: "Vlastimil",
        lastName: "Kadlec",
        display: true,
        avatar: require("../assets/presenters/vlastimil-kadlec.jpg"),
        description: "Kněz, člen řeholního společenství Kongregace misionářů oblátů Panny Marie Neposkvrněné, působící v Plasích v plzeňské diecézi.",
        activities: [300],
      },
      {
        id: 9,
        firstName: "Alexandr",
        lastName: "Flek",
        display: true,
        avatar: "",
        description: "Evangelický teolog, kazatel a překladatel Bible21. Věnuje se překladatelské a přednáškové činnosti, příležitostně káže v širokém spektru křesťanských církví. Je ženatý, má čtyři děti a dva vnuky.",
        activities: [301],
      },
      {
        id: 10,
        firstName: "Vít",
        lastName: "Novotný",
        display: true,
        avatar: require("../assets/presenters/vit-novotny.jpg"),
        description: "Lektor, kouč; založil projekt Smysluplné rozhovory, jehož vizí je vracet více hloubky do konverzací i vztahů; pořádají pravidelná setkávání a vydali také konverzační karty, díky kterým můžeme lépe poznat lidi ve svém okolí.",
        activities: [302, 413, 605],
      },
      {
        id: 11,
        firstName: "Denisa",
        lastName: "Buchtová",
        display: true,
        avatar: require("../assets/presenters/denisa.png"),
        description: "Studentka a sociální pracovnice. Která se ve volném čase věnuje výrobě čokoládových pralinek a táborům. Na kterých učila děti, mimo jiné, vyrábět barefoot sandále.",
        activities: [310],
      },
      {
        id: 12,
        firstName: "Jakub",
        lastName: "Vašulín",
        display: true,
        avatar: "",
        description: " ",
        activities: [311],
      },
      {
        id: 13,
        firstName: "Jakub \"Indián\"",
        lastName: "Venglář",
        display: true,
        avatar: require("../assets/presenters/jakub-venglar.jpg"),
        description: "Cestovatel, dobrodruh a spisovatel, který je nejspokojenější někde na horách nebo kdesi, kde netuší co přinese další den. Krom podivných cest se věnuje i ultimate frisbee. V roce 2016 dokonce založil brněnský tým Brno Ultimate Frisbee Underground, který zároveň spolutrénuje. Na pomoc si vezme pár spoluhráčů právě z tohoto týmu.",
        activities: [313],
      },
      {
        id: 14,
        firstName: "Kateřina",
        lastName: "Řmotová",
        display: true,
        avatar: require("../assets/presenters/katerina-rmotova.jpg"),
        description: "Věnuje se neformálnímu vzdělávání a práci s mládeží v mezinárodním prostředí už něco přes 3 roky. Baví ji koordinovat projekty z nejrůznějších oblastí a podílet se na jejich přípravě. Orientuje se také na práci se skupinou a facilitaci workshopů.",
        activities: [314],
      },
      {
        id: 15,
        firstName: "Josef",
        lastName: "Suchár",
        display: true,
        avatar: require("../assets/presenters/josef-suchar.jpg"),
        description: "Farář v pohraniční osadě Neratov. Se svými spolupracovníky z občanského Sdružení Neratov do ní vrací život a pracuje na obnově barokního kostela Nanebevzetí Panny Marie.",
        activities: [400],
      },
      {
        id: 16,
        firstName: "Milan",
        lastName: "Novotný",
        display: true,
        avatar: require("../assets/presenters/milan-novotny.jpg"),
        description: "Trvalý jáhen římskokatolické církve, vojenský kaplan 43. výsadkového pluku v Chrudimi, psycholog.",
        activities: [401],
      },
      {
        id: 17,
        firstName: "Jiří",
        lastName: "Dyčka",
        display: true,
        avatar: require("../assets/presenters/jiri-dycka.jpg"),
        description: "Jáhen, který působí ve farnosti Velké Meziříčí; youtuber, jeden z Ježíšových fans, člen projektu Live4G.",
        activities: [402],
      },
      {
        id: 18,
        firstName: "kapela Way to go",
        lastName: "",
        display: true,
        avatar: require("../assets/presenters/way-to-go.png"),
        description: " ",
        activities: [510],
      },
      {
        id: 19,
        firstName: "Schola z Veselí nad Moravou",
        lastName: "",
        display: true,
        avatar: "",
        description: "",
        activities: [520],
      },
      {
        id: 20,
        firstName: "Jaroslav Maxmilián",
        lastName: "Kašparů",
        display: true,
        avatar: require("../assets/presenters/max-kasparu.jpg"),
        description: "Řeckokatolický kněz, psychiatr, pedagog, premonstrátský terciář, autor duchovní literatury a nepřizpůsobivý občan.",
        activities: [600],
      },
      {
        id: 21,
        firstName: "Jan",
        lastName: "Grolich",
        display: true,
        avatar: require("../assets/presenters/jan-grolich.jpg"),
        description: "Moravský politik a advokát, od roku 2020 hejtman Jihomoravského kraje. \"I na malé dědině se dají dělat velké věci a inspirovat okolí. Když to jde v malém, musí to jít i ve velkém na kraji.\"",
        activities: [601, 715],
      },
      {
        id: 22,
        firstName: "Petr",
        lastName: "Glogar",
        display: true,
        avatar: require("../assets/presenters/petr-glogar.jpg"),
        description: "Bosý karmelitán, kněz a rodinný terapeut, řídí Fortnu, vede akce a nabízí duchovní doprovázení; vede semináře jak pro mužské skupiny, tak pro manželské páry.",
        activities: [602],
      },
      {
        id: 23,
        firstName: "Jan",
        lastName: "Čanda",
        display: true,
        avatar: require("../assets/presenters/bodaj.jpg"),
        description: "Ředitel organizace Bodaj, která již několik let díky dobrovolníkům pomáhá dětem v ústavní péči na Ukrajině.",
        activities: [603],
      },
      {
        id: 24,
        firstName: "Dagmar",
        lastName: "Hamalová",
        display: true,
        avatar: require("../assets/presenters/dagmar-hamalova.jpg"),
        description: "Členka Unie katolických žen, pracuje na pozici vychovatelky a speciální pedagožky v dětském domově. Věnuje se také seniorům, podporuje místní ekologickou iniciativu Zelená peřina. Od 2008 je aktivní v místní politice, v současnosti v městském zastupitelstvu.",
        activities: [607],
      },
      {
        id: 25,
        firstName: "Lucie",
        lastName: "Strapáčová",
        display: true,
        avatar: require("../assets/presenters/lucie-strapacova.jpg"),
        description: "Speciální pedagožka a lektorka zabývající se nejrůznějšími výtvarnými aktivitami, mimo jiné i arteterapiií a akční malbou.",
        activities: [606],
      },
      {
        id: 26,
        firstName: "Jan",
        lastName: "Regner",
        display: true,
        avatar: "",
        description: "",
        activities: [608],
      },
      {
        id: 27,
        firstName: "Tomáš",
        lastName: "Halík",
        display: true,
        avatar: require("../assets/presenters/tomas-halik.jpg"),
        description: "Kněz, teolog a sociolog, profesor UK. Je farářem Akademické farnosti Praha  a prezidentem České křesťanské akademie.",
        activities: [700],
      },
      {
        id: 28,
        firstName: "Christian Refugee Service",
        lastName: "",
        display: true,
        avatar: require("../assets/presenters/christian-refugee.jpg"),
        description: `Ilona Machandrová - advokátka, předsedkyně a zakládající členka Christian Refugee Service, z.s., zakladatelka výjezdů Projektu Naděje pro Národy
        Ludmila Špoková - advokátní koncipientka, místopředsedkyně a zakládající členka Christian Refugee Service, z.s.`,
       activities: [702],
      },
      {
        id: 29,
        firstName: "Monika",
        lastName: "Stehlíková",
        display: true,
        avatar: require("../assets/presenters/monika-stehlikova.jpg"),
        description: "Konzultantka pro nadané, terapeutka ACT, lektorka mindfulness, školitelka a přednášející, poradkyně pro školská zařízení.",
        activities: [701],
      },
      {
        id: 30,
        firstName: "Jiří",
        lastName: "Bůžek",
        display: true,
        avatar: require("../assets/presenters/jiri-buzek.jpg"),
        description: "Kněz a biolog, farář v Brně-Žebětíně; pracoval na Biofyzikálním ústavu Akademie věd v Brně a má za sebou doktorát z molekulární biologie a genetiky. ",
        activities: [703],
      },
      {
        id: 31,
        firstName: "Jindřich",
        lastName: "Kotvrda",
        display: true,
        avatar: require("../assets/presenters/jindrich-kotvrda.jpg"),
        description: "Kněz brněnské diecéze, věnuje se mimo obvyklé pastorační služby duchovnímu doprovázení, psychoterapii, doprovázení komunity L'Arche, společenství Víra a světlo, a křesťanské meditaci podle Johna Maina (wccm.org).",
        activities: [704],
      },
      {
        id: 32,
        firstName: "s. Lucie",
        lastName: "Chytilová",
        display: true,
        avatar: require("../assets/presenters/sestra-lucie.jpg"),
        description: "Patří do duchovní rodiny sekulárního Institutu Servi della Sofferenza, kromě své profese učitelky se věnuje spolupráci při evangelizačních projektech, práci s dětmi a mládeží, duchovnímu doprovázení. Je jí blízká praxe křesťanské meditace podle Johna Maina.",
        activities: [704],
      },
      {
        id: 33,
        firstName: "Jan",
        lastName: "Adamčík",
        display: true,
        avatar: require("../assets/presenters/jan-adamcik.jpg"),
        description: "Od mládí vášnivý sportovec s citem pro pohyb. Postupně jeho kroky vedly k bojovým sportům, až zůstal u Krav Maga. Honza absolvoval instruktorský kurz pod vedením zahraničního experta Mateusze Soga. Má certifikaci pro cvičení dospělých - Instruktor (technický stupeň G3).",
        activities: [711],
      },
      {
        id: 34,
        firstName: "Tereza Uřičářová a Jan Sekanina",
        lastName: "",
        display: true,
        avatar: "",
        description: "",
        activities: [713],
      },
      {
        id: 35,
        firstName: "Jaroslav",
        lastName: "Grochal",
        display: true,
        avatar: require("../assets/presenters/parova-akrobacie.jpg"),
        description: "Párovou akrobacií žije od počátku roku 2015 a díky předchozím letitým tanečním a instruktorským zkušenostem se brzy vypracoval na uznávaného průvodce, inspirátora a propagátora této aktivity (nejen) v Brně.",
        activities: [714],
      },
      {
        id: 36,
        firstName: "Karel",
        lastName: "Satoria",
        display: true,
        avatar: require("../assets/presenters/karel-satoria.jpg"),
        description: "Kněz, pedagog, bývalý člen Řádu cisterciáků přísné observance, autor knih Povoláním člověk a Život je sacra zajímavej.",
        activities: [1000],
      },
      {
        id: 37,
        firstName: "Jan",
        lastName: "Balážia",
        display: true,
        avatar: require("../assets/presenters/jan-balazia.jpg"),
        description: "Již 36 let šťastně ženatý muž, více než 20 let se s manželkou zúčastňuje Manželských setkání; věnuje se mužské spiritualitě; napsal dvě publikace a je součástí sdružení \"Pre rodiny\".",
        activities: [1001],
      },
      {
        id: 38,
        firstName: "s. Marie Immaculata",
        lastName: "Konvalinková",
        display: true,
        avatar: require("../assets/presenters/sestra-marie-immaculata.jpg"),
        description: "Řeholní sestra z Kongregace Školských sester sv. Františka, nemocniční kaplanka, psychoterapeutická poradkyně a lektorka; mnoho let pracovala s uvězněnými a závislými lidmi.",
        activities: [1002],
      },
      {
        id: 39,
        firstName: "Tomáš",
        lastName: "Soták",
        display: true,
        avatar: require("../assets/presenters/tomas-sotak.jpg"),
        description: "Předseda spolku Laudato si, který vidí smysl v sebemenších krocích vedoucích k ochraně přírody a razí heslo, že každý by měl začít u sebe.",
        activities: [1003],
      },
      {
        id: 40,
        firstName: "s.Laurencie",
        lastName: "Sikorová",
        display: true,
        avatar: require("../assets/presenters/sestra-laurencie.jpg"),
        description: "Před 20 lety ji Bůh změnil život tím, že ji povolal do bližšího života s Ním ve společenství sester a službě potřebným. Je to život pádů a povstávání; odevzdávání a přijímání, lekcí odpouštění sobě i druhým, hledání Boha v Písmu sv., v sobě, v bližním i v různých situacích.",
        activities: [1004],
      },
      {
        id: 41,
        firstName: "s. Magdaléna",
        lastName: "Macurová",
        display: true,
        avatar: require("../assets/presenters/sestra-magdalena.jpg"),
        description: "Prožívá své sedmé léto v Konventu sester alžbětinek a chce se podělit o svou zkušenost víry a Božího vedení v každodenním životě, což je často velké dobrodružství. Řekla by o sobě, že je obyčejná sestra s originálním povoláním. Slouží v Domově sv. Alžběty (domov pro seniory) na různých pozicích. Ráda poznává nová místa a nové lidi. Je vděčná za to, že stabilitas loci je někdy i \"labilitas\".",
        activities: [1004],
      },
    ],
    activities: [
      {
        id: 1,
        block: 1,
        title: "Čajovna/vinárna",
        location: "Sklep gymnázia",
        description: `Pohodový večer s čajem, vínem a drobným občerstvením.`,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 0);
        },
        type: ActivityTypes.VOLNOCAS,
      },
      {
        id: 2,
        block: 1,
        title: "Tichá adorace",
        location: "Kaple Stojanov (do 23:00)",
        description: `Vzhledem k tomu, že ruchu bude všude dost, využijte možnost se ztišit před Pánem při tichých adoracích. Čtvrteční adorace bude uvedena pouze krátkým slovem, které by nás mělo propojit s jednou cestou naší poutě a to cestou samoty. Tento impuls necháme vyznít do ticha. `,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 0);
        },
        type: ActivityTypes.DUCHOVNI
      },
      {
        id: 200,
        block: 2,
        title:
          '"Být sám sebou" znamená být sám a být sebou aneb "Ať Tě netrápí hvízdání a ať nepotřebuješ potlesk"',
        location: "Slovanský sál",
        description: `Přednáška o tom, proč je samota důležitá a proč nemáme nikomu říkat ani "mistr" ani "učitel".`,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 2);
        },
        capacity: 120,
        type: ActivityTypes.PREDNASKA
      },
      {
        id: 201,
        block: 2,
        title: "Chlapci a dívky jsou jiní a je to tak dobře",
        location: "Zimní sál",
        description: `Věděli jste ale, že ve škole jsou úspěšnější dívky? A věděli jste, že tento trend nekončí na základní škole a že se do velké míry promítá i do mezilidských vztahů? Jan Vepřek bude mluvit o výchově kluků a o formaci školního prostředí z pozice tatínka tří chlapců a jedné dívky a z pozice pedagoga a ředitele Základní školy a gymnázia Navis u Prahy.
       `,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 3);
        },
        capacity: 120,
        type: ActivityTypes.PREDNASKA
      },
      {
        id: 202,
        block: 2,
        title:
          "Škola evangelizace sv. Ondřeje (Jan Svoboda, Maria Paskuda) - Bez čeho se neobejde evangelizace? KE-KA-KO aneb tři pilíře Školy evangelizace sv. Ondřeje",
        location: "Sál Stojanov",
        description: `Škola evangelizace má za úkol formovat křesťany, aby dokázali sdílet svou víru a účinně evangelizovat. Naše škola není uzavřené hnutí, ale pastorační projekt, ze kterého mohou čerpat všichni zájemci z katolické církve. Škola evangelizace svatého Ondřeje a všechny její aktivity stojí na třech pilířích: Kérygma - soustředíme se na hlásání živého Ježíše Krista; Charisma - jsme otevřeni Duchu Svatému a jeho darům; Koinonia - ve společenství Církve je každý člověk důležitý a má své povolání v evangelizaci.
       `,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 4);
        },
        capacity: 60,
        type: ActivityTypes.PREDNASKA
      },
      {
        id: 203,
        block: 2,
        title: "Osobní modlitba",
        location: "Kaple Stojanov",
        description: `Jak rozvíjet a udržet modlitební život a osobní vztah s Bohem v dnešní době, kdy žijeme velice rychlé a intenzivní životy plné povinností a impulsů, které nás rozptylují nebo nám dokonce zabraňují v rozvíjení duchovního života. A lze zůstat přitom v modlitbě ještě kreativní a radostný bez tlaku, že bych se "měl" modlit?
       `,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 5);
        },
        capacity: 60,
        type: ActivityTypes.PREDNASKA
      },
      {
        id: 204,
        block: 2,
        title: "Světlo na pokraji cesty",
        location: "Třída 1, Gymnázium",
        description: `Opravdové příběhy z místa, kde je samota hmatatelná a bolí. Sestra Filoména již 21 let navštěvuje odsouzené ženy na specializovaném oddělení ve věznici. S Boží pomocí se snaží pomáhat odstraňovat nánosy různých pochybení.
       `,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 6);
        },
        capacity: 60,
        type: ActivityTypes.PREDNASKA
      },
      {
        id: 205,
        block: 2,
        title: "Příprava na zpověď",
        location: "Kaple Gymnázium",
        description: `Vnímáš, že potřebuješ znovu obnovit vztah s Bohem a zajít si ke svátosti smíření, ale máš pocit, že se nedokážeš připravit? Nebo se chceš jen zastavit, ztišit a chvilku rozjímat?
       `,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 7);
        },
        type: ActivityTypes.DUCHOVNI
      },
      {
        id: 300,
        block: 3,
        title: "Jak se nevrátit do normálu",
        location: "Kaple Stojanov",
        description: `Na povrchu zkáza, nejistota, bezradnost, osamocení... uvnitř smysl a naděje nového a opravdového začátku. Duch svatý v posledních měsících hodně bořil a hodně budoval. Co už jednou pro vždy nechat v troskách a na čem naopak nově stavět? Jak pandemie odhalila samé základy naší víry a našeho života? Jak se společenství rodí z osamocení, služba z bezmoci a radost z krize a bolesti?
       `,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 8);
        },
        capacity: 100,
        type: ActivityTypes.PREDNASKA
      },
      {
        id: 301,
        block: 3,
        title: "Parabible",
        location: "Slovanský sál",
        description: `Jak by mohl vypadat Ježíšův příběh, kdyby se odehrál dnes? Parabible je aktuální, místy až provokativní biblickou parafrází. Dávný příběh o Ježíši Nazaretském zasazuje do kulis současného Česka, především ale staví dnešního čtenáře před nově obnažené pointy dávných evangelijních příběhů a výroků.
       `,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 9);
        },
        capacity: 130,
        type: ActivityTypes.PREDNASKA
      },
      {
        id: 302,
        block: 3,
        title: "Smysluplné rozhovory",
        location: "Zimní sál",
        description: `Naše společnost je díky internetu a sociálním sítím tou nejpropojenější v historii, paradoxně ale zároveň raketově roste u lidí pocit osamělosti. Jak budovat vztahy s našimi blízkými nás, bohužel, ve škole nikdo neučí a tak v dobré víře napodobujeme to, co vidíme okolo nás. Často tak bezmyšlenkově opakujeme věci, které nefungují a naše vztahy tím trpí. Žijeme v přesvědčení, že někdo buď komunikovat umí, nebo ne. Ale budování pevných vztahů je umění, které je možné rozvíjet, a stejně jako malíř tříbí svou techniku i my se můžeme zlepšovat v tom, jak o vztahy s důležitými lidmi pečovat tak, abychom si byli doopravdy blízko.
       `,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 10);
        },
        capacity: 100,
        type: ActivityTypes.PREDNASKA
      },
      {
        id: 310,
        block: 3,
        title: "Výroba barefoot sandálů",
        location: "Sraz venku za VDCM",
        description: `Chození naboso se v poslední době stává velice populární. Chceš si i Ty vyrobit své barefoot sandály? Zde máš možnost. Naši dobrovolníci Ti ukáží, jak na to. Veškerý materiál i pomoc budeš mít k dispozici. Protože ale materiál na výrobu bot něco stojí a chtěli bychom být fér vůči ostatním, bude Tě tento workshop stát 100 korun. To ale za získanou dovednost a nový kousek do botníku stojí, ne?!
       `,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 11);
        },
        capacity: 12,
        type: ActivityTypes.VOLNOCAS
      },
      {
        id: 311,
        block: 3,
        title: "Zapojení do života farnosti",
        location: "Třída 1, gymnázium",
        description: `Co farnost, to jedinečné společenství. Máš zkušenost, jak rozdmýchat dění ve farnosti? Hýříš nápady, které čekají na realizaci? Nebo by ses jen rád více zapojil do farního života a schází ti inspirace? Máš pocit, že by to šlo ve Tvé farnosti dělat jinak a lépe? Přijď se o tom za námi pobavit! Průvodcování tímto workshopem jsme s radostí svěřili Kubovi Vašulínovi z moravské farnosti Střelice.
       `,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 12);
        },
        capacity: 15,
        type: ActivityTypes.VOLNOCAS
      },
      {
        id: 313,
        block: 3,
        title: "Frisbee ultimate",
        location: "Hřiště u ZŠ",
        description: `Ultimate je kolektivní hrou, ve které je cílem chytit disk v koncové zóně. Principem hry se tak podobá například ragby, avšak tento sport je bezkontaktní a s diskem se nesmí běhat. Hráč s diskem (házeč) může stejně jako v basketbalu pivotovat - otáčet se a činit úkroky s jednou nohou stále pevně na zemi. Pohyb a vytvoření prostoru pro přihrávku pak zůstává na jeho spoluhráčích. Zapomeň na házení v kolečku deseti lidí bez nutnosti vyvinout větší námahu. V tomto sportu hrají prim rychlost, taktické myšlení a herní přehled. Ve hře se často střídá útok a obrana. Průprava není nutná. Se vším, co je ke hře třeba, tě seznámí zkušení hráči.
       `,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 13);
        },
        capacity: 20,
        type: ActivityTypes.VOLNOCAS
      },
      {
        id: 314,
        block: 3,
        title: "K sobě, k Tobě, k Bohu skrze NVC",
        location: "Třída 2, gymnázium",
        description: `Nenásilná komunikace (NVC) nabízí příležitost, prostřednictvím které máme možnost znovu objevovat spojení mezi sebou samými, druhými a Bohem samotným. Na workshopu budeš mít možnost v upřímnosti s otevřeným srdcem nahlédnout pod povrch běžných frází, slov a činů. Ústředními prvky bude práce s pocity a potřebami v kombinaci s naším tělem a pohybem.
       `,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 14);
        },
        capacity: 24,
        type: ActivityTypes.VOLNOCAS
      },
      {
        id: 400,
        block: 4,
        title: "Každý je povolán k tomu, aby mohl konat dobro",
        location: "Slovanský sál",
        description: `Povídání s inspirativním otcem, který z malé zapadlé vesničky vytvořil jedno z nejnavštěvovanějších poutních míst. Z tiché farnosti se stalo živé společenství a jeho dobré srdce pociťují až v daleké Indii. Co vše jej potkává na jeho cestě? Jak Duch Svatý působí v jeho životě a je vždy jednoduché Boží plány přijmout? Přijď a využij možnosti se zeptat na to, co tě zajímá a bál/a ses zeptat.
       `,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 15);
        },
        capacity: 140,
        type: ActivityTypes.PREDNASKA
      },
      {
        id: 401,
        block: 4,
        title: "Mužská identita v 21. století",
        location: "Zimní sál",
        description: `Ve své přednášce se bude zabývat formovánim a kvalitou mužské identity. Budeme se dotýkat tématu kvalit a druhů mužské síly. Rovněž zabrousíme do oblasti muž křesťan.
       `,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 16);
        },
        capacity: 100,
        type: ActivityTypes.PREDNASKA
      },
      {
        id: 402,
        block: 4,
        title: "Víra v karanténě",
        location: "Kaple Stojanov",
        description: `Naše víra se stejně jako my dostala do karantény. Jak se změnilo prožívání křesťanství v čase covidu? Co nového jsme se naučili a naopak o co jsme přišli? A jak správně víru oživit, abychom nezůstali sami, ale žili víru společně? O tom všem bude řeč a o tom všem bude možné se společně pobavit. Zároveň bude krátce představen projekt Live 4G, který má být odpovědí na přesunutí víry do virtuálního prostoru.
       `,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 17);
        },
        capacity: 100,
        type: ActivityTypes.PREDNASKA
      },
      {
        id: 411,
        block: 4,
        title: "Speed Dating",
        location: "Sklep gymnázia",
        description: `Jedinečná příležitost k seznámení v bezpečném prostředí mezi mladými nezadanými věřícími a zdarma. Pokud se rozhodneš Speed datingu zúčastnit, čeká tě seznámení naživo s patnácti účastníky opačného pohlaví :) Vždy máte jen několik málo minut na to, abyste se navzájem poznali, poté se muži přesunou k dalšímu stolu k jiné ženě. Oba si pak navzájem zhodnotíte, zda jste si padli do oka či ne. Jen pro zajímavost: rychlé rande vymyslel rabín Yaacov Deyo, který chtěl zvýšit počet židovských svateb. (Že z toho bude svatba, vám rozhodně neslibujeme.)
       `,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 0);
        },
        capacity: 30,
        type: ActivityTypes.VOLNOCAS
      },
      {
        id: 412,
        block: 4,
        title: "Dobrovolnictví",
        location: "mimo areál",
        description: `V rámci dění letošního ročníku Absolventského Velehradu navážeme spolupráci a pokusíme se zpříjemnit páteční odpoledne lidem z domovů Vincentinum a Buchlovská na Velehradě, kde pečují o osoby se zdravotním postižením. Sraz před Stojanovem.
       `,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 0);
        },
        type: ActivityTypes.VOLNOCAS
      },
      {
        id: 413,
        block: 4,
        title: "Smysluplné rozhovory",
        location: "Třída 1, gymnázium",
        description: `Smysluplné rozhovory jsou projektem propojující otevřené lidi, kteří se rádi baví a přemýšlí o hlubších tématech. Myšlenkou tohoto projektu je dát lidem příležitost znovu si povídat. Z očí do očí, upřímně a bez povrchnosti, protože za každou běžnou konverzací se zpravidla skrývají naše sny, bolesti, touhy i trápení. Připravte se na odpovědi, které v Tobě i v ostatních posluchačích vyvolají emoce. Protože jen takové nás přimějí opravdově se zamyslet nad našimi životy.
       `,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 10);
        },
        capacity: 12,
        type: ActivityTypes.VOLNOCAS
      },
      {
        id: 414,
        block: 4,
        title: "Společná modlitba",
        location: "Kaple Stojanov",
        description: `Společná modlitba pro ty, jenž chtějí být s Kristem ve společenství`,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 0);
        },
        type: ActivityTypes.DUCHOVNI
      },
      {
        id: 510,
        block: 5,
        title: "Koncert: Way to go",
        location: "Slovanský sál",
        description: `Pět mladých mužů, pět odlišných cest, které se však scházejí v jednu. Členy kapely Way to go nepojí pouze láska k hudbě, ale také touha skrze ni chválit Boha, v kterého a kterému věří. Tvorba této pop-rockové kapely je specifická četným užitím pánských vícehlasů, které podtrhává význam hlubokých textů. Jožka, František, Robin, Tom a Pavel chtějí každému z diváků předat maximální hudební, ale i duchovní zážitek.
`,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 18);
        },
        type: ActivityTypes.VOLNOCAS,
      },
      {
        id: 520,
        block: 5,
        title: "Večer chval s Veselskou schólou",
        location: "Kaple Stojanov",
        description: `Tento večer je určen ke společné oslavě Boha, kdy ho můžeme chválit a oslavovat prostřednictvím hudby. Chvála je způsob modlitby, která bezprostředněji uznává, že Bůh je Bohem. Opěvuje ho pro něho samého, oslavuje ho, protože ON JE a za to kdo je, bez ohledu na to, co koná. Stejně jako adorace nás povede na cestu samoty, tak právě chvály můžou být zdrojem hluboké radosti.
       `,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 19);
        },
        type: ActivityTypes.DUCHOVNI
      },
      {
        id: 511,
        block: 5,
        title: "Táborák",
        location: "Zahrada Stojanov",
        description: `Večerní oheň, kytara a špekáčky nesmí chybět! Dojdi nasát atmosféru, zazpívat si a potkat se s ostatními po celodenním rušném programu.`,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 0);
        },
        type: ActivityTypes.VOLNOCAS,
      },
      {
        id: 512,
        block: 5,
        title: "Čajovna/vinárna",
        location: "Sklep gymnázia",
        description: `Pohodový večer s čajem, vínem a drobným občerstvením.`,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 0);
        },
        type: ActivityTypes.VOLNOCAS,
      },
      {
        id: 600,
        block: 6,
        title: "Stavy a vztahy - bludný kruh",
        location: "Slovanský sál",
        description: `Samota není totéž co osamělost. Samota, pokud se k ní rozhodneme svobodně, může přinášet pozitiva, protože v onom tichu slyšíme cosi v nás, a nebo nám dá poznat to, co v hluku světa nevnímáme. Pocit osamělosti ale může prožívat i ten, kdo žije ve společenství rodiny nebo přátel. Celý lidský život je o vztazích. Od početí až do posledního výdechu. O vztahu k sobě, k lidem, hodnotám materiálním, duševním i duchovním. Ale všechny uvedené vztahy mohou trpět sedmi nemocemi. Pojďme hledat prevenci i uzdravení.
       `,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 20);
        },
        capacity: 100,
        type: ActivityTypes.PREDNASKA
      },
      {
        id: 601,
        block: 6,
        title: "Na to jsi moc mladej",
        location: "Kaple Stojanov",
        description: `Kdy už budete mít věk na to, abyste se mohli starat o svět kolem sebe? Co staří dělají lépe, než mladí? A proč jsou to všechno nesmysly?`,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 21);
        },
        capacity: 80,
        type: ActivityTypes.PREDNASKA
      },
      {
        id: 602,
        block: 6,
        title: "Čekárna na život a nebo",
        location: "Kaple Stojanov",
        description: `V životě poměrně hodně času věnujeme naší minulosti nebo budoucnosti. Naše kalkulativní mysl je stále zaměstnána tím, co a jak bude nebo bylo, proč je to či ono. Neustále analyzuje. Přitom nic z toho není v našich rukou. Naopak. Bůh se zjevuje jako tvořivá přítomnost. Bůh je přítomnost. Tak i naše prožívání přítomnosti, tedy onen kontemplativní mód naší mysli, se může stávat způsobem jak tvořivě nakládat s naší životní zkušeností včetně osamocení a samoty.
       `,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 22);
        },
        capacity: 80,
        type: ActivityTypes.PREDNASKA
      },
      {
        id: 603,
        block: 6,
        title: "Děti z \"konce\" Ukrajiny - pomoc, pouto, dobrovolnictví, přátelství",
        location: "Sál Stojanov",
        description: `Jak se žije dětem v ústavní péči na Ukrajině? Jak lze pomoci? V čem spočívá dobrovolnická pomoc dětem s postižením? Příběh organizace Bodaj, která již několik let díky dobrovolníkům těmto dětem na Ukrajině pomáhá.
       `,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 23);
        },
        capacity: 40,
        type: ActivityTypes.PREDNASKA
      },
      {
        id: 607,
        block: 6,
        title: "Žena ve veřejné službě",
        location: "Třída 2, gymnázium",
        description: `Život každého z nás roste v rodině, v generacích, ale také v občanské společnosti. Stojí za to překonat vlastní uzavřenost, zaměření na individuální osobní život a vyvážit rodinné priority. Nebát se veřejného nasazení, přijmout službu potřebným. Osamělost křesťanské víry ve většinově nevěřící společnosti je někdy bolestná. Přesto křesťanské hodnoty dokážou pohnout světem, proměňují životy křesťanů i nevěřících.
       `,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 24);
        },
        capacity: 40,
        type: ActivityTypes.PREDNASKA
      },
      {
        id: 604,
        block: 6,
        title: "Speed Dating",
        location: "Sklep gymnázia",
        description: `Jedinečná příležitost k seznámení v bezpečném prostředí mezi mladými nezadanými věřícími a zdarma. Pokud se rozhodneš Speed datingu zúčastnit, čeká tě seznámení naživo s patnácti účastníky opačného pohlaví :) Vždy máte jen několik málo minut na to, abyste se navzájem poznali, poté se muži přesunou k dalšímu stolu k jiné ženě. Oba si pak navzájem zhodnotíte, zda jste si padli do oka či ne. Jen pro zajímavost: rychlé rande vymyslel rabín Yaacov Deyo, který chtěl zvýšit počet židovských svateb. (Že z toho bude svatba, vám rozhodně neslibujeme.)
       `,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 0);
        },
        capacity: 30,
        type: ActivityTypes.VOLNOCAS
      },
      {
        id: 605,
        block: 6,
        title: "Smysluplné rozhovory",
        location: "Třída 1, gymnázium",
        description: `Smysluplné rozhovory jsou projektem propojující otevřené lidi, kteří se rádi baví a přemýšlí o hlubších tématech. Myšlenkou tohoto projektu je dát lidem příležitost znovu si povídat. Z očí do očí, upřímně a bez povrchnosti, protože za každou běžnou konverzací se zpravidla skrývají naše sny, bolesti, touhy i trápení. Připravte se na odpovědi, které v Tobě i v ostatních posluchačích vyvolají emoce. Protože jen takové nás přimějí opravdově se zamyslet nad našimi životy.
       `,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 10);
        },
        capacity: 12,
        type: ActivityTypes.VOLNOCAS
      },
      {
        id: 606,
        block: 6,
        title: "Akční malba",
        location: "Sraz venku za VDCM",
        description: `Zkoušel jsi někdy malovat záchodovou štětkou, houbičkou na nádobí nebo ovocem? Pokud ne a rád by sis touto zkušeností prošel, máme tady aktivitu právě pro tebe. Provede tě jí zkušená lektorka, která má s touto technikou mnohaleté zkušenosti.
       `,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 25);
        },
        capacity: 10,
        type: ActivityTypes.VOLNOCAS
      },
      {
        id: 608,
        block: 6,
        title: "Příprava na zpověď",
        location: "Kaple Gymnázium",
        description: `Vnímáš, že potřebuješ znovu obnovit vztah s Bohem a zajít si ke svátosti smíření, ale máš pocit, že se nedokážeš připravit? Nebo se chceš jen zastavit, ztišit a chvilku rozjímat?
       `,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 26);
        },
        type: ActivityTypes.DUCHOVNI
      },
      {
        id: 700,
        block: 7,
        title: "Křesťanství a změna epochy",
        location: "Slovanský sál",
        description: `"Tato doba není jen epochou změn, nýbrž změnou epochy", tvrdí papež František. Sekularizace nezpůsobila konec náboženství, avšak přispěla k jeho proměně. Pokud chtějí církve odpovědět na výzvu této doby, musí projít hlubokou reformou nejprve v oblasti teologie a spirituality, následně v oblasti pastorace a institucionálních struktur. Důležitou součástí reformy je přechod od navyklého stylu pastorace a misie, od starosti pouze o vlastní věřící a o nárůst jejich počtu, k službě doprovázení lidí na duchovních cestách. Kontemplace a akce, samota i společenství, se musí vzájemně doplňovat.
       `,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 27);
        },
        capacity: 80,
        type: ActivityTypes.PREDNASKA
      },
      {
        id: 701,
        block: 7,
        title: "Souvislost mezi učením Ježíše Nazaretského a moderní psychoterapii ACT",
        location: "Zimní sál",
        description: `Jak zvládat bolest a utrpení? Kdo jsem já a jak se mohu poznat? Jak objevit svůj potenciál (poznat své hřivny)? Jak mám o sebe pečovat?`,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 29);
        },
        capacity: 80,
        type: ActivityTypes.PREDNASKA
      },
      {
        id: 702,
        block: 7,
        title: "Křesťan a migrace - služba lidem na cestě",
        location: "Třída 1, gymnázium",
        description: `Jaký je život na cestě a v čem spočívá pomoc lidem, kteří v Evropě touží začít znovu? O tom se učíme již řadu let na tzv. Balkánské stezce i u nás, v České republice a rády se o naše zážitky podělíme. Dozvědět se můžete třeba jaký se na Balkánské stezce vaří čaj nebo proč si myslíme, že by křesťan neměl být k příchozím lhostejný.
       `,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 28);
        },
        capacity: 40,
        type: ActivityTypes.PREDNASKA
      },
      {
        id: 703,
        block: 7,
        title: "Encyklika Laudato Si´",
        location: "Sál Stojanov",
        description: `Ekologická encyklika papeže Františka slaví letos šesté výročí vydání. Podíváme se na její východiska a obsah, kapitolu po kapitole - na pozadí fotografií, které ukazují krásu Božího stvoření a pocházejí hlavně ze skandinávské přírody, ale i z farní zahrady v Brně-Žebětíně.
       `,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 30);
        },
        capacity: 60,
        type: ActivityTypes.PREDNASKA
      },
      {
        id: 704,
        block: 7,
        title: "Křesťanská meditace",
        location: "Kaple Stojanov",
        description: `Křesťanská modlitba v dějinách často k cestě na hlubinu využívala opakování slova či slov. Nechat se vést modlitebním slovem/větou vede k jednoduchosti a osvobozování se a odpočinku od vlastních myšlenek, nápadů, představ a obrazů. Může se stávat tzv. čirou modlitbou. Je jednoduchá, nikoli však snadná... Můžeme ji zkusit podle návodu benediktinského mnicha Johna Maina, inspirovaného Janem Kasiánem, Oblakem nevědění i Ježíšovou modlitbou.
       `,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 31 || presenter.id === 32 );
        },
        capacity: 60,
        type: ActivityTypes.PREDNASKA
      },
      {
        id: 711,
        block: 7,
        title: "Krav Maga",
        location: "Sraz venku u baziliky",
        description: `Krav Maga patří mezi nejúčinnější sebeobranné systémy. Je používaná mnoha armádními a policejními jednotkami. Zároveň je pro svou jednoduchost oblíbená mezi lidmi, kteří chtějí zlepšit svou fyzičku, zvýšit sebevědomí a zároveň se chtějí naučit bránit se. Hodina a půl cvičení s naším hostem Honzou, který vede tréninky Krav Maga v Ostravě.
       `,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 33);
        },
        capacity: 30,
        type: ActivityTypes.VOLNOCAS
      },
      {
        id: 713,
        block: 7,
        title: "Folklórní tance",
        location: "Sklep gymnázia",
        description: `Máš rád cimbál? A chtěl by ses naučit tance, které by sis u cimbálu mohl zatančit? Dáme ti možnost. Naši skvělí tanečníci tě provedou workshopem folklorních tanců, které využiješ například i večer ve vinárně.
       `,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 34);
        },
        capacity: 40,
        type: ActivityTypes.VOLNOCAS
      },
      {
        id: 714,
        block: 7,
        title: "Párová akrobacie",
        location: "Třída 3, gymnázium",
        description: `Párová akrobacie je úžasně komplexní a hravá seberozvojová aktivita, která se dá cvičit takřka kdekoliv a kdykoliv. "Báze" - tedy osoba, která je při cvičení v kontaktu se zemí, potřebuje jen podložku (bude zajštěno), "letkyním" postačí legíny a přiléhavější tričko. Cvičí se naboso. Kapacitu tohoto workshopu jsme omezili na 12 osob - budeme se párovat a střídat podle potřeby a zaměstnáme všechny pokročilosti. Náš zkušený instruktor se o všechno postará.
       `,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 35);
        },
        capacity: 12,
        type: ActivityTypes.VOLNOCAS
      },
      {
        id: 715,
        block: 7,
        title: "Zapojení do života obce",
        location: "Třída 2, gymnázium",
        description: `Zajímáš se o dění ve společnosti, ve svém okolí, ve své obci? Chtěl bys být více aktivní a zapojit se do života obce a nevíš jak? Nebo víš jak, ale nevíš, jestli je to správná cesta a potřebuješ to s někým probrat?
       `,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 21);
        },
        capacity: 20,
        type: ActivityTypes.VOLNOCAS
      },
      {
        id: 716,
        block: 7,
        title: "Pointilismus",
        location: "Sraz venku za VDCM",
        description: `Pointillismus je technika malby, která kombinací malých, od sebe vzdálených bodů základních barev vytváří dojem složité barevnosti. Technika je založena na schopnostech vnímání oka a mysli, které míchají jednotlivé body do celé škály barev.
       `,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 0);
        },
        capacity: 24,
        type: ActivityTypes.VOLNOCAS
      },
      {
        id: 800,
        block: 8,
        title: "Setkání regionů",
        location: "",
        description: `Letošní novinka! Příležitost potkat se a seznámit se všemi účastníky AV z tvého regionu. U zrodu tohoto programového bloku stála jednoduchá myšlenka. Chceme, aby Absolventský Velehrad neskončil nedělním odjezdem domů. Přáli bychom si, aby jeho myšlenka žila v jednotlivých regionech dál. To znamená, aby byla v rámci regionu možnost potkávat se k nejrůznějším aktivitám, sdílení, modlitbě právě v rámci naší skupiny absolventů, tak jako tady na Velehradě. 
A co konkrétně tě bude v rámci tohoto programu čekat? Potkáš se s dalšími účastníky AV, kteří třeba žijí jen nedaleko od tebe. Seznámíš se a něco společně během těch 90 minut zažijete. Jednotlivé aktivity se budou lišit region od regionu. Budou ti představeny možnosti, nebo třeba společně vymyslíte nové, jak a kde se dále po AVčku potkávat.
Jednotlivá setkání si pro vás připravili a chtějí s vámi prožít dobrovolníci žijící v daných regionech. `,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 0);
        },
        type: ActivityTypes.VOLNOCAS
      },
      {
        id: 910,
        block: 9,
        title: "Posezení u cimbálu",
        location: "Sklep gymnázia",
        description: `Pohodový večer můžeš zažít ve sklepě gymnázia. Nejen příznivci lidové hudby jistě ocení cimbálovou muziku Slačáci i lahodné víno přímo od vinaře.`,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 0);
        },
        type: ActivityTypes.VOLNOCAS,
      },
      {
        id: 920,
        block: 9,
        title: "Modlitba se zpěvy Taizé",
        location: "Kaple Stojanov",
        description: `Sobotní večer bude také protkán modlitbou a tentokrát tato společná modlitba bude proložena zpěvy z Taizé v podání naší AV scholy. Tato modlitba má zase za cíl nás přiblížit více ke Kristu. Jednoduché opakující texty písní nás připraví na Boží slovo a na chvíle ticha a rozjímání, které budeme prožívat ve společenství ostatních.
       `,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 0);
        },
        type: ActivityTypes.DUCHOVNI
      },
      {
        id: 911,
        block: 9,
        title: "Táborák",
        location: "Zahrada Stojanov",
        description: `Večerní oheň, kytara a špekáčky nesmí chybět! Dojdi nasát atmosféru, zazpívat si a potkat se s ostatními po celodenním rušném programu.`,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 0);
        },
        type: ActivityTypes.VOLNOCAS,
      },
      {
        id: 1000,
        block: 10,
        title: "Život ví své",
        location: "Slovanský sál",
        description: `Život ví své... Nechce být jen dějištěm, prostorem a časem, nabídnutým mým projektům a realizacím. Ví, že je věčný a tak věčným být chce. Hic et nunc - zde a teď.
       `,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 36);
        },
        capacity: 120,
        type: ActivityTypes.PREDNASKA
      },
      {
        id: 1001,
        block: 10,
        title: "Duchovní cesta muža a ženy",
        location: "Zimní sál",
        description: `Ako si muž a žena môžu rozumieť, keď každý chce niečo iné, muž ženu, žena  muža. Tento známy aforizmus má v sebe istú múdrosť. Je to nielen o fyzickej, emočnej, psychickej rozdielnosti, ale aj o tom, čo sú ciele a zdroje v našich životoch. O vplyve výchovy a jej presah na krízy v manželstve a duchovnom rozmere toho všetkého na náš život. Prečo sú vtipy len o svokrách (tchýně) a nie o svokroch (tchán). Toho všetkého by sme sa spoločne mohli dotknúť v téme: Duchovná cesta muža a ženy.
       `,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 37);
        },
        capacity: 120,
        type: ActivityTypes.PREDNASKA
      },
      {
        id: 1002,
        block: 10,
        title: "Život není peříčko, ale stojí za to ho žít",
        location: "Sál Stojanov",
        description: `I když má člověk někdy pocit, že je život těžký, málo barevný a příjemný, nebo že je pro něj dokonce nesnesitelný a k neunesení, tak přesto má CENU ho žít. V přednášce bude řeč o tom, jak se postavit k životu čelem, jak najít smysl života a naději v nelehkých okamžicích života. Vše bude podepřeno příběhy lidí, kteří to nevzdali a chytili svůj život "za pačesy".
       `,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 38);
        },
        capacity: 80,
        type: ActivityTypes.PREDNASKA
      },
      {
        id: 1003,
        block: 10,
        title: "Laudato si´ - péče o společný domov",
        location: "Třída 1, gymnázium",
        description: `Svět se blíží k šestému hromadnému vymírání. Příčinou jsou poprvé lidé. Papež František a mnozí další bijí na poplach vyzývají lidi ke změně. Co tedy děláme špatně a jak se k tomu můžeme postavit v našem každodenním životě?
       `,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 39);
        },
        capacity: 40,
        type: ActivityTypes.PREDNASKA
      },
      {
        id: 1004,
        block: 10,
        title: "Co si nevybojuješ v samotě, to ve společenství nedáš! Aneb Bez víry ani krok...",
        location: "Kaple Stojanov",
        description: `Přicházíme jako společenství, ve dvou, abychom nabídly náhled do života ve společenství, každodenní prožívání víry ve společenství i v samotě. Samota a společenství se prolínají také ve službě potřebným, přednáška bude spojená i se svědectvími ze života seniorů, o které se staráme. Nebude chybět ani krátké Lectio divina inspirované úryvkem letošního AV. Chceme tak společně s těmi, kteří k nám přijdou vytvořit neopakovatelnou atmosféru společenství a prostor pro sdílení.
       `,
        image: null,
        get presenter() {
          return staticData.data.presenters.filter((presenter: PresenterData) => presenter.id === 40 || presenter.id === 41);
        },
        capacity: 40,
        type: ActivityTypes.PREDNASKA
      },
    ],
    contacts: [],
    harmonogram: [
      [
        {
          title: "Registrace",
          time: "17:00 - 20:00, 21:00 - 22:00",
          location: "Recepce Stojanov",
          icon: "plussquareo",
          data: [],
        },
        {
          title: "Večeře",
          time: "18:45 - 19:45",
          location: "Jídelna Stojanov",
          data: [],
          icon: "smileo",
        },
        {
          title: "Zahájení, mše svatá",
          time: "20:00 - 21:00",
          location: "Bazilika",
          data: [],
          icon: "heart",
        },
        {
          title: "Magis (rozřazení do skupin)",
          time: "21:00 - 21:20 ",
          location: "Před bazilikou",
          data: [],
          icon: "sync",
        },
        {
          title: "BLOK 1",
          time: "20:00 - 21:00",
          location: "Bazilika",
          get data() {
            return staticData.data.activities.filter(
              (activity) => activity.block == 1
            );
          },
          icon: "bars",
        },
      ],
      [
        {
          title: "Ranní chvály",
          time: "07:00 - 07:30",
          location: "Kaple Stojanov",
          icon: "plussquareo",
          data: [],
        },
        {
          title: "Ranní rozcvička",
          time: "07:15 - 07:30",
          location: "Před Stojanovem",
          data: [],
          icon: "smileo",
        },
        {
          title: "Modlitba",
          time: "07:30 - 8:15",
          location: "Kaple Stojanov",
          data: [],
          icon: "heart",
        },
        {
          title: "Snídaně",
          time: "08:15 - 09:30",
          location: "Jídelna Stojanov",
          data: [],
          icon: "sync",
        },
        {
          title: "BLOK 2",
          time: "10:00 - 11:30",
          location: "Velehrad",
          get data() {
            return staticData.data.activities.filter(
              (activity) => activity.block == 2
            );
          },
          icon: "bars",
        },
        {
          title: "Anděl Páně",
          time: "11:45 - 12:00",
          location: "Venku u kříže (u baziliky)",
          data: [],
          icon: "sync",
        },
        {
          title: "Oběd",
          time: "12:00 - 13:30",
          location: "Jídelna Stojanov",
          data: [],
          icon: "sync",
        },
        {
          title: "Zpovědi",
          time: "12:30 - 14:00",
          location: "Stojanov (info na recepci)",
          data: [],
          icon: "sync",
        },
        {
          title: "Čajovna",
          time: "13:00 - 14:00 ",
          location: "Sklep Gymnázium",
          data: [],
          icon: "sync",
        },
        {
          title: "BLOK 3",
          time: "14:00 - 15:30",
          location: "Velehrad",
          get data() {
            return staticData.data.activities.filter(
              (activity) => activity.block == 3
            );
          },
          icon: "sync",
        },
        {
          title: "BLOK 4",
          time: "16:00 - 17:30",
          location: "Velehrad",
          get data() {
            return staticData.data.activities.filter(
              (activity) => activity.block == 4
            );
          },
          icon: "sync",
        },
        {
          title: "Mše svatá",
          time: "18:00 - 19:00 ",
          location: "Bazilika",
          data: [],
          icon: "sync",
        },
        {
          title: "Večeře",
          time: "19:15 - 20:15",
          location: "Jídelna Stojanov",
          data: [],
          icon: "sync",
        },
        {
          title: "Magis",
          time: "20:00 - 20:30 ",
          location: "Kde jen budete chtít",
          data: [],
          icon: "sync",
        },
        {
          title: "BLOK 5",
          time: "20:30 - 00:00",
          location: "Velehrad",
          get data() {
            return staticData.data.activities.filter(
              (activity) => activity.block == 5
            );
          },
          icon: "sync",
        },
      ],
      [
        {
          title: "Ranní chvály",
          time: "07:00 - 07:30",
          location: "Kaple Stojanov",
          icon: "plussquareo",
          data: [],
        },
        {
          title: "Ranní rozcvička",
          time: "07:15 - 07:30",
          location: "Před Stojanovem",
          data: [],
          icon: "smileo",
        },
        {
          title: "Modlitba",
          time: "07:30 - 8:15",
          location: "Kaple Stojanov",
          data: [],
          icon: "heart",
        },
        {
          title: "Snídaně",
          time: "08:15 - 09:30",
          location: "Jídelna Stojanov",
          data: [],
          icon: "sync",
        },
        {
          title: "Psychologická poradna - p. Jindřich Kotvrda",
          time: "09:30 - 12:30",
          location: "Třída 4, gymnázium",
          data: [],
          icon: "",
        },
        {
          title: "BLOK 6",
          time: "10:00 - 11:30",
          location: "Velehrad",
          get data() {
            return staticData.data.activities.filter(
              (activity) => activity.block == 6
            );
          },
          icon: "bars",
        },
        {
          title: "Anděl Páně",
          time: "11:45 - 12:00",
          location: "Venku u kříže (u baziliky)",
          data: [],
          icon: "sync",
        },
        {
          title: "Oběd",
          time: "12:00 - 13:30",
          location: "Jídelna Stojanov",
          data: [],
          icon: "sync",
        },
        {
          title: "Zpovědi",
          time: "12:30 - 14:00",
          location: "Stojanov (info na recepci)",
          data: [],
          icon: "sync",
        },
        {
          title: "Čajovna",
          time: "13:00 - 14:00 ",
          location: "Sklep Gymnázium",
          data: [],
          icon: "sync",
        },
        {
          title: "BLOK 7",
          time: "14:00 - 15:30",
          location: "Velehrad",
          get data() {
            return staticData.data.activities.filter(
              (activity) => activity.block == 7
            );
          },
          icon: "sync",
        },
        {
          title: "BLOK 8 - Setkání regionů",
          time: "16:00 - 17:30",
          location: "Velehrad",
          get data() {
            return staticData.data.activities.filter(
              (activity) => activity.block == 8
            );
          },
          icon: "sync",
        },
        {
          title: "Mše svatá",
          time: "18:00 - 19:00 ",
          location: "Bazilika",
          data: [],
          icon: "sync",
        },
        {
          title: "Společné focení",
          time: "19:00 - 19:05 ",
          location: "Před bazilikou",
          data: [],
          icon: "sync",
        },

        {
          title: "Večeře",
          time: "19:15 - 20:15",
          location: "Jídelna Stojanov",
          data: [],
          icon: "sync",
        },
        {
          title: "Magis",
          time: "20:00 - 20:30 ",
          location: "Kde jen budete chtít",
          data: [],
          icon: "sync",
        },
        {
          title: "BLOK 9",
          time: "20:30 - 00:00",
          location: "Velehrad",
          get data() {
            return staticData.data.activities.filter(
              (activity) => activity.block == 9
            );
          },
          icon: "sync",
        },
      ],
      [
        {
          title: "Ranní chvály",
          time: "07:00 - 07:30",
          location: "Kaple Stojanov",
          icon: "plussquareo",
          data: [],
        },
        {
          title: "Ranní rozcvička",
          time: "07:15 - 07:30",
          location: "Před Stojanovem",
          data: [],
          icon: "smileo",
        },
        {
          title: "Modlitba",
          time: "07:30 - 8:15",
          location: "Kaple Stojanov",
          data: [],
          icon: "heart",
        },
        {
          title: "Snídaně",
          time: "08:15 - 09:15",
          location: "Jídelna Stojanov",
          data: [],
          icon: "sync",
        },
        {
          title: "BLOK 10",
          time: "09:30 - 11:00",
          location: "Velehrad",
          get data() {
            return staticData.data.activities.filter(
              (activity) => activity.block == 10
            );
          },
          icon: "bars",
        },
        {
          title: "Oběd",
          time: "11:15 - 12:30",
          location: "Jídelna Stojanov",
          data: [],
          icon: "sync",
        },
        {
          title: "Magis",
          time: "11:15 - 12:30",
          location: "Kde jen budete chtít",
          data: [],
          icon: "sync",
        },
        {
          title: "Vyklizení pokojů",
          time: "11:15 - 12:30",
          location: "Stojanov a VDCM",
          data: [],
          icon: "sync",
        },
        {
          title: "Anděl Páně",
          time: "12:30 - 12:45",
          location: "Venku u kříže (u baziliky)",
          data: [],
          icon: "sync",
        },
        {
          title: "Mše svatá a rozloučení",
          time: "12:45 - 14:00",
          location: "Bazilika",
          data: [],
          icon: "sync",
        },
      ],





    ],
    maps: [],
    images: [],
    texts: [
      `
     Stojanov je otevřen 6:40 - 22:00, VDCM v čase 7:30 - 22:00 (zavřeno během bloků a mší)
     Noční otevírací doba
     Vchod VDCM bude uzavřen ve 22:00, od této doby budeme dveře otevírat každou půl hodinu až do 2 hod (tzn. ve 22:30, 23:00, 23:30, 00:00, 00:30, 1:00, 1:30, 2:00)
     Ubytovaní na Stojanově dostanou klíčky, na kterých je i klíč od hlavního vchodu.
     Jak se chovat na ubytování
     Ve vnitřních prostorách prosíme nos ochranné prostředky dýchacích cest - respirátory nebo nano roušky splňující příslušné normy (např. FFP2, KN 95)
     Prosíme o dodržování nočního klidu na ubytování od 22 do 6 hodin.
     Všechny prostory setkání jsou nekuřácké.
     V pokojích na Stojanově i na VDCM se prosíme přezouvej.
     Klíče od pokojů na Stojanově si nech po dobu AV u sebe. Před odjezdem je však vrať na recepci Stojanov!
     V neděli prosíme o vyklizení pokojů na Stojanově i VDCM do 12:30 hodin (do závěrečné mše). Věci si můžeš nechat v sále na Stojanově.
     Další organizační věci
     Náramku na ruce se nezbavuj (ať se dostaneš na program nebo do jídelny).
     Registrace na přednášky a workshopy probíhá online - na program daného dne vždy ráno od 6:45 na adrese registrace.absolventskyvelehrad.cz.
     V případě zdravotních potíží kontaktuj naši zdravotnici Alžbětu Podolovou (telefon +420 774 344 542)
     Kde hledat informace
     Vše důležité se dozvíš na recepci na Stojanově (a na nástěnkách u recepce)
     můžeš si zde zapůjčit sportovní náčiní, deky či společenské hry
     budou zde aktuální informace o zpovědích, duchovních rozhovorech a pouti
     zde ti také odpoví na veškeré dotazy (nebo zjistí odpověď).
     Vše důležité shrneme v ohláškách po každé mši.
     `,
    ],
    info: [
      {
        type: TextTypes.NADPIS,
        text: `Kdy je otevřené ubytování`,
      },
      {
        type: TextTypes.TEXT,
        text: `Stojanov je otevřen 6:40 - 22:00, VDCM v čase 7:30 - 22:00 (zavřeno během bloků a mší)
Noční otevírací doba
Vchod VDCM bude uzavřen ve 22:00, od této doby budeme dveře otevírat každou půl hodinu až do 2 hod (tzn. ve 22:30, 23:00, 23:30, 00:00, 00:30, 1:00, 1:30, 2:00)
,Ubytovaní na Stojanově dostanou klíčky, na kterých je i klíč od hlavního vchodu.`,
      },
      {
        type: TextTypes.NADPIS,
        text: `Jak se chovat na ubytování`,
      },
      {
        type: TextTypes.TEXT,
        text: `Ve vnitřních prostorách prosíme nos ochranné prostředky dýchacích cest - respirátory nebo nano roušky splňující příslušné normy (např. FFP2, KN 95)
Prosíme o dodržování nočního klidu na ubytování od 22 do 6 hodin.
Všechny prostory setkání jsou nekuřácké.
V pokojích na Stojanově i na VDCM se prosíme přezouvej.
Klíče od pokojů na Stojanově si nech po dobu AV u sebe. Před odjezdem je však vrať na recepci Stojanov!
V neděli prosíme o vyklizení pokojů na Stojanově i VDCM do 12:30 hodin (do závěrečné mše). Věci si můžeš nechat v sále na Stojanově.`,
      },
      {
        type: TextTypes.NADPIS,
        text: `Další organizační věci`,
      },
      {
        type: TextTypes.TEXT,
        text: `Náramku na ruce se nezbavuj (ať se dostaneš na program nebo do jídelny).
Registrace na přednášky a workshopy probíhá online - na program daného dne vždy ráno od 6:45 na adrese registrace.absolventskyvelehrad.cz.
V případě zdravotních potíží kontaktuj naši zdravotnici Alžbětu Podolovou (telefon +420 774 344 542)`,
      },
      {
        type: TextTypes.NADPIS,
        text: `Kde hledat informace`,
      },
      {
        type: TextTypes.TEXT,
        text: `Vše důležité se dozvíš na recepci na Stojanově (a na nástěnkách u recepce)
- můžeš si zde zapůjčit sportovní náčiní, deky či společenské hry
- budou zde aktuální informace o zpovědích, duchovních rozhovorech a pouti
- zde ti také odpoví na veškeré dotazy (nebo zjistí odpověď).
Vše důležité shrneme v ohláškách po každé mši. `,
      },
      {
        type: TextTypes.NADPIS,
        text: ``,
      },
      {
        type: TextTypes.TEXT,
        text: ``,
      },
    ],
  },
};