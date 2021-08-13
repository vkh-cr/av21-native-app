import { ActivityTypes, News, StaticData, TextTypes } from "./types";

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
    {
      title: "Blabla2",
      description: "Blabla3",
      image: "",
      imageUrl: "",
      date: new Date(),
    },
    {
      title: "Blabla3",
      description: "Blabla2",
      image: "",
      imageUrl: "",
      date: new Date(),
    },
    {
      title: "Blabla3",
      description: "Blabla2",
      image: "",
      imageUrl: "",
      date: new Date(),
    },
    {
      title: "Blabla3",
      description: "Blabla2",
      image: "",
      imageUrl: "",
      date: new Date(),
    },
    {
      title: "Blabla3",
      description: "Blabla2",
      image: "",
      imageUrl: "",
      date: new Date(),
    },
    {
      title: "Blabla3",
      description: "Blabla2",
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
        avatar: "",
        description:
          "Mějte s námi slitování, přece jen jsme připravovali AVčko po nocích pro nás, pro Vás.",
        activities: [1],
      },
      {
        id: 1,
        firstName: "David",
        lastName: "Ambrož",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        activities: [1],
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
          return staticData.data.presenters[0];
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
          return staticData.data.presenters[0];
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
          return staticData.data.presenters[0];
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
          return staticData.data.presenters[0];
        },
        capacity: 120,
        type: ActivityTypes.PREDNASKA
      },
      {
        id: 202,
        block: 2,
        title:
          "Škola evangelizace sv. Ondřeje (Jan Svoboda, Maria Paskuda) – Bez čeho se neobejde evangelizace? KE-KA-KO aneb tři pilíře Školy evangelizace sv. Ondřeje",
        location: "Sál Stojanov",
        description: `Škola evangelizace má za úkol formovat křesťany, aby dokázali sdílet svou víru a účinně evangelizovat. Naše škola není uzavřené hnutí, ale pastorační projekt, ze kterého mohou čerpat všichni zájemci z katolické církve. Škola evangelizace svatého Ondřeje a všechny její aktivity stojí na třech pilířích: Kérygma – soustředíme se na hlásání živého Ježíše Krista; Charisma – jsme otevřeni Duchu Svatému a jeho darům; Koinonia – ve společenství Církve je každý člověk důležitý a má své povolání v evangelizaci.
        `,
        image: null,
        get presenter() {
          return staticData.data.presenters[0];
        },
        capacity: 60,
        type: ActivityTypes.PREDNASKA
      },
      {
        id: 203,
        block: 2,
        title: "Osobní modlitba",
        location: "Kaple Stojanov",
        description: `Jak rozvíjet a udržet modlitební život a osobní vztah s Bohem v dnešní době, kdy žijeme velice rychlé a intenzivní životy plné povinností a impulsů, které nás rozptylují nebo nám dokonce zabraňují v rozvíjení duchovního života. A lze zůstat přitom v modlitbě ještě kreativní a radostný bez tlaku, že bych se „měl“ modlit?
        `,
        image: null,
        get presenter() {
          return staticData.data.presenters[0];
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
          return staticData.data.presenters[0];
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
          return staticData.data.presenters[0];
        },
        type: ActivityTypes.DUCHOVNI
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
          time: "20:00 – 21:00",
          location: "Bazilika",
          data: [],
          icon: "heart",
        },
        {
          title: "Magis (rozřazení do skupin)",
          time: "21:00 – 21:20 ",
          location: "Před bazilikou",
          data: [],
          icon: "sync",
        },
        {
          title: "BLOK 1",
          time: "20:00 – 21:00",
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
          time: "10:00 – 11:30",
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
          time: "11:45 – 12:00",
          location: "Venku u kříže (u baziliky)",
          data: [],
          icon: "sync",
        },
        {
          title: "Oběd",
          time: "12:00 – 13:30",
          location: "Jídelna Stojanov",
          data: [],
          icon: "sync",
        },
        {
          title: "Zpovědi",
          time: "12:30 – 14:00",
          location: "Stojanov (info na recepci)",
          data: [],
          icon: "sync",
        },
        {
          title: "Čajovna",
          time: "13:00 – 14:00 ",
          location: "Sklep Gymnázium",
          data: [],
          icon: "sync",
        },
        {
          title: "BLOK 3",
          time: "14:00 – 15:30",
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
          time: "18:00 – 19:00 ",
          location: "Bazilika",
          data: [],
          icon: "sync",
        },
        {
          title: "Večeře",
          time: "19:15 – 20:15",
          location: "Jídelna Stojanov",
          data: [],
          icon: "sync",
        },
        {
          title: "Magic",
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
    ],
    maps: [],
    images: [],
    texts: [
      `
      Stojanov je otevřen 6:40 – 22:00, VDCM v čase 7:30 – 22:00 (zavřeno během bloků a mší)
      Noční otevírací doba
      Vchod VDCM bude uzavřen ve 22:00, od této doby budeme dveře otevírat každou půl hodinu až do 2 hod (tzn. ve 22:30, 23:00, 23:30, 00:00, 00:30, 1:00, 1:30, 2:00)
      Ubytovaní na Stojanově dostanou klíčky, na kterých je i klíč od hlavního vchodu.
      Jak se chovat na ubytování
      Ve vnitřních prostorách prosíme nos ochranné prostředky dýchacích cest – respirátory nebo nano roušky splňující příslušné normy (např. FFP2, KN 95)
      Prosíme o dodržování nočního klidu na ubytování od 22 do 6 hodin.
      Všechny prostory setkání jsou nekuřácké.
      V pokojích na Stojanově i na VDCM se prosíme přezouvej.
      Klíče od pokojů na Stojanově si nech po dobu AV u sebe. Před odjezdem je však vrať na recepci Stojanov!
      V neděli prosíme o vyklizení pokojů na Stojanově i VDCM do 12:30 hodin (do závěrečné mše). Věci si můžeš nechat v sále na Stojanově.
      Další organizační věci
      Náramku na ruce se nezbavuj (ať se dostaneš na program nebo do jídelny).
      Registrace na přednášky a workshopy probíhá online – na program daného dne vždy ráno od 6:45 na adrese registrace.absolventskyvelehrad.cz.
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
        text: `Stojanov je otevřen 6:40 – 22:00, VDCM v čase 7:30 – 22:00 (zavřeno během bloků a mší)
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
        text: `Ve vnitřních prostorách prosíme nos ochranné prostředky dýchacích cest – respirátory nebo nano roušky splňující příslušné normy (např. FFP2, KN 95)
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
Registrace na přednášky a workshopy probíhá online – na program daného dne vždy ráno od 6:45 na adrese registrace.absolventskyvelehrad.cz.
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
