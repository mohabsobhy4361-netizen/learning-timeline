/* ===== Theme: يفتكر اختيارك ===== */
const toggle = document.getElementById("theme-toggle");
try { toggle.checked = localStorage.getItem("theme") === "dark"; } catch (e) {}
toggle.addEventListener("change", () => {
  try { localStorage.setItem("theme", toggle.checked ? "dark" : "light"); } catch (e) {}
});

/* ===== بيانات المشاريع =====
   عدّل هنا بس: date (سنة-شهر-يوم)، img (مسار الصورة)، والكلام.
   img فاضي = بيظهر مربع منقط فيه اسم الصورة اللي المفروض تحطها. */
const projects = [
  { id: "guess", date: "2026-08-20", title: "Guessing Game", img: "", imgName: "images/projects/guessing-game.png",
    short: "My first Python program, built with the random module.",
    about: "A console game where the computer picks a secret number and I try to guess it. It was the first time I used a library and a loop together.",
    steps: ["Imported the random module and printed a welcome message.", "Used random.randint to pick the secret number.", "Wrapped the guess in a while loop with if / elif / else to say higher, lower or correct."],
    tech: "Python, random" },
  { id: "premium", date: "2026-08-25", title: "Premium Academy Subscription Calculator", img: "", imgName: "images/projects/premium-academy.png",
    short: "Calculates a swimming subscription and prints it in Arabic words.",
    about: "A program for my swimming academy. It asks for the number of swimmers, calculates the subscription, and writes the total in Arabic words (Egyptian style) instead of digits.",
    steps: ["Printed a welcome message to Premium Academy and read the swimmers count with input().", "Multiplied by the price per swimmer, with conditions for any discounts.", "Wrote a function that converts the number to Arabic words using lists and dictionaries for units, tens and hundreds."],
    tech: "Python, functions, dictionaries" },
  { id: "rps", date: "2026-09-15", title: "Rock Paper Scissors", img: "", imgName: "images/projects/rock-paper-scissors.png",
    short: "Terminal game against the computer, later upgraded to a GUI with sounds.",
    about: "I choose rock, paper or scissors and the computer picks randomly, then we see who wins. Later I rebuilt it as a full GUI game with more options and a different sound for win, lose, draw and each move.",
    steps: ["Used random.choice to let the computer pick.", "Wrote the winning rules with if / elif / else.", "Rebuilt it as a GUI and added a sound library to play sounds on every result."],
    tech: "Python, random, GUI, sound" },   /* TODO: عدّل التاريخ لتاريخ المشروع الحقيقي */
  { id: "xo", date: "2026-10-13", title: "XO Game", img: "", imgName: "images/projects/xo-game.png",
    short: "A two-player XO game with sound effects.",
    about: "A GUI Tic-Tac-Toe game. Every move, win, loss and draw has its own sound.",
    steps: ["Built the 3x3 board with buttons in a grid.", "Checked all winning lines after every move to detect a win or a draw.", "Added a sound library and played a different sound for each event."],
    tech: "Python, GUI, sound" },
  { id: "beads", date: "2026-10-15", title: "Smart Prayer Beads", img: "", imgName: "images/projects/smart-prayer-beads.png",
    short: "A digital tasbeeh that plays a dhikr audio when you press the button.",
    about: "My first project after learning GUI. Each press counts and plays a dhikr sound. The audio comes from a Python library, so no external mp3 file is needed.",
    steps: ["Built the window, the counter label and the button.", "On every click, increased the counter and updated the label.", "Added an audio feature that plays the dhikr on click."],
    tech: "Python, GUI, audio library" },   /* TODO: اكتب اسم مكتبة الصوت اللي استخدمتها */
  { id: "calc", date: "2026-10-16", title: "GUI Calculator", img: "", imgName: "images/projects/calculator.png",
    short: "A calculator with a graphical interface.",
    about: "A calculator app with buttons for digits and operations, built to practice GUI tools.",
    steps: ["Created the display and a grid of buttons.", "Connected each button to a function that builds the expression.", "Evaluated the result and handled errors such as division by zero."],
    tech: "Python, GUI" },
  { id: "translator", date: "2026-10-16", title: "Language Translator", img: "", imgName: "images/projects/translator.png",
    short: "Translates between 5 languages using an API.",
    about: "A GUI app where I type text, choose the source and target language, and get the translation from an online API.",
    steps: ["Built the GUI with an input box, two language menus and a button.", "Sent the text to the translation API with the chosen languages.", "Showed the returned translation in the result box."],
    tech: "Python, GUI, API" },
  { id: "pool", date: "2026-10-25", title: "Swimming Kids Page", img: "", imgName: "images/projects/swimming-page.png",
    short: "My first web page styled with CSS.",
    about: "A page with a photo of kids swimming in the pool. It was my first time using a CSS file to style an HTML page.",
    steps: ["Wrote the HTML structure: heading, image and text.", "Linked a style.css file.", "Styled colors, fonts, spacing and layout."],
    tech: "HTML, CSS" },
  { id: "portfolio", date: "2026-11-02", title: "Portfolio Website", img: "", imgName: "images/projects/portfolio.png",
    short: "My first professional, organized website.",
    about: "The first page I built in a clean, organized way: header, bio, skills, and a contact form, with a responsive layout.",
    steps: ["Planned sections and used semantic HTML with BEM class names.", "Built the layout with CSS Grid and Flexbox, plus media queries for mobile.", "Added the animated background and the light / dark theme switch."],
    tech: "HTML, CSS" },
  { id: "prayer", date: "2026-11-05", title: "Prayer Times Website", img: "", imgName: "images/projects/prayer-times.png",
    short: "Shows prayer times with a countdown to the next prayer.",
    about: "Shows the current prayer, the next prayer, and a live countdown. It is published on GitHub Pages.",
    steps: ["Fetched the day's prayer times for the user's city.", "Used JavaScript timers to find the current and next prayer.", "Updated the countdown every second and styled the page with CSS."],
    tech: "HTML, CSS, JavaScript, GitHub Pages" }   /* TODO: عدّل التاريخ */
];

const fmt = (d) => new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
const list = document.getElementById("project-list");
const detail = document.getElementById("project-detail");
const section = document.getElementById("skills");

projects.sort((a, b) => a.date.localeCompare(b.date)).forEach((p) => {
  const li = document.createElement("li");
  li.innerHTML = `<button class="tl__card" type="button" data-id="${p.id}">
    <span class="tl__date">${fmt(p.date)}</span>
    <h3 class="tl__name">${p.title}</h3>
    <p class="tl__short">${p.short}</p></button>`;
  list.appendChild(li);
});

function show(p) {
  document.getElementById("d-title").textContent = p.title;
  document.getElementById("d-date").textContent = "Built on " + fmt(p.date) + " · " + p.tech;
  document.getElementById("d-fig").innerHTML = p.img
    ? `<img src="${p.img}" alt="${p.title}" />`
    : `<div class="ph">—<br />Image: ${p.imgName}</div>`;
  document.getElementById("d-docs").innerHTML =
    `<h4>About the project</h4><p>${p.about}</p>
     <h4>How I built it</h4><ol>${p.steps.map((s) => `<li>${s}</li>`).join("")}</ol>`;
  list.hidden = true;
  detail.hidden = false;
  section.scrollIntoView();
}

list.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-id]");
  if (btn) show(projects.find((p) => p.id === btn.dataset.id));
});
document.getElementById("back-btn").addEventListener("click", () => {
  detail.hidden = true;
  list.hidden = false;
  section.scrollIntoView();
});
