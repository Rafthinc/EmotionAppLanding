import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay },
  }),
};

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay },
  }),
};

export default function EmotionAppLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      {/* glowing blobs */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-1/3 -right-16 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-indigo-500/15 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto max-w-5xl px-4 py-8 space-y-16 md:space-y-20">
        {/* HERO – titlu sus, fără spațiu mare */}
        <section className="space-y-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/80 px-3 py-1 text-[11px] text-slate-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Aplicația 1 · Jurnal emoțional · CBT & REBT
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.05}
            className="text-2xl md:text-3xl font-semibold tracking-tight"
          >
            Învață să îți recunoști emoțiile{" "}
            <span className="block bg-gradient-to-r from-cyan-400 via-emerald-400 to-indigo-400 bg-clip-text text-transparent">
              înainte ca ele să te controleze pe tine
            </span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.1}
            className="max-w-3xl text-sm md:text-base text-slate-300"
          >
            Multe persoane doresc să nu mai simtă niciodată anxietate, tristețe,
            frică sau furie. Dar, pe lângă faptul că este imposibil, nici nu
            este recomandat. Problema reală nu sunt aceste emoții, ci utilizarea
            lor în mod exagerat și inutil, de multe ori.
            <br />
            <br />
            La fel ca mâncarea: ai nevoie de ea pentru a trăi, însă dacă
            exagerezi, din prieten devine dușman.
          </motion.p>
        </section>

        {/* SECȚIUNEA 2 – Totul e despre emoții */}
        <section className="grid gap-8 md:grid-cols-2 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            custom={0}
            className="space-y-3 text-sm text-slate-300"
          >
            <h2 className="text-lg md:text-xl font-semibold text-slate-50">
              O mare parte din viața noastră este despre emoții
            </h2>
            <p>
              Te-ai gândit vreodată că o mare parte din ceea ce facem zilnic nu
              e despre lucruri, ci despre emoții?
            </p>
            <p>
              Spunem „Îmi place să mănânc”, „Fumez fiindcă îmi place”, „Am fost
              plecat în excursie, ce bine m-am simțit!” – însă, în profunzime,
              aproape totul este despre emoții.
            </p>
            <ul className="list-disc space-y-1 pl-4">
              <li>Mâncăm ca să scăpăm de stres.</li>
              <li>Căutăm distracții ca să uităm de tristețe.</li>
              <li>Evităm situații ca să nu simțim frică sau rușine.</li>
            </ul>
            <p>
              Aproape tot ceea ce facem este o încercare de a fugi de emoțiile
              negative sau de a păstra și amplifica emoțiile pozitive.
            </p>
          </motion.div>

          {/* imagine secțiunea 2 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={slideInRight}
            custom={0.1}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative w-full max-w-sm rounded-3xl border border-slate-800 bg-slate-950/90 p-3 shadow-2xl shadow-slate-950/80"
            >
              <img
                src="./emotii-sec2-comportamente.png"
                alt="Persoane care mănâncă, fumează sau caută distracții pentru a-și regla emoțiile"
                className="w-full h-full object-contain rounded-2xl"
              />
              <div className="absolute -top-3 -right-3 rounded-full bg-slate-900/90 border border-cyan-400/60 px-3 py-1 text-[10px] text-cyan-200">
                Comportamente = încercări de a controla emoții
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* SECȚIUNEA 3 – Emoțiile nu apar din senin */}
        <section className="grid gap-8 md:grid-cols-2 items-center">
          {/* imagine secțiunea 3 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={slideInLeft}
            custom={0.1}
            className="flex justify-center order-2 md:order-1"
          >
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative w-full max-w-sm rounded-3xl border border-slate-800 bg-slate-950/90 p-3 shadow-2xl shadow-slate-950/80"
            >
              <img
                src="./emotii-sec3-ganduri-automate.png"
                alt="Siluetă cu gânduri automate care generează emoții"
                className="w-full h-full object-contain rounded-2xl"
              />
              <div className="absolute -top-3 -left-3 rounded-full bg-slate-900/90 border border-indigo-400/60 px-3 py-1 text-[10px] text-indigo-200">
                Gânduri automate → Emoții
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            custom={0}
            className="space-y-3 text-sm text-slate-300 order-1 md:order-2"
          >
            <h2 className="text-lg md:text-xl font-semibold text-slate-50">
              Emoțiile nu apar din senin
            </h2>
            <p>
              Emoțiile sunt rezultatul gândurilor – mai exact al{" "}
              <span className="text-emerald-300">gândurilor automate</span>:
              rapide, involuntare, aproape invizibile. Ele par atât de reale
              încât nu le mai punem la îndoială, dar nu sunt întotdeauna
              adevărate.
            </p>
            <p>
              Două persoane pot trăi aceeași experiență – una se calmează,
              cealaltă intră în panică. Diferența nu este în situație, ci în
              gândul care apare între eveniment și emoție.
            </p>
          </motion.div>
        </section>

        {/* SECȚIUNEA 4 – Despre jurnalul emoțional */}
        <section className="grid gap-8 md:grid-cols-2 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            custom={0}
            className="space-y-3 text-sm text-slate-300"
          >
            <h2 className="text-lg md:text-xl font-semibold text-slate-50">
              De ce începem cu identificarea emoțiilor?
            </h2>
            <p>
              Înainte să lucrăm direct cu gândurile care declanșează emoțiile,
              este esențial să înveți să îți recunoști și să îți numești
              emoțiile corect.
            </p>
            <p>
              <span className="text-cyan-300">Jurnalul emoțional</span> pe care
              l-am pregătit te va ajuta să:
            </p>
            <ul className="list-disc space-y-1 pl-4">
              <li>te familiarizezi cu propriile emoții;</li>
              <li>observi frecvența lor și stările dominante;</li>
              <li>vezi ce emoții apar cel mai des în viața ta;</li>
              <li>le numești clar: furie, tristețe, teamă, rușine etc.</li>
            </ul>
            <p>
              În loc să spui „Nu știu ce am, sunt supărat”, vei putea spune
              „Sunt furios” sau „Sunt trist” – iar acesta este primul pas ca să
              poți interveni în mod rațional.
            </p>
          </motion.div>

          {/* imagine jurnal */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={slideInRight}
            custom={0.1}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative w-full max-w-sm rounded-3xl border border-slate-800 bg-slate-950/90 p-3 shadow-2xl shadow-slate-950/80"
            >
              <img
                src="./emotii-sec4-jurnal.jpg"
                alt="Preview al jurnalului emoțional cu lista de emoții"
                className="w-full h-full object-contain rounded-2xl"
              />
              <div className="absolute -top-3 -right-3 rounded-full bg-slate-900/90 border border-emerald-400/60 px-3 py-1 text-[10px] text-emerald-200">
                Primul pas: învață-ți emoțiile
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* SECȚIUNEA 5 – Schema CBT */}
        <section className="space-y-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            custom={0}
            className="space-y-2 text-sm text-slate-300"
          >
            <h2 className="text-lg md:text-xl font-semibold text-slate-50">
              Situație → Gânduri → Emoții → Comportamente → Reacții fizice
            </h2>
            <p>
              Când numești corect emoțiile, poți vedea în sfârșit legătura clară
              dintre ce se întâmplă în exterior și ce se întâmplă în tine:
            </p>
          </motion.div>

          {/* mică schemă desenată în cod – până ai o imagine dedicată */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            custom={0.1}
            className="rounded-3xl border border-slate-800 bg-slate-950/90 p-4 text-xs md:text-sm text-slate-200 shadow-xl shadow-slate-950/70"
          >
            <div className="grid gap-3 md:grid-cols-5 text-center">
              {[
                "Situație",
                "Gânduri",
                "Emoții",
                "Comportamente",
                "Reacții fizice",
              ].map((label, idx) => (
                <div key={label} className="flex flex-col items-center gap-2">
                  <div className="rounded-2xl border border-slate-700 bg-slate-900/80 px-3 py-2">
                    {label}
                  </div>
                  {idx < 4 && (
                    <span className="hidden md:inline-block text-cyan-300">
                      ➜
                    </span>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-3 text-[11px] text-slate-400">
              Fiecare emoție are și o componentă fiziologică: furia și
              anxietatea cresc ritmul cardiac și tensiunea, tristețea scade
              energia, iar bucuria intensă îți poate accelera respirația. În
              jurnal vei nota și aceste reacții, pentru a înțelege mai bine ce
              se întâmplă în corpul tău.
            </p>
          </motion.div>
        </section>

        {/* SECȚIUNEA 6 – De ce rămânem blocați în emoții */}
        <section className="grid gap-8 md:grid-cols-2 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            custom={0}
            className="space-y-3 text-sm text-slate-300"
          >
            <h2 className="text-lg md:text-xl font-semibold text-slate-50">
              De ce uneori ieșim greu din anumite stări
            </h2>
            <p>
              Inițial, orice emoție este declanșată de anumite gânduri. Însă,
              odată ce starea emoțională apare, ea poate amorsa gânduri care
              sunt congruente cu acea emoție.
            </p>
            <p>
              De exemplu, dacă într-o situație ai gânduri care declanșează
              tristețe profundă și nu știi cum să le gestionezi, emoția de
              tristețe va activa:
            </p>
            <ul className="list-disc space-y-1 pl-4">
              <li>amintiri dureroase,</li>
              <li>interpretări negative,</li>
              <li>
                alte gânduri de tip „nu are rost”, „nu o să fie mai bine”.
              </li>
            </ul>
            <p>
              Acestea pot întreține sau chiar amplifica starea inițială. De
              aceea unele persoane ies foarte greu din aceste stări, odată ce
              ele au fost declanșate.
            </p>
          </motion.div>

          {/* imagine cerc emoțional */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={slideInRight}
            custom={0.1}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative w-full max-w-sm rounded-3xl border border-slate-800 bg-slate-950/90 p-3 shadow-2xl shadow-slate-950/80"
            >
              <img
                src="./emotii-sec6-ciclu.png"
                alt="Ciclu emoțional"
                className="w-full h-full object-contain rounded-2xl"
              />

              <div className="absolute -top-3 -right-3 rounded-full bg-slate-900/90 border border-rose-400/60 px-3 py-1 text-[10px] text-rose-200">
                Cercul gând–emoție–amintiri
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* SECȚIUNEA 7 – CTA + autor */}
        <section className="space-y-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            custom={0}
            className="rounded-3xl border border-slate-800 bg-slate-950/90 p-4 md:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="space-y-2 text-sm text-slate-200 md:max-w-xl">
              <h2 className="text-base md:text-lg font-semibold text-emerald-300">
                Ce vei învăța în continuare
              </h2>
              <p>
                Te voi învăța să gestionezi emoțiile și trăirile într-un mod
                rațional, exact cum se lucrează în psihoterapia
                cognitiv-comportamentală. Jurnalul emoțional este primul pas:
                vei observa emoțiile, vei vedea tipare și vei pregăti terenul
                pentru aplicațiile următoare, în care vei lucra cu gândurile
                automate și distorsiunile cognitive.
              </p>
              <p className="text-xs text-slate-400">
                Dacă ești pregătit, începe prin a nota 1–3 situații reale din
                ultimele zile în care ai simțit emoții intense.
              </p>
            </div>

            {/* CTA + author box */}
            <div className="flex flex-col items-center gap-3 md:items-end">
              <a
                href="/emotion-journal" // schimbă dacă ruta ta este alta
                className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/40 hover:brightness-110"
              >
                Deschide Jurnalul emoțional
              </a>

              <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/90 px-3 py-2 text-xs text-slate-200">
                <div className="h-12 w-12 overflow-hidden rounded-full border border-cyan-400/60 bg-slate-900/80">
                  <img
                    src="/me2025.png" // folosește poza ta
                    alt="Roșu Adrian-Francois"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-slate-50">
                    Roșu Adrian-Francois
                  </div>
                  <div className="text-[11px] text-slate-300">
                    Psihoterapeut Cognitiv-Comportamental (CBT)
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Psiholog & Nutriționist · IT Developer · Creator App4Mind
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
