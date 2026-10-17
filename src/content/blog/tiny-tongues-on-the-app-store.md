---
title: "Tiny Tongues is on the App Store, on the fourth try"
description: "Three rejections, weeks in Apple's review queue, one new feature, and the point where I stopped changing the app and made my case instead."
pubDate: 2026-10-16
tags: ["ClaudeCode", "TinyTongues", "iOSDevelopment", "AppStore", "VibeCoding"]
project: tiny-tongues
---

I'm really excited to share that [Tiny Tongues](/projects/tiny-tongues) is officially on the
Apple App Store! Getting there took four submissions, three rejections, and a lot more waiting
than Apple's docs led me to expect. Here's what I learned along the way.

## Why the App Store mattered to me

One thing I really wanted out of building with AI was to take something all the way to
production, and for me that meant publishing on the App Store. (The Play Store is still a work
in progress for this one. More on that below.)

Part of it is validation. Getting through Apple's review is a calibrated signal that what I built
with AI isn't junk and can be genuinely useful to people. Part of it is practical. TestFlight
isn't terrible, but it's still not something regular people should have to deal with just to
try an app. Now friends and other parents can download it like any other app.

## Claude drafted the submission

An App Store submission has a lot of pieces, from the listing copy to the privacy and
age-rating questions. Claude drafted all of it, which saved me a lot of time. It also walked me
through why it made each selection, so I understood what I was submitting instead of just
pasting it in.

## The real bottleneck is the queue

Apple's docs promised about a two-day turnaround. In practice I spent more than two weeks
waiting between rounds. My guess is that apps are still reviewed by humans, and Apple is
getting flooded with AI-generated apps like mine, so the queue is enormous. That's
understandable, but I wish the docs gave a realistic estimate. When every rejection costs you
a week or more, the real number changes how you plan and where your own bar for
submission-ready lies.

## Rejection one: a fair miss and a judgment call

My first submission came back with two problems.

The first was fair. I hadn't disclosed that the app downloads flashcard modules after you
install it (the extra languages download separately). That one's on me. Claude drafted the
submission, but I never asked it to review the app the way Apple would. More on that at the
end.

The second was that the app was too simple. This one annoyed me. Tiny Tongues is for toddlers,
and avoiding gamification was a deliberate choice: big cards, tap to hear the word, nothing
else competing for a small child's attention.

I asked Claude to help me review the rejection notes, then had it fix the disclosure issue and
debate me on the simplicity one. We landed in the same place: no unnecessary bells and
whistles. So I resubmitted with the disclosure fixed and the app's functionality unchanged.

This was where I felt most like a product manager. I had to hold my ground on principles. I
didn't want one reviewer, or any single user, dictating the direction of my app.

## Rejection two: setting my product pride aside

Rejected again, for being too simple. I went back to Claude for a deeper analysis. I asked it to
audit the App Store for similar apps (there were some) and tell me whether we could use them to
fight the decision. Claude didn't think we could.

So I took a breath, set my product pride aside, and looked for functionality I'd actually be
happy to ship. That's how **Listen & match** came to be, a simple game that lets kids test what
they've learned. My toddler isn't ready for it yet, but it's something I'd have added
eventually anyway.

Before AI, I would have resisted this a lot harder. Building a new mode was real work, and a
reviewer's opinion wouldn't have justified it. With Claude, the cost of trying it was low
enough that I could spec it, use it, and judge it on its merits. It was good, so it shipped.

## Rejection three: drawing the line

Apple still said it was too simple. That's where I drew the line. I know the app is useful and
good enough as it is, for toddlers and for grown-ups too. Instead of adding more, I had Claude help me write a rationale for the
resubmission, explaining again how the app works and what it's meant to do.

This time Apple agreed, and Tiny Tongues is live.

## What I'd tell anyone submitting their first app

- **Have your AI play App Store reviewer before you submit.** Ask it to critique your app
  against Apple's own guidelines. I suspect that would have caught my download disclosure issue
  and left fewer things to juggle in each round of fixes.
- **Budget weeks, not days, for each round of review.** That's why the first review matters most:
  it shows how far you are from approval, so you can plan how many rounds you'll need.
- **Use AI to argue with you, not just to make fixes.** Debating the rejection notes helped me
  separate "Apple has a point" from "Apple has an opinion."
- **When you push back, explain.** The final approval came after a clear write-up of the app's
  purpose, not after another feature.

## What's next

I'm excited to share Tiny Tongues with my friends and mom networks, and I hope their feedback
helps me figure out what other language learning tools I could build for my daughter.

On the Android side, I'm still recruiting testers for Google Play's closed test before I can
publish publicly (the full saga is in
[Shipping to Android as a one-woman show](/blog/shipping-to-android-as-a-one-woman-show)).
Apple made me argue my case. Google is making me ask for help, and I may need to be a lot more
assertive about it. If you have an Android phone and a few minutes, the steps are on the
project page.
