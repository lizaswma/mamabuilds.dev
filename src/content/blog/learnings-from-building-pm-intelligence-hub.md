---
title: "Learnings from Building PM Intelligence Hub"
description: "What I learned building my first real end-to-end AI app - from asking Claude to write a PRD to the humbling reality of pushing something into production."
pubDate: 2026-08-09
tags: ["ClaudeCode", "PMIntelligenceHub", "ProductManagement", "VibeCoding"]
---

This was my first real attempt at building something end-to-end with AI. Before this, I'd only
done simple prompts in Claude to build mini-games. This project needed real, hard user
requirements (even if they were just my own) and went well beyond what a standard chat
interface supports.

I actually started building this with the mobile Claude app, just to generate a simple
text-based news digest. I quickly found it was too time-consuming to read regularly, and it
was a pain to dig back up in my long list of chat threads.

So I fell down the Claude Code rabbit hole to turn it into a real web app - something easy to
use that I'd actually come back to.

## Learning #1: Ask your AI to write a PRD

One thing I learned early: make your AI write a PRD! It saves you tokens and needless
iterations (and ask it to keep the PRD updated as you both change things along the way). I had
Claude summarize everything we'd discussed in chat and turn it into a product requirements
document, so we could build it out as a proper application.

That part I was already familiar with - taking my wants and translating them into a PRD. Next
came the actual building.

How do I even start? Claude to the rescue. It helped me figure out the tech stack I actually
needed to make PM Intelligence Hub a real, useful tool:

- **Exa**: Since I wanted actual real-time news, Claude recommended Exa - a search engine
  built specifically for LLMs (who knew?!).
- **Claude (Opus)**: Recommended to handle the text aggregation and summarization.
- **OpenAI**: Used for generating the audio.
- **Vercel**: Used for hosting and blob storage (to hold the generated audio episodes).

Without my AI agent, I would have been stuck at step one - I had no clue what APIs even
existed, let alone which ones were free. What was so cool was that the AI was actively helping
me learn. It's not just a novice intern taking orders; it comes with its own deep experience
and knowledge base, as long as you know how to tap into it.

## Getting to MVP (and going production-ready)

The most amazing part? I got the MVP working that very same night. (Keep in mind, my "vibe
coding" hours are strictly between 8:00 and 10:00 PM, after my daughter goes to bed and before
my own self-imposed bedtime.)

I was so psyched - but I soon realized it was pretty lame to need my laptop running just to
generate episodes I wanted to listen to on my phone.

AI to the rescue once again. Since my project repo was on GitHub, Claude helped me set up
GitHub Actions to kick off a daily generation task automatically. Just like that, I was
officially in business.

## What building this taught me

Building this gave me a much greater appreciation for a few things:

- **How many pieces really go into a production service.** The last time I coded for real was
  in school, where environments were clean, self-contained, and simple. Real-world setups have
  a lot more moving parts. It's something the engineers I work with tell me all the time, but I
  never fully appreciated it until now.
- **Pushing to production is a lot of work.** My MVP took less than two hours to get running
  locally, but the actual deployment setup and push to production took significantly longer.
  Things that worked seamlessly on my laptop broke in production, requiring several rounds of
  iteration.
- **A humbling reminder of how much I don't know.** I truly could not have done this on my own
  without AI. Even navigating the dashboards for all those tools was challenging - I was
  constantly taking screenshots and sending them to Claude when I got stuck on what button to
  click (granted, it occasionally gave me outdated UI instructions too!).
- **A fundamental security rule.** I learned something simple and important that's obvious to
  engineers but not as obvious to a PM: you must protect your API keys!

## What's next

You can keep using your AI to continuously iterate on your stack. Just today, I asked mine if
it would make any changes to my current providers, and it reminded me that a newer Claude Opus
model is out and I'm still running the previous version. Time for another quick update!

If you want to see what came out of all this, [try PM Intelligence Hub](/projects/pm-intelligence-hub)
for yourself. I'd love to hear what you think - feedback (good, bad, or "this broke") is always
welcome at [liza@mamabuilds.dev](mailto:liza@mamabuilds.dev).
