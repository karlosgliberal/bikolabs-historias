---
title: Catching Up
description: Modernizing CatchUp, my first iOS app, with SwiftUI and cleaner code.
date: 2020-05-08
imagePath: /blog-images/catching-up/catchup-icon.png
imageAlt: CatchUp's app icon
tags:
  - iOS
  - swift
  - swiftui
  - rewrite
---

CatchUp - Keep in Touch was first released on May 6, 2018. It was the first iOS app I'd ever published to the App Store. Almost exactly two years later, I'm publishing this blog post and releasing an all-new, completely rewritten version of CatchUp.

This post talks about the origins of CatchUp, my decision to start over from scratch, implementing SwiftUI and Core Data, and writing cleaner code. At the end of this post, I do a bit of comparison between the new version and the previous version.

## Getting Started with iOS

When I graduated from college in 2017 I was primarily only familiar with web development. I had never taken a mobile development course in school and knew nothing about Objective-C or Swift. For whatever reason, iOS/mobile development hadn't truly crossed my mind until after graduation. But once I started down that path in late 2017 I never turned back.
When all was said and done, I had my first app. And it worked! Much like
However, over the following months/years, CatchUp began to suffer from some poor original choices made in the app.

## A Lull in Development

During the first few months after release in 2018, I updated CatchUp semi-regularly with new features and some minor design tweaks. However, as I began evaluating some larger-scope features I wanted to implement, I continued to run into the same problem.

Above all else, my existing code was just plain _bad_.

As I mentioned, I put this out pretty much immediately after I had learned the basics of Swift and iOS development. Knowing the basics != knowing how to make a good application. My naming was poor, many functions were massive and had far too many interspersed responsibilities, there was no consistency in where components were located, I was practically trial-and-erroring my Storyboards, etc. The list could go on and truly envelop this entire post. I'll spare you that pain.

The app was simple and straightforward enough that nearly all of this went unnoticed by users. There was only one noticeable performance issue and it didn't bother me enough at the time. As I said, the app was doing well! It was receiving nearly all 5-star reviews and was featured on a podcast. What more could I ask for?

Lesson learned. Good reviews do not mean a high-quality application. As my plans for the app grew more ambitious, and as I learned more about proper development from my full-time job, the code atrocities I was committing became ever more glaring. I consistently ran into walls caused by poor code quality as I continued to explore implementing more robust features.

I simply lost motivation for the app about a year after release. I didn't want to put forth the necessary effort to fix the underlying problems with the code that were holding it back. And so... In May of 2019, CatchUp was essentially left to die. Then came the email from Apple.

## Starting Over

In March 2020, Apple sent an email to all developers with a reminder that all apps for iPhone or iPad must be built with the iOS 13 SDK or later by June 30. If they weren't, they would no longer be available on the App Store.

CatchUp was my first iOS app; it holds a special place in my heart. But it was poorly written and had become increasingly difficult to maintain because of that.

This brought me to a crossroads of sorts. I saw three options in front of me.

**Option 1: Let it die.**

I honestly did consider this. My initial attempts at building the app with the iOS 13 SDK severely broke a significant amount of functionality. Figuring this out would mean an even bigger maintenance hole to dig myself out of.

**Option 2: Bite the bullet and fix the app, but stick with the core technologies I began with.**

This probably would have taken less time than the option I ended up choosing, but would have been far less fun, and I would have learned so much less.

**Option 3: Start from scratch and rewrite everything.**

Why not just blow away the whole project and start over?
