import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Star, c as ListChecks, d as BookOpen, f as ArrowLeft, l as Link2, n as Volume2, o as RotateCcw, r as Trophy, s as MessageCircle, t as X, u as Check } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BllUQtIG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function shuffle(items) {
	const next = [...items];
	for (let i = next.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const a = next[i];
		const b = next[j];
		if (a === void 0 || b === void 0) continue;
		next[i] = b;
		next[j] = a;
	}
	return next;
}
function starsFromScore(correct, total) {
	if (total <= 0) return 0;
	const ratio = correct / total;
	if (ratio >= 1) return 3;
	if (ratio >= .75) return 2;
	if (ratio >= .5) return 1;
	return 0;
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium select-none transition-[transform,background-color,color,border-color,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			primary: "bg-accent text-accent-fg hover:bg-accent/90",
			secondary: "bg-surface-2 text-ink hover:bg-border",
			ghost: "bg-transparent text-ink hover:bg-surface-2",
			outline: "border border-border bg-surface text-ink hover:bg-surface-2",
			option: "border border-border bg-surface text-ink text-left justify-start hover:border-accent/50 hover:bg-accent-soft"
		},
		size: {
			sm: "h-10 px-3 text-sm rounded-sm",
			md: "h-12 px-5 text-base rounded-md",
			lg: "min-h-14 px-6 text-lg rounded-md",
			option: "min-h-14 w-full px-4 py-3 rounded-md",
			icon: "size-11 rounded-sm"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
function Stars({ value, max = 3, size = "md" }) {
	const dim = size === "sm" ? "size-4" : "size-5";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "inline-flex items-center gap-0.5",
		"aria-label": `${value} su ${max} stelle`,
		children: Array.from({ length: max }, (_, i) => {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
				className: cn(dim, i < value ? "fill-accent text-accent" : "text-border"),
				strokeWidth: 1.6,
				"aria-hidden": "true"
			}, i);
		})
	});
}
function ActivityShell({ title, kicker, stars, step, total, onBack, children, footer }) {
	const ratio = step && total ? step / total : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex min-h-dvh w-full max-w-3xl flex-col px-4 pb-8 pt-4 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "ghost",
						size: "icon",
						onClick: onBack,
						"aria-label": "Torna alla classe",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
							className: "size-5",
							strokeWidth: 1.75
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [kicker ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-wider text-muted",
							children: kicker
						}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "truncate font-display text-xl font-medium text-ink sm:text-2xl",
							children: title
						})]
					}),
					typeof stars === "number" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, { value: stars }) : null
				]
			}),
			step && total ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-1.5 overflow-hidden rounded-full bg-surface-2",
					role: "progressbar",
					"aria-valuenow": step,
					"aria-valuemin": 1,
					"aria-valuemax": total,
					"aria-label": `Domanda ${step} di ${total}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full rounded-full bg-accent transition-[width] duration-200 ease-out",
						style: { width: `${Math.min(100, ratio * 100)}%` }
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1.5 text-xs tabular-nums text-muted",
					children: [
						step,
						" / ",
						total
					]
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children
			}),
			footer ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: footer
			}) : null
		]
	});
}
function PromptCard({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("rounded-xl border border-border bg-surface p-5 shadow-card sm:p-7", className),
		children
	});
}
var CONJUGATION = [
	{
		person: "io",
		form: "ho",
		example: "Io ho un quaderno nuovo.",
		note: "H muta: si scrive, non si sente."
	},
	{
		person: "tu",
		form: "hai",
		example: "Tu hai una bicicletta rossa."
	},
	{
		person: "lui / lei",
		form: "ha",
		example: "Lei ha otto anni."
	},
	{
		person: "noi",
		form: "abbiamo",
		example: "Noi abbiamo fame."
	},
	{
		person: "voi",
		form: "avete",
		example: "Voi avete un bel giardino."
	},
	{
		person: "loro",
		form: "hanno",
		example: "Loro hanno molti amici."
	}
];
var USES = [
	{
		id: "possesso",
		title: "Possesso",
		lead: "Per dire che qualcosa è nostro.",
		examples: [
			"Ho una matita.",
			"Marco ha un cane.",
			"Abbiamo due finestre in classe."
		]
	},
	{
		id: "eta",
		title: "Età",
		lead: "Per dire quanti anni abbiamo. In italiano si usa sempre avere.",
		examples: [
			"Ho nove anni.",
			"Quanti anni hai?",
			"Mia sorella ha sei anni."
		]
	},
	{
		id: "sensazioni",
		title: "Sensazioni",
		lead: "Per fame, sete, freddo, caldo, sonno e paura.",
		examples: [
			"Ho fame.",
			"Avete freddo?",
			"Il gatto ha paura del temporale."
		]
	},
	{
		id: "bisogno",
		title: "Bisogno e voglia",
		lead: "Per dire che ci serve qualcosa o che lo desideriamo.",
		examples: [
			"Ho bisogno di una gomma.",
			"Hai voglia di un gelato?",
			"Abbiamo fretta."
		]
	}
];
var TIPS = [
	"Ho, hai, ha, hanno: la H non si pronuncia, ma si scrive sempre.",
	"Per l’età usiamo avere: Ho nove anni. Non si dice «sono nove anni».",
	"Ho fame, ho sete, ho sonno: in italiano si «ha» la sensazione.",
	"Noi abbiamo: due B. Loro hanno: con la H.",
	"Non confondere ha (verbo) con a (preposizione): Luca ha un libro. Vado a scuola."
];
var MATCH_PAIRS = [
	{
		id: "io",
		left: "io",
		right: "ho",
		speak: "io ho"
	},
	{
		id: "tu",
		left: "tu",
		right: "hai",
		speak: "tu hai"
	},
	{
		id: "lui",
		left: "lui / lei",
		right: "ha",
		speak: "lui ha"
	},
	{
		id: "noi",
		left: "noi",
		right: "abbiamo",
		speak: "noi abbiamo"
	},
	{
		id: "voi",
		left: "voi",
		right: "avete",
		speak: "voi avete"
	},
	{
		id: "loro",
		left: "loro",
		right: "hanno",
		speak: "loro hanno"
	}
];
var COMPLETA = [
	{
		id: "c1",
		prompt: "Io _____ un gatto bianco.",
		answer: "ho",
		options: [
			"ho",
			"hai",
			"ha",
			"hanno"
		],
		hint: "La persona è io.",
		explain: "Con io usiamo ho."
	},
	{
		id: "c2",
		prompt: "Tu _____ una bicicletta nuova.",
		answer: "hai",
		options: [
			"ho",
			"hai",
			"ha",
			"avete"
		],
		hint: "La persona è tu.",
		explain: "Con tu usiamo hai. Si scrive con la H."
	},
	{
		id: "c3",
		prompt: "Marco _____ otto anni.",
		answer: "ha",
		options: [
			"ha",
			"a",
			"ho",
			"hanno"
		],
		hint: "Marco è lui. Attenzione alla H.",
		explain: "Lui/lei ha. Non confondere con la preposizione a."
	},
	{
		id: "c4",
		prompt: "Noi _____ fame.",
		answer: "abbiamo",
		options: [
			"abbiamo",
			"avete",
			"hanno",
			"ho"
		],
		explain: "Con noi usiamo abbiamo, con due B."
	},
	{
		id: "c5",
		prompt: "Voi _____ un bel giardino.",
		answer: "avete",
		options: [
			"avete",
			"abbiamo",
			"hanno",
			"hai"
		],
		explain: "Con voi usiamo avete."
	},
	{
		id: "c6",
		prompt: "I bambini _____ molti giochi.",
		answer: "hanno",
		options: [
			"hanno",
			"ha",
			"abbiamo",
			"hai"
		],
		hint: "I bambini sono loro.",
		explain: "Con loro usiamo hanno."
	},
	{
		id: "c7",
		prompt: "Mia sorella _____ paura del buio.",
		answer: "ha",
		options: [
			"ha",
			"ho",
			"hanno",
			"hai"
		],
		explain: "Mia sorella è lei: ha paura."
	},
	{
		id: "c8",
		prompt: "Io e Luca _____ sete.",
		answer: "abbiamo",
		options: [
			"abbiamo",
			"hanno",
			"ho",
			"ha"
		],
		hint: "Io e Luca = noi.",
		explain: "Io + un’altra persona = noi: abbiamo."
	},
	{
		id: "c9",
		prompt: "Quanti anni _____?",
		hint: "Sto parlando con te.",
		answer: "hai",
		options: [
			"hai",
			"ho",
			"ha",
			"avete"
		],
		explain: "Quando chiediamo a una persona: Quanti anni hai?"
	},
	{
		id: "c10",
		prompt: "La maestra _____ ragione.",
		answer: "ha",
		options: [
			"ha",
			"a",
			"hanno",
			"ho"
		],
		explain: "La maestra è lei: ha ragione."
	},
	{
		id: "c11",
		prompt: "Voi _____ freddo? Prendete la giacca.",
		answer: "avete",
		options: [
			"avete",
			"abbiamo",
			"hai",
			"hanno"
		],
		explain: "Domanda al voi: avete freddo?"
	},
	{
		id: "c12",
		prompt: "Loro non _____ un ombrello.",
		answer: "hanno",
		options: [
			"hanno",
			"ha",
			"avete",
			"ho"
		],
		explain: "Loro non hanno: la forma non cambia con il non."
	},
	{
		id: "c13",
		prompt: "Io _____ bisogno di una gomma.",
		answer: "ho",
		options: [
			"ho",
			"o",
			"hai",
			"ha"
		],
		hint: "Si scrive con la H, anche se non si sente.",
		explain: "Io ho bisogno. Mai «o bisogno»."
	},
	{
		id: "c14",
		prompt: "Tu e Giulia _____ voglia di un gelato?",
		answer: "avete",
		options: [
			"avete",
			"hai",
			"abbiamo",
			"hanno"
		],
		hint: "Tu e Giulia = voi.",
		explain: "Tu + un’altra persona = voi: avete."
	},
	{
		id: "c15",
		prompt: "Il nonno _____ settant’anni.",
		answer: "ha",
		options: [
			"ha",
			"a",
			"hanno",
			"ho"
		],
		explain: "Il nonno è lui: ha settant’anni."
	},
	{
		id: "c16",
		prompt: "Noi _____ un compito di italiano.",
		answer: "abbiamo",
		options: [
			"abbiamo",
			"avete",
			"hanno",
			"ha"
		],
		explain: "Con noi: abbiamo."
	}
];
var ESPRESSIONI_Q = [
	{
		id: "e1",
		prompt: "Che cosa significa «ho fame»?",
		answer: "Voglio mangiare",
		options: [
			"Voglio mangiare",
			"Voglio dormire",
			"Ho paura",
			"Ho fretta"
		],
		explain: "Avere fame = voler mangiare."
	},
	{
		id: "e2",
		prompt: "Che cosa significa «ha sete»?",
		answer: "Vuole bere",
		options: [
			"Vuole bere",
			"Ha freddo",
			"Ha otto anni",
			"Ha ragione"
		],
		explain: "Avere sete = voler bere."
	},
	{
		id: "e3",
		prompt: "«Ho nove anni» serve per dire…",
		answer: "l’età",
		options: [
			"l’età",
			"la fame",
			"la paura",
			"il possesso di un oggetto"
		],
		explain: "Con avere diciamo l’età: Ho nove anni."
	},
	{
		id: "e4",
		prompt: "Completa: «Senza sciarpa _____ freddo.»",
		answer: "ho",
		options: [
			"ho",
			"sono",
			"faccio",
			"sto"
		],
		explain: "In italiano si ha freddo, non si «è freddo» per le persone."
	},
	{
		id: "e5",
		prompt: "«Avete sonno?» vuole dire…",
		answer: "Volete dormire?",
		options: [
			"Volete dormire?",
			"Avete fame?",
			"Siete tristi?",
			"Avete un letto?"
		],
		explain: "Avere sonno = voler dormire."
	},
	{
		id: "e6",
		prompt: "Il cucciolo _____ paura del temporale.",
		answer: "ha",
		options: [
			"ha",
			"è",
			"fa",
			"sta"
		],
		explain: "Si ha paura di qualcosa."
	},
	{
		id: "e7",
		prompt: "Se dici una cosa giusta, tu…",
		answer: "hai ragione",
		options: [
			"hai ragione",
			"hai torto",
			"hai fame",
			"hai fretta"
		],
		explain: "Avere ragione = dire una cosa corretta."
	},
	{
		id: "e8",
		prompt: "«Ho bisogno di un libro» significa…",
		answer: "mi serve un libro",
		options: [
			"mi serve un libro",
			"ho già un libro",
			"non voglio un libro",
			"il libro ha fame"
		],
		explain: "Avere bisogno di = servire qualcosa."
	},
	{
		id: "e9",
		prompt: "Quale frase è corretta?",
		answer: "Ho otto anni.",
		options: [
			"Ho otto anni.",
			"Sono otto anni.",
			"Faccio otto anni.",
			"Sto otto anni."
		],
		explain: "L’età si dice con avere, non con essere."
	},
	{
		id: "e10",
		prompt: "Suona la campanella: la maestra…",
		answer: "ha fretta",
		options: [
			"ha fretta",
			"ha sonno",
			"ha un gatto",
			"ha torto"
		],
		explain: "Avere fretta = non avere tempo."
	},
	{
		id: "e11",
		prompt: "Completa: «_____ voglia di giocare in cortile.»",
		answer: "Ho",
		options: [
			"Ho",
			"Sono",
			"Faccio",
			"Vado"
		],
		explain: "Avere voglia di + infinito."
	},
	{
		id: "e12",
		prompt: "Quale coppia è giusta?",
		answer: "avere caldo = sentire il caldo",
		options: [
			"avere caldo = sentire il caldo",
			"avere caldo = avere un cappotto",
			"avere caldo = avere ragione",
			"avere caldo = avere sete"
		],
		explain: "Avere caldo è una sensazione, come avere freddo."
	}
];
var SFIDA = [
	{
		id: "s1",
		prompt: "Quale forma usiamo con «io»?",
		answer: "ho",
		options: [
			"ho",
			"hai",
			"ha",
			"hanno"
		],
		explain: "io ho."
	},
	{
		id: "s2",
		prompt: "Quale forma usiamo con «loro»?",
		answer: "hanno",
		options: [
			"hanno",
			"ha",
			"abbiamo",
			"avete"
		],
		explain: "loro hanno."
	},
	{
		id: "s3",
		prompt: "Quale frase è scritta bene?",
		answer: "Lei ha un libro.",
		options: [
			"Lei ha un libro.",
			"Lei a un libro.",
			"Lei o un libro.",
			"Lei hai un libro."
		],
		explain: "ha è il verbo; a è una preposizione (vado a scuola)."
	},
	{
		id: "s4",
		prompt: "«Tu e io» usiamo la forma di…",
		answer: "noi — abbiamo",
		options: [
			"noi — abbiamo",
			"voi — avete",
			"tu — hai",
			"loro — hanno"
		],
		explain: "Tu e io = noi."
	},
	{
		id: "s5",
		prompt: "Completa: «Voi _____ un compito.»",
		answer: "avete",
		options: [
			"avete",
			"abbiamo",
			"hanno",
			"hai"
		],
		explain: "Con voi: avete."
	},
	{
		id: "s6",
		prompt: "Quale H manca? «Marco _a una sorella.»",
		answer: "ha",
		options: [
			"ha",
			"a",
			"ah",
			"hoa"
		],
		explain: "Il verbo avere al lui/lei si scrive ha."
	},
	{
		id: "s7",
		prompt: "Come si dice in italiano «I am hungry»?",
		answer: "Ho fame",
		options: [
			"Ho fame",
			"Sono fame",
			"Faccio fame",
			"Sto fame"
		],
		explain: "Le sensazioni si dicono con avere."
	},
	{
		id: "s8",
		prompt: "«I bambini _____ sete dopo la corsa.»",
		answer: "hanno",
		options: [
			"hanno",
			"ha",
			"avete",
			"ho"
		],
		explain: "I bambini = loro: hanno."
	},
	{
		id: "s9",
		prompt: "Scegli la forma di «noi».",
		answer: "abbiamo",
		options: [
			"abbiamo",
			"avemo",
			"habbiamo",
			"abbiammo"
		],
		explain: "abbiamo: due B, una M. Senza H."
	},
	{
		id: "s10",
		prompt: "Quale frase usa avere per l’età?",
		answer: "Quanti anni hai?",
		options: [
			"Quanti anni hai?",
			"Quanti anni sei?",
			"Che età fai?",
			"Quanti anni stai?"
		],
		explain: "Si chiede: Quanti anni hai?"
	},
	{
		id: "s11",
		prompt: "«Lei non _____ torto.» Quale forma?",
		answer: "ha",
		options: [
			"ha",
			"hai",
			"hanno",
			"ho"
		],
		explain: "Il non non cambia la forma: non ha torto."
	},
	{
		id: "s12",
		prompt: "Completa: «_____ un amico che si chiama Paolo.» (io)",
		answer: "Ho",
		options: [
			"Ho",
			"Hai",
			"Ha",
			"Hanno"
		],
		explain: "Con io: Ho un amico."
	}
];
var LEZIONE_CHECK = [
	{
		id: "l1",
		prompt: "Con «io» quale forma usiamo?",
		answer: "ho",
		options: [
			"ho",
			"hai",
			"ha"
		],
		explain: "io ho. La H non si sente, ma si scrive."
	},
	{
		id: "l2",
		prompt: "Quale grafia è corretta per lui/lei?",
		answer: "ha",
		options: [
			"ha",
			"a",
			"ah"
		],
		explain: "Il verbo è ha. La preposizione è a: vado a casa."
	},
	{
		id: "l3",
		prompt: "«Ho otto anni» serve per dire…",
		answer: "l’età",
		options: [
			"l’età",
			"la fame",
			"il possesso di otto oggetti"
		],
		explain: "Avere + numero + anni = età."
	}
];
var ACTIVITIES = [
	{
		id: "lezione",
		title: "La lezione",
		kicker: "Scopri",
		description: "La tabella del presente e i quattro usi principali."
	},
	{
		id: "completa",
		title: "Completa",
		kicker: "Esercizio",
		description: "Scegli la forma giusta e riempi lo spazio vuoto."
	},
	{
		id: "abbina",
		title: "Abbina",
		kicker: "Gioco",
		description: "Unisci ogni persona alla forma del verbo."
	},
	{
		id: "espressioni",
		title: "Espressioni",
		kicker: "Lessico",
		description: "Fame, età, paura, bisogno: le frasi che usiamo ogni giorno."
	},
	{
		id: "sfida",
		title: "La sfida",
		kicker: "Verifica",
		description: "Dieci domande miste, come una piccola interrogazione."
	}
];
function pickItalianVoice() {
	const voices = window.speechSynthesis.getVoices();
	return voices.find((v) => v.lang.toLowerCase().startsWith("it")) ?? voices.find((v) => v.lang.toLowerCase().includes("it")) ?? null;
}
function speakItalian(text) {
	if (typeof window === "undefined" || !window.speechSynthesis) return;
	window.speechSynthesis.cancel();
	const utterance = new SpeechSynthesisUtterance(text);
	utterance.lang = "it-IT";
	utterance.rate = .88;
	utterance.pitch = 1;
	const voice = pickItalianVoice();
	if (voice) utterance.voice = voice;
	window.speechSynthesis.speak(utterance);
}
function stopSpeaking() {
	if (typeof window === "undefined" || !window.speechSynthesis) return;
	window.speechSynthesis.cancel();
}
function canSpeak() {
	return typeof window !== "undefined" && "speechSynthesis" in window;
}
function AbbinaView({ savedStars, onBack, onFinish }) {
	const left = (0, import_react.useMemo)(() => shuffle(MATCH_PAIRS), []);
	const [right, setRight] = (0, import_react.useState)(() => shuffle(MATCH_PAIRS));
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [matched, setMatched] = (0, import_react.useState)([]);
	const [wrong, setWrong] = (0, import_react.useState)(null);
	const [mistakes, setMistakes] = (0, import_react.useState)(0);
	const [done, setDone] = (0, import_react.useState)(false);
	function pick(side, id) {
		if (matched.includes(id) || done) return;
		if (!selected) {
			setSelected({
				side,
				id
			});
			setWrong(null);
			return;
		}
		if (selected.side === side) {
			setSelected({
				side,
				id
			});
			return;
		}
		if (selected.id === id) {
			const pair = MATCH_PAIRS.find((p) => p.id === id);
			if (pair) speakItalian(pair.speak);
			const next = [...matched, id];
			setMatched(next);
			setSelected(null);
			setWrong(null);
			if (next.length === MATCH_PAIRS.length) {
				setDone(true);
				const correct = MATCH_PAIRS.length;
				onFinish(starsFromScore(Math.max(0, correct - mistakes), MATCH_PAIRS.length));
			}
		} else {
			setMistakes((n) => n + 1);
			setWrong(id);
			setSelected(null);
			window.setTimeout(() => setWrong(null), 450);
		}
	}
	function replay() {
		setRight(shuffle(MATCH_PAIRS));
		setSelected(null);
		setMatched([]);
		setWrong(null);
		setMistakes(0);
		setDone(false);
	}
	const stars = starsFromScore(Math.max(0, MATCH_PAIRS.length - mistakes), MATCH_PAIRS.length);
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActivityShell, {
		title: "Abbina",
		kicker: "Risultato",
		stars,
		onBack,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PromptCard, {
			className: "text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl font-medium text-ink",
					children: "Tabella ricostruita"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted",
					children: mistakes === 0 ? "Tutte le coppie al primo colpo." : `Hai sbagliato ${mistakes} ${mistakes === 1 ? "volta" : "volte"} prima di chiudere.`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, { value: stars })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						onClick: onBack,
						children: "Torna alla classe"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						variant: "outline",
						onClick: replay,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), "Riprova"]
					})]
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ActivityShell, {
		title: "Abbina",
		kicker: "Persona e forma",
		stars: savedStars,
		onBack,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-4 text-sm text-muted",
			children: "Tocca una persona, poi la forma del verbo. Sei coppie, come in tabella."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-2",
				children: left.map((pair) => {
					const on = matched.includes(pair.id);
					const active = selected?.side === "left" && selected.id === pair.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: on,
						onClick: () => pick("left", pair.id),
						className: cn("flex min-h-14 w-full items-center rounded-md border px-3 text-left text-base font-medium transition-[background-color,border-color,opacity] duration-150", on && "border-ok bg-ok-soft text-ok", !on && active && "border-accent bg-accent-soft text-accent", !on && !active && "border-border bg-surface text-ink hover:border-accent/50"),
						children: pair.left
					}) }, pair.id);
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-2",
				children: right.map((pair) => {
					const on = matched.includes(pair.id);
					const active = selected?.side === "right" && selected.id === pair.id;
					const isWrong = wrong === pair.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: on,
						onClick: () => pick("right", pair.id),
						className: cn("flex min-h-14 w-full items-center justify-end rounded-md border px-3 text-right font-display text-xl font-medium transition-[background-color,border-color,transform] duration-150", on && "border-ok bg-ok-soft text-ok", !on && active && "border-accent bg-accent-soft text-accent", !on && isWrong && "border-bad bg-bad-soft text-bad", !on && !active && !isWrong && "border-border bg-surface text-ink hover:border-accent/50"),
						children: pair.right
					}) }, pair.id);
				})
			})]
		})]
	});
}
function SpeakButton({ text, label = "Ascolta" }) {
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setReady(canSpeak());
	}, []);
	if (!ready) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		type: "button",
		variant: "ghost",
		size: "icon",
		className: "shrink-0",
		"aria-label": label,
		title: label,
		onClick: () => speakItalian(text),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, {
			className: "size-5",
			strokeWidth: 1.75
		})
	});
}
function BlankSentence({ text }) {
	const parts = text.split("_____");
	if (parts.length === 1) return text;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: parts.map((part, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [part, i < parts.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "mx-1 inline-block min-w-16 border-b-2 border-accent align-baseline",
		"aria-label": "spazio da completare"
	}) : null] }, `${part}-${i}`)) });
}
function deal(bank, count) {
	return shuffle(bank).slice(0, count);
}
function ChoiceQuiz({ title, kicker, bank, count, savedStars, onBack, onFinish }) {
	const [questions, setQuestions] = (0, import_react.useState)(() => deal(bank, count));
	const [index, setIndex] = (0, import_react.useState)(0);
	const [picked, setPicked] = (0, import_react.useState)(null);
	const [correct, setCorrect] = (0, import_react.useState)(0);
	const [done, setDone] = (0, import_react.useState)(false);
	const current = questions[index];
	const options = (0, import_react.useMemo)(() => current ? shuffle(current.options) : [], [current]);
	function restart() {
		setQuestions(deal(bank, count));
		setIndex(0);
		setPicked(null);
		setCorrect(0);
		setDone(false);
	}
	if (!current && !done) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActivityShell, {
		title,
		kicker,
		onBack,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted",
			children: "Nessuna domanda disponibile."
		})
	});
	if (done) {
		const stars = starsFromScore(correct, questions.length);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActivityShell, {
			title,
			kicker: "Risultato",
			stars,
			onBack,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PromptCard, {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium uppercase tracking-wider text-muted",
						children: "Punteggio"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 font-display text-5xl font-medium tabular-nums text-ink",
						children: [correct, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-2xl text-muted",
							children: ["/", questions.length]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, { value: stars })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-4 max-w-sm text-muted",
						children: stars === 3 ? "Perfetto. La forma è sicura, come in una verifica senza errori." : stars === 2 ? "Molto bene. Rileggi le spiegazioni e riprova per la terza stella." : stars === 1 ? "Un buon inizio. Torna sulla lezione e poi ripeti l’esercizio." : "Nessun problema: si impara sbagliando. Riapri la lezione e riprova."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							onClick: onBack,
							children: "Torna alla classe"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							variant: "outline",
							onClick: restart,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {
								className: "size-4",
								strokeWidth: 1.75
							}), "Riprova"]
						})]
					})
				]
			})
		});
	}
	const locked = picked !== null;
	const isRight = picked === current.answer;
	function choose(option) {
		if (picked) return;
		setPicked(option);
		if (option === current.answer) setCorrect((n) => n + 1);
	}
	function next() {
		if (index + 1 >= questions.length) {
			setDone(true);
			onFinish(starsFromScore(correct, questions.length));
			return;
		}
		setIndex((i) => i + 1);
		setPicked(null);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActivityShell, {
		title,
		kicker,
		stars: savedStars,
		step: index + 1,
		total: questions.length,
		onBack,
		footer: locked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			type: "button",
			className: "w-full sm:w-auto",
			onClick: next,
			children: index + 1 >= questions.length ? "Vedi il risultato" : "Avanti"
		}) : null,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PromptCard, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-1 flex justify-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpeakButton, { text: current.prompt.replaceAll("_____", "spazio") })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-2xl font-medium leading-snug text-ink sm:text-3xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlankSentence, { text: current.prompt })
			})] }),
			current.hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: current.hint
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-2.5",
				children: options.map((option) => {
					const selected = picked === option;
					const showOk = locked && option === current.answer;
					const showBad = locked && selected && option !== current.answer;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						variant: "option",
						size: "option",
						disabled: locked,
						"aria-pressed": selected,
						onClick: () => choose(option),
						className: cn(showOk && "border-ok bg-ok-soft text-ok hover:bg-ok-soft hover:border-ok", showBad && "border-bad bg-bad-soft text-bad hover:bg-bad-soft hover:border-bad"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex-1 text-base sm:text-lg",
								children: option
							}),
							showOk ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								className: "size-5 shrink-0",
								strokeWidth: 2
							}) : null,
							showBad ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
								className: "size-5 shrink-0",
								strokeWidth: 2
							}) : null
						]
					}, option);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 min-h-12",
				"aria-live": "polite",
				children: locked ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: cn("text-sm", isRight ? "text-ok" : "text-bad"),
					children: [isRight ? "Corretto. " : `La forma giusta è «${current.answer}». `, current.explain]
				}) : null
			})
		] })
	});
}
var emptyStars = {
	lezione: 0,
	completa: 0,
	abbina: 0,
	espressioni: 0,
	sfida: 0
};
var useProgress = create()(persist((set, get) => ({
	name: "",
	hydrated: false,
	stars: emptyStars,
	setName: (name) => set({ name: name.trim().slice(0, 24) }),
	setStars: (id, stars) => {
		if (stars <= get().stars[id]) return;
		set({ stars: {
			...get().stars,
			[id]: stars
		} });
	},
	reset: () => set({
		name: "",
		stars: emptyStars
	}),
	markHydrated: () => set({ hydrated: true })
}), {
	name: "avere-quaderno",
	partialize: (state) => ({
		name: state.name,
		stars: state.stars
	}),
	onRehydrateStorage: () => (state) => {
		state?.markHydrated();
	}
}));
function totalStars(stars) {
	return Object.values(stars).reduce((sum, n) => sum + n, 0);
}
var ICONS = {
	lezione: BookOpen,
	completa: ListChecks,
	abbina: Link2,
	espressioni: MessageCircle,
	sfida: Trophy
};
function HomeView({ onOpen }) {
	const name = useProgress((s) => s.name);
	const stars = useProgress((s) => s.stars);
	const setName = useProgress((s) => s.setName);
	const hydrated = useProgress((s) => s.hydrated);
	const [draft, setDraft] = (0, import_react.useState)("");
	const [ready, setReady] = (0, import_react.useState)(false);
	const tip = (0, import_react.useMemo)(() => TIPS[Math.floor(Date.now() / 864e5) % TIPS.length] ?? TIPS[0], []);
	const total = totalStars(stars);
	const shownName = ready && hydrated ? name : "";
	(0, import_react.useEffect)(() => {
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (hydrated) setDraft(name);
	}, [hydrated, name]);
	function saveName(event) {
		event.preventDefault();
		setName(draft);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex min-h-dvh w-full max-w-4xl flex-col px-4 py-8 sm:px-6 sm:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "rise-in",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium uppercase tracking-wider text-accent",
						children: "Scuola primaria"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-5xl font-medium tracking-tight text-ink sm:text-6xl",
						children: "Avere"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-lg text-lg text-muted",
						children: "Il verbo della classe. Presente, usi e espressioni, con esercizi da fare da soli o alla lavagna."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: saveName,
				className: "rise-in rise-in-1 mt-8 flex flex-col gap-3 rounded-xl border border-border bg-surface p-4 shadow-card sm:flex-row sm:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-medium uppercase tracking-wider text-muted",
						children: "Come ti chiami?"
					}), ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: draft,
						onChange: (e) => setDraft(e.target.value),
						maxLength: 24,
						placeholder: "Il tuo nome",
						autoComplete: "off",
						className: "mt-1.5 h-12 w-full rounded-md border border-border bg-bg px-3 text-base text-ink outline-none ring-accent/70 placeholder:text-subtle focus:ring-2"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-1.5 h-12 w-full rounded-md border border-border bg-bg" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					variant: "secondary",
					className: "shrink-0",
					children: shownName ? "Aggiorna" : "Entra in classe"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rise-in rise-in-2 mt-6 flex items-center justify-between gap-4 rounded-lg border border-border bg-accent-soft px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-ink",
					children: shownName ? `Quaderno di ${shownName}` : "Quaderno della classe"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm tabular-nums text-accent",
					children: [hydrated ? total : 0, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: " / 15 stelle"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-8 grid gap-3 sm:grid-cols-2",
				children: ACTIVITIES.map((activity, i) => {
					const Icon = ICONS[activity.id];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onOpen(activity.id),
						className: cn("rise-in rounded-xl border border-border bg-surface p-5 text-left shadow-card transition-[transform,border-color] duration-150 hover:border-accent/40 active:scale-[0.98]", `rise-in-${Math.min(i + 1, 5)}`),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex size-10 items-center justify-center rounded-sm bg-accent-soft text-accent",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "size-5",
										strokeWidth: 1.75
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, {
									value: hydrated ? stars[activity.id] : 0,
									size: "sm"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-xs font-medium uppercase tracking-wider text-muted",
								children: activity.kicker
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-1 font-display text-2xl font-medium",
								children: activity.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: activity.description
							})
						]
					}, activity.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "mt-8 rounded-lg border border-border bg-surface px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-wider text-muted",
					children: "Consiglio"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-ink",
					children: tip
				})]
			})
		]
	});
}
function LezioneView({ savedStars, onBack, onFinish }) {
	const [step, setStep] = (0, import_react.useState)("studio");
	const [qIndex, setQIndex] = (0, import_react.useState)(0);
	const [picked, setPicked] = (0, import_react.useState)(null);
	const [correct, setCorrect] = (0, import_react.useState)(0);
	const [options, setOptions] = (0, import_react.useState)(() => shuffle(LEZIONE_CHECK[0]?.options ?? []));
	const question = LEZIONE_CHECK[qIndex];
	function startCheck() {
		setStep("check");
		setQIndex(0);
		setPicked(null);
		setCorrect(0);
		setOptions(shuffle(LEZIONE_CHECK[0]?.options ?? []));
	}
	function choose(option) {
		if (picked || !question) return;
		setPicked(option);
		if (option === question.answer) setCorrect((n) => n + 1);
	}
	function nextCheck() {
		if (!question) return;
		if (qIndex + 1 >= LEZIONE_CHECK.length) {
			setStep("fine");
			onFinish(correct === 3 ? 3 : correct === 2 ? 2 : correct === 1 ? 1 : 0);
			return;
		}
		const next = qIndex + 1;
		setQIndex(next);
		setPicked(null);
		setOptions(shuffle(LEZIONE_CHECK[next]?.options ?? []));
	}
	if (step === "fine") {
		const stars = correct === 3 ? 3 : correct === 2 ? 2 : correct === 1 ? 1 : 0;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActivityShell, {
			title: "La lezione",
			kicker: "Fatto",
			stars,
			onBack,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PromptCard, {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-3xl font-medium text-ink",
						children: "Lezione conclusa"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted",
						children: stars === 3 ? "Hai tenuto a mente le tre idee chiave. Puoi passare agli esercizi." : "Rileggi la tabella e il riquadro sulla H muta, poi ripeti il controllo."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							onClick: onBack,
							children: "Torna alla classe"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							onClick: () => setStep("studio"),
							children: "Rivedi la lezione"
						})]
					})
				]
			})
		});
	}
	if (step === "check" && question) {
		const locked = picked !== null;
		const isRight = picked === question.answer;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActivityShell, {
			title: "Controllo",
			kicker: "Tre domande",
			stars: savedStars,
			step: qIndex + 1,
			total: LEZIONE_CHECK.length,
			onBack,
			footer: locked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				className: "w-full sm:w-auto",
				onClick: nextCheck,
				children: qIndex + 1 >= LEZIONE_CHECK.length ? "Chiudi la lezione" : "Avanti"
			}) : null,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PromptCard, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl font-medium text-ink",
					children: question.prompt
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-2.5",
					children: options.map((option) => {
						const selected = picked === option;
						const showOk = locked && option === question.answer;
						const showBad = locked && selected && option !== question.answer;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							variant: "option",
							size: "option",
							disabled: locked,
							onClick: () => choose(option),
							className: cn(showOk && "border-ok bg-ok-soft text-ok hover:bg-ok-soft hover:border-ok", showBad && "border-bad bg-bad-soft text-bad hover:bg-bad-soft hover:border-bad"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex-1 text-base",
									children: option
								}),
								showOk ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-5" }) : null,
								showBad ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : null
							]
						}, option);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 min-h-12",
					"aria-live": "polite",
					children: locked ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: cn("text-sm", isRight ? "text-ok" : "text-bad"),
						children: [isRight ? "Corretto. " : `La risposta è «${question.answer}». `, question.explain]
					}) : null
				})
			] })
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActivityShell, {
		title: "La lezione",
		kicker: "Presente indicativo",
		stars: savedStars,
		onBack,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PromptCard, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium uppercase tracking-wider text-muted",
						children: "Il verbo"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-3xl font-medium text-ink",
						children: "avere"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted",
						children: "Un verbo irregolare, tra i primi che si imparano. Serve per il possesso, per l’età e per tante sensazioni di ogni giorno."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PromptCard, {
					className: "p-0 sm:p-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-b border-border px-5 py-4 sm:px-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl font-medium",
							children: "La tabella"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: "Tocca una riga per ascoltare."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: CONJUGATION.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: cn(i > 0 && "border-t border-border"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => speakItalian(`${row.person} ${row.form}. ${row.example}`),
							className: "flex w-full items-center gap-4 px-5 py-3.5 text-left hover:bg-accent-soft sm:px-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-24 shrink-0 text-sm text-muted sm:w-28",
									children: row.person
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-2xl font-medium text-accent",
									children: row.form
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-auto hidden text-sm text-muted sm:inline",
									children: row.example
								})
							]
						})
					}, row.person)) })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-accent/25 bg-accent-soft px-5 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-accent",
						children: "La H muta"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-ink",
						children: [
							"In ho, hai, ha, hanno la H non si pronuncia, ma si scrive sempre. Serve a non confondere",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: "ha"
							}),
							" (verbo) con ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: "a"
							}),
							" ",
							"(preposizione: vado a scuola)."
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-medium",
					children: "Quando lo usiamo"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 grid gap-3 sm:grid-cols-2",
					children: USES.map((use) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border bg-surface p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg font-medium",
								children: use.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: use.lead
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 space-y-1",
								children: use.examples.map((ex) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start justify-between gap-2 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: ex }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpeakButton, {
										text: ex,
										label: `Ascolta: ${ex}`
									})]
								}, ex))
							})
						]
					}, use.id))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PromptCard, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium uppercase tracking-wider text-muted",
						children: "Per i più grandi"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-xl font-medium",
						children: "Avere come ausiliare"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted",
						children: "Dal terzo anno, avere aiuta a costruire il passato prossimo di molti verbi: ho mangiato, hai visto, ha fatto, abbiamo letto. Qui ci fermiamo al presente: prima le forme, poi i tempi."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					className: "w-full sm:w-auto",
					onClick: startCheck,
					children: "Tre domande di controllo"
				})
			]
		})
	});
}
function AvereApp() {
	const [view, setView] = (0, import_react.useState)("home");
	const stars = useProgress((s) => s.stars);
	const setStars = useProgress((s) => s.setStars);
	const markHydrated = useProgress((s) => s.markHydrated);
	(0, import_react.useEffect)(() => {
		markHydrated();
	}, [markHydrated]);
	(0, import_react.useEffect)(() => {
		return () => stopSpeaking();
	}, [view]);
	function back() {
		stopSpeaking();
		setView("home");
	}
	if (view === "lezione") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LezioneView, {
		savedStars: stars.lezione,
		onBack: back,
		onFinish: (value) => setStars("lezione", value)
	});
	if (view === "completa") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChoiceQuiz, {
		title: "Completa",
		kicker: "Scegli la forma",
		bank: COMPLETA,
		count: 8,
		savedStars: stars.completa,
		onBack: back,
		onFinish: (value) => setStars("completa", value)
	});
	if (view === "abbina") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AbbinaView, {
		savedStars: stars.abbina,
		onBack: back,
		onFinish: (value) => setStars("abbina", value)
	});
	if (view === "espressioni") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChoiceQuiz, {
		title: "Espressioni",
		kicker: "Lessico di ogni giorno",
		bank: ESPRESSIONI_Q,
		count: 8,
		savedStars: stars.espressioni,
		onBack: back,
		onFinish: (value) => setStars("espressioni", value)
	});
	if (view === "sfida") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChoiceQuiz, {
		title: "La sfida",
		kicker: "Dieci domande",
		bank: SFIDA,
		count: 10,
		savedStars: stars.sfida,
		onBack: back,
		onFinish: (value) => setStars("sfida", value)
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeView, { onOpen: setView });
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "paper-wash min-h-dvh text-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvereApp, {})
	});
}
//#endregion
export { Home as component };
