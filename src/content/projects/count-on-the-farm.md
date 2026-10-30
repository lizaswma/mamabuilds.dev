---
title: "Count on the Farm"
category: "For Kids"
summary: "A simple, cute counting game for toddlers - tap farm animals to count them, compare which side has more, feed them their snacks, and hear it all narrated in English or Mandarin."
status: "Live on iOS"
appStoreUrl: "https://apps.apple.com/us/app/count-on-the-farm/id6794224432"
iconImage: "/images/count-on-the-farm/icon.png"
favicon: "/images/count-on-the-farm/favicon.png"
added: 2026-08-11
updated: 2026-10-30
---

## Why I built this

My toddler is learning to count, and I wanted a simple, cute game that could teach her the
basics. I actually did some brainstorming with AI to figure out what was age-appropriate for
her - it used its knowledge to recalibrate my expectations as a parent of a 2.5 year old (turns
out I was overestimating what she's ready for). It was also important to me that the art felt
cute, so I went through several iterations with Claude to land on a style that felt right.

This is a genuinely simple app, but that's kind of the point - building with AI means you can
be super bespoke and just build what you need right now, then iterate later. I still want to
make it better: nicer-sounding voices, and more levels so older kids can learn to count past
five. Like my other apps for kids, this one supports Mandarin and English, and I'm working on
adding Cantonese.

## What it does

- Tap farm animals - cows in the pasture, chickens in the coop, horses in the field, pigs in
  the pen - to count them, with each tap getting its own sound and a spoken number.
- A "Which Side Has More?" mode for comparing two groups and seeing which is bigger.
- A "Feed the Animals" mode where the animal asks for a number of snacks, and each tap puts one
  on the plate and counts it.
- Every visit deals a new scene with two to five animals, so replaying means new counting
  practice.
- Toggle narration between English and Mandarin.
- A little celebration at the end of each scene to celebrate correct counting.

## Try it

Count on the Farm is **live on the App Store** for iPhone and iPad. It's simple by design for
now, and I'm actively adding more modules as my daughter grows into them.

## How I built it

This is a native iOS app built with SwiftUI. It's intentionally small in scope - three modes
on one little farm - which let me focus on getting the details right: tap targets
sized for small hands, sounds and narration for each animal, and artwork I iterated on with
Claude until it felt properly cute. Building with AI made it easy to stay this bespoke: build
exactly what my toddler needs today, and add more levels and languages later as she's ready
for them.
