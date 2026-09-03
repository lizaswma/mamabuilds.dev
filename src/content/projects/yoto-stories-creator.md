---
title: "Yoto Stories Creator"
category: "For Kids"
summary: "A tool for creating custom audio stories for your little one - feed it an idea, preview the story in English, then generate it as an MP3 in Mandarin, Cantonese, or French to load straight onto your Yoto."
status: "Private beta"
accessLabel: "Request access"
accessUrl: "https://mamabuilds.dev/"
icon: "📖"
order: 3
draft: false
---

## Why I built this

I really want my toddler reaching for her Yoto instead of asking for screen time, but good
Mandarin or Cantonese story content for kids is almost impossible to find. So I built a tool
to make my own: feed it a story idea, and it turns it into a short story you can generate as
audio in multiple languages.

The best part is I can make stories *about her* - she lights up every time - while sneaking
in some Mandarin and Cantonese practice at the same time. I'm still tuning the voice models
to get the tones right, though - the Cantonese still bothers me.

## What it does

- Feed it a story idea and it drafts a 1-2 minute story, previewed in English first.
- Choose which language(s) to generate the story in - Mandarin, Cantonese, and French are
  supported today.
- Generates MP3s ready to drop straight onto your Yoto.
- Personalize stories with your kid's name as the main character.

## Listen to a sample

"Penny and Baba Go on an Airplane" - a story generated for my daughter, in Mandarin:

<audio controls class="w-full max-w-md" src="/audio/yoto-stories-creator/penny-and-baba-go-on-an-airplane-mandarin.mp3"></audio>

## Try it

Yoto Stories Creator is currently in **private beta** - story generation isn't free, so
access is limited while I dial in costs and voice quality. Interested? [Reach out](https://mamabuilds.dev/)
and I'll get you set up.

## How I built it

This one's a simple web app, riding on the same Vercel setup as my other projects. I made a
point of telling the AI upfront that this needed to support multiple languages and possibly
multiple model providers, so that flexibility got built in from day one instead of bolted on
later.
