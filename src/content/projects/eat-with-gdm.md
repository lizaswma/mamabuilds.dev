---
title: "Eat with GDM"
category: "Health & Fitness"
summary: "A simple, private daily tracker for managing gestational diabetes - log meals and glucose readings, get carb lookups from a USDA database, and get reminders to test an hour after eating."
status: "Beta · TestFlight"
accessLabel: "Join the TestFlight beta"
accessUrl: "https://testflight.apple.com/join/DCC4Q4fc"
iconImage: "/images/eat-with-gdm/icon.png"
favicon: "/images/eat-with-gdm/favicon.png"
order: 1
---

## Why I built this

When I was pregnant with my daughter, I was diagnosed with gestational diabetes. I had to log
all my food and monitor my glucose levels after every meal, and doing it in a spreadsheet was
a real pain. This time around, I know my odds of getting gestational diabetes again are high,
so I used AI to build myself a simple app to make managing it just a little more pleasant.

Eat with GDM has a timer to remind me to check my glucose an hour after every meal, lets me
log food by typing or voice, and looks up carb counts against a USDA database so I'm not doing
mental math while I eat. I even built a coach into it to help me brainstorm GDM-friendly food
pairings. I'm still iterating (I use it about six times a day!), but it feels good enough to
put out as a beta.

The usual disclaimer applies: I'm not a medical expert, and this isn't a substitute for advice
from your own doctor. It's just the app that's helping me manage my own diagnosis.

## What it does

- Log fasting and post-meal glucose readings, tagged as test strip or CGM.
- A built-in timer reminds you to check your glucose an hour after each meal.
- Log meals and snacks by typing or voice, with a walk-after-eating toggle.
- Look up carbs for common foods against a USDA food database directly in the app instead of
  having to go to another search engine.
- An AI coach to help brainstorm GDM-friendly food pairings.
- Export your log as a clean, doctor-shareable CSV or PDF for appointments.

## Screenshots

<div class="not-prose flex flex-wrap justify-center gap-6">
  <img src="/images/eat-with-gdm/screenshot-history.png" alt="Eat with GDM history view for a day, showing fasting and post-meal glucose readings and logged meals (numbers and food details blurred for privacy)" class="w-44 rounded-2xl border border-sand shadow-sm" />
  <img src="/images/eat-with-gdm/screenshot-meal-timer.png" alt="Eat with GDM's meal timer screen, a 60-minute timer with a walk nudge at 30 minutes and a glucose-check reminder at 60 minutes" class="w-44 rounded-2xl border border-sand shadow-sm" />
  <img src="/images/eat-with-gdm/screenshot-coach.png" alt="Eat with GDM's AI coach screen answering a question about whether avocado toast is GD-friendly" class="w-44 rounded-2xl border border-sand shadow-sm" />
</div>

## Try it

Eat with GDM is currently in **beta on TestFlight** for iOS. I'm still iterating daily (I use
it myself, multiple times a day), so expect rough edges while I keep polishing it.

*Not medical advice - always follow your own doctor's guidance for managing gestational
diabetes.*

## How I built it

This is a native iOS app, built with SwiftUI and local-first storage, since keeping health data
private and safe from loss mattered more here than anything else. No accounts, no sync, no
analytics on health data - everything stays on-device unless you explicitly export it. The one
exception is the coach: it sends some context to a small proxy service I built, so it can give
AI-assisted food suggestions. The carb lookup is backed by the USDA FoodData Central database.
