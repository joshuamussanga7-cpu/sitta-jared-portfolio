---
title: "Stack Hop: What a Small Game Taught Me About Progression"
slug: "building-stack-hop"
date: "2026-09-02"
author: "SITTA JARED MUSSANGA"
description: "A case study on using simple rules, escalating difficulty, and short feedback loops to create a game people can understand quickly."
tags: ["Game Development", "Stack Hop", "Mobile Games", "Progression", "UX"]
---

# Building Stack Hop

Some of my most useful development lessons have come from small experiments. **Stack Hop** is a good example: the mechanics are straightforward, but the project exposes several important ideas about progression and interaction design.

## Keep the Rules Small

The first job of a casual game is to communicate its rules quickly. The player should be able to start interacting before reading a long explanation.

A compact ruleset also makes testing easier. When something feels wrong, there are fewer variables to investigate. That means I can concentrate on timing, responsiveness, collision behavior, pacing, and visual clarity.

## Progression Without Complexity

Progression does not require dozens of systems. It can come from gradually changing the challenge. A small change in speed, spacing, timing, or precision can make a familiar action more demanding.

This is useful beyond games. In a productivity app, for example, progress may mean moving from a simple task view to smarter workflows. The principle is the same: introduce complexity only after the user understands the foundation.

## The Value of Rapid Feedback

Short games depend on fast feedback. When the user taps or swipes, the system should respond immediately. Delayed feedback makes even correct input feel broken.

I therefore think about interaction in milliseconds: input, state update, animation, visual confirmation, and the next available action should form one continuous experience.

## A Practical Lesson

Stack Hop reinforced a development habit I now use everywhere: **build the smallest playable or usable loop first, then improve it through observation.**

That approach reduces wasted effort and makes it easier to identify which improvements actually matter.

**Explore the project:** [Stack Hop project](/projects/stack-hop)
