---
title: "Namesake"
category: "Family Life"
summary: "A simple app for couples picking a baby name together - suggest candidates, swipe yay or nay privately, then compare notes to find the names you both love."
status: "Beta"
accessLabel: "Try Namesake"
accessUrl: "https://little-names-2026.vercel.app/"
iconImage: "/images/namesake/icon.png"
favicon: "/images/namesake/favicon.png"
order: 2
---

## Why I built this

Yes - this building mama is also an expecting mama! My husband and I have been leaning on AI
chatbots to help us brainstorm baby names, and we quickly ended up overwhelmed with options.
We needed a way to actually keep track of candidates and see where we agreed (or very much
didn't).

So I built Namesake: a simple, private space for two people to build a shared list of
name candidates, vote on them independently, and then compare results together.

## What it does

- Create a room and share the code with your partner so you can each vote privately.
- Swipe (or tap) yay or nay on each name candidate, one at a time.
- Suggest new names with a quick prompt - e.g. "literary," "a bit unusual," "ends in -a" -
  and get fresh candidates to react to.
- Tap any name to see its meaning and origin.
- Compare votes with your partner to see your overlap - the names you both loved.

## Screenshots

<div class="not-prose flex flex-wrap justify-center gap-6">
  <img src="/images/namesake/screenshot-home.png" alt="Namesake home screen with 'Create a room' and 'Join a room' buttons" class="w-44 rounded-2xl border border-sand shadow-sm" />
  <img src="/images/namesake/screenshot-card.png" alt="A Namesake voting card for the name 'Emma', showing its origin and meaning with nay and yay buttons below" class="w-44 rounded-2xl border border-sand shadow-sm" />
  <img src="/images/namesake/screenshot-suggest.png" alt="The Suggest names dialog, where you describe the kind of name you're looking for" class="w-44 rounded-2xl border border-sand shadow-sm" />
</div>

## Try it

Namesake is live at [little-names-2026.vercel.app](https://little-names-2026.vercel.app/).
Create a room, send the code to your partner, and start swiping.

## How I built it

This one is still very much a work in progress - fitting, since our name shortlist is too!
Building it pushed me to learn some new-to-me tools, like simple auth so my husband and I
can each log in separately. I went with "security by obscurity" for now: a randomly named
room code instead of real accounts.
