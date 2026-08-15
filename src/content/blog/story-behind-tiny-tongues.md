---
title: "The story behind Tiny Tongues"
description: "The design process behind building my first iOS app: the product choices that made it easier to build with AI, and the parts AI still couldn't do for me."
pubDate: 2026-08-14
tags: ["ClaudeCode", "TinyTongues", "iOSDevelopment", "VibeCoding"]
---

I built [Tiny Tongues](/projects/tiny-tongues) for my daughter. It was also partly for me,
since I wanted to experiment with what it would take to build and deploy a native app on my
own device. I knew I'd be iterating on it for a while, because I wanted Tiny Tongues to evolve
alongside my daughter as her vocabulary developed. Planning ahead and telling Claude what my
plans were made those iterations a lot simpler.

## Product choices that made it easier to build with AI

Tell your AI these things! I actually learned how to build better by sharing these constraints
with Claude and having it guide me through the choices:

- **Multiple languages, multiple TTS providers.** I wanted to add more languages, and I knew
  different languages might need different models to get the quality I wanted. Cantonese in
  particular isn't well supported by many models, so Claude made the TTS provider an
  abstraction and helped me figure out that Google Cloud TTS actually has pretty good support
  for French and Cantonese. It should be trivial now if I ever want to add a fifth language
  that needs yet another provider.
- **Content that grows without an app update.** I wanted to start with a default set of cards
  but make it easy to add more later, without the user having to update the app. Creating new
  content modules turned out to be genuinely fun. I expanded my own vocabulary in the process!
  I even built a skill for it, so I could lean on Claude to help brainstorm good words for a
  category and keep the same generation-and-approval process consistent every time we added a
  new module. For hosting all that content, Claude recommended Google Cloud Storage: it met
  what I needed, and it was already set up as an integrated provider for the app since I was
  using it for Cantonese and French text-to-speech support.
- **A consistent art style.** I wanted every card to share the same look, so once we landed on
  a style early on, Claude reuses that same prompt every time we generate a new card's
  illustration. It's apparently a good style too. My husband liked the panda card so much
  that he stole it for one of his own projects.
- **Representation.** This started as a Chinese-learning app, and we're Asian, so when some of
  the early cards with people on them showed blond kids, I had the AI change that. I wanted my
  daughter to feel like this app was made for her. That's now baked into the image generation
  prompt itself, which saves me a lot of back-and-forth every time I add a new content module.
- **Native, offline, and cross-platform down the line.** I wanted this to be a native iOS app
  so content could live on the device with offline access (think tablets on the go), and I
  wanted to be able to extend to Android later without rebuilding everything. Expo was the
  choice here, so I can share the same codebase across iOS now and Android eventually.

## What AI couldn't do for me

- **QA the translation quality.** This still required a human in the loop. Since this is a
  language-learning app, getting the tone right and choosing colloquial, day-to-day terms
  actually matters, and that's not something I could just hand off. I'm also not a native
  speaker for some of these languages, so honestly, I do feel like I'm taking a bit of a
  gamble with some of these translations.
- **Navigate Xcode and the Apple developer account setup.** This part was all me. Both tools
  are built for trained developers, not newbies like me, so just figuring out where to click
  took real time and effort. And I had no idea Apple's app review wait times were so long;
  that alone reset my expectations for how fast I could actually ship.

I'm really excited for my daughter to learn with Tiny Tongues, though so far she's only into
the cat card. Maybe it's for the best that her screen addiction isn't too strong yet.
