---
title: "Okay, one minute: teaching my toddler time with carrots"
description: "My toddler wants to do everything herself, and I want to give her agency and boundaries. So I built a timer that shows time passing in carrots, not numbers."
pubDate: 2026-11-03
tags: ["LittleRabbit", "iOSDevelopment"]
project: little-rabbit-timer
---

My toddler insists on doing things herself. I want to give her that agency, but I also have to set
boundaries. So when I can, I tell her, "Okay, one minute."

She's starting to embrace the concept of one minute. She has me set the timer, and she dismisses it
herself when it goes off. But I wanted something more fun, where she could learn what it means for
time to pass. So I built Little Rabbit Timer.

She can't read numbers yet, so the app shows her a quantity of time instead: a baby carrot is one
minute, and a big carrot is five. One minute to finish playing is one baby carrot, two minutes to
brush her teeth is two baby carrots, and 15 minutes to eat is three big carrots. The numbers on
screen are just for parents.

<div class="not-prose flex flex-wrap justify-center gap-6">
  <img src="/images/little-rabbit-timer/timer-picker.png" alt="The Little Rabbit Timer home screen, with Little Rabbit above timers shown as rows of carrots: one baby carrot for 1 minute, two for 2 minutes, one big carrot for 5 minutes, and three big carrots for 15 minutes." class="w-64 rounded-2xl border border-sand shadow-sm" />
</div>

## Why is the carrot being eaten so slowly?

I tested it with her right after building it. A big carrot stands for five minutes, and it moved too
slowly for her. She kept asking why the carrot was being eaten so slowly.

So now each big carrot pops into five baby carrots when its turn comes, which helps her understand
big units of time and little units of time. It's too early to tell whether the idea of time passing will stick, but at
least now she has something to watch.

## The trickiest part was AlarmKit

It's a simple app, and I built it in less than a day. The trickiest part was AlarmKit. The bunny is
the point of this app, but I can't customize the alarm on the lock screen, so you only see the
standard iOS screen. That should be fine, because my toddler is likely watching the timer the whole
time anyway.

## Not every project has to be epic

Not every project has to be big and epic, and I hope she enjoys this one, but not too much. It came
from a real problem for our family: how to give her control while also giving her boundaries. That's
a hard thing to do in parenting.
