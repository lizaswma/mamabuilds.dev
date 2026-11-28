---
title: "AI makes iteration cheap, so punting bugs got expensive"
description: "AI made fixing bugs nearly free, so why did I ship two more storybooks with one I'd already seen? Here's why more of my iterating now happens before I launch."
pubDate: 2026-11-27
tags: ["ClaudeCode", "ProductManagement", "LittleRabbit", "EatWithGDM", "CountOnTheFarm", "AppStore", "VibeCoding"]
draft: false
---

"Launch and iterate" has always been the PM mantra, and I still believe in it. But as the amount of
software we use as consumers keeps growing, and AI makes building so much faster, I'm finding that
more of those iterations now have to happen before I ship.

## The rule I've followed for years

For most of my career, I followed a simple rule for bugs: fix the critical ones and punt the rest,
especially the ones that would take a lot of engineering hours to fix.

Behind it was an assumption: getting to market fast mattered more than fixing every
small bug, because fixing them often added significant delays to when you could ship.

## AI flips the math

Now changes take minutes. The iterations that weren't worth the engineering hours before are
suddenly cheap, and skipping them is what's expensive.

You might think: if fixes are that quick, why not keep launching fast and fix things later? Because
engineering time isn't the scarce resource anymore. User attention is. Consumers have so much to
choose from, and AI is giving them even more every day. I can patch an app in minutes, but a user who
doesn't come back never sees the fix.

So the bar for shipping actually has to go up. I still launch and iterate. I just do more of the iterating before I launch.

## The bug I punted

I learned this from my toddler. If I give her UI patterns that are too hard for her to master, she
gets frustrated and stops using my app.

This almost happened with the Little Rabbit storybooks. She isn't great at tapping
yet, so some of her taps register as swipes, and she often loses the page she was on. I saw this in
my [first book](/projects/little-rabbit-halloween) and did exactly what my old rule said to do: I
punted it. She's a fast learner, so I figured she'd get the hang of it soon enough.

She didn't. And I shipped two more books with a bug I'd already seen.

When I finally went back, it took one prompt to remove swiping from all three. Without AI, that
change would have taken a lot longer, especially since I didn't know how to do it, and I would have
had to make it by hand in each book. The bug I punted to save time took almost no time to fix. What
it nearly lost me was my most important user.

## Pushing the AI to think the same way

You also have to push your AI to think this way. Before submitting
[Eat with GDM](/projects/eat-with-gdm) to the App Store, I asked Claude how to get its AI coach
through Apple's review without running up my API bill. It listed the gaps, then offered to start with the two "lowest-effort" fixes. I told it: let's not be lazy and do it right.

Doing it right turned up a real problem. The coach's safety tests had only two cases, both about
physical symptoms, and none for a mental-health crisis. For an app used by pregnant women, that's not
a gap you patch after launch. I've since added those tests, but I left the coach out of the first
version of Eat with GDM so I can keep iterating on it before anyone else uses it.

That's why I don't take Claude's recommendations blindly. Some of its tradeoffs still assume every extra
bit of work has to be paid for in engineering hours, so it reaches for the quick wins first. But the
quick wins protect my API bill. The work it would have put off protects my users.

## What a higher bar looks like

In practice, raising the bar means iterating faster, not slower. Don't let bugs sit. And if you
find bugs before you ship, fix more of them before you do.

I did this with [Count on the Farm](/blog/count-on-the-farm-on-the-app-store). Before submitting
it, I asked Claude for an honest read on whether it would pass App Store review, because I'd rather
make changes before review than wait a few weeks to iterate after a rejection. It found two screens
that relied on sound alone, so anyone playing with the volume off might think the app wasn't doing
anything. It also flagged a weak celebration screen. I made those fixes before submitting, and Apple
approved the app on the first try. I can't prove the fixes were why, but my earlier app, Tiny
Tongues, was rejected three times.

The bar goes up outside of products, too, including for this post. I started from my own notes and
used Claude to polish my thinking and jog my memory, then went through many rounds of edits before
publishing. Claude dug through my past sessions to find examples I'd forgotten, and when its first pick was weak, I pushed back until it found better ones.

AI lowered the cost of building, not the cost of a bad first impression. Deciding what's good enough
to ship is still the PM's job. So yes, this is another lesson in how AI can help PMs without
replacing them.
