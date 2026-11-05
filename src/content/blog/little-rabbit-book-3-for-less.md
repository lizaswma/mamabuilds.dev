---
title: "Book 3 cost less: the Little Rabbit playbook pays off"
description: "Why Little Rabbit's Thanksgiving was far cheaper to make than the first two books: reused characters, edited scenes, free compositing, and a budget plan written down after book 2."
pubDate: 2026-11-05
tags: ["ClaudeCode", "LittleRabbit", "ProductManagement", "VibeCoding"]
draft: false
---

At the end of my [last post on Little Rabbit's production costs](/blog/production-budgets-and-little-rabbit),
I said I was tempted to make a third book, mostly to see whether the playbooks we'd built up
would actually pay off. Little Rabbit's Thanksgiving (小兔过感恩节) is that book, and the answer
is yes. It cost **less than $4** to make, compared with $18.10 for Halloween and $27.48 for
Mid-Autumn Festival.

Book 2 taught me that streamlining doesn't guarantee a cheaper book, because the story always
needs something new. So for book 3, I was deliberate about keeping the new things small. Here's
where the savings came from.

## 1. No new characters

Most of book 2's budget went into getting Little Rabbit's family right: about $5.43 of
generation, and about $1.07 of that was a round on the pro model that we threw away entirely.

Book 3 brings back everyone from the first two books, so every character was already locked.
The only new art was a little autumn scarf for Little Rabbit and a new look for Ms. Bear, and
both came out of the cheap model for about $0.40. That's the single biggest difference between
this book and the last one.

## 2. One room, edited instead of redrawn

Most of the story happens in one room. I approved that room once, on page 3, and every other
page set there was made as an edit of it instead of being generated from scratch. Image
generation drifts every time you start fresh: the window moves, the floor changes color, a
character comes out a slightly different size. Editing an approved scene kept it consistent, which
meant far fewer failed attempts to pay for.

## 3. Free compositing instead of generation

The cheapest image is the one you don't generate. A lot of book 3 was put together in code from
pieces we already had:

- The counting page is the tree from page 3, placed in the empty room.
- The lights-off bedtime page is the same room, darkened.
- All seven leaves were cut from a single generated sheet.
- The thankful tree on the wall is drawn in code.

None of that cost anything beyond the time to set it up.

## 4. Lay it out before you paint it

The first version of the book used free placeholder art. It was rough, but the whole story was
tappable from start to finish. That meant we settled the layout and where every tap lands
before spending a cent on illustrations. In books 1 and 2, some of those decisions only came up
after an image was generated, and changing your mind then means paying for the image again.

This is the PM lesson from the last post put into practice: figure out which decisions are
cheap to change (layout in placeholder art) and which are expensive (a finished illustration),
and make the cheap ones first.

## 5. Following our own rules

After book 2, Claude and I wrote down what we'd learned, and this time we followed it:

- **Batch everything.** Every generation run used batch mode, which costs half the price. It's
  slower, but a storybook isn't in a hurry.
- **Explore on the cheap model first.** The pro model is only for when the cheap one has
  actually failed, not for when we're worried it might.
- **Attach reference images.** Showing the model the locked character sheet beats describing her
  in words.
- **Check the count before approving.** Image models are bad at counting, and a counting book
  can't have the wrong number of leaves. We count the objects in every scene before approving it,
  not after three more pages are built on top of it.

The last post was mostly about lessons. This one is about what happens when you actually use
them, which, honestly, is the part I'm proudest of.

## Read the story

Little Rabbit's Thanksgiving is live: read it at
[thanksgiving.mamabuilds.dev](https://thanksgiving.mamabuilds.dev), or check out the
[project page](/projects/little-rabbit-thanksgiving) for more on the story itself.
