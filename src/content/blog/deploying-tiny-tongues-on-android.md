---
title: "Shipping to Android as a one-woman show"
description: "The Android build was almost a non-event because of a few day-one decisions. Google's Play Console, and its rule that I line up 12 testers before I can publish, were the real work."
pubDate: 2026-08-28
tags: ["ClaudeCode", "TinyTongues", "AndroidDevelopment", "VibeCoding"]
project: tiny-tongues
---

When I built [Tiny Tongues](/projects/tiny-tongues), I made a handful of decisions on day one
specifically so I could add Android later without a rewrite. Shipping to Android was the test
of whether those decisions were any good. They were, and the build was almost a non-event.
What ate the actual time was Google's Play Console, and especially its rule that I line up 12
testers before I'm allowed to publish. It also made me realize how much these tools still
assume you're a company.

## Why the build was a non-event, and which decisions earned that

I asked Claude to produce the Android build and it did, start to finish, with no questions for
me. It handed me a build file to upload to the Play Console. Total active time was maybe an
hour, most of it setting up Play Console in the other tab while the build ran.

The app worked on the first build. No debugging loop, no "works on iOS, broken on Android."
That wasn't luck, but it wasn't my engineering foresight either, because I don't have any. It's
that every time I told Claude what I wanted this app to be, it steered me toward a choice that
happened to travel well, and usually explained why:

- **The fiddly interactions run on maintained libraries, not code we wrote by hand.** When I
  asked for a swipeable card carousel, Claude used a well-established library instead of writing
  the gesture logic itself, and told me why: things like image rendering, audio, and touch
  gestures are exactly where hand-written code tends to break when you switch platforms. I
  didn't know that. I just knew I wanted the cards to swipe nicely.
- **No backend, no accounts, no ads, no analytics.** Leaving those out was my call, for product
  reasons: it's a flashcard app for a toddler. Claude was the one who pointed out the bonus:
  those are the pieces that usually need separate iOS and Android setup, and I had none of them.
- **The card decks come from a server, not the app itself.** I wanted to add new words and
  languages without making anyone update the app, so Claude set the content up to download
  from the web. That turned out to work the same regardless of which OS the app is running on.
- **The Android config already existed.** The package name, the app icon, the permissions were
  all filled in earlier, during the multi-language work, back when Android was still
  hypothetical. Past me (and Claude) left the seams in place.

If I'd started cold and just told Claude "make this run on Android," I think it still mostly
would have worked, because the stack was already boring in the right ways. The payoff of
designing for two platforms isn't a heroic port. It's the absence of one.

## These tools are still built for large, traditional teams

I've now set up both developer accounts from scratch, and the two companies optimized for
different things. Google optimized for speed: no account to working account in minutes, entirely
inside the Play Console, barely needed Claude. Apple optimized for identity: two separate
websites, a full day of waiting on verification, and enough ambiguity about timelines that I
used Claude mostly to reassure myself the process was normal. There's a $25 one-time fee versus
Apple's $99 a year, but the real tell is that Apple treats "who are you" as the gate and Google
treats "let's get you building" as the goal.

Neither is wrong, exactly. They're just both built for someone who does this professionally.
Take Play's pre-submission checklist for closed testing: a long list of required tasks, and
instead of a wizard that walks you through them, the primary button on each task takes you
*out* of the list. Finish a step, get bounced, navigate back, find your place, repeat. And the
deeper I got into closed testing, the more the whole track felt built for someone other than
me.

TestFlight is the counterexample that makes it obvious: send an invite or share a link, and
people are testing. Done.

Play closed testing is not that. To earn the right to publish, I need **12 testers opted in
for 14 continuous days**. Internal testing and closed testing are separate tracks, so the
12-person clock doesn't even start until someone's in the closed track. And getting one person
there is a sequence: join a Google Group, click an opt-in link, wait for access to propagate,
*then* install. Every step sheds people, and the wait between opting in and getting access is
variable. If it isn't instant, only a genuinely motivated tester remembers to come back.

What finally clicked for me is that these testing tracks are a picture of a large company's org
chart. Internal testing is your employees dogfooding. Closed testing is a deliberately managed
cohort of external customers. Open testing is a public beta. Production is launch. Each track
carries its own access controls because in that world, who holds a pre-release build is a real
question with real compliance attached.

I'm a one-woman show. My "internal testing" is getting the app onto my own phone, and that part
was genuinely easy. My "closed testing" is friends and family, which is the company equivalent
of testing with real customers, except my friends and family aren't a cohort I'm managing.
They're people doing me a favor. The scarce resource isn't their trustworthiness, it's their
patience, and Play spends that patience on Group membership and opt-in links and propagation
delays: controls built to manage a relationship that, in my case, doesn't need managing.

I do get why the 12-testers-for-14-days gate exists. Google is defending against fake installs,
abandoned junk apps, and review manipulation, and "12 real humans for two weeks" is a blunt but
cheap filter for all of it. But it assumes someone who can recruit 12 testers out of petty
cash, not someone asking 12 friends for a favor. Don't make users do work before you've given
them any value: that's product design 101, and Play has it backwards.

If I owned this flow, I'd let a solo developer cap tester count the way TestFlight does, so a
plain shareable link isn't a risk, and collapse the Group-plus-opt-in dance into a single tap.

Here's where I actually am: Google Groups only lets you invite ~10 people at a time, so I sent
10, already short of 12, and I'm waiting to see how many accept before going back for more.
Five have joined so far. Now I'm sitting with the un-fun questions: do I wait? Nag? Post it on
Facebook and hope?

## What this changed for me as a PM

I work on iOS and Android apps in my day job, so I already knew the textbook lesson: commit to
both platforms early or pay for it later in rework and in features that lag on one side. Doing
it myself changed two things more specific than that.

First, I now have a real number for what a platform port costs a team that prepared for it:
roughly an hour of attention and a clean first build. That's what I'll bring to planning
conversations instead of a vague "it depends." It also sharpens the questions I can ask about
how we build. Is that custom animation worth the platform-specific code someone maintains on
both sides forever? Usually not. Unless something moves a key user metric, I'll take shipping it
everywhere fast over polish that only lives on one platform.

Second, I have a lot more sympathy for how much of a tool's friction comes from who it was
designed for. Play's testing model is built for a company, and I'm not one. That's worth
remembering the next time I'm annoyed at a tool at work, or building one.

## If you're thinking about building your own app

If there's any chance you'll want both platforms, commit to that on day one rather than bolting
it on later. The unglamorous cross-platform choices are what did the real work here. And if
you're not even sure the idea is worth shipping yet, build a web app first: faster to iterate
on, with no build queue, simpler to put in front of people, before you've locked into native at
all.
