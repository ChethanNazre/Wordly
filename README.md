
 ---

# 🎮 Wordly – A Modern Spin on Wordle

---

## 🌟 Inspiration

**Wordly** is inspired by the viral online game **Wordle**, which captured hearts worldwide with its simple yet addictive gameplay.

Like millions of others, I was fascinated by the addictive simplicity of Wordle — a five-letter guessing game that took over social media.

But as clones and spin-offs began to appear online, many were overloaded with constant advertisements, pop-ups, and distractions that broke the smooth, focused experience that made the original so enjoyable.

That frustration inspired me to build Wordly — an ad-free, open-source, and beautifully responsive clone crafted with React, TypeScript, and Tailwind CSS.

This wasn’t just a rebuild — it was a learning journey in designing smooth interactions, modular architecture, and elegant UI while staying true to the charm of the original Wordle.


---

## ⚙️ Tech Stack

| Technology          | Purpose                                   |
| ------------------- | ----------------------------------------- |
| ⚛️ **React**        | UI Component Structure & State Management |
| 🟦 **TypeScript**   | Type Safety & Code Reliability            |
| 🎨 **Tailwind CSS** | Rapid, Utility-first Styling              |
| 🧩 **Headless UI**  | Accessible Modals & Popups                |
| ⌛ **Date Logic**    | Daily Word Calculation                    |

---

## 🧠 Design Decisions

When analyzing the original Wordle, I discovered something interesting —
the **entire word list** is stored locally on the **frontend** as a simple array!
To mimic that, Wordly uses the same logic to pick the daily word based on a fixed timestamp:

```ts
WORDS[Math.floor((NOW_IN_MS - GAME_EPOCH_IN_MS) / ONE_DAY_IN_MS)];
```

* Each day’s puzzle is **unique**.
* All logic happens **client-side**, ensuring fast, offline-capable gameplay.
* The grid, keyboard, and animations are built from **modular React components**.
* **TypeScript** ensures strict correctness across letter and word validation.
* **Tailwind + Headless UI** power the clean design and smooth modals for:

  * 🕹️ How to Play
  * 🏆 Win Popup
  * 🚫 Invalid Word Alerts

---

## 💻 Running Wordly Locally

Clone the repository and get started instantly:

```bash
# Clone the repo
git clone https://github.com/ChethanNazreS/wordly.git

# Navigate into the project
cd wordly

# Install dependencies
npm install

# Run locally
npm start
```

Then open **[http://localhost:3000](http://localhost:3000)** to play Wordly on your browser 🎯

---

## ✨ Features

* Daily rotating puzzles (based on system date)
* Interactive virtual keyboard
* Animated cell reveals
* Winning celebration popup
* Invalid word validation
* Mobile-friendly responsive UI
* Simple, fast, and open-source

---

## 🔮 Future Enhancements

* 🌍 Global leaderboard integration
* 🧩 Custom difficulty modes
* 📱 Progressive Web App (PWA) support

---

## 💬 About the Creator

Hi, I’m **Chethan Nazre S** — a passionate **Full Stack Developer** and **AI & ML enthusiast** who loves blending **logic and design** to create intuitive digital experiences.

You can find more of my work here:
🔗 [GitHub Profile → ChethanNazreS](https://github.com/ChethanNazre)

---

## 🪶 License

This project is **open source** under the [MIT License](LICENSE).
Feel free to fork, modify, and enhance your own version of **Wordly**.

---

