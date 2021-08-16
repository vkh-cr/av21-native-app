import {
  ActivityTypes,
  News,
  PresenterData,
  StaticData,
  TextTypes,
} from "./types";

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
        description: `Jan Svoboda: farář z Českého Těšína, ředitel první české pobočky Školy evangelizace svatého Ondřeje 
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
        description:
          "Kněz, člen řeholního společenství Kongregace misionářů oblátů Panny Marie Neposkvrněné, působící v Plasích v plzeňské diecézi.",
        activities: [300],
      },
      {
        id: 9,
        firstName: "Alexandr",
        lastName: "Flek",
        display: true,
        avatar: "",
        description:
          "Evangelický teolog, kazatel a překladatel Bible21. Věnuje se překladatelské a přednáškové činnosti, příležitostně káže v širokém spektru křesťanských církví. Je ženatý, má čtyři děti a dva vnuky.",
        activities: [301],
      },
      {
        id: 10,
        firstName: "Vít",
        lastName: "Novotný",
        display: true,
        avatar: require("../assets/presenters/vit-novotny.jpg"),
        description:
          "Lektor, kouč; založil projekt Smysluplné rozhovory, jehož vizí je vracet více hloubky do konverzací i vztahů; pořádají pravidelná setkávání a vydali také konverzační karty, díky kterým můžeme lépe poznat lidi ve svém okolí.",
        activities: [302, 413, 605],
      },
      {
        id: 11,
        firstName: "Denisa",
        lastName: "Buchtová",
        display: true,
        avatar: require("../assets/presenters/denisa.png"),
        description:
          "Studentka a sociální pracovnice. Která se ve volném čase věnuje výrobě čokoládových pralinek a táborům. Na kterých učila děti, mimo jiné, vyrábět barefoot sandále.",
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
        firstName: 'Jakub "Indián"',
        lastName: "Venglář",
        display: true,
        avatar: require("../assets/presenters/jakub-venglar.jpg"),
        description:
          "Cestovatel, dobrodruh a spisovatel, který je nejspokojenější někde na horách nebo kdesi, kde netuší co přinese další den. Krom podivných cest se věnuje i ultimate frisbee. V roce 2016 dokonce založil brněnský tým Brno Ultimate Frisbee Underground, který zároveň spolutrénuje. Na pomoc si vezme pár spoluhráčů právě z tohoto týmu.",
        activities: [313],
      },
      {
        id: 14,
        firstName: "Kateřina",
        lastName: "Řmotová",
        display: true,
        avatar: require("../assets/presenters/katerina-rmotova.jpg"),
        description:
          "Věnuje se neformálnímu vzdělávání a práci s mládeží v mezinárodním prostředí už něco přes 3 roky. Baví ji koordinovat projekty z nejrůznějších oblastí a podílet se na jejich přípravě. Orientuje se také na práci se skupinou a facilitaci workshopů.",
        activities: [314],
      },
      {
        id: 15,
        firstName: "Josef",
        lastName: "Suchár",
        display: true,
        avatar: require("../assets/presenters/josef-suchar.jpg"),
        description:
          "Farář v pohraniční osadě Neratov. Se svými spolupracovníky z občanského Sdružení Neratov do ní vrací život a pracuje na obnově barokního kostela Nanebevzetí Panny Marie.",
        activities: [400],
      },
      {
        id: 16,
        firstName: "Milan",
        lastName: "Novotný",
        display: true,
        avatar: require("../assets/presenters/milan-novotny.jpg"),
        description:
          "Trvalý jáhen římskokatolické církve, vojenský kaplan 43. výsadkového pluku v Chrudimi, psycholog.",
        activities: [401],
      },
      {
        id: 17,
        firstName: "Jiří",
        lastName: "Dyčka",
        display: true,
        avatar: require("../assets/presenters/jiri-dycka.jpg"),
        description:
          "Jáhen, který působí ve farnosti Velké Meziříčí; youtuber, jeden z Ježíšových fans, člen projektu Live4G.",
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
        description: "Bude doprovázet Večer chval <3",
        activities: [520],
      },
      {
        id: 20,
        firstName: "Jaroslav Maxmilián dlouhe jmeno jak cyp",
        lastName: "Kašparů",
        display: true,
        avatar: require("../assets/presenters/max-kasparu.jpg"),
        description:
          "Řeckokatolický kněz, psychiatr, pedagog, premonstrátský terciář, autor duchovní literatury a nepřizpůsobivý občan.",
        activities: [600],
      },
      {
        id: 21,
        firstName: "Jan",
        lastName: "Grolich",
        display: true,
        avatar: require("../assets/presenters/jan-grolich.jpg"),
        description:
          'Moravský politik a advokát, od roku 2020 hejtman Jihomoravského kraje. "I na malé dědině se dají dělat velké věci a inspirovat okolí. Když to jde v malém, musí to jít i ve velkém na kraji."',
        activities: [601, 715],
      },
      {
        id: 22,
        firstName: "Petr",
        lastName: "Glogar",
        display: true,
        avatar: require("../assets/presenters/petr-glogar.jpg"),
        description:
          "Bosý karmelitán, kněz a rodinný terapeut, řídí Fortnu, vede akce a nabízí duchovní doprovázení; vede semináře jak pro mužské skupiny, tak pro manželské páry.",
        activities: [602],
      },
      {
        id: 23,
        firstName: "Jan",
        lastName: "Čanda",
        display: true,
        avatar: require("../assets/presenters/bodaj.jpg"),
        description:
          "Ředitel organizace Bodaj, která již několik let díky dobrovolníkům pomáhá dětem v ústavní péči na Ukrajině.",
        activities: [603],
      },
      {
        id: 24,
        firstName: "Dagmar",
        lastName: "Hamalová",
        display: true,
        avatar: require("../assets/presenters/dagmar-hamalova.jpg"),
        description:
          "Členka Unie katolických žen, pracuje na pozici vychovatelky a speciální pedagožky v dětském domově. Věnuje se také seniorům, podporuje místní ekologickou iniciativu Zelená peřina. Od 2008 je aktivní v místní politice, v současnosti v městském zastupitelstvu.",
        activities: [607],
      },
      {
        id: 25,
        firstName: "Lucie",
        lastName: "Strapáčová",
        display: true,
        avatar: require("../assets/presenters/lucie-strapacova.jpg"),
        description:
          "Speciální pedagožka a lektorka zabývající se nejrůznějšími výtvarnými aktivitami, mimo jiné i arteterapiií a akční malbou.",
        activities: [606],
      },
      {
        id: 26,
        firstName: "Jan",
        lastName: "Regner",
        display: true,
        avatar: "",
        description: `Narodil se roku 1974 v Náchodě a vyrůstal v Červeném Kostelci. Po maturitní zkoušce na Střední odborné škole uměleckořemeslné v Praze pracoval jako řezbář a sochař v Ateliérech Břetislava Kafky v Červeném Kostelci. Pak absolvoval Teologický konvikt v Litoměřicích a vojenskou službu. V roce 1995 vstoupil k jezuitům. V letech 1997-2000 studoval filozofii v Krakově. Od srpna 2000 do září 2001 působil jako redaktor v české sekci Vatikánského rozhlasu. V letech 2001-2004 studoval teologii na římské Gregoriánské univerzitě.

        Od června 2004 do dubna 2007 působil v Praze při kostele sv. Ignáce. Od roku 2004 začal spolupracovat s bulletinem Jezuité, nejprve jako předseda redakční rady, později jako odpovědný redaktor. V roce 2006 obhájil na KTF UK diplomovou práci. V letech 2007-2010 studoval postgraduálně fundamentální teologii ve Frankfurtu nad Mohanem. Na KTF UK v Praze v červnu 2014 obhájil rigorózní práci, o dva roky později pak práci disertační.
        
        V české metropoli v letech 2010-2016 působil v Akademické farnosti u Nejsv. Salvátora a při kostele sv. Ignáce na Karlově náměstí. Od srpna 2016 do února 2017 na Srí Lance absolvoval závěrečnou část řeholní formace (třetí probaci). Od března 2017 do února 2018 opět působil v Praze. Od března 2018 je členem olomoucké komunity a působí v akademické farnosti při kostele Panny Marie Sněžné.`,
        activities: [608],
      },
      {
        id: 27,
        firstName: "Tomáš",
        lastName: "Halík",
        display: true,
        avatar: require("../assets/presenters/tomas-halik.jpg"),
        description:
          "Kněz, teolog a sociolog, profesor UK. Je farářem Akademické farnosti Praha  a prezidentem České křesťanské akademie.",
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
        description:
          "Konzultantka pro nadané, terapeutka ACT, lektorka mindfulness, školitelka a přednášející, poradkyně pro školská zařízení.",
        activities: [701],
      },
      {
        id: 30,
        firstName: "Jiří",
        lastName: "Bůžek",
        display: true,
        avatar: require("../assets/presenters/jiri-buzek.jpg"),
        description:
          "Kněz a biolog, farář v Brně-Žebětíně; pracoval na Biofyzikálním ústavu Akademie věd v Brně a má za sebou doktorát z molekulární biologie a genetiky. ",
        activities: [703],
      },
      {
        id: 31,
        firstName: "Jindřich",
        lastName: "Kotvrda",
        display: true,
        avatar: require("../assets/presenters/jindrich-kotvrda.jpg"),
        description:
          "Kněz brněnské diecéze, věnuje se mimo obvyklé pastorační služby duchovnímu doprovázení, psychoterapii, doprovázení komunity L'Arche, společenství Víra a světlo, a křesťanské meditaci podle Johna Maina (wccm.org).",
        activities: [704],
      },
      {
        id: 32,
        firstName: "s. Lucie",
        lastName: "Chytilová",
        display: true,
        avatar: require("../assets/presenters/sestra-lucie.jpg"),
        description:
          "Patří do duchovní rodiny sekulárního Institutu Servi della Sofferenza, kromě své profese učitelky se věnuje spolupráci při evangelizačních projektech, práci s dětmi a mládeží, duchovnímu doprovázení. Je jí blízká praxe křesťanské meditace podle Johna Maina.",
        activities: [704],
      },
      {
        id: 33,
        firstName: "Jan",
        lastName: "Adamčík",
        display: true,
        avatar: require("../assets/presenters/jan-adamcik.jpg"),
        description:
          "Od mládí vášnivý sportovec s citem pro pohyb. Postupně jeho kroky vedly k bojovým sportům, až zůstal u Krav Maga. Honza absolvoval instruktorský kurz pod vedením zahraničního experta Mateusze Soga. Má certifikaci pro cvičení dospělých - Instruktor (technický stupeň G3).",
        activities: [711],
      },
      {
        id: 34,
        firstName: "Tereza Uřičářová a Jan Sekanina",
        lastName: "",
        display: true,
        avatar: require("../assets/presenters/folklor.jpg"),
        description: "Fotka je dostatečně vypovídající",
        activities: [713],
      },
      {
        id: 35,
        firstName: "Jaroslav",
        lastName: "Grochal",
        display: true,
        avatar: require("../assets/presenters/parova-akrobacie.jpg"),
        description:
          "Párovou akrobacií žije od počátku roku 2015 a díky předchozím letitým tanečním a instruktorským zkušenostem se brzy vypracoval na uznávaného průvodce, inspirátora a propagátora této aktivity (nejen) v Brně.",
        activities: [714],
      },
      {
        id: 36,
        firstName: "Karel",
        lastName: "Satoria",
        display: true,
        avatar: require("../assets/presenters/karel-satoria.jpg"),
        description:
          "Kněz, pedagog, bývalý člen Řádu cisterciáků přísné observance, autor knih Povoláním člověk a Život je sacra zajímavej.",
        activities: [1000],
      },
      {
        id: 37,
        firstName: "Jan",
        lastName: "Balážia",
        display: true,
        avatar: require("../assets/presenters/jan-balazia.jpg"),
        description:
          'Již 36 let šťastně ženatý muž, více než 20 let se s manželkou zúčastňuje Manželských setkání; věnuje se mužské spiritualitě; napsal dvě publikace a je součástí sdružení "Pre rodiny".',
        activities: [1001],
      },
      {
        id: 38,
        firstName: "s. Marie Immaculata",
        lastName: "Konvalinková",
        display: true,
        avatar: require("../assets/presenters/sestra-marie-immaculata.jpg"),
        description:
          "Řeholní sestra z Kongregace Školských sester sv. Františka, nemocniční kaplanka, psychoterapeutická poradkyně a lektorka; mnoho let pracovala s uvězněnými a závislými lidmi.",
        activities: [1002],
      },
      {
        id: 39,
        firstName: "Tomáš",
        lastName: "Soták",
        display: true,
        avatar: require("../assets/presenters/tomas-sotak.jpg"),
        description:
          "Předseda spolku Laudato si, který vidí smysl v sebemenších krocích vedoucích k ochraně přírody a razí heslo, že každý by měl začít u sebe.",
        activities: [1003],
      },
      {
        id: 40,
        firstName: "s.Laurencie",
        lastName: "Sikorová",
        display: true,
        avatar: require("../assets/presenters/sestra-laurencie.jpg"),
        description:
          "Před 20 lety ji Bůh změnil život tím, že ji povolal do bližšího života s Ním ve společenství sester a službě potřebným. Je to život pádů a povstávání; odevzdávání a přijímání, lekcí odpouštění sobě i druhým, hledání Boha v Písmu sv., v sobě, v bližním i v různých situacích.",
        activities: [1004],
      },
      {
        id: 41,
        firstName: "s. Magdaléna",
        lastName: "Macurová",
        display: true,
        avatar: require("../assets/presenters/sestra-magdalena.jpg"),
        description:
          'Prožívá své sedmé léto v Konventu sester alžbětinek a chce se podělit o svou zkušenost víry a Božího vedení v každodenním životě, což je často velké dobrodružství. Řekla by o sobě, že je obyčejná sestra s originálním povoláním. Slouží v Domově sv. Alžběty (domov pro seniory) na různých pozicích. Ráda poznává nová místa a nové lidi. Je vděčná za to, že stabilitas loci je někdy i "labilitas".',
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
        image: require("../assets/activities/1.jpg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 0
          );
        },
        type: ActivityTypes.VOLNOCAS,
      },
      {
        id: 2,
        block: 1,
        title: "Tichá adorace",
        location: "Kaple Stojanov (do 23:00)",
        description: `Vzhledem k tomu, že ruchu bude všude dost, využijte možnost se ztišit před Pánem při tichých adoracích. Čtvrteční adorace bude uvedena pouze krátkým slovem, které by nás mělo propojit s jednou cestou naší poutě a to cestou samoty. Tento impuls necháme vyznít do ticha. `,
        image: require("../assets/activities/2.jpg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 0
          );
        },
        type: ActivityTypes.DUCHOVNI,
      },
      {
        id: 200,
        block: 2,
        title:
          '"Být sám sebou" znamená být sám a být sebou aneb "Ať Tě netrápí hvízdání a ať nepotřebuješ potlesk"',
        location: "Slovanský sál",
        description: `Přednáška o tom, proč je samota důležitá a proč nemáme nikomu říkat ani "mistr" ani "učitel".`,
        image: require("../assets/activities/3.jpg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 2
          );
        },
        capacity: 120,
        type: ActivityTypes.PREDNASKA,
      },
      {
        id: 201,
        block: 2,
        title: "Chlapci a dívky jsou jiní a je to tak dobře",
        location: "Zimní sál",
        description: `Věděli jste ale, že ve škole jsou úspěšnější dívky? A věděli jste, že tento trend nekončí na základní škole a že se do velké míry promítá i do mezilidských vztahů? Jan Vepřek bude mluvit o výchově kluků a o formaci školního prostředí z pozice tatínka tří chlapců a jedné dívky a z pozice pedagoga a ředitele Základní školy a gymnázia Navis u Prahy.
       `,
        image: require("../assets/activities/4.jpg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 3
          );
        },
        capacity: 120,
        type: ActivityTypes.PREDNASKA,
      },
      {
        id: 202,
        block: 2,
        title:
          "Škola evangelizace sv. Ondřeje (Jan Svoboda, Maria Paskuda) - Bez čeho se neobejde evangelizace? KE-KA-KO aneb tři pilíře Školy evangelizace sv. Ondřeje",
        location: "Sál Stojanov",
        description: `Škola evangelizace má za úkol formovat křesťany, aby dokázali sdílet svou víru a účinně evangelizovat. Naše škola není uzavřené hnutí, ale pastorační projekt, ze kterého mohou čerpat všichni zájemci z katolické církve. Škola evangelizace svatého Ondřeje a všechny její aktivity stojí na třech pilířích: Kérygma - soustředíme se na hlásání živého Ježíše Krista; Charisma - jsme otevřeni Duchu Svatému a jeho darům; Koinonia - ve společenství Církve je každý člověk důležitý a má své povolání v evangelizaci.
       `,
        image: require("../assets/activities/6.jpg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 4
          );
        },
        capacity: 60,
        type: ActivityTypes.PREDNASKA,
      },
      {
        id: 203,
        block: 2,
        title: "Osobní modlitba",
        location: "Kaple Stojanov",
        description: `Jak rozvíjet a udržet modlitební život a osobní vztah s Bohem v dnešní době, kdy žijeme velice rychlé a intenzivní životy plné povinností a impulsů, které nás rozptylují nebo nám dokonce zabraňují v rozvíjení duchovního života. A lze zůstat přitom v modlitbě ještě kreativní a radostný bez tlaku, že bych se "měl" modlit?
       `,
        image: require("../assets/activities/9.jpg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 5
          );
        },
        capacity: 60,
        type: ActivityTypes.PREDNASKA,
      },
      {
        id: 204,
        block: 2,
        title: "Světlo na pokraji cesty",
        location: "Třída 1, Gymnázium",
        description: `Opravdové příběhy z místa, kde je samota hmatatelná a bolí. Sestra Filoména již 21 let navštěvuje odsouzené ženy na specializovaném oddělení ve věznici. S Boží pomocí se snaží pomáhat odstraňovat nánosy různých pochybení.
       `,
        image: require("../assets/activities/8.jpg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 6
          );
        },
        capacity: 60,
        type: ActivityTypes.PREDNASKA,
      },
      {
        id: 205,
        block: 2,
        title: "Příprava na zpověď",
        location: "Kaple Gymnázium",
        description: `Vnímáš, že potřebuješ znovu obnovit vztah s Bohem a zajít si ke svátosti smíření, ale máš pocit, že se nedokážeš připravit? Nebo se chceš jen zastavit, ztišit a chvilku rozjímat?
       `,
        image: require("../assets/activities/8.jpg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 7
          );
        },
        type: ActivityTypes.DUCHOVNI,
      },
      {
        id: 300,
        block: 3,
        title: "Jak se nevrátit do normálu",
        location: "Kaple Stojanov",
        description: `Na povrchu zkáza, nejistota, bezradnost, osamocení... uvnitř smysl a naděje nového a opravdového začátku. Duch svatý v posledních měsících hodně bořil a hodně budoval. Co už jednou pro vždy nechat v troskách a na čem naopak nově stavět? Jak pandemie odhalila samé základy naší víry a našeho života? Jak se společenství rodí z osamocení, služba z bezmoci a radost z krize a bolesti?
       `,
        image: require("../assets/activities/10.jpg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 8
          );
        },
        capacity: 100,
        type: ActivityTypes.PREDNASKA,
      },
      {
        id: 301,
        block: 3,
        title: "Parabible",
        location: "Slovanský sál",
        description: `Jak by mohl vypadat Ježíšův příběh, kdyby se odehrál dnes? Parabible je aktuální, místy až provokativní biblickou parafrází. Dávný příběh o Ježíši Nazaretském zasazuje do kulis současného Česka, především ale staví dnešního čtenáře před nově obnažené pointy dávných evangelijních příběhů a výroků.
       `,
        image: require("../assets/activities/11.jpg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 9
          );
        },
        capacity: 130,
        type: ActivityTypes.PREDNASKA,
      },
      {
        id: 302,
        block: 3,
        title: "Smysluplné rozhovory",
        location: "Zimní sál",
        description: `Naše společnost je díky internetu a sociálním sítím tou nejpropojenější v historii, paradoxně ale zároveň raketově roste u lidí pocit osamělosti. Jak budovat vztahy s našimi blízkými nás, bohužel, ve škole nikdo neučí a tak v dobré víře napodobujeme to, co vidíme okolo nás. Často tak bezmyšlenkově opakujeme věci, které nefungují a naše vztahy tím trpí. Žijeme v přesvědčení, že někdo buď komunikovat umí, nebo ne. Ale budování pevných vztahů je umění, které je možné rozvíjet, a stejně jako malíř tříbí svou techniku i my se můžeme zlepšovat v tom, jak o vztahy s důležitými lidmi pečovat tak, abychom si byli doopravdy blízko.
       `,
        image: require("../assets/activities/rozhovory.jpeg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 10
          );
        },
        capacity: 100,
        type: ActivityTypes.PREDNASKA,
      },
      {
        id: 310,
        block: 3,
        title: "Výroba barefoot sandálů",
        location: "Sraz venku za VDCM",
        description: `Chození naboso se v poslední době stává velice populární. Chceš si i Ty vyrobit své barefoot sandály? Zde máš možnost. Naši dobrovolníci Ti ukáží, jak na to. Veškerý materiál i pomoc budeš mít k dispozici. Protože ale materiál na výrobu bot něco stojí a chtěli bychom být fér vůči ostatním, bude Tě tento workshop stát 100 korun. To ale za získanou dovednost a nový kousek do botníku stojí, ne?!
       `,
        image: require("../assets/activities/12.jpg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 11
          );
        },
        capacity: 12,
        type: ActivityTypes.VOLNOCAS,
      },
      {
        id: 311,
        block: 3,
        title: "Zapojení do života farnosti",
        location: "Třída 1, gymnázium",
        description: `Co farnost, to jedinečné společenství. Máš zkušenost, jak rozdmýchat dění ve farnosti? Hýříš nápady, které čekají na realizaci? Nebo by ses jen rád více zapojil do farního života a schází ti inspirace? Máš pocit, že by to šlo ve Tvé farnosti dělat jinak a lépe? Přijď se o tom za námi pobavit! Průvodcování tímto workshopem jsme s radostí svěřili Kubovi Vašulínovi z moravské farnosti Střelice.
       `,
        image: require("../assets/activities/zapojeni-do-farnosti.jpeg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 12
          );
        },
        capacity: 15,
        type: ActivityTypes.VOLNOCAS,
      },
      {
        id: 313,
        block: 3,
        title: "Frisbee ultimate",
        location: "Hřiště u ZŠ",
        description: `Ultimate je kolektivní hrou, ve které je cílem chytit disk v koncové zóně. Principem hry se tak podobá například ragby, avšak tento sport je bezkontaktní a s diskem se nesmí běhat. Hráč s diskem (házeč) může stejně jako v basketbalu pivotovat - otáčet se a činit úkroky s jednou nohou stále pevně na zemi. Pohyb a vytvoření prostoru pro přihrávku pak zůstává na jeho spoluhráčích. Zapomeň na házení v kolečku deseti lidí bez nutnosti vyvinout větší námahu. V tomto sportu hrají prim rychlost, taktické myšlení a herní přehled. Ve hře se často střídá útok a obrana. Průprava není nutná. Se vším, co je ke hře třeba, tě seznámí zkušení hráči.
       `,
        image: require("../assets/activities/14.jpg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 13
          );
        },
        capacity: 20,
        type: ActivityTypes.VOLNOCAS,
      },
      {
        id: 314,
        block: 3,
        title: "K sobě, k Tobě, k Bohu skrze NVC",
        location: "Třída 2, gymnázium",
        description: `Nenásilná komunikace (NVC) nabízí příležitost, prostřednictvím které máme možnost znovu objevovat spojení mezi sebou samými, druhými a Bohem samotným. Na workshopu budeš mít možnost v upřímnosti s otevřeným srdcem nahlédnout pod povrch běžných frází, slov a činů. Ústředními prvky bude práce s pocity a potřebami v kombinaci s naším tělem a pohybem.
       `,
        image: require("../assets/activities/nvc.jpeg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 14
          );
        },
        capacity: 24,
        type: ActivityTypes.VOLNOCAS,
      },
      {
        id: 400,
        block: 4,
        title: "Každý je povolán k tomu, aby mohl konat dobro",
        location: "Slovanský sál",
        description: `Povídání s inspirativním otcem, který z malé zapadlé vesničky vytvořil jedno z nejnavštěvovanějších poutních míst. Z tiché farnosti se stalo živé společenství a jeho dobré srdce pociťují až v daleké Indii. Co vše jej potkává na jeho cestě? Jak Duch Svatý působí v jeho životě a je vždy jednoduché Boží plány přijmout? Přijď a využij možnosti se zeptat na to, co tě zajímá a bál/a ses zeptat.
       `,
        image: require("../assets/activities/17.jpg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 15
          );
        },
        capacity: 140,
        type: ActivityTypes.PREDNASKA,
      },
      {
        id: 401,
        block: 4,
        title: "Mužská identita v 21. století",
        location: "Zimní sál",
        description: `Ve své přednášce se bude zabývat formovánim a kvalitou mužské identity. Budeme se dotýkat tématu kvalit a druhů mužské síly. Rovněž zabrousíme do oblasti muž křesťan.
       `,
        image: require("../assets/activities/men.jpeg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 16
          );
        },
        capacity: 100,
        type: ActivityTypes.PREDNASKA,
      },
      {
        id: 402,
        block: 4,
        title: "Víra v karanténě",
        location: "Kaple Stojanov",
        description: `Naše víra se stejně jako my dostala do karantény. Jak se změnilo prožívání křesťanství v čase covidu? Co nového jsme se naučili a naopak o co jsme přišli? A jak správně víru oživit, abychom nezůstali sami, ale žili víru společně? O tom všem bude řeč a o tom všem bude možné se společně pobavit. Zároveň bude krátce představen projekt Live 4G, který má být odpovědí na přesunutí víry do virtuálního prostoru.
       `,
        image: require("../assets/activities/26.jpg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 17
          );
        },
        capacity: 100,
        type: ActivityTypes.PREDNASKA,
      },
      {
        id: 411,
        block: 4,
        title: "Speed Dating",
        location: "Sklep gymnázia",
        description: `Jedinečná příležitost k seznámení v bezpečném prostředí mezi mladými nezadanými věřícími a zdarma. Pokud se rozhodneš Speed datingu zúčastnit, čeká tě seznámení naživo s patnácti účastníky opačného pohlaví :) Vždy máte jen několik málo minut na to, abyste se navzájem poznali, poté se muži přesunou k dalšímu stolu k jiné ženě. Oba si pak navzájem zhodnotíte, zda jste si padli do oka či ne. Jen pro zajímavost: rychlé rande vymyslel rabín Yaacov Deyo, který chtěl zvýšit počet židovských svateb. (Že z toho bude svatba, vám rozhodně neslibujeme.)
       `,
        image: require("../assets/activities/5.jpg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 0
          );
        },
        capacity: 30,
        type: ActivityTypes.VOLNOCAS,
      },
      {
        id: 412,
        block: 4,
        title: "Dobrovolnictví",
        location: "mimo areál",
        description: `V rámci dění letošního ročníku Absolventského Velehradu navážeme spolupráci a pokusíme se zpříjemnit páteční odpoledne lidem z domovů Vincentinum a Buchlovská na Velehradě, kde pečují o osoby se zdravotním postižením. Sraz před Stojanovem.
       `,
        image: require("../assets/activities/28.jpg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 0
          );
        },
        type: ActivityTypes.VOLNOCAS,
      },
      {
        id: 413,
        block: 4,
        title: "Smysluplné rozhovory",
        location: "Třída 1, gymnázium",
        description: `Smysluplné rozhovory jsou projektem propojující otevřené lidi, kteří se rádi baví a přemýšlí o hlubších tématech. Myšlenkou tohoto projektu je dát lidem příležitost znovu si povídat. Z očí do očí, upřímně a bez povrchnosti, protože za každou běžnou konverzací se zpravidla skrývají naše sny, bolesti, touhy i trápení. Připravte se na odpovědi, které v Tobě i v ostatních posluchačích vyvolají emoce. Protože jen takové nás přimějí opravdově se zamyslet nad našimi životy.
       `,
        image: require("../assets/activities/talk.jpeg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 10
          );
        },
        capacity: 12,
        type: ActivityTypes.VOLNOCAS,
      },
      {
        id: 414,
        block: 4,
        title: "Společná modlitba",
        location: "Kaple Stojanov",
        description: `Společná modlitba pro ty, jenž chtějí být s Kristem ve společenství`,
        image: require("../assets/activities/27.jpg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 0
          );
        },
        type: ActivityTypes.DUCHOVNI,
      },
      {
        id: 510,
        block: 5,
        title: "Koncert: Way to go",
        location: "Slovanský sál",
        description: `Pět mladých mužů, pět odlišných cest, které se však scházejí v jednu. Členy kapely Way to go nepojí pouze láska k hudbě, ale také touha skrze ni chválit Boha, v kterého a kterému věří. Tvorba této pop-rockové kapely je specifická četným užitím pánských vícehlasů, které podtrhává význam hlubokých textů. Jožka, František, Robin, Tom a Pavel chtějí každému z diváků předat maximální hudební, ale i duchovní zážitek.
`,
        image: require("../assets/activities/23.jpg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 18
          );
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
        image: require("../assets/activities/43.jpg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 19
          );
        },
        type: ActivityTypes.DUCHOVNI,
      },
      {
        id: 511,
        block: 5,
        title: "Táborák",
        location: "Zahrada Stojanov",
        description: `Večerní oheň, kytara a špekáčky nesmí chybět! Dojdi nasát atmosféru, zazpívat si a potkat se s ostatními po celodenním rušném programu.`,
        image: require("../assets/activities/26.jpg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 0
          );
        },
        type: ActivityTypes.VOLNOCAS,
      },
      {
        id: 512,
        block: 5,
        title: "Čajovna/vinárna",
        location: "Sklep gymnázia",
        description: `Pohodový večer s čajem, vínem a drobným občerstvením.`,
        image: require("../assets/activities/1.jpg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 0
          );
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
        image: require("../assets/activities/alone.jpeg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 20
          );
        },
        capacity: 100,
        type: ActivityTypes.PREDNASKA,
      },
      {
        id: 601,
        block: 6,
        title: "Na to jsi moc mladej",
        location: "Kaple Stojanov",
        description: `Kdy už budete mít věk na to, abyste se mohli starat o svět kolem sebe? Co staří dělají lépe, než mladí? A proč jsou to všechno nesmysly?`,
        image: require("../assets/activities/too-young.jpeg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 21
          );
        },
        capacity: 80,
        type: ActivityTypes.PREDNASKA,
      },
      {
        id: 602,
        block: 6,
        title: "Čekárna na život a nebo",
        location: "Kaple Stojanov",
        description: `V životě poměrně hodně času věnujeme naší minulosti nebo budoucnosti. Naše kalkulativní mysl je stále zaměstnána tím, co a jak bude nebo bylo, proč je to či ono. Neustále analyzuje. Přitom nic z toho není v našich rukou. Naopak. Bůh se zjevuje jako tvořivá přítomnost. Bůh je přítomnost. Tak i naše prožívání přítomnosti, tedy onen kontemplativní mód naší mysli, se může stávat způsobem jak tvořivě nakládat s naší životní zkušeností včetně osamocení a samoty.
       `,
        image: require("../assets/activities/waiting.jpeg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 22
          );
        },
        capacity: 80,
        type: ActivityTypes.PREDNASKA,
      },
      {
        id: 603,
        block: 6,
        title:
          'Děti z "konce" Ukrajiny - pomoc, pouto, dobrovolnictví, přátelství',
        location: "Sál Stojanov",
        description: `Jak se žije dětem v ústavní péči na Ukrajině? Jak lze pomoci? V čem spočívá dobrovolnická pomoc dětem s postižením? Příběh organizace Bodaj, která již několik let díky dobrovolníkům těmto dětem na Ukrajině pomáhá.
       `,
        image: require("../assets/activities/friendship.jpeg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 23
          );
        },
        capacity: 40,
        type: ActivityTypes.PREDNASKA,
      },
      {
        id: 607,
        block: 6,
        title: "Žena ve veřejné službě",
        location: "Třída 2, gymnázium",
        description: `Život každého z nás roste v rodině, v generacích, ale také v občanské společnosti. Stojí za to překonat vlastní uzavřenost, zaměření na individuální osobní život a vyvážit rodinné priority. Nebát se veřejného nasazení, přijmout službu potřebným. Osamělost křesťanské víry ve většinově nevěřící společnosti je někdy bolestná. Přesto křesťanské hodnoty dokážou pohnout světem, proměňují životy křesťanů i nevěřících.
       `,
        image: require("../assets/activities/woman.jpeg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 24
          );
        },
        capacity: 40,
        type: ActivityTypes.PREDNASKA,
      },
      {
        id: 604,
        block: 6,
        title: "Speed Dating",
        location: "Sklep gymnázia",
        description: `Jedinečná příležitost k seznámení v bezpečném prostředí mezi mladými nezadanými věřícími a zdarma. Pokud se rozhodneš Speed datingu zúčastnit, čeká tě seznámení naživo s patnácti účastníky opačného pohlaví :) Vždy máte jen několik málo minut na to, abyste se navzájem poznali, poté se muži přesunou k dalšímu stolu k jiné ženě. Oba si pak navzájem zhodnotíte, zda jste si padli do oka či ne. Jen pro zajímavost: rychlé rande vymyslel rabín Yaacov Deyo, který chtěl zvýšit počet židovských svateb. (Že z toho bude svatba, vám rozhodně neslibujeme.)
       `,
        image: require("../assets/activities/5.jpg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 0
          );
        },
        capacity: 30,
        type: ActivityTypes.VOLNOCAS,
      },
      {
        id: 605,
        block: 6,
        title: "Smysluplné rozhovory",
        location: "Třída 1, gymnázium",
        description: `Smysluplné rozhovory jsou projektem propojující otevřené lidi, kteří se rádi baví a přemýšlí o hlubších tématech. Myšlenkou tohoto projektu je dát lidem příležitost znovu si povídat. Z očí do očí, upřímně a bez povrchnosti, protože za každou běžnou konverzací se zpravidla skrývají naše sny, bolesti, touhy i trápení. Připravte se na odpovědi, které v Tobě i v ostatních posluchačích vyvolají emoce. Protože jen takové nás přimějí opravdově se zamyslet nad našimi životy.
       `,
        image: require("../assets/activities/rozhovory.jpeg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 10
          );
        },
        capacity: 12,
        type: ActivityTypes.VOLNOCAS,
      },
      {
        id: 606,
        block: 6,
        title: "Akční malba",
        location: "Sraz venku za VDCM",
        description: `Zkoušel jsi někdy malovat záchodovou štětkou, houbičkou na nádobí nebo ovocem? Pokud ne a rád by sis touto zkušeností prošel, máme tady aktivitu právě pro tebe. Provede tě jí zkušená lektorka, která má s touto technikou mnohaleté zkušenosti.
       `,
        image: require("../assets/activities/34.jpg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 25
          );
        },
        capacity: 10,
        type: ActivityTypes.VOLNOCAS,
      },
      {
        id: 608,
        block: 6,
        title: "Příprava na zpověď",
        location: "Kaple Gymnázium",
        description: `Vnímáš, že potřebuješ znovu obnovit vztah s Bohem a zajít si ke svátosti smíření, ale máš pocit, že se nedokážeš připravit? Nebo se chceš jen zastavit, ztišit a chvilku rozjímat?
       `,
        image: require("../assets/activities/8.jpg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 26
          );
        },
        type: ActivityTypes.DUCHOVNI,
      },
      {
        id: 700,
        block: 7,
        title: "Křesťanství a změna epochy",
        location: "Slovanský sál",
        description: `"Tato doba není jen epochou změn, nýbrž změnou epochy", tvrdí papež František. Sekularizace nezpůsobila konec náboženství, avšak přispěla k jeho proměně. Pokud chtějí církve odpovědět na výzvu této doby, musí projít hlubokou reformou nejprve v oblasti teologie a spirituality, následně v oblasti pastorace a institucionálních struktur. Důležitou součástí reformy je přechod od navyklého stylu pastorace a misie, od starosti pouze o vlastní věřící a o nárůst jejich počtu, k službě doprovázení lidí na duchovních cestách. Kontemplace a akce, samota i společenství, se musí vzájemně doplňovat.
       `,
        image: require("../assets/activities/cross.jpeg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 27
          );
        },
        capacity: 80,
        type: ActivityTypes.PREDNASKA,
      },
      {
        id: 701,
        block: 7,
        title:
          "Souvislost mezi učením Ježíše Nazaretského a moderní psychoterapii ACT",
        location: "Zimní sál",
        description: `Jak zvládat bolest a utrpení? Kdo jsem já a jak se mohu poznat? Jak objevit svůj potenciál (poznat své hřivny)? Jak mám o sebe pečovat?`,
        image: require("../assets/activities/cross2.jpeg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 29
          );
        },
        capacity: 80,
        type: ActivityTypes.PREDNASKA,
      },
      {
        id: 702,
        block: 7,
        title: "Křesťan a migrace - služba lidem na cestě",
        location: "Třída 1, gymnázium",
        description: `Jaký je život na cestě a v čem spočívá pomoc lidem, kteří v Evropě touží začít znovu? O tom se učíme již řadu let na tzv. Balkánské stezce i u nás, v České republice a rády se o naše zážitky podělíme. Dozvědět se můžete třeba jaký se na Balkánské stezce vaří čaj nebo proč si myslíme, že by křesťan neměl být k příchozím lhostejný.
       `,
        image: require("../assets/activities/47.jpg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 28
          );
        },
        capacity: 40,
        type: ActivityTypes.PREDNASKA,
      },
      {
        id: 703,
        block: 7,
        title: "Encyklika Laudato Si´",
        location: "Sál Stojanov",
        description: `Ekologická encyklika papeže Františka slaví letos šesté výročí vydání. Podíváme se na její východiska a obsah, kapitolu po kapitole - na pozadí fotografií, které ukazují krásu Božího stvoření a pocházejí hlavně ze skandinávské přírody, ale i z farní zahrady v Brně-Žebětíně.
       `,
        image: require("../assets/activities/nature.jpeg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 30
          );
        },
        capacity: 60,
        type: ActivityTypes.PREDNASKA,
      },
      {
        id: 704,
        block: 7,
        title: "Křesťanská meditace",
        location: "Kaple Stojanov",
        description: `Křesťanská modlitba v dějinách často k cestě na hlubinu využívala opakování slova či slov. Nechat se vést modlitebním slovem/větou vede k jednoduchosti a osvobozování se a odpočinku od vlastních myšlenek, nápadů, představ a obrazů. Může se stávat tzv. čirou modlitbou. Je jednoduchá, nikoli však snadná... Můžeme ji zkusit podle návodu benediktinského mnicha Johna Maina, inspirovaného Janem Kasiánem, Oblakem nevědění i Ježíšovou modlitbou.
       `,
        image: require("../assets/activities/43.jpg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) =>
              presenter.id === 31 || presenter.id === 32
          );
        },
        capacity: 60,
        type: ActivityTypes.PREDNASKA,
      },
      {
        id: 711,
        block: 7,
        title: "Krav Maga",
        location: "Sraz venku u baziliky",
        description: `Krav Maga patří mezi nejúčinnější sebeobranné systémy. Je používaná mnoha armádními a policejními jednotkami. Zároveň je pro svou jednoduchost oblíbená mezi lidmi, kteří chtějí zlepšit svou fyzičku, zvýšit sebevědomí a zároveň se chtějí naučit bránit se. Hodina a půl cvičení s naším hostem Honzou, který vede tréninky Krav Maga v Ostravě.
       `,
        image: require("../assets/activities/38.jpg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 33
          );
        },
        capacity: 30,
        type: ActivityTypes.VOLNOCAS,
      },
      {
        id: 713,
        block: 7,
        title: "Folklórní tance",
        location: "Sklep gymnázia",
        description: `Máš rád cimbál? A chtěl by ses naučit tance, které by sis u cimbálu mohl zatančit? Dáme ti možnost. Naši skvělí tanečníci tě provedou workshopem folklorních tanců, které využiješ například i večer ve vinárně.
       `,
        image: require("../assets/presenters/folklor.jpg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 34
          );
        },
        capacity: 40,
        type: ActivityTypes.VOLNOCAS,
      },
      {
        id: 714,
        block: 7,
        title: "Párová akrobacie",
        location: "Třída 3, gymnázium",
        description: `Párová akrobacie je úžasně komplexní a hravá seberozvojová aktivita, která se dá cvičit takřka kdekoliv a kdykoliv. "Báze" - tedy osoba, která je při cvičení v kontaktu se zemí, potřebuje jen podložku (bude zajštěno), "letkyním" postačí legíny a přiléhavější tričko. Cvičí se naboso. Kapacitu tohoto workshopu jsme omezili na 12 osob - budeme se párovat a střídat podle potřeby a zaměstnáme všechny pokročilosti. Náš zkušený instruktor se o všechno postará.
       `,
        image: require("../assets/activities/41.jpg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 35
          );
        },
        capacity: 12,
        type: ActivityTypes.VOLNOCAS,
      },
      {
        id: 715,
        block: 7,
        title: "Zapojení do života obce",
        location: "Třída 2, gymnázium",
        description: `Zajímáš se o dění ve společnosti, ve svém okolí, ve své obci? Chtěl bys být více aktivní a zapojit se do života obce a nevíš jak? Nebo víš jak, ale nevíš, jestli je to správná cesta a potřebuješ to s někým probrat?
       `,
        image: require("../assets/activities/community.jpeg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 21
          );
        },
        capacity: 20,
        type: ActivityTypes.VOLNOCAS,
      },
      {
        id: 716,
        block: 7,
        title: "Pointilismus",
        location: "Sraz venku za VDCM",
        description: `Pointillismus je technika malby, která kombinací malých, od sebe vzdálených bodů základních barev vytváří dojem složité barevnosti. Technika je založena na schopnostech vnímání oka a mysli, které míchají jednotlivé body do celé škály barev.
       `,
       image: require("../assets/activities/34.jpg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 0
          );
        },
        capacity: 24,
        type: ActivityTypes.VOLNOCAS,
      },
      {
        id: 800,
        block: 8,
        title: "Setkání regionů",
        location: "",
        description: `Letošní novinka! Příležitost potkat se a seznámit se všemi účastníky AV z tvého regionu. U zrodu tohoto programového bloku stála jednoduchá myšlenka. Chceme, aby Absolventský Velehrad neskončil nedělním odjezdem domů. Přáli bychom si, aby jeho myšlenka žila v jednotlivých regionech dál. To znamená, aby byla v rámci regionu možnost potkávat se k nejrůznějším aktivitám, sdílení, modlitbě právě v rámci naší skupiny absolventů, tak jako tady na Velehradě. 
A co konkrétně tě bude v rámci tohoto programu čekat? Potkáš se s dalšími účastníky AV, kteří třeba žijí jen nedaleko od tebe. Seznámíš se a něco společně během těch 90 minut zažijete. Jednotlivé aktivity se budou lišit region od regionu. Budou ti představeny možnosti, nebo třeba společně vymyslíte nové, jak a kde se dále po AVčku potkávat.
Jednotlivá setkání si pro vás připravili a chtějí s vámi prožít dobrovolníci žijící v daných regionech. `,
        image: require("../assets/activities/setkani-regionu.jpeg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 0
          );
        },
        type: ActivityTypes.VOLNOCAS,
      },
      {
        id: 910,
        block: 9,
        title: "Posezení u cimbálu",
        location: "Sklep gymnázia",
        description: `Pohodový večer můžeš zažít ve sklepě gymnázia. Nejen příznivci lidové hudby jistě ocení cimbálovou muziku Slačáci i lahodné víno přímo od vinaře.`,
        image: require("../assets/activities/1.jpg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 0
          );
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
       image: require("../assets/activities/43.jpg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 0
          );
        },
        type: ActivityTypes.DUCHOVNI,
      },
      {
        id: 911,
        block: 9,
        title: "Táborák",
        location: "Zahrada Stojanov",
        description: `Večerní oheň, kytara a špekáčky nesmí chybět! Dojdi nasát atmosféru, zazpívat si a potkat se s ostatními po celodenním rušném programu.`,
        image: require("../assets/activities/26.jpg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 0
          );
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
       image: require("../assets/activities/zivot.jpeg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 36
          );
        },
        capacity: 120,
        type: ActivityTypes.PREDNASKA,
      },
      {
        id: 1001,
        block: 10,
        title: "Duchovní cesta muža a ženy",
        location: "Zimní sál",
        description: `Ako si muž a žena môžu rozumieť, keď každý chce niečo iné, muž ženu, žena  muža. Tento známy aforizmus má v sebe istú múdrosť. Je to nielen o fyzickej, emočnej, psychickej rozdielnosti, ale aj o tom, čo sú ciele a zdroje v našich životoch. O vplyve výchovy a jej presah na krízy v manželstve a duchovnom rozmere toho všetkého na náš život. Prečo sú vtipy len o svokrách (tchýně) a nie o svokroch (tchán). Toho všetkého by sme sa spoločne mohli dotknúť v téme: Duchovná cesta muža a ženy.
       `,
       image: require("../assets/activities/path.jpeg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 37
          );
        },
        capacity: 120,
        type: ActivityTypes.PREDNASKA,
      },
      {
        id: 1002,
        block: 10,
        title: "Život není peříčko, ale stojí za to ho žít",
        location: "Sál Stojanov",
        description: `I když má člověk někdy pocit, že je život těžký, málo barevný a příjemný, nebo že je pro něj dokonce nesnesitelný a k neunesení, tak přesto má CENU ho žít. V přednášce bude řeč o tom, jak se postavit k životu čelem, jak najít smysl života a naději v nelehkých okamžicích života. Vše bude podepřeno příběhy lidí, kteří to nevzdali a chytili svůj život "za pačesy".
       `,
       image: require("../assets/activities/46.jpg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 38
          );
        },
        capacity: 80,
        type: ActivityTypes.PREDNASKA,
      },
      {
        id: 1003,
        block: 10,
        title: "Laudato si´ - péče o společný domov",
        location: "Třída 1, gymnázium",
        description: `Svět se blíží k šestému hromadnému vymírání. Příčinou jsou poprvé lidé. Papež František a mnozí další bijí na poplach vyzývají lidi ke změně. Co tedy děláme špatně a jak se k tomu můžeme postavit v našem každodenním životě?
       `,
       image: require("../assets/activities/home.jpeg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) => presenter.id === 39
          );
        },
        capacity: 40,
        type: ActivityTypes.PREDNASKA,
      },
      {
        id: 1004,
        block: 10,
        title:
          "Co si nevybojuješ v samotě, to ve společenství nedáš! Aneb Bez víry ani krok...",
        location: "Kaple Stojanov",
        description: `Přicházíme jako společenství, ve dvou, abychom nabídly náhled do života ve společenství, každodenní prožívání víry ve společenství i v samotě. Samota a společenství se prolínají také ve službě potřebným, přednáška bude spojená i se svědectvími ze života seniorů, o které se staráme. Nebude chybět ani krátké Lectio divina inspirované úryvkem letošního AV. Chceme tak společně s těmi, kteří k nám přijdou vytvořit neopakovatelnou atmosféru společenství a prostor pro sdílení.
       `,
       image: require("../assets/activities/praying.jpeg"),
        get presenter() {
          return staticData.data.presenters.filter(
            (presenter: PresenterData) =>
              presenter.id === 40 || presenter.id === 41
          );
        },
        capacity: 40,
        type: ActivityTypes.PREDNASKA,
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
        text: ` - Stojanov je otevřen 6:40 - 22:00, VDCM v čase 7:30 - 22:00 (zavřeno během bloků a mší)
 - Noční otevírací doba
    - Vchod VDCM bude uzavřen ve 22:00, od této doby budeme dveře otevírat každou půl hodinu až do 2 hod (tzn. ve 22:30, 23:00, 23:30, 00:00, 00:30, 1:00, 1:30, 2:00),
    - Ubytovaní na Stojanově dostanou klíčky, na kterých je i klíč od hlavního vchodu.`,
      },
      {
        type: TextTypes.NADPIS,
        text: `Jak se chovat na ubytování`,
      },
      {
        type: TextTypes.TEXT,
        text: ` - Ve vnitřních prostorách prosíme nos ochranné prostředky dýchacích cest - respirátory nebo nano roušky splňující příslušné normy (např. FFP2, KN 95)
 - Prosíme o dodržování nočního klidu na ubytování od 22 do 6 hodin.
 - Všechny prostory setkání jsou nekuřácké.
 - V pokojích na Stojanově i na VDCM se prosíme přezouvej.
 - Klíče od pokojů na Stojanově si nech po dobu AV u sebe. Před odjezdem je však vrať na recepci Stojanov!
 - V neděli prosíme o vyklizení pokojů na Stojanově i VDCM do 12:30 hodin (do závěrečné mše). Věci si můžeš nechat v sále na Stojanově.`,
      },
      {
        type: TextTypes.NADPIS,
        text: `Další organizační věci`,
      },
      {
        type: TextTypes.TEXT,
        text: ` - Náramku na ruce se nezbavuj (ať se dostaneš na program nebo do jídelny).
 - Registrace na přednášky a workshopy probíhá online - na program daného dne vždy ráno od 6:45 na adrese registrace.absolventskyvelehrad.cz.
 - V případě zdravotních potíží kontaktuj naši zdravotnici Alžbětu Podolovou (telefon +420 774 344 542)`,
      },
      {
        type: TextTypes.NADPIS,
        text: `Kde hledat informace`,
      },
      {
        type: TextTypes.TEXT,
        text: ` - Vše důležité se dozvíš na recepci na Stojanově (a na nástěnkách u recepce)
 - můžeš si zde zapůjčit sportovní náčiní, deky či společenské hry
 - budou zde aktuální informace o zpovědích, duchovních rozhovorech a pouti
 - zde ti také odpoví na veškeré dotazy (nebo zjistí odpověď).
 - Vše důležité shrneme v ohláškách po každé mši. `,
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
    modlitby: {
      morning: [
        {
          type: TextTypes.BIG_NADPIS,
          text: `Čtvrtek 19. 8. 2021`,
        },
        {
          type: TextTypes.NADPIS,
          text: `Téma: Samota/pusté místo`,
        },
        {
          type: TextTypes.TEXT,
          text: `  Když to Ježíš uslyšel, odplul lodí na pusté místo, aby byl sám; ale zástupy o tom uslyšely a pěšky šly z měst za ním. Když vystoupil, uviděl velký zástup a bylo mu jich líto. I uzdravoval jejich nemocné.
  Když nastal večer, přistoupili k němu učedníci a řekli: „Toto místo je pusté a je už pozdní hodina. Propusť zástupy, ať jdou do vesnic koupit si jídlo.“ Ale Ježíš jim řekl: „Nemusejí odcházet, dejte vy jim jíst!“ Oni odpověděli: „Máme tu jen pět chlebů a dvě ryby." On však řekl: „Přineste je sem!“ Poručil, aby se zástupy rozsadily po trávě. Potom vzal těch pět chlebů a dvě ryby, vzhlédl k nebi, vzdal díky, lámal chleby a dával učedníkům a učedníci zástupům. I jedli všichni a nasytili se; a sebrali nalámaných chlebů, které zbyly, dvanáct plných košů. A jedlo tam na pět tisíc mužů kromě žen a dětí. (Mt 14, 13-21)`,
        },
        {
          type: TextTypes.NADPIS,
          text: `Milost:`,
        },
        {
          type: TextTypes.TEXT,
          text: ` Prosím o milost nechat se proměnit Kristem, aby v mém zpustošeném srdci mohl zavládnout pokoj a vzrůst dobré semeno.`,
        },
        {
          type: TextTypes.NADPIS,
          text: `Meditace:`,
        },
        {
          type: TextTypes.TEXT,
          text: `  1. Abych mohl vidět, vnímat, prožívat události dne, jeho radosti, starosti i smutek potřebuji trávit chvíle o samotě. Ježíši vstup do samoty mého srdce, do mé beznaděje a proměň ji v úrodu pokoje a radosti.
  2. Představ si, jak se asi Ježíš cítil, když se doslechl o smrti Jana Křtitele, chtěl být sám a přesto byl kolem něj dav lidí, nad kterými se slitoval. Myslíš, že ti nedokáže porozumět, když prožíváš smutek a samotu, i když jsi obklopen lidmi?
  3. Dokážu se pustit věcí, které odvádějí mou pozornost a jít za Ježíšem s touhou mu naslouchat a být uzdravován, i když vyhlídky jsou nejisté? 
  4. Dovolím Ježíši, aby rozmnožil to málo, co si sám/sama nesu?`,
        },
        {
          type: TextTypes.NADPIS,
          text: `Pamatuj:`,
        },
        {
          type: TextTypes.TEXT,
          text: `  1. Chvíle ticha a samoty jsou důležité.
  2. Během těchto chvil se může Ježíš dotýkat mého zpustošeného srdce a proměňovat ho v zahradu.
  3. Bůh je dobrý a chce nám dát víc než si dokážeme představit.`,
        },
        {
          type: TextTypes.NADPIS,
          text: `Úkol: `,
        },
        {
          type: TextTypes.TEXT,
          text: `Pokus se dnes strávit aspoň chvíli v tichu, věnovat Bohu chvíli ticha a snažit se vnímat, co ti Bůh o tobě a tobě chce říct nebo ti ukázat.`,
        },
        {
          type: TextTypes.BIG_NADPIS,
          text: `Pátek 20. 8. 2021`,
        },
        {
          type: TextTypes.NADPIS,
          text: `Téma: Pochyby/ důvěra`,
        },
        {
          type: TextTypes.TEXT,
          text: `Hned na to přiměl Ježíš učedníky, aby vstoupili na loď a jeli před ním na druhý břeh, než propustí zástupy. Když je propustil, vystoupil na horu, aby se o samotě modlil. Když nastal večer, byl tam sám. Loď byla daleko od země a vlny ji zmáhaly, protože vítr vál proti ní. K ránu šel k nim, kráčeje po moři.  Když ho učedníci viděli kráčet po moři, vyděsili se, že je to přízrak, a křičeli strachem. Ježíš na ně hned promluvil a řekl jim: „Vzchopte se, já jsem to, nebojte se!“
          Petr mu odpověděl: „Pane, jsi-li to ty, poruč mi, ať přijdu k tobě po vodách!“ A on řekl: „Pojď!“ Petr vystoupil z lodi, vykročil na vodu a šel k Ježíšovi. Ale když viděl, jaký je vítr, přepadl ho strach, začal tonout a vykřikl: „Pane, zachraň mne!“ Ježíš hned vztáhl ruku, uchopil ho a řekl mu: „Ty malověrný, proč jsi pochyboval?“
          Když vstoupil na loď, vítr se utišil. Ti, kdo byli na lodi, klaněli se mu a říkali: „Jistě jsi Boží Syn.“ (Mt 14, 22-33)`,
        },
        {
          type: TextTypes.NADPIS,
          text: `Milost`,
        },
        {
          type: TextTypes.TEXT,
          text: `Prosím o milost důvěřovat Ti, když mě chceš vést do neznáma.`,
        },
        {
          type: TextTypes.NADPIS,
          text: `Meditace`,
        },
        {
          type: TextTypes.TEXT,
          text: `  1. Ježíš potřebuje být sám a věnovat čas modlitbě. Potřebuje mít vztah s Otcem. Jak jsem na tom já, naslouchám svým vnitřním touhám?
  2. Zkus si představ tu situaci na moři. Vyděšené učedníky, které Ježíš uklidňuje. Zaměř se na Petra, co ho to napadlo? Co se mu asi honilo hlavou? Jakou musel mít důvěru v Ježíše, že dokázal vykročit? S upřeným pohledem na Boha se situace z vnějšího pohledu nemění, je pořád stejně šílená, ale Ježíš proměňuje/prohlubuje naši důvěru, náš pohled se mění. Byl bych schopen vykročit z lodi, já sám? Kým je pro mě Ježíš?
  3. Co všechno chci a potřebuju mít pod kontrolou, co mě zneklidňuje? Ztrácím důvěrů, když se situace, do které jsem se rozhodl vkročit, komplikuje? `,
        },
        {
          type: TextTypes.NADPIS,
          text: `Pamatuj`,
        },
        {
          type: TextTypes.TEXT,
          text: `  1. I učedníci, i když Ježíšovi byli blízko, zažili spoustu zázraků, tak pochybovali. Také se museli učit důvěřovat Ježíši v maličkostech i ve velkých věcech. Nejsi sám, kdo selhává.
  2. Vždy se můžeš vrátit a zavolat na Ježíše, zachraň mě. On tě nechce nechat topit.`,
        },
        {
          type: TextTypes.NADPIS,
          text: `Úkol`,
        },
        {
          type: TextTypes.TEXT,
          text: `Pokus se dnes po celý den být „teď a tady“. Zkus se zaměřit na to, jak reaguješ na věci, které se během dne objeví a všímat si svých pocitů. Možná si dokážeš všimnout, co odvádí tvou pozornost od toho, co se děje kolem nebo uvnitř tebe.`,
        },
        {
          type: TextTypes.BIG_NADPIS,
          text: `Sobota: 21. 8. 2021`,
        },
        {
          type: TextTypes.NADPIS,
          text: `Téma: Milosrdenství`,
        },
        {
          type: TextTypes.TEXT,
          text: `Když se dostali na druhý břeh, přistáli u Genezaretu. Lidé z toho místa ho poznali a vzkázali do celého okolí. Přinášeli mu všechny nemocné a prosili ho, aby se směli aspoň dotknout třásní jeho roucha. A kdo se dotkli, byli uzdraveni. (Mt 14, 34-36)`,
        }, {
          type: TextTypes.NADPIS,
          text: `Milost`,
        },
        {
          type: TextTypes.TEXT,
          text: `Prosím o milost zakoušet ve své slabosti Boží milosrdenství.`,
        }, {
          type: TextTypes.NADPIS,
          text: `Meditace`,
        },
        {
          type: TextTypes.TEXT,
          text: ` 1. Proč lidé tak toužili vidět Ježíše? Kvůli jeho skutkům? Byl pro ně senzací nebo mu opravdu ve své bídě, nemocech věřili, že jejich situaci může proměnit? Byl jejich poslední nadějí?
  2. Byl bych schopen sebrat odvahu, zeptat se Ježíše a dotknout se ho? Nechat se obmýt jeho milosrdenstvím a láskou? Ať se cítím jakkoliv nehodně kvůli svým slabostem, hříchům, protože nejsem dost výkonný, dost dobrý dost... je to překážka pro mě, ale ne pro Boha, jemu nic nebrání, aby se ke mně sklonil. Stejně jako Mu nebránilo sklonit se k těm nejnuznějším z nuzných, uzdravovat malomocné. Často tím, kdo Bohu brání, jsem já sám. 
  3. Nejsem to právě já, kdo se rozhodne nepřijat Ježíšovo nabízené milosrdenství buď z pýchy nebo jiných důvodů? Nezůstávám občas ve svém trápení schválně, protože mě druzí politují, protože pochybuju o Boží dobrotě, protože se bojím, že Bůh bude chtít něco zpět?`,
        }, {
          type: TextTypes.NADPIS,
          text: `Pamatuj`,
        },
        {
          type: TextTypes.TEXT,
          text: `1. Vždycky jsi Boha hoden.
  2. Nic tě neodloučí od Boží lásky. Ani tvoje slabosti, ani hřích.
  3. Stačí se s důvěrou obrátit ke Kristu a dotknout se ho.`,
        }, {
          type: TextTypes.NADPIS,
          text: `Úkol`,
        },
        {
          type: TextTypes.TEXT,
          text: `Zkus si uvědomit svoje slabosti, hříchy, situace, které se ti zdají nezměnitelné a nad tvoje síly a pokus se do těchto věcí Ježíše pozvat. Rozhodni se udělat krok k němu.`,
        },
        {
          type: TextTypes.BIG_NADPIS,
          text: `Neděle 22. 8. 2021`,
        },
        {
          type: TextTypes.NADPIS,
          text: `Téma: Věrnost`,
        },
        {
          type: TextTypes.TEXT,
          text: `Mnoho z Ježíšových učedníků řeklo: „To je tvrdá řeč! Kdopak to má poslouchat?“ Ježíš věděl sám od sebe, že jeho učedníci na to reptají, a proto jim řekl: „Nad tím se pohoršujete? Co teprve, až uvidíte Syna člověka, jak vystupuje tam, kde byl dříve? Co dává život, je duch, tělo nic neznamená. Slova, která jsem vám mluvil, jsou duch a jsou život. Ale jsou mezi vámi někteří, kdo nevěří.“ Ježíš totiž věděl od začátku, kdo jsou ti, kdo nevěří, a kdo je ten, který ho zradí. A dodal: „Proto jsem vám říkal, že nikdo ke mně nemůže přijít, není-li mu to dáno od Otce.“ Proto mnoho z jeho učedníků odešlo a už s ním nechodili. Ježíš tedy řekl Dvanácti: „I vy chcete odejít?“ Šimon Petr mu odpověděl: „Pane, ke komu půjdeme? Ty máš slova věčného života, a my jsme uvěřili a poznali, že ty jsi ten Svatý Boží.“ (J 6, 60-69)`,
        }, {
          type: TextTypes.NADPIS,
          text: `Milost`,
        },
        {
          type: TextTypes.TEXT,
          text: `Prosím o milost zůstat věrný Ježíši, který dává věčný život.`,
        }, {
          type: TextTypes.NADPIS,
          text: `Meditace`,
        },
        {
          type: TextTypes.TEXT,
          text: `1. Pomoz mi probudit otupělé a zatvrzelé srdce, otevři moje oči a uši, ať vidím a slyším. A moje srdce pochopí, co mi chceš říct. 
  2. Jak reaguji na Tvoje slovo? Nejsou některá tvá slova pro mě moc tvrdá, protože zjevují pravdu, kterou občas nechci slyšet a vidět a usvědčují mě z mých slabostí a toho, že nechci sklonit hlavu a uznat, že jsem si před ostatními nasadil masku? Byl bych tě schopný odmítnout kvůli zatvrzelosti svého srdce, kvůli svojí pýše?
  3. Duchu svatý obnov můj život a srdce, abych poznal, kde je tvoje pravda a dej mi pokorné srdce, abych dokázal uznat svoje chyby.`,
        }, {
          type: TextTypes.NADPIS,
          text: `Pamatuj`,
        },
        {
          type: TextTypes.TEXT,
          text: `  1. Ke komu jinému bych šel, když jenom Ježíš mi může dát život.
  2. Pýcha nám dává klapky před oči a zatvrzuje srdce.
  3. Ježíš mě nechce nechat odejít, jsem pro něho drahý, nechce mě ztratit. Je to o mém rozhodnutí.`,
        }, {
          type: TextTypes.NADPIS,
          text: `Úkol`,
        },
        {
          type: TextTypes.TEXT,
          text: `Pokus se dnes vystoupit ze své komfortní zóny. Zkus si uvědomit, ve kterých oblastech svého života bojuješ s pýchou a rozhodni se v těch situacích pokořovat. Spolkni odpověď, že ty víš všechno, pomož tam, kde bys ohrnul nos. `,
        },
      ],
      magis: [
        {
          type: TextTypes.BIG_NADPIS,
          text: `MAGIS CIRCLE`
        },
        {
          type: TextTypes.TEXT,
          text: `
  každý večer (20:00 – 20:30)

  Magis Circle je způsob reflexe dne ve skupině, vycházející z ignaciánského Examenu. Společné sdílíme uplynulý den v malé skupince, jeden mluví, ostatní pouze pozorně poslouchají. Začneme úvodní modlitbou, následuje chvíle ticha a po ní čtyři kola sdílení. Před každým kolem je dobré si znovu přečíst otázky k němu.`,
        },
        {
          type: TextTypes.NADPIS,
          text: `Krok 1: Chvilka ztišení`,
        },
        {
          type: TextTypes.TEXT,
          text: `Během chvíle ticha se ohlédneme zpět, abychom si všimli nejdůležitějších okamžiků uplynulého dne. Připomeneme si okamžiky radosti, smutku, těžkostí nebo překvapení, zejména si ale připomeneme, za co jsme dnes vděční.`,
        }, {
          type: TextTypes.NADPIS,
          text: `Krok 2: Moje já`,
        },
        {
          type: TextTypes.TEXT,
          text: `Začínáme sdílet jednoduché myšlenky a dojmy. Jaký byl můj den? Co na něm bylo nejzajímavější? Co se mě nejvíce dotklo (ať už pozitivně, nebo negativně)?`,
        }, {
          type: TextTypes.NADPIS,
          text: `Krok 3: Já a Boží slovo`,
        },
        {
          type: TextTypes.TEXT,
          text: `Pozn.: Na prvním Magis circle ve čtvrtek večer se tento krok přeskakuje.
  Na co ze Slova na den jsme si během dne vzpomněli, co nám utkvělo v hlavě a k čemu jsme se nejvíce vraceli? Jak se to promítlo do našeho dne, jak to v nás pracovalo a jak se projevilo v našem vztahu k ostatním? V tomto kroku si uvědomujeme souvislost mezi Božím slovem a naším každodenním životem. Sdílíme své dojmy a případné překážky v nalezení Božího působení v uplynulém dni, v aktivitách a vztazích.`,
        },
        {
          type: TextTypes.NADPIS,
          text: `Krok 4: Já a ostatní`,
        },
        {
          type: TextTypes.TEXT,
          text: `Nyní se můžeme vyjádřit k tomu, co řekli ostatní. Jak se nás to dotklo, jaké myšlenky to v nás vzbudilo, jak nás to ovlivnilo?
  Můžeme případně také dodat něco k tomu, co už jsme řekli. Cílem je všímat si toho, jak působíme na ostatní a jak oni působí na nás. Cílem není rozpoutat diskuzi a snažit se přesvědčit ostatní o svém názoru.`,
        },
        {
          type: TextTypes.NADPIS,
          text: `Krok 5: Závěr`,
        },
        {
          type: TextTypes.TEXT,
          text: `Pokusme se shrnout své pocity do jednoho slova nebo krátké věty. Tímto slovem symbolicky uzavíráme Magis circle.
  Magis Circle zakončíme modlitbou Páně nebo písní.`,
        },
      ],
      help: [
        {
          type: TextTypes.BIG_NADPIS,
          text: `Způsob, jak rozjímat slovo na den: Lectio divina`,
        },
        {
          type: TextTypes.TEXT,
          text: `Pokud chceš sám/a nebo ve skupince rozjímat o textu Písma, můžeš použít metodu Lectio divina.`,
        },
        {
          type: TextTypes.NADPIS,
          text: `1) Vzývání Ducha svatého`,
        },
        {
          type: TextTypes.TEXT,
          text: `Uvědomíme si ve chvilce ticha Boží přítomnost mezi námi a v nás. Pak vzýváme vlastními slovy nebo uvedenou modlitbou Ducha svatého, aby nás celou modlitbou provázel. 
    Modlitba k Duchu svatému
    Bože, který oživuješ, chci se vystavit působení Tvého slova. 
    Otevři mé oči a uši, abych Tvému slovu rozuměl/a. 
    Otevři mé srdce, aby se mne Tvé slovo dotklo. 
    Otevři mé ruce, aby Tvé slovo bylo pro ostatní poznatelné. 
    Pro toto všechno si vyprošuji Tvého posilujícího Ducha. 
          `,
        },
        {
          type: TextTypes.NADPIS,
          text: `2) Lectio (četba)`,
        },
        {
          type: TextTypes.TEXT,
          text: `Přečteme si text. Pak si necháme chvíli času na to, abychom si text „představili“ jako vnější pozorovatelé. Všímáme si postav, základních slov, myšlenek, místa, na kterém se vše odehrává apod. 
  Můžeme sem vložit i četbu níže uvedeného impulzu ke dni. Záleží na tom, jestli nám v modlitbě spíše pomůže, nebo ne. Není nutné z něj vycházet.`,
        },
        {
          type: TextTypes.NADPIS,
          text: `3) Meditatio (meditace nad textem)`,
        },
        {
          type: TextTypes.TEXT,
          text: `Tentokrát jde o to, abychom se ptali Pána, co daným textem chce říct právě nám, právě teď a právě tam, kde jsme. Je v textu nějaké slovo, které mi zaznělo zvlášť silně? Je tam něco, co mě přitahuje nebo naopak „dráždí“? Proč? Nacházím se v textu? Ztotožňuji se s některou z jeho postav? Nebo vnímám jako svou jednu z myšlenek v textu? Jakou a proč? `,
        },
        {
          type: TextTypes.NADPIS,
          text: `4) Oratio (modlitba)`,
        },
        {
          type: TextTypes.TEXT,
          text: `Děkujeme Bohu za darované slovo, chválíme ho za to, co nám dal textem pochopit a zakusit, nebo ho prosíme o něco, co jsme si skrze text uvědomili jako potřebné.`,
        },
        {
          type: TextTypes.NADPIS,
          text: `5) Contemplatio (rozjímání)`,
        },
        {
          type: TextTypes.TEXT,
          text: `Ztišíme se a dovolíme po všem, co jsme si uvědomili nebo si navzájem řekli, aby se nás Bůh dotýkal.`,
        },
        {
          type: TextTypes.NADPIS,
          text: `6) Actio (konání – život)`,
        },
        {
          type: TextTypes.TEXT,
          text: `Můžeme vyslovit předsevzetí, k němuž nás povzbudila rozjímavá četba Písma. Vše můžeme shrnout do hesla, abychom si ho v průběhu dne mohli zpřítomňovat.`,
        },
        {
          type: TextTypes.BIG_NADPIS,
          text: `Examen – zpytování svědomí (možnost večerní individuální modlitby)`,
        },
        {
          type: TextTypes.TEXT,
          text: `Jestli z nějakého důvodu nejsi v modlitební a sdílecí skupince Magis Circle, můžeš se večer modlit Examen (zpytování svědomí). 
  Zpytování svědomí si většinou spojujeme se sumírováním svých prohřešků. Svatý Ignác tím ale myslí něco širšího. Svědomí je hlas v nás, ve kterém je přítomen Bůh. Místo v nás, kde k nám Bůh může promlouvat. Podstatou modlitby zpytování svědomí je podívat se, kde v uplynulém dni jsem naslouchal/a Božímu hlasu, všímat si, jestli v tom, co jsem zažíval/a, ke mně promlouval Bůh. Objevit, že Bůh je v mém životě. 
  Někdy se nám Bůh zdá být více a jindy méně skrytý. Někdy ho naše srdce vnímá více a jindy méně. Všechna díla mají v sobě otisk svého Stvořitele. Examen nám může pomoci k tomu, abychom své srdce lépe poznali a Boha lépe nacházeli ve všech událostech svého života. `,
        },
        {
          type: TextTypes.NADPIS,
          text: `1. krok: Prosba o světlo`,
        },
        {
          type: TextTypes.TEXT,
          text: ` - Uvědomím si, že jsem v Boží přítomnosti.
 - Prosím Boha, aby mne vedl touto modlitbou a pomohl mi porozumět tomu, co dnešní den přinesl.`,
        },
        {
          type: TextTypes.NADPIS,
          text: `2. krok: Vděčnost`,
        },
        {
          type: TextTypes.TEXT,
          text: ` - Zpětně procházím svůj den od probuzení až do této chvíle.
 - Rozpomínám se na vše dobré, co se dnes stalo.
 - Děkuji Bohu, který mi skrze to vše připomíná, jak mu na mně záleží.`,
        },
        {
          type: TextTypes.NADPIS,
          text: `3. krok: Reflexe dne `,
        },
        {
          type: TextTypes.TEXT,
          text: ` - Za co z toho všeho cítím největší vděčnost? 
 - Která chvíle byla mým setkáním s Bohem, kdy mi byl Bůh blízko? 
 - Mohu o tomto okamžiku rozmlouvat s Bohem. 
 - Vede mne skrze to někam?
 - Co mi dnes naopak život nejvíc bralo? 
 - Kdy mi bylo těžko, kdy na mne doléhal smutek a pocit odtrženosti od sebe sama i od Boha? 
 - Svěřuji to Bohu a prosím, aby i do toho vstoupil.`,
        },
        {
          type: TextTypes.NADPIS,
          text: `4. krok: Prosba o odpuštění `,
        },
        {
          type: TextTypes.TEXT,
          text: `Mám něco, za co chci říci „promiň“? Pokud ano, svěřím to Bohu. `,
        },
        {
          type: TextTypes.NADPIS,
          text: `5. krok: Příprava na zítřek`,
        },
        {
          type: TextTypes.TEXT,
          text: `Co mě zítra čeká? O co prosím pro zítřejší den?`,
        },
        {
          type: TextTypes.TEXT,
          text: `Čtvrthodinu Examenu zakončíme modlitbou Páně nebo písní.`,
        },
      ],
    },
    duchovni: {
      general: [
        {
          type: TextTypes.BIG_NADPIS,
          text: `Informace`
        },
        {
          type: TextTypes.TEXT,
          text: ` Celým setkáním nás bude provázet 14. kapitola Matoušova evangelia, ale především Mt 14, 13-36. Každý den bude protkaný linkou dané pasáže z Bible. Abychom si texty mohli více zažít, budou se objevovat i při společné ranní modlitbě, jejíž moderovaná část bude přecházet v možnost individuálního rozjímání. 
  
  Níže v této brožuře nalezneš jak jednotlivé úryvky, tak body k rozjímání i metody/tipy, které by ti mohly k ponoření do modlitby/vztahu s Bohem pomoci.
  `,
        },
        {
          type: TextTypes.TEXT,
          text: ` Společně budeme také prožívat mše svaté, chybět nebudou ani ranní modlitby a o duchovní program bude postaráno i večer. Doprovázet nás budou kněží Jan Pacner z Brna a Jan Regner z Olomouce. S nimi i dalšími kněžími, se můžeš setkat také při svátosti smíření či duchovních rozhovorech. K dispozici k rozhovorům ti budou i další zasvěcené osoby, všechny poznáš podle symbolu naslouchajícího ucha. Když je potkáš a budeš mít něco na srdci, neboj se je oslovit. `,
        },
      ],
      zpoved: [
        {
          type: TextTypes.BIG_NADPIS,
          text: `Zpovědi`
        },
        {
          type: TextTypes.TEXT,
          text: `Po celou dobu setkání bude možnost přijmout svátost smíření buď 
 - ve vyhrazených časech (čt 21:00-23:00, pá 12:30-14:00, pá během chval 20:30 -22:00, so 12:30-14:00, so během modliteb se zpěvy z Taizé 20:30 – 22:00), 
 - vždy půl hodiny před začátkem mše svaté v bazilice (pá, so, ne) 
 - nebo i mimo ně po domluvě s knězem.
Bližší informace o místě zpovědí a duchovních rozhovorech na daný den dostaneš na recepci Stojanov.
  
Ke ztišení a přípravě na svátost smíření budou také sloužit dva programy v dopoledních blocích jak v pátek, tak v sobotu (vždy 10:00 – 11:30). `,
        },
      ],
      prayers: [
        {
          type: TextTypes.BIG_NADPIS,
          text: `Chvály`
        },
        {
          type: TextTypes.TEXT,
          text: `Pokud rád/a chválíš Pána hudbou a zpěvem, neměly by ti uniknout páteční večerní chvály vedené kapelou z Veselí nad Moravou nebo sobotní večerní modlitby se zpěvy z Taizé. 

  Během pátečního večera chval i sobotní modlitby se zpěvy z Taizé ti budou k dispozici „modlitebníci”, kteří budou sloužit přímluvnou modlitbou. Další možnost přímluvné modlitby bude v sobotu od 12:30 do 14:00 v kapli Stojanova.
        
  V průběhu AV nám pro ztišení budou sloužit kaple na Stojanově a přístupná bude také kaple na gymnáziu. Vzhledem k tomu, že ruchu bude všude dost, využijte možnost se ztišit před Pánem při tichých adoracích. Ta první ve čtvrtek večer bude uvedena pouze krátkým slovem, které by nás mělo propojit s jednou cestou naší poutě, a to cestou samoty. Tento impuls necháme vyznít do ticha. Další možnost krátké adorace bude v pátek po chvalách nebo v sobotu během modliteb se zpěvy Taizé. K soukromé modlitbě můžete využít kapli na Stojanově i na Gymnáziu jak během dne, tak večer.`,
        },
      ],
      pout: [
        {
          type: TextTypes.BIG_NADPIS,
          text: `Pouť AV21 na Velehradu`
        },
        {
          type: TextTypes.TEXT,
          text: `Připoj se k závěrečné části poutě ze Soluně na Velehrad. Vydej se jednou nebo i všemi ze tří cest, cestou Radosti, společenství či samoty. Tři cesty, ale jen jeden cíl - Velehrad.
  `,
        },
        {
          type: TextTypes.TEXT,
          text: `Na naší sdílené online pouti, která začala v době postní, kolem 30ti poutníků v 53 etapách zdolalo 1040km. Ze Soluně jsme tak ve stopách sv. Cyrila a Metoděje přišli až na Velehrad.
          `
        },
        {
          type: TextTypes.TEXT,
          text: `Tímto ale pouť nekončí. Bude pokračovat v průběhu celého našeho setkání. Cíl zůstane stejný - Velehrad. Povedou k němu 3 cesty. Cesta samoty, společenství a radosti. 
          
Každá cesta bude vycházet od kříže z okolí Velehradu symbolicky od skupiny poutních míst, které byly cílem jednotlivých etap naší společné online pouti. Chceme tak propojit všechna tato místa a poutě s naším společným cílem - Velehradem. A také, a to je nejdůležitější, chceme se právě i prostřednictvím putování přiblížit k našemu společnému cíli - k Bohu.

Tak neváhej a vyraž. `
        },
        {
          type: TextTypes.NADPIS,
          text: `Co mám udělat předtím než vyrazím na pouť? `
        },
        {
          type: TextTypes.TEXT,
          text: ` Podívej se do mapy. Zvol si jeden ze tří křížů a vydej se k němu. Zde bude začínat tvá pouť. Máš pak dvě možnosti. Buď se vydáš od tohoto kříže k dalšímu a následně třetímu a zakončíš pak svůj poutní okruh na Velehradě (zde návrh okruhu). Nebo se od kříže vydáš přímo na Velehrad. Projdeš tak jednu ze tří poutních cest. Ty ostatní můžeš projít někdy jindy, či vůbec. Volba je na Tobě.`
        },
        {
          type: TextTypes.NADPIS,
          text: `Bude mě něco čekat u křížů, které označují začátek poutě?`
        },
        {
          type: TextTypes.TEXT,
          text: ` Ano, u každého kříže najdeš podněty k zamyšlení, které se vztahují k tématu jedné z cest - samota, společenství a radost. Tyto podněty si v klidu pročti a v průběhu své poutě pak nad nimi můžeš rozjímat. V poutní knize také najdeš část poutních míst, křížů a Božích muk, ke kterým jsme putovali v průběhu naší sdílené online pouti. 
  Také zde najdeš barevný provázek a speciální pravítko. Z něj si ustřihni takovou délku která dle pravítka odpovídá vzdálenosti tvého bydliště a Velehradu. Provázek si ponechej, využiješ jej na konci své pouti. U každého kříže najdeš provázek jiné barvy, ustřihni si tedy vždy nový. `
        },
        {
          type: TextTypes.NADPIS,
          text: `Kde je cíl pouti? `
        },
        {
          type: TextTypes.TEXT,
          text: `Cíl pouti se nachází v kapli na Stojanově. Tam by měla tvá pouť končit. V kapli najdeš mapu České republiky. Na této mapě jsou již propojená jednotlivá místa naší virtuální pouti s Velehradem. I Ty zde zaznamenej svou pouť. Vezmi si jednu špendlíkovou vlaječku. Napiš na ni své jméno a zapíchni ji do mapy do místa, odkud jsi přijel/a. K této vlaječce přivaž provázek, který sis ustřihl/a u kříže na začátku své poutní cesty. Pokud máš víc než jeden provázek, provázky propleť. Provázek veď a upevni až k Velehradu. Symbolicky tak propojíme celou naši republiku s místem našeho setkání, a světci, kteří přinesli do našich zemí křesťanskou nauku a probudili u nás víru.`
        },
        {
          type: TextTypes.NADPIS,
          text: `Co mě čeká na závěr? `
        },
        {
          type: TextTypes.TEXT,
          text: `Jeden z našich letošních cílů je, aby naše setkání a cesta k Bohu AVčkem nekončila. Přáli bychom si, aby ani touto poutí neskončila naše cesta radosti, společenstí a samoty ke Kristu. Proto si na závěr každé poutní cesty na Stovanově v kapli vylosuj úkol. Úkol můžeš splnit buď zde na Velehradě, nebo s ním odjet domů. A veř, že zde najdeš úkoly, které můžeš plnit opakovaně. I takto si naše téma samoty, společenství a radosti můžeme v našich myslích a životech udržet i nadále a pokračovat tak v tom, na čem jsme začali pracovat zde na AV21. Přejeme Ti, ať se Ti to daří. `
        },
        {
          type: TextTypes.NADPIS,
          text: `Mám putovat sám? `
        },
        {
          type: TextTypes.TEXT,
          text: `Na pouť se můžeš vypravit buď sám/sama, nebo ve skupině. Záleží na Tobě. Náš návrh je cestu samoty projít v tichosti sám. Pokud půjdeš ve skupině, zkus i tak být myšlenkami spíše sám se sebou. Cestu společenství můžeš naopak prožít ve skupině, ve které můžeš sdílet své myšlenky z rozjímání.  Nicméně i když se vypravíš sám, nebude to vadit. Je to jen na Tobě. `
        },
        {
          type: TextTypes.NADPIS,
          text: `Na co ještě čekáš? `
        },
        {
          type: TextTypes.TEXT,
          text: `Najdi si chvíli času a vyraž!`
        }
      ],
      magis: [
        {
          type: TextTypes.BIG_NADPIS,
          text: `MAGIS CIRCLE`
        },
        {
          type: TextTypes.TEXT,
          text: `  Jsi na AV poprvé? Nikoho tady neznáš a chceš se seznámit s menší skupinkou lidí? Nebo máš jen potřebu svůj duchovní život sdílet s ostatními a jít v modlitbě více do hloubky? Právě k tomuto všemu mají sloužit modlitební a sdílecí Magis skupinky, které mají pevně dané místo v programu. 

  Jestli se se svou skupinkou rozhodneš trávit více času, to je jen na tobě. Jednou z možností, jak trávit více času dohromady, je sejít se k ranní modlitbě pouze ve své skupině, protože všechny texty k modlitbě nalezneš níže v sekci Ranní modlitba. 
        
  Pokud se ovšem rozhodneš a k některé skupině se přidáš, tak bys v ní měl/a zůstat po celou dobu AV. Skupiny pro Magis Circle budou čítat 5-8 lidí. Magis circle je způsob reflexe dne vycházející z ignaciánského Examenu, který je přizpůsoben pro modlitbu ve skupince. Bližší informace i způsob, jak se na sdílení ve skupince připravit, nalezneš níže v části Magis Circle – modlitba sdílením.`,
        },
      ],
    },
  },
};
