---
title: "Count on the Farm"
category: "Family & Kids"
summary: "A simple, cute counting game for toddlers - tap farm animals to count them, compare which side has more, and hear it all narrated in English or Mandarin."
status: "Beta · TestFlight"
accessLabel: "Join the TestFlight beta"
accessUrl: "https://testflight.apple.com/join/HMWmzFVR"
iconImage: "/images/count-on-the-farm/icon.png"
favicon: "/images/count-on-the-farm/favicon.png"
order: 4
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
five. Like my other apps for kids, this one supports Mandarin and English. We'll see if
Cantonese makes the cut!

## What it does

- Tap farm animals - cows in the pasture, chickens in the coop, horses in the field, pigs in
  the pen - to count them, with each tap getting its own sound and a spoken number.
- A "Which Side Has More?" mode for comparing two groups and picking the bigger one.
- Counting is graduated across scenes (two, then three, then four, then five) so it's an easy
  on-ramp toward five rather than everything maxed out at once.
- Toggle narration between English and Mandarin.
- A little celebration at the end of each scene to celebrate correct counting.

## Try it

Count on the Farm is currently in **beta on TestFlight** for iOS. It's simple by design for
now, and I'm actively adding polish and more levels as my daughter grows into them.

## How I built it

This is a native iOS app built with SwiftUI. It's intentionally small in scope - a handful of
count scenes and a compare mode - which let me focus on getting the details right: tap targets
sized for small hands, sounds and narration for each animal, and artwork I iterated on with
Claude until it felt properly cute. Building with AI made it easy to stay this bespoke: build
exactly what my toddler needs today, and add more levels and languages later as she's ready
for them.
