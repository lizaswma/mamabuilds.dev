---
title: "Eating with GDM - I have no moat!"
description: "I built Eat with GDM to fix my own gestational diabetes logging headaches, then watched Dexcom make it obsolete before I even finished dogfooding it."
pubDate: 2026-08-25
tags: ["ClaudeCode", "EatWithGDM", "VibeCoding"]
---

I built [Eat with GDM](/projects/eat-with-gdm) because I knew I would get gestational diabetes
with my current pregnancy, just like I did with my daughter.

One of the things I really disliked last time around was having to keep a food log in a
spreadsheet. It was a pain to edit on my phone, which was the device I usually had on me, and
I had to export something that looked pretty ugly to my dietitian on a weekly basis. I also
knew I'd have other needs as a GDM patient - like looking up just how many carbs are in a kiwi,
and whether I could really get away with overnight oats for breakfast.

Having everything in one app just felt right, so I built Eat with GDM right before I got my
diagnosis and started using it before I even met with my dietitian.

## The thing I didn't account for

One big shift from my last pregnancy: some dietitians have really embraced continuous glucose
monitors now, which my insurance thankfully covers. Mine asked me to use Dexcom's built-in
sharing functionality to share my glucose levels with her, and asked me to just log all of my
meals in the Dexcom app as well.

...which meant my own app now had pretty limited usage, since the user I built it for (me) was
actively being discouraged from using it. This was disappointing! If there's one thing a PM can
tell you, it's that dogfooding your own app gives you deeper and better insights into how to
make it better, including the important polish stuff that AI sometimes misses. For example, one
of the things I wanted to build was a HealthKit integration so my app could just pull my glucose
data straight from my CGM. However, no amount of polish beats your medical team mandating a
specific app.

## The moat isn't really Dexcom's

At first I thought Dexcom just won by owning the full stack. But sitting with it longer, I
think there are actually two separate moats here, and only one of them belongs to Dexcom.

The first is the hardware. A CGM is an expensive, regulated medical device, and the device is
what creates the data. That's a real, company-specific moat - you can't get Dexcom's data
without Dexcom's sensor.

The second is trust with health providers, and this one isn't really Dexcom's at all. Health
data sharing is heavily regulated - not just what gets shared, but how. Even if Dexcom opened up
HealthKit access to me tomorrow and I built a beautiful integration on top of it, my dietitian
still wouldn't use it. She doesn't want a diverse ecosystem of small builders plugging into her
workflow; she wants one simple, fixed, trusted pipeline that doesn't add complexity to her day.
That's not a Dexcom advantage - any CGM maker gets the same deference from providers. It's a
moat that protects the category from builders like me, not a moat that Dexcom specifically dug.

## Where the real competition moves next

Here's what's actually interesting to think about: as CGMs become more of a mass consumer
device - less "medical equipment," more like a Fitbit - the hardware gap between makers
shrinks, and the software layer becomes the differentiator. Carbohydrate lookup. An AI coach
that brainstorms food pairings. Personalizing recommendations to someone's actual care plan -
I take iron supplements, so I'd want an app that knows not to pair a high-iron meal with a
calcium-heavy side, since calcium blocks iron absorption. Or something like a nut allergy, where
you'd want pairings that route around it entirely.

That's the layer I actually wish Dexcom would build. It's also the layer where a small builder
like me still has something to offer, even without owning the hardware or the provider
relationship.

The catch: these differentiators are fragile, because AI makes them cheap to clone. So it comes
down to PM craft. Something you use multiple times a day needs to be simple and polished, and
that still takes human judgment, not just AI output. And staying ahead means being able to
personalize and adapt to an individual's needs faster than anyone else - which is still a
precarious moat, since it's easy for a bigger player to catch up once they decide it matters.

## Why I'm still building it anyway

Part of it is access: not everyone is lucky enough to have a CGM covered by insurance, or a
dietitian who supports using one. The first time around, I still had to poke my finger four
times a day even with a CGM. So there's real value in something that works without assuming
either.

But part of it is also that the software layer is the genuinely interesting problem now,
regardless of who ends up winning it. I'd rather be building in that space than not, even
knowing it's precarious.

And honestly, there's a silver lining in all of this. If AI keeps making it cheaper to close the
software gap, that's true for everyone - including Dexcom. Big incumbents have less and less
excuse for a mediocre app. If that pushes the whole category to get better, faster and cheaper,
that's good for anyone trying to access preventative care, not just for builders like me.

If you've dealt with GDM yourself, or just have thoughts on this, I'd love to hear from you at
[liza@mamabuilds.dev](mailto:liza@mamabuilds.dev).
