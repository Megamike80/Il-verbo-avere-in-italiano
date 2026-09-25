export type ActivityId =
  | "lezione"
  | "completa"
  | "abbina"
  | "espressioni"
  | "sfida";

export type ChoiceQuestion = {
  id: string;
  prompt: string;
  hint?: string;
  answer: string;
  options: string[];
  explain: string;
};

export type MatchPair = {
  id: string;
  left: string;
  right: string;
  speak: string;
};

export type Expression = {
  id: string;
  phrase: string;
  meaning: string;
  example: string;
};

export type ConjugationRow = {
  person: string;
  form: string;
  example: string;
  note?: string;
};

export const CONJUGATION: ConjugationRow[] = [
  { person: "io", form: "ho", example: "Io ho un quaderno nuovo.", note: "H muta: si scrive, non si sente." },
  { person: "tu", form: "hai", example: "Tu hai una bicicletta rossa." },
  { person: "lui / lei", form: "ha", example: "Lei ha otto anni." },
  { person: "noi", form: "abbiamo", example: "Noi abbiamo fame." },
  { person: "voi", form: "avete", example: "Voi avete un bel giardino." },
  { person: "loro", form: "hanno", example: "Loro hanno molti amici." },
];

export const USES = [
  {
    id: "possesso",
    title: "Possesso",
    lead: "Per dire che qualcosa è nostro.",
    examples: ["Ho una matita.", "Marco ha un cane.", "Abbiamo due finestre in classe."],
  },
  {
    id: "eta",
    title: "Età",
    lead: "Per dire quanti anni abbiamo. In italiano si usa sempre avere.",
    examples: ["Ho nove anni.", "Quanti anni hai?", "Mia sorella ha sei anni."],
  },
  {
    id: "sensazioni",
    title: "Sensazioni",
    lead: "Per fame, sete, freddo, caldo, sonno e paura.",
    examples: ["Ho fame.", "Avete freddo?", "Il gatto ha paura del temporale."],
  },
  {
    id: "bisogno",
    title: "Bisogno e voglia",
    lead: "Per dire che ci serve qualcosa o che lo desideriamo.",
    examples: ["Ho bisogno di una gomma.", "Hai voglia di un gelato?", "Abbiamo fretta."],
  },
] as const;

export const TIPS = [
  "Ho, hai, ha, hanno: la H non si pronuncia, ma si scrive sempre.",
  "Per l’età usiamo avere: Ho nove anni. Non si dice «sono nove anni».",
  "Ho fame, ho sete, ho sonno: in italiano si «ha» la sensazione.",
  "Noi abbiamo: due B. Loro hanno: con la H.",
  "Non confondere ha (verbo) con a (preposizione): Luca ha un libro. Vado a scuola.",
];

export const EXPRESSIONS: Expression[] = [
  { id: "fame", phrase: "avere fame", meaning: "voler mangiare", example: "Dopo la ricreazione ho sempre fame." },
  { id: "sete", phrase: "avere sete", meaning: "voler bere", example: "In estate i bambini hanno sete." },
  { id: "freddo", phrase: "avere freddo", meaning: "sentire il freddo", example: "Senza maglione ho freddo." },
  { id: "caldo", phrase: "avere caldo", meaning: "sentire il caldo", example: "In palestra abbiamo caldo." },
  { id: "sonno", phrase: "avere sonno", meaning: "voler dormire", example: "La sera ho sonno." },
  { id: "paura", phrase: "avere paura", meaning: "essere spaventati", example: "Il cucciolo ha paura del buio." },
  { id: "anni", phrase: "avere … anni", meaning: "dire l’età", example: "Sara ha otto anni." },
  { id: "ragione", phrase: "avere ragione", meaning: "dire una cosa giusta", example: "Tu hai ragione: è lunedì." },
  { id: "torto", phrase: "avere torto", meaning: "sbagliare", example: "Questa volta ho torto io." },
  { id: "bisogno", phrase: "avere bisogno di", meaning: "servire qualcosa", example: "Ho bisogno di un temperamatite." },
  { id: "voglia", phrase: "avere voglia di", meaning: "desiderare di fare qualcosa", example: "Hai voglia di giocare?" },
  { id: "fretta", phrase: "avere fretta", meaning: "non avere tempo", example: "La maestra ha fretta: suona la campanella." },
];

export const MATCH_PAIRS: MatchPair[] = [
  { id: "io", left: "io", right: "ho", speak: "io ho" },
  { id: "tu", left: "tu", right: "hai", speak: "tu hai" },
  { id: "lui", left: "lui / lei", right: "ha", speak: "lui ha" },
  { id: "noi", left: "noi", right: "abbiamo", speak: "noi abbiamo" },
  { id: "voi", left: "voi", right: "avete", speak: "voi avete" },
  { id: "loro", left: "loro", right: "hanno", speak: "loro hanno" },
];

export const COMPLETA: ChoiceQuestion[] = [
  {
    id: "c1",
    prompt: "Io _____ un gatto bianco.",
    answer: "ho",
    options: ["ho", "hai", "ha", "hanno"],
    hint: "La persona è io.",
    explain: "Con io usiamo ho.",
  },
  {
    id: "c2",
    prompt: "Tu _____ una bicicletta nuova.",
    answer: "hai",
    options: ["ho", "hai", "ha", "avete"],
    hint: "La persona è tu.",
    explain: "Con tu usiamo hai. Si scrive con la H.",
  },
  {
    id: "c3",
    prompt: "Marco _____ otto anni.",
    answer: "ha",
    options: ["ha", "a", "ho", "hanno"],
    hint: "Marco è lui. Attenzione alla H.",
    explain: "Lui/lei ha. Non confondere con la preposizione a.",
  },
  {
    id: "c4",
    prompt: "Noi _____ fame.",
    answer: "abbiamo",
    options: ["abbiamo", "avete", "hanno", "ho"],
    explain: "Con noi usiamo abbiamo, con due B.",
  },
  {
    id: "c5",
    prompt: "Voi _____ un bel giardino.",
    answer: "avete",
    options: ["avete", "abbiamo", "hanno", "hai"],
    explain: "Con voi usiamo avete.",
  },
  {
    id: "c6",
    prompt: "I bambini _____ molti giochi.",
    answer: "hanno",
    options: ["hanno", "ha", "abbiamo", "hai"],
    hint: "I bambini sono loro.",
    explain: "Con loro usiamo hanno.",
  },
  {
    id: "c7",
    prompt: "Mia sorella _____ paura del buio.",
    answer: "ha",
    options: ["ha", "ho", "hanno", "hai"],
    explain: "Mia sorella è lei: ha paura.",
  },
  {
    id: "c8",
    prompt: "Io e Luca _____ sete.",
    answer: "abbiamo",
    options: ["abbiamo", "hanno", "ho", "ha"],
    hint: "Io e Luca = noi.",
    explain: "Io + un’altra persona = noi: abbiamo.",
  },
  {
    id: "c9",
    prompt: "Quanti anni _____?",
    hint: "Sto parlando con te.",
    answer: "hai",
    options: ["hai", "ho", "ha", "avete"],
    explain: "Quando chiediamo a una persona: Quanti anni hai?",
  },
  {
    id: "c10",
    prompt: "La maestra _____ ragione.",
    answer: "ha",
    options: ["ha", "a", "hanno", "ho"],
    explain: "La maestra è lei: ha ragione.",
  },
  {
    id: "c11",
    prompt: "Voi _____ freddo? Prendete la giacca.",
    answer: "avete",
    options: ["avete", "abbiamo", "hai", "hanno"],
    explain: "Domanda al voi: avete freddo?",
  },
  {
    id: "c12",
    prompt: "Loro non _____ un ombrello.",
    answer: "hanno",
    options: ["hanno", "ha", "avete", "ho"],
    explain: "Loro non hanno: la forma non cambia con il non.",
  },
  {
    id: "c13",
    prompt: "Io _____ bisogno di una gomma.",
    answer: "ho",
    options: ["ho", "o", "hai", "ha"],
    hint: "Si scrive con la H, anche se non si sente.",
    explain: "Io ho bisogno. Mai «o bisogno».",
  },
  {
    id: "c14",
    prompt: "Tu e Giulia _____ voglia di un gelato?",
    answer: "avete",
    options: ["avete", "hai", "abbiamo", "hanno"],
    hint: "Tu e Giulia = voi.",
    explain: "Tu + un’altra persona = voi: avete.",
  },
  {
    id: "c15",
    prompt: "Il nonno _____ settant’anni.",
    answer: "ha",
    options: ["ha", "a", "hanno", "ho"],
    explain: "Il nonno è lui: ha settant’anni.",
  },
  {
    id: "c16",
    prompt: "Noi _____ un compito di italiano.",
    answer: "abbiamo",
    options: ["abbiamo", "avete", "hanno", "ha"],
    explain: "Con noi: abbiamo.",
  },
];

export const ESPRESSIONI_Q: ChoiceQuestion[] = [
  {
    id: "e1",
    prompt: "Che cosa significa «ho fame»?",
    answer: "Voglio mangiare",
    options: ["Voglio mangiare", "Voglio dormire", "Ho paura", "Ho fretta"],
    explain: "Avere fame = voler mangiare.",
  },
  {
    id: "e2",
    prompt: "Che cosa significa «ha sete»?",
    answer: "Vuole bere",
    options: ["Vuole bere", "Ha freddo", "Ha otto anni", "Ha ragione"],
    explain: "Avere sete = voler bere.",
  },
  {
    id: "e3",
    prompt: "«Ho nove anni» serve per dire…",
    answer: "l’età",
    options: ["l’età", "la fame", "la paura", "il possesso di un oggetto"],
    explain: "Con avere diciamo l’età: Ho nove anni.",
  },
  {
    id: "e4",
    prompt: "Completa: «Senza sciarpa _____ freddo.»",
    answer: "ho",
    options: ["ho", "sono", "faccio", "sto"],
    explain: "In italiano si ha freddo, non si «è freddo» per le persone.",
  },
  {
    id: "e5",
    prompt: "«Avete sonno?» vuole dire…",
    answer: "Volete dormire?",
    options: ["Volete dormire?", "Avete fame?", "Siete tristi?", "Avete un letto?"],
    explain: "Avere sonno = voler dormire.",
  },
  {
    id: "e6",
    prompt: "Il cucciolo _____ paura del temporale.",
    answer: "ha",
    options: ["ha", "è", "fa", "sta"],
    explain: "Si ha paura di qualcosa.",
  },
  {
    id: "e7",
    prompt: "Se dici una cosa giusta, tu…",
    answer: "hai ragione",
    options: ["hai ragione", "hai torto", "hai fame", "hai fretta"],
    explain: "Avere ragione = dire una cosa corretta.",
  },
  {
    id: "e8",
    prompt: "«Ho bisogno di un libro» significa…",
    answer: "mi serve un libro",
    options: ["mi serve un libro", "ho già un libro", "non voglio un libro", "il libro ha fame"],
    explain: "Avere bisogno di = servire qualcosa.",
  },
  {
    id: "e9",
    prompt: "Quale frase è corretta?",
    answer: "Ho otto anni.",
    options: ["Ho otto anni.", "Sono otto anni.", "Faccio otto anni.", "Sto otto anni."],
    explain: "L’età si dice con avere, non con essere.",
  },
  {
    id: "e10",
    prompt: "Suona la campanella: la maestra…",
    answer: "ha fretta",
    options: ["ha fretta", "ha sonno", "ha un gatto", "ha torto"],
    explain: "Avere fretta = non avere tempo.",
  },
  {
    id: "e11",
    prompt: "Completa: «_____ voglia di giocare in cortile.»",
    answer: "Ho",
    options: ["Ho", "Sono", "Faccio", "Vado"],
    explain: "Avere voglia di + infinito.",
  },
  {
    id: "e12",
    prompt: "Quale coppia è giusta?",
    answer: "avere caldo = sentire il caldo",
    options: [
      "avere caldo = sentire il caldo",
      "avere caldo = avere un cappotto",
      "avere caldo = avere ragione",
      "avere caldo = avere sete",
    ],
    explain: "Avere caldo è una sensazione, come avere freddo.",
  },
];

export const SFIDA: ChoiceQuestion[] = [
  {
    id: "s1",
    prompt: "Quale forma usiamo con «io»?",
    answer: "ho",
    options: ["ho", "hai", "ha", "hanno"],
    explain: "io ho.",
  },
  {
    id: "s2",
    prompt: "Quale forma usiamo con «loro»?",
    answer: "hanno",
    options: ["hanno", "ha", "abbiamo", "avete"],
    explain: "loro hanno.",
  },
  {
    id: "s3",
    prompt: "Quale frase è scritta bene?",
    answer: "Lei ha un libro.",
    options: ["Lei ha un libro.", "Lei a un libro.", "Lei o un libro.", "Lei hai un libro."],
    explain: "ha è il verbo; a è una preposizione (vado a scuola).",
  },
  {
    id: "s4",
    prompt: "«Tu e io» usiamo la forma di…",
    answer: "noi — abbiamo",
    options: ["noi — abbiamo", "voi — avete", "tu — hai", "loro — hanno"],
    explain: "Tu e io = noi.",
  },
  {
    id: "s5",
    prompt: "Completa: «Voi _____ un compito.»",
    answer: "avete",
    options: ["avete", "abbiamo", "hanno", "hai"],
    explain: "Con voi: avete.",
  },
  {
    id: "s6",
    prompt: "Quale H manca? «Marco _a una sorella.»",
    answer: "ha",
    options: ["ha", "a", "ah", "hoa"],
    explain: "Il verbo avere al lui/lei si scrive ha.",
  },
  {
    id: "s7",
    prompt: "Come si dice in italiano «I am hungry»?",
    answer: "Ho fame",
    options: ["Ho fame", "Sono fame", "Faccio fame", "Sto fame"],
    explain: "Le sensazioni si dicono con avere.",
  },
  {
    id: "s8",
    prompt: "«I bambini _____ sete dopo la corsa.»",
    answer: "hanno",
    options: ["hanno", "ha", "avete", "ho"],
    explain: "I bambini = loro: hanno.",
  },
  {
    id: "s9",
    prompt: "Scegli la forma di «noi».",
    answer: "abbiamo",
    options: ["abbiamo", "avemo", "habbiamo", "abbiammo"],
    explain: "abbiamo: due B, una M. Senza H.",
  },
  {
    id: "s10",
    prompt: "Quale frase usa avere per l’età?",
    answer: "Quanti anni hai?",
    options: ["Quanti anni hai?", "Quanti anni sei?", "Che età fai?", "Quanti anni stai?"],
    explain: "Si chiede: Quanti anni hai?",
  },
  {
    id: "s11",
    prompt: "«Lei non _____ torto.» Quale forma?",
    answer: "ha",
    options: ["ha", "hai", "hanno", "ho"],
    explain: "Il non non cambia la forma: non ha torto.",
  },
  {
    id: "s12",
    prompt: "Completa: «_____ un amico che si chiama Paolo.» (io)",
    answer: "Ho",
    options: ["Ho", "Hai", "Ha", "Hanno"],
    explain: "Con io: Ho un amico.",
  },
];

export const LEZIONE_CHECK: ChoiceQuestion[] = [
  {
    id: "l1",
    prompt: "Con «io» quale forma usiamo?",
    answer: "ho",
    options: ["ho", "hai", "ha"],
    explain: "io ho. La H non si sente, ma si scrive.",
  },
  {
    id: "l2",
    prompt: "Quale grafia è corretta per lui/lei?",
    answer: "ha",
    options: ["ha", "a", "ah"],
    explain: "Il verbo è ha. La preposizione è a: vado a casa.",
  },
  {
    id: "l3",
    prompt: "«Ho otto anni» serve per dire…",
    answer: "l’età",
    options: ["l’età", "la fame", "il possesso di otto oggetti"],
    explain: "Avere + numero + anni = età.",
  },
];

export const ACTIVITIES: {
  id: ActivityId;
  title: string;
  kicker: string;
  description: string;
}[] = [
  {
    id: "lezione",
    title: "La lezione",
    kicker: "Scopri",
    description: "La tabella del presente e i quattro usi principali.",
  },
  {
    id: "completa",
    title: "Completa",
    kicker: "Esercizio",
    description: "Scegli la forma giusta e riempi lo spazio vuoto.",
  },
  {
    id: "abbina",
    title: "Abbina",
    kicker: "Gioco",
    description: "Unisci ogni persona alla forma del verbo.",
  },
  {
    id: "espressioni",
    title: "Espressioni",
    kicker: "Lessico",
    description: "Fame, età, paura, bisogno: le frasi che usiamo ogni giorno.",
  },
  {
    id: "sfida",
    title: "La sfida",
    kicker: "Verifica",
    description: "Dieci domande miste, come una piccola interrogazione.",
  },
];
