---
title: "What I learned bringing recipes into Skillet"
description: "I wanted every recipe in one place, in one format, for my family - without stepping on the sites they come from."
pubDate: 2026-09-02
tags: ["ClaudeCode", "Skillet", "VibeCoding"]
project: skillet
draft: false
---

One of the first things I built into [Skillet](/projects/skillet), our household meal
planner, was recipe import: paste a link and the app pulls in the ingredients and steps, so
I'm not retyping them. My husband and I are forever texting each other recipes, and a link
isn't something you can build a grocery list from. I wanted them all in one place, in the
same format, for the two of us to cook from.

Getting there taught me more about how the recipe web actually works - and where I draw the
line - than it did about code.

## "Scraping" was the wrong idea

My first instinct was that I'd have to pull the recipe out of the page: dig through the HTML
and guess which bits were ingredients. It sounded messy and a little invasive.

It turns out you don't have to. Most recipe sites already publish their recipe as structured
data - a labeled block with the title, ingredients, and steps, sitting in the page for Google
to read so it can show the recipe card with the star rating. It's meant to be read by
software. So Skillet doesn't scrape anything; it reads what the site is already handing out.

That works cleanly for independent recipe blogs - paste the link, the recipe appears. Then I
tried to import a recipe from Serious Eats, one of my favorite sites, and got an error back
instead. NYT Cooking, Bon Appétit: same thing. Their structured data is sitting right there
too, but they block anything that looks automated - they can tell a request is coming from a
server in a data center rather than a person at home, and they've decided automated readers
aren't welcome. Fair enough; these are businesses, and the recipes are the product. But that
error is what sent me down this whole path.

## The shortcut I didn't take

I asked Claude how people usually get around this, and it walked me through the whole range -
including the parts I didn't want. There are services built for exactly this: they route your
requests through residential internet connections so a blocked site can't tell you're a bot.
A few dollars a month and my import would work on everything.

The publishers have effectively put up a sign that says *not for bots*. Paying a service to
slip past it - dressing my app up as a person - felt wrong even at the scale of my own recipe
box. What I appreciated was that when I said that to Claude, it didn't try to talk me back
toward the easy option. It helped me find one I could live with.

## What I built instead

A bookmarklet - a button in my browser bar. When I'm on a recipe page I want to keep, I click
it, and it reads the same structured data off the page I'm already looking at, in my browser,
on my machine, and drops it into Skillet.

No server pretending to be a person, no third party in the middle. It's me saving the recipe
by hand, just faster - and if a site is already showing me the page, keeping a copy for my
own kitchen is well inside the lines. For the handful of walled-off recipes we actually cook,
one extra click is nothing.

## What Claude was actually for

I could have had working import code in five minutes. The part that took longer, and mattered
more, was understanding a corner of the internet I'd never thought about, seeing the full set
of options instead of just the first one, and working out where my line was. Then Claude
helped me build that version - not the easy one.
