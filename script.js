// ==============================
// EASY CUSTOMIZATION
// ==============================
// Edit anything in this block. {name} and {nick} are replaced automatically.
// Anything in [BRACKETS] is a placeholder for you to fill in.
const CONFIG = {
  RESET_PROGRESS: false,                 // true = wipe saved progress on next load (set back to false after)
  name: "Ishan",
  nickname: "birthday boy",
  tagline: "Mera chotu sa baby 🥺🍬",   // shown under his name on page 1
  date: "09 • 10 • 2026",
  dateLong: "October 9, 2026",
  MUSIC_FILE: "assets/music.mp3",        // optional. Music never autoplays; the ♪ button starts it.
  colors: { bg: "#070b1f", ink: "#f4f1ff", violet: "#b7a6ff", pink: "#ff9ec7", candle: "#ffc46b" },
  game: { seconds: 12, stars: 10 },

  // CUTE GIFS: download any .gif into assets/gifs/ and set src (e.g. "assets/gifs/hello.gif").
  // While src is "" (or the file is missing) an animated emoji sticker shows instead.
  gifs: {
    note: { src: "", emoji: "🧸" }, box: { src: "", emoji: "🎁" }, contract: { src: "", emoji: "📜" },
    wish: { src: "", emoji: "🐰" }, letters: { src: "", emoji: "🐱" }, win: { src: "", emoji: "🥳" }
  },
  font: "Fredoka",                       // font for normal text: any Google Fonts name, e.g. "Nunito", "Baloo 2", "Poppins"
  // Optional GIFs: put your own files in assets/ and point to them, e.g. note: "assets/cat.gif".
  // Leave "" to use the built-in animated sticker for that page.
  gifs: { note: "", box: "", letters: "", game: "", win: "" },

  // PAGE 1
  intro: ["There was once a boy...", "...who had no idea...", "...someone was making something just for him.", "HAPPY BIRTHDAY {name} ♡", "Ready to open it?"],
  secretStar: "You found something already? 😭\nDon't get too confident.\nThere's more.",

  // PAGE 2
  noteTitle: "A Little Note For You 💌",
  letter: `Hey idiot…..

Happy birthday mere cutieuuu se baby ❤️🍬🎂

I genuinely don't know how to write a normal birthday wish for you because honestly, you deserve a little extra love and a lot of special treatment.

Aur mujhe samajh hi nahi aa raha tha ki itni door se tumhe special kaise feel karwaun… so I made this entire little website just for you. 🥺

I knowww it's not perfect 😭 but I really tried my best. Every little page, every stupid idea and every tiny detail is here because I wanted to give you something that feels a little more you.

So pleaseee, abb ye mat bolna ki “itna sab kyun manta hai?” 😑

I know tumhe paragraphs padhna bhi koi khaas pasand nahi hai, but please… thoda thoda karke padh lena.
Ek hi din mein sab khatam karne ki zarurat nahi hai.

Bas itna samajh lena ki ye website banane mein jitna time laga, usse zyada cute memories aur feelings iske andar daalne mein lagi hain. 🥺

So… happy birthday, Ishan. ❤️

Now go explore your little birthday surprise, idiot. 🍬`,
  noteEnd: "You haven't seen anything yet. 👀",
  noteBtn: "I'LL BEHAVE →",
  ps: { title: "💌 P.S.", msg: "Don't skip anything. I worked too hard on this. 😭", btn: "Okay, okay 😭" },

  // PAGE 3
  boxIntro: "I put a few things in here that reminded me of you.\n\nSome are sweet.\nSome are embarrassing.\nSome are very much your fault. 😭",
  observations: [
    ["Your innocent little side", `Wo tumhara innocent sa baby version…

I genuinely never thought ki jis insaan ko main itne time se ek certain way mein samajhti thi, uske andar itna innocent, soft aur pyaara sa side bhi hoga.

Aur haan… ye bhi nahi socha tha ki iss chote se baby ko itna gussa aata hai 😭

But somehow, tumhara ye side mujhe bohot cute lagta hai.`],
    ["The way you overthink", `Tum bohot zyada sochte ho yaar.

Kabhi kabhi itni pointless cheezon ko bhi apne dimaag mein ghumaate rehte ho ki bas mann karta hai tumhara brain thodi der ke liye PAUSE kar du 😭

Try to think a little more about your present too.

Ki abhi tum kya kar sakte ho jo tumhari life ko thoda better, peaceful aur beautiful bana sake.

Har cheez ka answer abhi milna zaroori nahi hota, baby.`],
    ["You need care too", `I think tumhe bhi bohot saari care, pyaar aur understanding chahiye.

Shayad tumhe kabhi kabhi darr lagta hai ki jis insaan ki aadat ho gayi hai, kahin wo chala na jaaye.

Aur shayad isi wajah se tum apne around bohot saare log rakhte ho… thinking that maybe if there are enough people around, losing one won't hurt that much.

But you know what?

Farak padega.

Shayad uss exact moment pe nahi… but baad mein zaroor padega.

Aur ek funny baat bataun? Jin jin se baat karoge, un sab se thoda bohot farak padega 😂

Thoda psychology bhi hai ismein, okay? 😭`],
    ["You act like you don't care", `Tum kabhi kabhi aise act karte ho jaise tumhe kisi cheez se farak hi nahi padta…

But I have a feeling ki actually tumhe bohot farak padta hai.

Shayad tum bas har baar dikhate nahi ho.`],
    ["The soft side you don't show everyone", `And probably my favourite one…

That soft side of yours.

The side you don't show everyone.

The side that makes you feel less like this “I don't care” person and more like the cute little baby I somehow got attached to. 🥺`]
  ],
  timeline: [
    ["The Beginning", `Umm… you may think our beginning started that day when you came into my room as insomnia while I was toffee…

But no no no.

Our story actually started a little before that.

Remember when you came into Simmi's room and got on mic?

Umm… secret bataun?

I found your voice cute. 👉🏻👈🏻

But then Simmi told me that she used to talk to you and that you used to sleep on mic with everyone and I was like—

“Ahhh. Nope. I don't need this boy in my life.” 😭

And look at us now…

Kaha se kaha tak aa gaye.`],
    ["Keeping An Eye Out 👀", `Destiny bhi kya ajeeb cheez hai na?

Jis insaan pe maine nazar rakhi thi ye soch ke ki “Playboy lagta hai, isse door rehna hai”…

Aaj ussi insaan ke liye birthday website bana rahi hoon.

Hihi… ye likhte hue khud smile aa gayi. 😭

I don't know… maybe kuch toh connection tha.

Because somehow, hum baar baar ek dusre ke saamne aa hi gaye.

Kehte hain na—

Kabhi kabhi log paas hoke bhi nahi milte, aur jab waqt sahi hota hai toh kitni bhi doori ho, raaste phir mil jaate hain.

Maybe that's what happened with us.`],
    ["The First Real Conversation", `Idk honestly kisko “real conversation” kahun 😂

Titli mein bhi humne thodi bohot baat ki thi…

But actual proper conversation toh toffee mein hui thi.

And honestly, I never expected that day to become this important.

Tumse baatein karna was probably one of the most unexpected things that happened to me.

And now look…

Itni saari baatein share karna, random things discuss karna, ek dusre ko itna samajhne ki koshish karna…

I never expected any of this.`],
    ["Talking More", `Jab I started talking to you more, mere dimaag mein continuously ek hi thing chalti thi—

“Ye banda playboy hai. Flirting iska kaam hai. Fasna nahi hai. Dekhte hain.” 😭

But then slowly I started seeing the other side of you.

The innocent side.

The emotional side.

The soft and sometimes lonely side.

Aur pata hi nahi chala kab mera “dekhte hain” slowly “okay… maybe I actually care about him” ban gaya. 🥺`],
    ["Who Is This Person?", `Idk uss din mujhe kya ho gaya tha ki maine tumhe itna kuch bata diya. 😭

Main kaun hoon, mere kitne IDs hain, meri random random baatein…

Maybe I could say all of that because somehow tum mujhe pure-hearted lage.

Ek innocent se baby jaise.

And I felt like I could actually trust you with those little pieces of myself.`],
    ["WHEN IT CHANGED", `Okay okay okay… let me tell you something now.

I think time spend karne ke baad kahin na kahin mujhe feel hone laga tha that maybe…

you could be the kind of person I had been craving to find.

But then another thought always comes—

Maybe you could be that person… but maybe I'm not exactly the person you were looking for.

And honestly, jab main kisi se attached ho jaati hoon na, then little things start mattering to me.

Isliye kabhi kabhi meri jealousy, overthinking ya reactions thode zyada ho jaate hain.

I know sometimes it can be difficult to understand.

But I'm also learning how to handle my own emotions better.

So if sometimes I seem confused or overwhelmed, please remember—

It's not because I want to control you. It's simply because I care more than I sometimes know how to express.

And yes… technically tum mere boyfriend bhi nahi ho 😭

So mujhe ye sab expect karne ka right bhi nahi hai.

I know.

Bas… feelings ko kabhi kabhi logic samajh nahi aata, okay? 😭`],
    ["THE INSIDE JOKE", `I never expected ki Nibbi Titli ke saath tum itni baat karoge…

Aur phir uske saath rahoge…

Aur usse mommy bulaoge. 😭

Similarly, Titli ne bhi kabhi nahi socha tha ki wo Insomnia ke saath itni attached ho jayegi.

But wait a minute—

INSOMNIA KE BACCHHE…

MAIN NIBBI NAHI HUUUU 😡😭`],
    ["NOW", `Hum shayad jitna close ho rahe hain, utni hi fights bhi ho rahi hain.

Maybe because ab hum ek dusre se expectations bhi rakhne lage hain.

And honestly… kabhi kabhi ye scary bhi lagta hai.

Mujhe pata hai tum kabhi kabhi chale jaate ho jab cheezein bohot overwhelming ho jaati hain.

Aur mujhe uss waqt samajh nahi aata kya karun.

Kabhi kabhi main bhi itna overthink kar leti hoon ki lagta hai bas sabse door bhaag jaun.

But maybe that's exactly when I need a little reassurance and a reminder that I'm not suddenly replaceable or forgotten.

I'm still learning how to communicate all of this without turning everything into a fight.

And I hope you are learning too.

Bas ek cheez sach mein chahti hoon—tum khush raho.

Jaise bhi raho.

Jahan bhi raho.

Khush raho, baby. 🍬`],
    ["Right Now 🥺", `And right now?

Honestly… I don't even know what to call whatever this is. 😭

We're closer than before, we understand each other more than before… and somehow we're also fighting more than before. 😭

Maybe because now things actually matter.

Maybe because we started expecting little things from each other.

And yeah… sometimes our fights genuinely scare me.

But even after all the stupid arguments, misunderstandings and “I'm done” moments…

somehow there's still this little part of me that doesn't want to lose the bond we've built.

So yes, we're complicated.

We're stupid.

We fight.

We annoy each other.

We overthink.

And then somehow we come back and talk again. 😭

That's us, I guess.

Messy, unexpected and somehow still special. 🥺`]
  ],
  contractIntro: `Okay idiot…

Since apparently we're important enough to have an entire website…

I think we need a tiny little contract. 😭

Don't worry, it's not scary.

Probably.`,
  mommy: "Iris",
  clauses: [
    "We promise to communicate instead of silently assuming everything.",
    "We promise to remember that fights don't automatically erase everything good between us.",
    "We promise to keep our little inside jokes alive.",
    "We promise not to forget how this whole weird story started.",
    "We promise to celebrate each other's small wins.",
    "We promise to tell each other when something is genuinely bothering us instead of letting it grow into unnecessary misunderstandings.",
    "Most importantly: we don't let a bad day make us forget all the good days."
  ],
  whenBox: "Careful.\nThese aren't supposed to be opened all at once. 😭",
  boxEnd: ["You really thought that was everything?", "Cute. 😭", "There's still more."],

  // PAGE 4
  cakeIntro: ["Okay, {nick}...", "You've made it this far.", "So now, there's only one thing left to do.", "Make a wish. 🎂"],
  wish: ["✨ Wish made. ✨", "I won't ask what you wished for.", "Some wishes are better kept secret. 🤍", "But I really hope it comes true.", "There's still more."],

  // PAGE 5 (titles + text)
  lettersIntro: "I can't be there for every little moment,\nso I left you a few tiny pieces of me instead. 🤍\n\nOpen them only when you need them.\n\nAnd no cheating. 😭",
  letters: [
    ["Open when you're having a bad day", `Hey, idiot…

Whatever happened today, wo bas aaj ka ek bad day tha.

Come here 🫴🏻

Take a breath.

Drink some water.

Get some rest.

And please stop being so hard on yourself.

You don't have to fix your entire life in one day.

Tomorrow doesn't have to look like today, samjhe?

One bad day doesn't define you. ❤️`],
    ["Open when you're overthinking", `I knowww…

Pakka raat hogi and tumhara overthinking start ho gaya hoga. 😑

Ab bolo, kis wajah se start hui?

Kisi ne kuch keh diya?

Accha accha… pehle pause.

Apne dimaag ko thodi der ke liye PAUSE karo.

Close your eyes.

Think about one of the most beautiful moments of your life.

Yaad kiya?

Now take a deep breath.

And remember:

Not every thought deserves an answer, and not everything you fear is going to happen.

Jo hua, ho raha hai, ya future mein hoga… everything doesn't need to be solved tonight.

And if you ever need someone to listen, I'm only one call away. 🫴🏻

Now shant ho jao, baby.

Breathe…

and rest.`],
    ["Open when you need someone", `Insomniaaaaa…

Remember our Insomnia–Toffee days? 😭

Sometimes I really miss those random little conversations.

And if today feels lonely, remember this:

You don't always have to handle everything alone.

You have people who care about you.

And yes, somewhere in your little corner of the world, there's your Toffee too. 🍬`],
    ["Open when you feel like you're not enough", `Listen.

Kisi ke kehne pe tum khud ko doubt karna start mat kar dena, samjhe? 😑

You know yourself better than someone else's random judgment.

Don't lose your own charm just because someone failed to understand you.

One bad day doesn't make you a bad person.

One mistake doesn't define your entire personality.

And someone else's opinion doesn't decide your worth.

You're still you.

And that's more than enough. 🫂`],
    ["Open when you miss me", `Aww…

Look who opened this one. 🥺

Unfortunately, baby, this website still hasn't invented a teleportation button.

So you'll have to survive with this message instead. 😭

Close your eyes for a second.

Think about all our random conversations, stupid jokes, late-night talks and the little moments that somehow became memories.

That's your temporary substitute for missing me.

And yes…

I probably miss you too, idiot. 🥺`],
    ["Open when you need your mommy", `Ohhh…

So NOW you need mommy? 😑

Fine.

Come here, mera cutieuuu.

Ky ho gaya mere chotu se baby ko? 🥺

Take a little rest.

Breathe.

You don't have to pretend you're an unstoppable alpha male every second of the day. 😭

Sometimes it's okay to just be tired.

Sometimes it's okay to need someone.

So for the next five minutes…

No overthinking. No pretending. Just rest.

Mommy said so. 😑🍬`],
    ["Open when you feel lonely", `Baby…

Shhhh.

You are not as alone as your brain is making you feel right now.

Take a breath.

Put on your favourite song.

Drink some water.

And remember all the people who genuinely care about you.

You matter to more people than you realise. ❤️

So don't let one lonely moment convince you that you're completely alone.`],
    ["Open on your birthday 🎂", `You made it another year.

I hope this year is kinder to you.

I hope you laugh more.

Worry less.

Stop flirting so much. 😑😂

And become even more yourself.

I hope you find more reasons to be proud of yourself.

More peaceful days.

More stupid laughs.

More beautiful memories.

And honestly…

I'm really glad I got to know you somewhere along the way.

Out of all the random people, rooms, IDs, conversations and unexpected moments…

somehow, I ended up here—

making an entire birthday website for you. 😭

Happy Birthday, idiot. 🎂❤️

I hope 23 treats you gently.`]
  ],
  lettersEnd: ["You opened all of them. 🥹", "But...", "I saved one thing for the very end."],

  // PAGE 6
  gameIntro: ["WAIT... ONE LAST CHALLENGE. 🎮", "You've opened the boxes.", "You've survived the messages.", "You've made your birthday wish.", "But there's one thing left to unlock. 👀"],
  gameWinTitle: "WAIT—\nYOU ACTUALLY DID IT?! 😭⭐",
  gameWin: "Okay okay…\nYou earned the secret page.\nGo see what I kept hidden for you. 👀",
  gameLose: "Apparently you're going to need another attempt, {nick}. 😭",

  // SECRET PAGE
  secretIntro: [
    "You found it. 🌙", "This page isn't really for today.", "It's for us, someday in the future.",
    "I don't know where we'll be when we eventually come back here.\n\nI don't know what life will look like, what we'll have become, or how much we'll have changed.",
    "But I wanted to leave something here anyway.\n\nA tiny piece of October 9, 2026.",
    "So that if we ever come back to this page years from now...\n\nwe can remember who we were here."
  ],
  now: ["October 9, 2026", "We were still figuring things out.", "We laughed about stupid things.", "We had our own little jokes.", "We didn't know what the future would look like."],
  hope: [
    ["01 — Our Bond", `No matter how boring life gets, or how busy we become, I don't want the bond between us to slowly fade away.

I hope we'll always have that little comfort of knowing we can talk to each other.`],
    ["02 — Our Priorities", `I don't want our priorities to completely change someday.

I hope we always remember to make a little space for each other, even when life gets busy.`],
    ["03 — How Important You Are", `I want you to always remember how important you are to me, okay?

Even on days when I don't say it properly.

Even after stupid fights.

Even when we're annoying each other.

You matter to me. A lot.`]
  ],
  goals: [
    ["01 — A Cute Date 🌷", `One proper cute date.

No Rave.
No screens.
No random people.

Just a simple little day we can actually remember. 🥺`],
    ["02 — Real Meet? 👀", `Hmm…

Real meet?

Maybe someday.

Let's see where life takes us. 👀`]
  ],
  wishes: [["03 — Your turn ✍️", "Something you want us to do together…"], ["04 — One more wish ✨", "Your own little wish…"]],
  future: `Dear future us,

If you're reading this together someday,
I hope you're smiling at how little we knew about what was coming.

I hope life was kind to you.

I hope you still laugh at the stupid things.

I hope you remember this version of yourselves.

And most importantly...

I hope you're happy.

— Us, from October 9, 2026 🤍`,
  finale: ["Maybe one day we'll come back here.", "Maybe we'll laugh at this.", "Maybe we'll barely remember what life felt like on this exact night.", "But for now...", "This little version of us exists here.", "Maybe this is only the beginning. ✨", ["Happy Birthday, idiot. 🤍", "big"], ["October 9, 2026 <span class='gs'>✦</span>", "date"], ["Keep this little secret. 🌙", "soft"]]
};

// ==============================
// ENGINE (no need to edit below)
// ==============================
(() => {
const $ = (q, r = document) => r.querySelector(q), $$ = (q, r = document) => [...r.querySelectorAll(q)];
const mk = (t, c = "", h = "") => { const e = document.createElement(t); e.className = c; e.innerHTML = h; return e; };
const RM = matchMedia("(prefers-reduced-motion: reduce)").matches;
const wait = ms => new Promise(r => setTimeout(r, ms)), sleep = ms => wait(RM ? Math.min(ms, 80) : ms);
const T = s => String(s).replace(/{name}/g, CONFIG.name).replace(/{nick}/g, CONFIG.nickname);
const para = t => T(t).split("\n\n").map((p, i) => `<p style="--i:${i}">${p.replace(/\n/g, "<br>")}</p>`).join("");
const show = e => e.classList.add("in");
const esc = x => String(x).replace(/[&<>"']/g, c => "&#" + c.charCodeAt(0) + ";");
Object.entries(CONFIG.colors).forEach(([k, v]) => document.documentElement.style.setProperty("--" + k, v));
if (CONFIG.font) {
  const l = mk("link"); l.rel = "stylesheet"; l.href = "https://fonts.googleapis.com/css2?family=" + CONFIG.font.replace(/ /g, "+") + ":wght@400;700&display=swap"; document.head.append(l);
  document.documentElement.style.setProperty("--sans", `"${CONFIG.font}",Quicksand,system-ui,sans-serif`);
}

// ---------- storage (progress + future-us notes) ----------
const KEY = "bdayStory.v1", FKEY = "bdayFuture.v1";
const S = { ch: 0, boxes: {}, letters: {}, cake: false, won: false, w: {}, cname: "", agreed: false, cdate: "" };
try {
  if (CONFIG.RESET_PROGRESS) { localStorage.removeItem(KEY); localStorage.removeItem(FKEY); }
  else Object.assign(S, JSON.parse(localStorage.getItem(KEY) || "{}"));
} catch (e) {}
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };
const loadFuture = () => { try { return JSON.parse(localStorage.getItem(FKEY) || "[]"); } catch (e) { return []; } };
// BACKEND HOOK: replace the body of saveFuture() with a fetch() to your own API to store notes on a server.
const saveFuture = entry => { const a = loadFuture(); a.push(entry); try { localStorage.setItem(FKEY, JSON.stringify(a)); } catch (e) {} };

// ---------- starry sky ----------
const cv = $("#sky"), cx = cv.getContext("2d"); let W, H, dots = [];
const size = () => { W = cv.width = innerWidth; H = cv.height = innerHeight; dots = Array.from({ length: Math.min(210, (W * H / 6000) | 0) }, () => ({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.3 + .2, p: Math.random() * 6, v: Math.random() * .08 + .02, g: Math.random() < .3, c: ["#fff", "#ffc46b", "#ff9ec7", "#b7a6ff"][(Math.random() * 4) | 0] })); if (RM) draw(0); };
const draw = t => {
  cx.clearRect(0, 0, W, H);
  const calm = document.body.dataset.ch === "secret";           // the secret page keeps its sky quiet
  for (const d of dots) {
    if (!RM) { d.y -= d.v; if (d.y < 0) d.y = H; }
    const a = Math.abs(Math.sin(t / (d.g ? 600 : 1500) + d.p));
    cx.globalAlpha = .3 + .7 * a; cx.fillStyle = cx.strokeStyle = d.c;
    cx.beginPath(); cx.arc(d.x, d.y, d.r, 0, 7); cx.fill();
    if (d.g && !calm) { const L = d.r * 3 + a * 7; cx.lineWidth = 1; cx.beginPath(); cx.moveTo(d.x - L, d.y); cx.lineTo(d.x + L, d.y); cx.moveTo(d.x, d.y - L); cx.lineTo(d.x, d.y + L); cx.stroke(); }
  }
  if (!RM) requestAnimationFrame(draw);
};
addEventListener("resize", size); size(); if (!RM) requestAnimationFrame(draw);

// ---------- helpers: modal, panel, sparkles, line sequencer ----------
function modal(title, msg, btn, cb) {
  const m = mk("div", "modal", `<div class="card" role="dialog" aria-modal="true"><h3>${title}</h3><p>${T(msg).replace(/\n/g, "<br>")}</p><button class="btn">${btn}</button></div>`);
  document.body.append(m); const b = $("button", m); b.focus();
  b.onclick = () => { m.remove(); cb && cb(); };
}
function panel(html, onClose) {
  const p = mk("div", "modal", `<div class="card wide" role="dialog" aria-modal="true"><button class="x">← back</button><div class="body">${html}</div></div>`);
  const close = () => { p.remove(); removeEventListener("keydown", esc); onClose && onClose(); };
  const esc = e => e.key === "Escape" && close();
  addEventListener("keydown", esc); document.body.append(p); $(".x", p).onclick = close; $(".x", p).focus();
  return { p, close, body: $(".body", p) };
}
function burst(x, y, n = 14) {
  const cols = ["#ffc46b", "#ff9ec7", "#b7a6ff", "#ffffff"];
  for (let i = 0; i < n; i++) {
    const p = mk("i", "spark"), a = Math.random() * 6.28, d = 28 + Math.random() * 46;
    p.style.cssText = `left:${x}px;top:${y}px;--dx:${Math.cos(a) * d}px;--dy:${Math.sin(a) * d}px;--c:${cols[i % 4]};--s:${3 + Math.random() * 5}px`;
    document.body.append(p); setTimeout(() => p.remove(), 800);
  }
}
async function seq(el, lines, gap = 1500) {
  for (const l of lines) {
    const [t, c] = Array.isArray(l) ? l : [l, ""];
    const p = mk("p", "line " + c, T(t).replace(/\n/g, "<br>")); el.append(p);
    void p.offsetWidth; show(p); await sleep(gap);
  }
}

// ---------- cute gif / sticker slot ----------
function sticker(k) {
  const g = CONFIG.gifs[k] || {}, d = mk("div", "stk");
  const emo = () => { d.className = "stk"; d.textContent = g.emoji || "🧸"; };
  if (g.src) { d.className = "stk img"; const i = new Image(); i.alt = ""; i.onerror = emo; i.src = g.src; d.append(i); } else emo();
  return d;
}

// ---------- chapters ----------
// ---------- cute animated stickers (swap for your own GIFs via CONFIG.gifs) ----------
const HAT = '<path d="M44 30L60 -4 76 30Z" fill="#ff9ec7"/><circle cx="60" cy="-4" r="5" fill="#ffc46b"/>';
const ARM = '<ellipse class="arm" cx="106" cy="80" rx="8" ry="14" fill="#f3d6ff"/>';
const held = e => `<text x="60" y="112" font-size="30" text-anchor="middle">${e}</text>`;
const bear = (acc = "", cls = "") => `<svg class="stk ${cls}" viewBox="0 -12 120 132" aria-hidden="true"><circle cx="28" cy="30" r="14" fill="#f3d6ff"/><circle cx="92" cy="30" r="14" fill="#f3d6ff"/><circle cx="28" cy="30" r="7" fill="#ffb8d9"/><circle cx="92" cy="30" r="7" fill="#ffb8d9"/><ellipse cx="60" cy="68" rx="40" ry="38" fill="#f3d6ff"/><g class="eyes"><ellipse cx="45" cy="64" rx="4" ry="5.5" fill="#3a2f4a"/><ellipse cx="75" cy="64" rx="4" ry="5.5" fill="#3a2f4a"/></g><circle cx="36" cy="76" r="6" fill="#ff9ec7" opacity=".6"/><circle cx="84" cy="76" r="6" fill="#ff9ec7" opacity=".6"/><path d="M52 76q8 8 16 0" stroke="#3a2f4a" stroke-width="3" fill="none" stroke-linecap="round"/>${acc}</svg>`;
const ST = {
  note: () => bear(HAT + ARM),
  box: () => bear(HAT + held("🎁"), "sway"),
  letters: () => bear('<rect x="40" y="90" width="40" height="26" rx="3" fill="#fdf6e9"/><path d="M40 92l20 14 20-14" stroke="#b7a6ff" fill="none" stroke-width="2"/>' + ARM),
  game: () => bear(held("⭐")),
  win: () => bear(HAT + '<text x="6" y="40" font-size="24">🎉</text><text x="114" y="40" font-size="24" text-anchor="end">🎊</text>')
};
const stk = k => `<div class="stkw">${CONFIG.gifs[k] ? `<img class="gif" src="${CONFIG.gifs[k]}" alt="" onerror="this.remove()">` : ST[k]()}</div>`;

const C = {};
const ORDER = ["intro", "note", "box", "cake", "letters", "game", "secret"];

C.intro = s => {
  s.innerHTML = `<div class="moon"></div><div class="wrap"><div class="txt stack"></div><button class="btn late">OPEN 🎁</button></div><button class="secret-star" aria-label="A tiny hidden star">✦</button>`;
  $(".secret-star", s).onclick = () => modal("✨", CONFIG.secretStar, "Okay 😭");
  const L = CONFIG.intro, btn = $(".btn", s);
  seq($(".txt", s), [[CONFIG.date, "date"], L[0], L[1], L[2], [L[3] + "<span class='hand tag'>" + CONFIG.tagline + "</span>", "big glow"], L[4]], 1900).then(() => show(btn));
  btn.onclick = () => go(1);
};

C.note = s => {
  s.innerHTML = `<div class="wrap"><div class="env">💌</div><h2>${T(CONFIG.noteTitle)}</h2><article class="paper hand">${para(CONFIG.letter)}</article>${stk("note")}<p class="soft">${T(CONFIG.noteEnd)}</p><button class="btn">${CONFIG.noteBtn}</button></div>`;
  $(".btn", s).before(sticker("note"));
  $(".btn", s).onclick = () => modal(CONFIG.ps.title, CONFIG.ps.msg, CONFIG.ps.btn, () => go(2));
};

C.box = s => {
  const B = [
    { k: "obs", i: "🔭", t: "Things I Noticed About You 🌷", h: () => `<h3>Things I Noticed About You 🌷</h3><div class="ncards">${CONFIG.observations.map(([a, b], n) => `<article class="mini rv"><h4>0${n + 1} · ${a}</h4><div class="hand">${para(b)}</div></article>`).join("")}</div>`, b: r => observe(r) },
    { k: "time", i: "🕰️", t: "Our Little Timeline 📖", h: () => `<h3>Our Little Timeline 📖</h3><div class="tl">${CONFIG.timeline.map(([a, b]) => `<details class="rv"><summary>${a}</summary><div class="hand tp">${para(b)}</div></details>`).join("")}</div>`, b: r => observe(r) },
    { k: "when", i: "💌", t: "Open When...", h: () => `<p class="big sm">${T(CONFIG.whenBox).replace(/\n/g, "<br>")}</p><button class="btn">TAKE ME TO THE LETTERS</button>`,
      b: (r, close) => $(".btn", r).onclick = () => S.cake ? (close(), go(4)) : modal("Not yet 🎂", "The letters are waiting after the cake.", "Fine 😭") },
    { k: "baby", i: "📜", t: "Our Little Contract 🤝", h: () => `<h3>OUR LITTLE CONTRACT 🤝</h3><div class="ctr"></div>`, b: r => { $(".ctr", r).before(sticker("contract")); contract($(".ctr", r)); } },
    { k: "lock", i: "🔐", t: "Something You Have To Unlock",
      h: () => S.won ? `<div class="lock">🗝️</div><p class="big sm">UNLOCKED</p><button class="btn">OPEN THE SECRET</button>` : `<div class="lock">🔐</div><p class="big sm">LOCKED 🔐</p><p>You'll have to earn this one.</p><button class="btn">TRY TO OPEN IT</button><p class="nope big sm"></p>`,
      b: (r, close) => $(".btn", r).onclick = () => { if (S.won) { close(); go(6); } else { const n = $(".nope", r); n.textContent = "Not yet. 👀"; n.classList.remove("shake"); void n.offsetWidth; n.classList.add("shake"); } } }
  ];
  s.innerHTML = `<div class="wrap"><h2>🎁 YOUR BIRTHDAY BOX</h2><p class="soft">${para(CONFIG.boxIntro)}</p>${stk("box")}<div class="boxes"></div><div class="end txt"></div><button class="btn late">CONTINUE →</button></div>`;
  const end = $(".end", s), go3 = $(".late", s);
  $(".boxes", s).before(sticker("box"));
  go3.onclick = () => go(3);
  const check = () => { if (B.every(b => S.boxes[b.k]) && !$(".line", end)) seq(end, CONFIG.boxEnd, 1500).then(() => show(go3)); };
  B.forEach((b, n) => {
    const el = mk("button", "gbox" + (S.boxes[b.k] ? " opened" : ""), `<span class="gift"><i>${b.i}</i></span><span>${b.t}</span>`);
    el.style.setProperty("--i", n);
    el.onclick = () => { const p = panel(b.h(), check); b.b && b.b(p.body, p.close); S.boxes[b.k] = 1; save(); el.classList.add("opened"); };
    $(".boxes", s).append(el);
  });
  check();
};

const cakeSVG = () => `<svg class="cake" viewBox="0 0 220 210" aria-label="Birthday cake with lit candles"><ellipse cx="110" cy="196" rx="100" ry="11" fill="#12112e"/><rect x="28" y="136" width="164" height="58" rx="12" fill="#cdb8ff"/><rect x="28" y="130" width="164" height="16" rx="8" fill="#fff6ff"/><rect x="52" y="92" width="116" height="46" rx="10" fill="#ffc2dd"/><rect x="52" y="86" width="116" height="14" rx="7" fill="#fff6ff"/>${[72, 91, 110, 129, 148].map(x => `<rect x="${x - 3}" y="52" width="6" height="36" rx="2" fill="#ffe9b8"/><ellipse class="flame" cx="${x}" cy="44" rx="5" ry="9"/>`).join("")}</svg>`;

const glints = () => ["10% 22%", "90% 8%", "96% 56%", "0% 62%", "52% -4%", "82% 88%"].map((p, i) => `<i class="glit" style="left:${p.split(" ")[0]};top:${p.split(" ")[1]};animation-delay:${i * .35}s">✦</i>`).join("");
C.cake = s => {
  s.innerHTML = `<div class="dimmer"></div><div class="wrap"><div class="cakewrap">${cakeSVG()}${glints()}</div><div class="txt"></div><button class="btn late">I'm Ready ✨</button></div><div class="count" aria-live="assertive"></div>`;
  const t = $(".txt", s), btn = $(".btn", s), cw = $(".cakewrap", s), cnt = $(".count", s);
  const finish = async () => {
    await seq(t, CONFIG.wish, 1900); await sleep(600);
    btn.before(sticker("wish")); btn.textContent = "I MADE YOU SOMETHING ELSE →"; btn.disabled = false; btn.onclick = () => go(4); show(btn);
  };
  const blowOut = async () => {
    cw.classList.remove("puff"); const b = cw.getBoundingClientRect();
    for (const f of $$(".flame", cw)) {
      const r = f.getBoundingClientRect(); f.classList.add("off"); burst(r.left + r.width / 2, r.top, 6);
      const sm = mk("i", "smoke"); sm.style.cssText = `left:${r.left - b.left + r.width / 2 - 5}px;top:${r.top - b.top}px`; cw.append(sm); setTimeout(() => sm.remove(), 2300);
      await wait(140);
    }
  };
  if (S.cake) { $("svg", cw).classList.add("out"); finish(); return; }
  seq(t, CONFIG.cakeIntro, 1700).then(() => show(btn));
  btn.onclick = async () => {
    btn.disabled = true; btn.classList.remove("in"); t.innerHTML = ""; s.classList.add("shade"); await wait(1000);
    for (const n of [3, 2, 1]) { cnt.className = "count"; cnt.textContent = n; void cnt.offsetWidth; cnt.classList.add("pop"); await wait(1100); }
    cnt.className = "count word hold"; cnt.textContent = "BLOW…";
    btn.textContent = "TAP TO BLOW 💨"; btn.disabled = false; btn.classList.add("blow"); show(btn);
    btn.onclick = async () => {
      btn.disabled = true; btn.classList.remove("in"); cw.classList.add("puff"); await wait(1000);   // flames lean, then go out
      cnt.className = "count"; cnt.textContent = "";
      await blowOut(); await wait(900); s.classList.remove("shade"); S.cake = true; save(); finish();
    };
  };
};

C.letters = s => {
  s.innerHTML = `<div class="wrap"><h2>OPEN WHEN... 💌</h2><p class="soft">${para(CONFIG.lettersIntro)}</p>${stk("letters")}<div class="envs"></div><div class="end txt"></div><button class="btn late">KEEP GOING →</button></div>`;
  const end = $(".end", s), kg = $(".late", s); kg.onclick = () => go(5);
  $(".envs", s).before(sticker("letters"));
  const check = () => { if (CONFIG.letters.every((_, i) => S.letters[i]) && !$(".line", end)) seq(end, CONFIG.lettersEnd, 1500).then(() => show(kg)); };
  CONFIG.letters.forEach(([title, text], i) => {
    const el = mk("button", "envl" + (S.letters[i] ? " opened" : ""), `<span class="seal">✦</span>${T(title)}`);
    el.style.setProperty("--i", i);
    el.onclick = () => { panel(`<h3>${T(title)}</h3><article class="paper hand">${para(text)}</article>`, check); S.letters[i] = 1; save(); el.classList.add("opened"); };
    $(".envs", s).append(el);
  });
  check();
};

C.game = s => {
  s.innerHTML = `<div class="wrap">${stk("game")}<div class="txt stack"></div><button class="btn late">START GAME ⭐</button></div>`;
  const G = CONFIG.game, btn = $(".btn", s);
  seq($(".txt", s), [...CONFIG.gameIntro, `Catch ${G.stars} stars in ${G.seconds} seconds. ⏱️`], 1500).then(() => show(btn));
  btn.onclick = () => play(s);
};
function play(s) {
  const G = CONFIG.game; let n = 0, live = true;
  s.innerHTML = `<div class="gw"><div class="hud"><span>⭐ STARS: <b class="n">0</b> / ${G.stars}</span><span>⏱️ TIME: <b class="t">${G.seconds}</b></span></div><div class="arena"></div></div>`;
  const A = $(".arena", s), endAt = Date.now() + G.seconds * 1000;
  const over = html => { const m = mk("div", "modal", `<div class="card">${html}</div>`); s.append(m); return m; };
  const stop = win => {
    live = false; clearInterval(tm); A.innerHTML = "";
    if (win) {
      S.won = true; save();
      const m = over(`${stk("win")}<div class="row10">${"⭐".repeat(G.stars)}</div><h2>${T(CONFIG.gameWinTitle).replace(/\n/g, "<br>")}</h2><p class="big sm">${G.stars} / ${G.stars} STARS CAUGHT</p><p>${T(CONFIG.gameWin).replace(/\n/g, "<br>")}</p><div class="capsule">🔐</div><button class="btn">🔐 UNLOCK THE SECRET</button>`);
      $(".capsule", m).before(sticker("win"));
      $(".btn", m).onclick = () => go(6);
    } else {
      const m = over(`<h2>TIME'S UP 😭</h2><p class="big sm">You caught ${n} / ${G.stars} stars.</p><p>${T(CONFIG.gameLose)}</p><button class="btn">TRY AGAIN ⭐</button>`);
      $(".btn", m).onclick = () => play(s);
    }
  };
  const spawn = () => {
    const r = A.getBoundingClientRect(), z = Math.round(Math.max(56, Math.min(76, r.width * .17)));
    const st = mk("button", "star", "★"); st.setAttribute("aria-label", "Catch the star");
    st.style.cssText = `--z:${z}px;left:${Math.random() * (r.width - z)}px;top:${Math.random() * (r.height - z)}px`;
    const hit = (x, y) => { if (!live || !st.isConnected) return; st.remove(); burst(x, y); $(".n", s).textContent = ++n; n >= G.stars ? stop(true) : spawn(); };
    st.onpointerdown = e => { e.preventDefault(); hit(e.clientX, e.clientY); };
    st.onclick = e => { if (!e.detail) { const b = st.getBoundingClientRect(); hit(b.left + z / 2, b.top + z / 2); } };   // keyboard activation
    A.append(st);
  };
  const tm = setInterval(() => { const left = Math.max(0, Math.ceil((endAt - Date.now()) / 1000)); $(".t", s).textContent = left; if (left <= 0) stop(false); }, 200);
  spawn();
}

C.secret = s => {
  s.innerHTML = `<div class="moon"></div><div class="wrap"><div class="txt"></div><button class="btn late">OPEN OUR TIME CAPSULE 🗝️</button></div>`;
  const w = $(".wrap", s), btn = $(".btn", s);
  seq($(".txt", s), CONFIG.secretIntro, 3200).then(() => show(btn));
  btn.onclick = async () => { w.style.cssText = "opacity:0;transition:opacity 1s"; await wait(1000); const c = capsule(); w.replaceWith(c); s.scrollTop = 0; observe(c); };
};
function floaties(s) {
  ["🍬", "🌷", "✨", "🧸", "🍬", "🌷"].forEach(e => { const f = mk("i", "fl", e); f.style.cssText = `left:${8 + Math.random() * 84}vw;font-size:${14 + Math.random() * 12}px;animation-duration:${14 + Math.random() * 10}s;animation-delay:${-Math.random() * 14}s`; s.append(f); });
}

// ---------- contract (inside the birthday room) ----------
function contract(root) {
  const K = CONFIG, num = i => String(i + 1).padStart(2, "0");
  const sign = () => {
    root.innerHTML = `<div class="agreed">AGREED ✓</div><h4 class="shd">DIGITAL SIGNATURE</h4><div class="paper sigp"><p>Ishan: <span class="hand">“${esc(S.cname)}”</span></p><p>Iris: <span class="hand">“${esc(K.mommy)}”</span></p><p class="dt">${esc(S.cdate)}</p></div><button class="btn dl">DOWNLOAD CONTRACT 📜</button>`;
    $(".dl", root).onclick = () => downloadContract(S.cname, S.cdate);
  };
  if (S.agreed) return sign();
  root.innerHTML = `<div class="paper hand">${para(K.contractIntro)}</div><label class="soft" for="cn">What's your name, Mr. Birthday Boy?</label><input id="cn" class="fld" placeholder="Type your name here…" maxlength="30" autocomplete="off" value="${esc(S.cname)}"><button class="btn go">THAT'S ME →</button><div class="rest"></div>`;
  const inp = $("#cn", root), rest = $(".rest", root);
  const reveal = quiet => {
    const n = inp.value.trim();
    if (!n) { inp.classList.remove("shake"); void inp.offsetWidth; inp.classList.add("shake"); inp.focus(); return; }
    S.cname = n; save();
    rest.innerHTML = `<p class="hand">And your mommy is…</p><p class="big sm">${esc(K.mommy)} 🌷</p><h4 class="shd">TERMS &amp; CONDITIONS</h4><ol class="clauses">${K.clauses.map((c, i) => `<li class="clause" style="--i:${i}"><b>CLAUSE ${num(i)}</b>${T(c)}</li>`).join("")}</ol><p class="big sm">Do you agree?</p><button class="btn yes">YES, I AGREE 🤝❤️</button><button class="btn ghost again">I NEED TO READ AGAIN 😭</button>`;
    $(".again", rest).onclick = () => { const o = $(".clauses", rest); o.scrollIntoView({ behavior: "smooth", block: "start" }); o.querySelectorAll(".clause").forEach(x => { x.style.animation = "none"; void x.offsetWidth; x.style.animation = ""; }); };
    $(".yes", rest).onclick = async () => {
      S.agreed = true; S.cdate = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }); save();
      rest.innerHTML = `<div class="agreed">🤝 AGREED ✓</div>`;
      for (let i = 0; i < 6; i++) setTimeout(() => burst(innerWidth * (.2 + Math.random() * .6), innerHeight * (.25 + Math.random() * .4), 14), i * 160);
      await wait(1500); sign();
    };
    if (!quiet) rest.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  $(".go", root).onclick = () => reveal(false); inp.onkeydown = e => e.key === "Enter" && reveal(false);
  if (S.cname) reveal(true);
}
function contractHTML(name, date) {
  const K = CONFIG;
  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Our Little Contract</title>
<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&family=Cormorant+Garamond:wght@600&family=Fredoka:wght@400;500&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;padding:22px;background:radial-gradient(ellipse at 50% 0,#33236b,#070b1f 75%) #070b1f;font-family:Fredoka,system-ui,sans-serif}
.p{width:100%;max-width:640px;background:linear-gradient(#fdf6e9,#f1e6d2);color:#3a2f4a;border:6px double #d9b36a;border-radius:12px;padding:34px 24px;box-shadow:0 20px 60px rgba(0,0,0,.5)}
h1{margin:0;text-align:center;font:600 2.3rem/1.1 "Cormorant Garamond",Georgia,serif}
.k{text-align:center;color:#a07a2c;letter-spacing:.2em;font-size:.72rem;margin:6px 0 18px}
.who{text-align:center;font:700 1.6rem Caveat,cursive;margin:6px 0}
h2{text-align:center;font-size:.8rem;letter-spacing:.2em;color:#a07a2c;margin:26px 0 8px}
ol{list-style:none;margin:0;padding:0}
li{margin:12px 0;padding:6px 0 6px 14px;border-left:3px solid #ff9ec7;line-height:1.5}
li b{display:block;font-size:.7rem;letter-spacing:.16em;color:#a07a2c}
.sig{display:flex;gap:18px;margin-top:28px;text-align:center}
.sig div{flex:1;border-top:2px solid #3a2f4a;padding-top:6px;font-size:.72rem;letter-spacing:.12em}
.sig i{display:block;font:700 2rem Caveat,cursive;color:#5a3fa8;letter-spacing:0}
.d{text-align:center;margin-top:22px;font:500 1.4rem Caveat,cursive}
@media print{body{background:#fff}.p{box-shadow:none}}
</style></head><body><div class="p"><h1>Our Little Contract 📜</h1><p class="k">OFFICIALLY SILLY · FULLY BINDING (PROBABLY)</p>
<p class="who">Ishan: “${esc(name)}”</p><p class="who">Iris 🌷</p>
<h2>TERMS &amp; CONDITIONS</h2><ol>${K.clauses.map((c, i) => `<li><b>CLAUSE ${String(i + 1).padStart(2, "0")}</b>${esc(T(c))}</li>`).join("")}</ol>
<div class="sig"><div><i>${esc(name)}</i>ISHAN</div><div><i>${esc(K.mommy)}</i>IRIS</div></div>
<p class="d">Signed on ${esc(date)} 🍬</p></div></body></html>`;
}
async function downloadContract(name, date) {
  const html = contractHTML(name, date), filename = "Our-Little-Contract.html";
  try {   // inside Claude's hosted preview a save prompt is used; everywhere else a normal download
    const dl = window.claude && await window.claude.use("downloads");
    if (dl) { await dl.save({ filename, data: html }); return; }
  } catch (e) { if (e && e.code === "declined") return; }
  const a = mk("a"); a.href = URL.createObjectURL(new Blob([html], { type: "text/html" })); a.download = filename;
  document.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 4000);
}

// ---------- secret page: time capsule ----------
function capsule() {
  const K = CONFIG, sec = (h, body, cls = "") => `<section class="rv ${cls}"><h3>${h}</h3>${body}</section>`;
  const goals = K.goals.map(([a, b]) => `<li class="bk"><label><input type="checkbox"><b>${a}</b></label><div class="hand">${para(b)}</div></li>`).join("");
  const wishes = K.wishes.map(([a, ph], i) => `<li class="bk"><b>${a}</b><input class="fld" placeholder="${ph}" maxlength="140" autocomplete="off"><button class="btn sv" data-k="w${i}">SAVE</button><p class="hand saved" data-s="w${i}"></p></li>`).join("");
  const c = mk("div", "wrap cap", [
    sec("WHAT WE WERE LIKE RIGHT NOW", `<div class="cards">${K.now.map(x => `<div class="mini">${T(x)}</div>`).join("")}</div>`),
    sec("THINGS I HOPE NEVER CHANGE 🌷", `<div class="ncards">${K.hope.map(([a, b]) => `<details class="mini nc"><summary>${a}</summary><div class="hand">${para(b)}</div></details>`).join("")}</div>`),
    sec("THINGS I WANT TO ACHIEVE WITH YOU ✨", `<ul class="bucket">${goals}${wishes}</ul>`),
    sec("A MESSAGE TO FUTURE US", `<article class="paper hand">${para(K.future)}</article>`),
    sec("LEAVE SOMETHING FOR FUTURE US", `<form><input class="fld" name="who" placeholder="Your name" autocomplete="off" required><textarea class="fld" name="msg" placeholder="Your message to future us" required></textarea><input class="fld" name="when" type="date" aria-label="Date" value="${new Date().toISOString().slice(0, 10)}"><button class="btn">SAVE TO THE TIME CAPSULE ✨</button></form><p class="soft ok" aria-live="polite"></p><div class="cards notes"></div>`),
    `<section class="rv finale" data-fin><div class="txt"></div></section>`
  ].join(""));
  const f = $("form", c), ok = $(".ok", c), notes = $(".notes", c);
  const list = () => { notes.innerHTML = ""; loadFuture().forEach(e => { const d = mk("div", "mini"); const b = mk("b"); b.textContent = `${e.who} · ${e.when}`; const p = mk("p"); p.textContent = e.msg; d.append(b, p); notes.append(d); }); };
  f.onsubmit = e => {
    e.preventDefault(); const d = new FormData(f);
    saveFuture({ who: d.get("who").trim(), msg: d.get("msg").trim(), when: d.get("when") });
    f.msg.value = ""; ok.textContent = "Future us will find this here. 🤍"; list();
  };
  $$(".sv", c).forEach(b => {   // the two "your own wish" fields: saved on this device and shown after saving
    const k = b.dataset.k, inp = b.previousElementSibling, out = $(`[data-s="${k}"]`, c);
    const paint = () => { out.textContent = S.w[k] ? "✓ " + S.w[k] : ""; };
    inp.value = S.w[k] || ""; paint();
    b.onclick = () => { S.w[k] = inp.value.trim(); save(); paint(); if (S.w[k]) { const r = b.getBoundingClientRect(); burst(r.left + r.width / 2, r.top, 10); } };
  });
  list(); return c;
}
function observe(c) {
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return; show(e.target); io.unobserve(e.target);
    if (e.target.dataset.fin) seq($(".txt", e.target), CONFIG.finale, 2600);
  }), { threshold: .25 });
  $$(".rv", c).forEach(x => io.observe(x));
}

// ---------- chapter navigation (guarded: secret needs the game win) ----------
let busy = false;
async function go(i) {
  if (busy) return; busy = true;
  if (ORDER[i] === "secret" && !S.won) i = 5;
  S.ch = i; save();
  const old = $(".ch.on"); if (old) { old.classList.remove("on"); await sleep(700); old.remove(); }
  document.body.dataset.ch = ORDER[i];
  const s = mk("section", "ch " + ORDER[i]); $("#stage").append(s);
  C[ORDER[i]](s); if (["note", "box", "cake", "letters"].includes(ORDER[i])) floaties(s); void s.offsetWidth; s.classList.add("on");
  busy = false;
}

// ---------- optional music (never autoplays) ----------
const mb = $("#music"); let au;
mb.onclick = () => {
  if (!au) { au = new Audio(CONFIG.MUSIC_FILE); au.loop = true; au.volume = .6; }
  if (au.paused) au.play().then(() => mb.setAttribute("aria-pressed", "true")).catch(() => modal("No music yet 🎵", `Add an mp3 at ${CONFIG.MUSIC_FILE} and this button will play it.`, "Okay"));
  else { au.pause(); mb.setAttribute("aria-pressed", "false"); }
};

// ---------- glitter: tap sparkles + gentle mouse trail ----------
if (!RM) {
  let last = 0; const calm = () => document.body.dataset.ch === "secret";
  addEventListener("pointerdown", e => { if (!e.target.closest(".star")) burst(e.clientX, e.clientY, calm() ? 3 : 8); });
  addEventListener("pointermove", e => { const n = performance.now(); if (e.pointerType === "touch" || calm() || n - last < 70) return; last = n; burst(e.clientX, e.clientY, 1); });
}

go(S.ch);
})();
