---
title: "Behind the story: production costs and Little Rabbit"
description: "What I learned about image generation costs, style consistency, and prioritization while building a bilingual storybook series with AI."
pubDate: 2026-09-12
tags: ["ClaudeCode", "LittleRabbit", "ProductManagement", "VibeCoding"]
draft: false
---

From the start, I didn't want Little Rabbit's Halloween to just be a one-off storybook. I wanted
it to be the first book in a series: a new bilingual story for each occasion, with the same
character showing up again and again so my toddler could recognize her. That decision,
"this needs to be a series," changed a lot about how I approached the project with AI.

If Little Rabbit was going to appear across multiple books, I needed a repeatable baseline for
what she looked like, not just "close enough" from page to page, but consistent from story to
story too. That's why we invested early in a style bible: reference sheets that pinned down things
like Little Rabbit's ear shape, her outfit, and her color palette, so Claude could pull from the
same source every time it generated a new illustration, instead of me trying to re-extract and
replicate it each time. It took real upfront effort, but it paid for itself immediately once we 
got into actual page generation.

## Precision is expensive, and I over-trusted my AI

Here's the thing about image generation I knew but never fully appreciated until I tried to make a book with
generated images: getting it precise is hard. Really hard. Even with a style bible in hand, small drifts crept in: 
a slightly different eye shape, a prop that didn't match the page before it. And when I pushed for more precision, 
my first instinct was to just trust the AI's judgment on what tools we needed for that.

That's how we ended up deciding we "needed" the pro model for Gemini's Nano Banana image
generation. I took that recommendation mostly at face value, without stopping to weigh whether
the accuracy gain was worth the cost difference. In hindsight, I over-trusted the call. Not every
detail I was chasing actually needed pro-tier precision, and I hadn't built the habit yet of
asking "is this a place where we can afford to be a little less exact?" I wish I had. It would have
made the production costs much lower.

For a project like this, checking in with your AI often, instead of letting it run wild, pays off.
Unlike code, where you can surgically fix a bug, a "bug" in image generation for a storybook like
this can mean throwing everything away and starting again, which substantially adds to your costs.

## Plan your PRD. Also plan your budget.

The expensive lesson for me: it's not enough to plan your project with your AI and capture
those decisions in a PRD. You also need to plan your budget, and specifically, understand which
decisions are high-cost and which ones are low-cost. I wish I had probed my AI more to evaluate
different options before we started. I was too eager to start building.

Unlike my previous projects, where a style choice that only affects a text or audio prompt
is cheap to get wrong and cheap to fix, a choice that determines which image model or tier
you're regenerating dozens of pages against is not. I hadn't separated those categories
clearly enough going in, and that's what let a "let's just be safe" model choice become
the most expensive decision in the project. Honestly, it irritated me every time the AI came back to 
apologize for spending $2.57 on a bunch of throwaway images. Unlike an employee at a real startup, this 
extra spend will not impact the value of the equity my AI employee holds.

## Here's the kicker: it cost more anyway

We (yes, the AI and I are a "we" on this now) learned a lot from Little Rabbit's Halloween, the
first book, and captured those learnings so that Little Rabbit's Mid-Autumn Festival, the second
book, could be a more streamlined production. Having the style bible already in place helped, and
the AI itself was less wasteful about which model it used since these small costs add up when you 
need to do a lot of iterations.

Despite all that, Mooncakes (the second book, $27.48 total) cost more to make than the original
Halloween book ($18.10). The style bible did what it was supposed to and the model choices were 
more efficient, but the models still had their own visual "bugs" to work out. That's the base 
cost you pay for image generation. The unavoidable costs came from the new things I added to
the story:

1. **Little Rabbit's family.** They all had to look similar but have distinct characteristics,
   and I rejected the AI's suggestions (after the images were generated) because I was also particular
   about not reinforcing too many gendered stereotypes (e.g., no apron for Mama). I think I could have saved money upfront
   if I hadn't leaned on the model to suggest how to make Mama Rabbit read as more maternal, or
   Grandma Rabbit read as clearly older. In the end, I had to give the AI my own ideas,
   which it took. Mama originally had a bow, for example, and I suggested a necklace instead to
   make her look less childish.
2. **The dancing dragon page.** This needed a new animation technique, hopefully worth it because my
   daughter loves dragon dances. I had Claude capture it in the shared style library as an actual
   script rather than prose "best practices," so future books don't have to reverse-engineer it
   from a paragraph. I want to do more of these AI post-mortems, so we actually learn from past
   work instead of re-solving it every time.
3. **The mooncake math.** The math for Mooncakes was more specific than Halloween's. In
   Halloween, Little Rabbit collects stickers and we just count how many she has at the end. The
   mooncake is trickier, since it starts whole and has to decrease appropriately as Little Rabbit
   shares it. Preserving that continuity mattered, since teaching the countdown was one of the
   big learning goals of this story. You can't have the mooncake grow back later!

Streamlining your process doesn't guarantee a cheaper book. It just makes room in the budget for
whatever new thing the story actually needs, and with toddlers, you always need new things.

## A good exercise in prioritization

This was also a genuinely good exercise in prioritization for me as a PM. There were plenty of
details I wanted to make richer, more perfect, more exactly what I'd pictured. But generation
costs are real. So I stuck with protecting the details that would actually matter to a toddler, and
I let my bar drop everywhere else. It's the same muscle as any product prioritization exercise:
figure out what your actual user needs, and stop chasing things like the exact gradient of a
background sunset when your actual reader is busy tapping the pumpkin to make it glow.

Now I'm tempted to build a third book, mostly to see how much the playbooks we've built up
actually pay off by then. But I'll pause in true MVP fashion and let my daughter beta test what
we already have first, to see if the concepts even land with her. This whole "building apps for
her" business is a little dangerous, honestly. I could accidentally be the one who gets her hooked
on screen time.

## Read the stories

Little Rabbit's Halloween (小兔过万圣节) is live: read it at
[halloween.mamabuilds.dev](https://halloween.mamabuilds.dev), or check out the
[project page](/projects/little-rabbit-halloween) for more on how it was built.

Little Rabbit's Mid-Autumn Festival (小兔过中秋节) is also live now: read it at
[mooncakes.mamabuilds.dev](https://mooncakes.mamabuilds.dev), or check out the
[project page](/projects/little-rabbit-mooncakes) for more on how it was built.
