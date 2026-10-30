---
title: "Count on the Farm is on the App Store, on the first try"
description: "After three rejections for Tiny Tongues, I expected Apple to send my toddler counting app back. What went differently, and the product calls that shaped what I built."
pubDate: 2026-10-30
tags: ["ClaudeCode", "CountOnTheFarm", "iOSDevelopment", "AppStore", "VibeCoding"]
project: count-on-the-farm
---

[Count on the Farm](/projects/count-on-the-farm) is now
[live on the App Store](https://apps.apple.com/us/app/count-on-the-farm/id6794224432)! It's a
counting game for toddlers, and Apple approved it on the first submission.

I honestly didn't expect that. [Tiny Tongues took four tries](/blog/tiny-tongues-on-the-app-store),
so I assumed this would be my first round of feedback, not my last.

## What was different this time

**The wait was the same.** Review still took a few weeks, not the days Apple's docs suggest. At
least this time I knew to expect it.

**The outcome wasn't.** Tiny Tongues' repeat rejection was for being too simple, and Count on the
Farm is also simple on purpose. So I didn't wait for Apple to raise it. Claude and I wrote the
review notes to explain up front who the app is for, why it's simple, and which skill each mode
teaches. On Tiny Tongues, that explanation only came after the third rejection.

There's also less for a reviewer to question. Each mode is easy to understand, and everything is
bundled in the app, so it has no downloaded content to disclose, which was part of Tiny Tongues'
first rejection.

I can't say which of these made the difference, or whether I just got a different reviewer. I did
[take my own advice](/blog/tiny-tongues-on-the-app-store) and ask Claude to apply what we learned
from the Tiny Tongues rejections when crafting the submission, with Apple's guidelines in mind. But
these are different apps, so it's not a clean comparison.

## Claude reset my expectations as a parent

I originally wanted a more complex app that counted up to 10. Claude helped me see that this was
beyond what a 2.5 year old can do. Children her age are still learning that each object gets
exactly one number, and that a number word stands for a quantity.

So we capped counting at five and went deeper instead of higher, with a separate mode for each
concept:

- **Count** teaches one-to-one correspondence. She taps each animal and hears the next number.
- **Which Side Has More?** teaches comparing quantities, with two groups side by side.
- **Feed the Animals** teaches making a set of a requested size. The cow wants four broccoli, so
  she taps the basket until there are four on the plate, then the cow eats them while the numbers
  are counted again.

Claude did more than build this. I'm a first-time parent, and it helped me understand what's
realistic for a 2.5 year old. My original idea was more ambitious, but it would have been wrong for
where my toddler is right now.

## Building for the toddler I actually have

**Tapping was enough.** I'd considered fancier interactions like drag and drop, but they're too
hard for her to understand. Simple taps work, so we dropped the rest. Even feeding the animals is
all tapping.

**No wrong answers.** The app never corrects her. There are no scores, timers, or "try again"
messages, because at this age every tap should feel like play.

**She's too tap happy for the audio.** At first the app ignored taps until the current number
finished playing. She wouldn't wait, and she didn't understand why some of her taps did nothing.
But the numbers still had to play properly, or she'd skip some while learning to count. Now every
tap counts right away and its number joins a queue, so she hears each one, in order, however fast
she goes.

She loves it, especially feeding the animals, and the pigs are her favorite.

## What's next

I'm working on more modules and Cantonese support, and I'm excited to see what v2 brings.

I don't expect many people to stumble on this app, so I need to work on getting my apps in front of
the parents they could help. If you have a toddler at home,
[give it a try](https://apps.apple.com/us/app/count-on-the-farm/id6794224432). I hope it's as
useful for your family as it has been for mine.
