---
title: "Little Rabbit's Mid-Autumn Festival"
category: "For Kids"
summary: "小兔过中秋节 - the second bilingual (Mandarin/English) interactive storybook in the Little Rabbit series, about Little Rabbit sharing a mooncake with her family."
status: "Live"
accessLabel: "Read the story"
accessUrl: "https://mooncakes.mamabuilds.dev"
iconImage: "/images/little-rabbit-mooncakes/icon.png"
favicon: "/images/little-rabbit-mooncakes/favicon.png"
added: 2026-09-13
---

## Why I built this

Mid-Autumn Festival is coming up, and I wanted my toddler to have some exposure to what the
holiday actually means, beyond just "here's a cookie": being with family and sharing a meal
together. She's never had mooncake before, and I wanted it to mean something to her in a few
weeks when we finally share one together (I'm still debating whether the sugar is a good idea).

I went back and forth on whether Little Rabbit should share her mooncake with the friends from
the Halloween story, but the family ties felt too important to skip, so this book is about Little
Rabbit's family instead. My daughter also really enjoys family time, so the ending where Little 
Rabbit brings the last bit of mooncake home to share with her parents (and they hug!) mattered 
a lot to me. I'm hoping it resonates with her the same way.

This is the second book in the "小兔" (Little Rabbit) series, following [Little Rabbit's
Halloween](/projects/little-rabbit-halloween).

## What it does

- A new bilingual story following Little Rabbit as she meets her family, Mama Rabbit, Papa
  Rabbit, and Grandma Rabbit, and shares a mooncake with each of them in turn, counting down
  how much is left as it's shared.
- A dancing dragon page with its own new animation, because my daughter loves dragon dances.
- Full bilingual narration and text, with the same Mandarin/English toggle as the first book,
  plus a tap interaction on every page.
- Installable straight to an iPad home screen and works fully offline after the first load.

## How I built it

Having a style bible in place from Little Rabbit's Halloween paid off immediately, since it gave
Claude a consistent baseline for Little Rabbit's look before we even started on her family.
Getting the family to look related but distinct took real back-and-forth: I pushed back on some
of the AI's early suggestions for making Mama and Grandma Rabbit read as more clearly maternal or
older, since I didn't want to lean on gendered stereotypes to get there (let's say this is hard!).

The mooncake countdown was the trickiest continuity problem in the book. Unlike the stickers
Little Rabbit collects in the Halloween story, which just get counted at the end, the mooncake
starts whole and has to visibly shrink in the right way each time it's shared. Preserving that
continuity mattered, since teaching the countdown was one of the big learning goals of this story.

I wrote more about the production side, costs, the style bible paying off, and what still went
over budget, in [this post](/blog/production-budgets-and-little-rabbit).

## Try it

Read it at [mooncakes.mamabuilds.dev](https://mooncakes.mamabuilds.dev). It works great in a
browser, and on iPad you can add it to the home screen for an app-like, offline experience.
