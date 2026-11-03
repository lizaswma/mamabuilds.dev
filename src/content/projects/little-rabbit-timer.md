---
title: "Little Rabbit Timer"
category: "For Kids"
summary: "A toddler timer that shows time passing in carrots, not numbers: Little Rabbit eats through baby carrots for minutes and big carrots for longer stretches."
status: "Beta · TestFlight"
betaTestFlightUrl: "https://testflight.apple.com/join/4WGvU85C"
iconImage: "/images/little-rabbit-timer/icon.png"
favicon: "/images/little-rabbit-timer/favicon.png"
added: 2026-11-03
---

## Why I built this

My toddler insists on doing things herself. I want to give her that agency, but I also have to set
boundaries. So when I can, I tell her, "Okay, one minute."

She's starting to embrace the concept of one minute. She has me set the timer, and she dismisses it
herself when it goes off. But I wanted something more fun, where she could learn what it means for
time to pass. She can't read numbers yet, so the app shows her a quantity of time instead.

I wrote more about the idea and how she reacted in
[this post](/blog/little-rabbit-timer).

## What it does

- Shows time as carrots: a baby carrot is one minute, and a big carrot is five. The numbers on
  screen are just for parents.
- Comes with timers for 1, 2, 5, and 15 minutes, and you can add your own.
- Breaks each big carrot into five baby carrots when its turn comes, so she can see big units of
  time and little units of time.
- Lets Little Rabbit act out a scene during the timer: eating, brushing her teeth, cleaning up,
  playing, or getting ready for bed.
- Ends with a slider she can move herself to dismiss the timer.
- Shows the carrots on the lock screen while the timer runs, and has a Home Screen widget.

<div class="not-prose flex flex-wrap justify-center gap-6">
  <img src="/images/little-rabbit-timer/timer-picker.png" alt="The Little Rabbit Timer home screen, with Little Rabbit above timers shown as rows of carrots: one baby carrot for 1 minute, two for 2 minutes, one big carrot for 5 minutes, and three big carrots for 15 minutes." class="w-64 rounded-2xl border border-sand shadow-sm" />
</div>

## How I built it

This is a native iOS app, and I built it in less than a day. I changed the carrots after testing it
with her, because a five-minute carrot moved too slowly and she kept asking why it was being eaten
so slowly.

The trickiest part was AlarmKit. The bunny is the point of this app, but I can't customize the alarm
on the lock screen, so you only see the standard iOS screen. That should be fine, because my toddler
is likely watching the timer the whole time anyway.
