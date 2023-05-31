---
id: rap-lessons-2
title: "#0002 - Always Greene, No Longer Green"
description: "A rap and accompanying literature built for the Greene Scholars program Summer Camp at LinkedIn during Summer 2023.  This is intended to teach basic programming through Python in one long lesson, that can be broken up into six parts."
slug: /raps/0002/always-greene-no-longer-green
tags: [raps, music, lessons, Python, beginner, novice, introduction, programming, AWOL, Coop]
sidebar_position: 2
displayed_sidebar: mainSidebar
---

## Introduction
A rap and accompanying literature built for the Greene Scholars program Summer Camp at LinkedIn during Summer 2023.  
This is intended to teach basic programming through Python in one long lesson, that can be broken up into six parts.
Let's get into it and turn you into an engineer!~


## Learning Materials
Follow the instructions on the [code repository](http://code.opensourceraps.com) README.md file to get setup with all the files for all exercises.
The files for this lesson are located at the path: `/Raps/0002-always-greene-no-longer-green`.

All exercises for this lesson were done in Python.  Note that this documentation will mention other programming languages where applicable to explain concepts and how they are different in Python versus other languages.

The **STUB** audio version of this lesson is here:
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1524150838&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

The **STUB** video for this lesson is here:
<iframe class="youtube-video" src="https://www.youtube.com/embed/AZaid23NnA8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Part 1: Introduction and Why Python? (Spoiler Alert: Why Not?)
> With so many lessons in the world today,  
> We thought we would try to teach you in a different way,  
> I'm so sorry we couldn't get Ice Spice or Drake,  
> But we'll teach you how to be an engineer in just a day,  

Many tech companies believe that "talent can come from anywhere", such as [LinkedIn's REACH program](https://www.youtube.com/watch?v=-5l0IfnjyRw) (or others such as [Microsoft's LEAP program](https://leap.microsoft.com/en-US/) or [AirBnb's Connect program](https://medium.com/airbnb-engineering/inside-connect-airbnbs-engineering-apprenticeship-program-c26d6eb2768c)) where that phrase was taken and will nurture emerging talent to be successful.  
That said, you still need to have the basics under your belt!  We'll help you get there.  

If you follow along with these lesson and accompanying materials, we're sure you can learn basic programming in just a single day!

> To start out, let us shatter an illusion,  
> Programming languages, there’s so much confusion,  
> For a beginner they’re the same, no difference to the lessons,  
> Ignore confusing terms like “pointers” or “garbage collection”,  
> On your coding journey, pick the language that looks fun,  
> It all compiles down to the same 0s and 1s,  
 
Here are some of the programming languages you might have heard of, even if you're a programming neophyte:  
C++, COBOL, Fortran, Java, JavaScript, HTML, PHP, or Python

If you've had some exposure to programming, maybe you've heard of one or more of the following languages:  
Assembly, C#, Lisp, Pascal, PERL, Ruby, Rust, SQL, or Swift

These languages barely crack the surface of what tools are available for programmers to use.  Let's do a small comparison of different features that some of these languages support to show the versatility.

| Language   | Compiled        | Interpreter | Pointers    | Managed Memory |
|------------|-----------------|-------------|-------------|----------------|
| Assembly   | Yes<sup>1</sup> |             |             |                |
| C++        | Yes             |             |             |                |
| Java       | Yes             |             |             |                |
| JavaScript | No<sup>2</sup>  | Yes         |             |                |
| PHP        | No<sup>3</sup>  |             |             |                |
| Python     | Sometimes       | Yes         |             |                |
| SQL        | No<sup>3</sup>  |             |             |                |
<sup>1 - Many other languages are compiled down to assembly language and then that is compiled into a machine-ready binary. Assembly language is usually just compiled (and linked) into a binary.</sup>
<sup>2 - NodeJS.</sup>
<sup>3 - HipHop reference.</sup>
<sup>4 - SQL is compiled into a cached query format.</sup>
<br /><br />

> I’m going to use Python 'cause it’s simple and it’s free,  
> Plus, I met Guido van Rossum and he was nice to me,

[AWOL](https://tst.com)

### Part 2: Variables, Input, and Output
All right.  Let's get into it!~

> Just like math, languages have variables,  
> But unlike algebra, it's really not that terrible,  
> They just stand-in for another value,  
> Then you can use it however you shall do,  
> One more thing before we go too far,  
> They have data types, like string, int, float, bool, or char,  
> I actually say that as “char”, but come on, who really cares?  
> Just remember they’re stored in different sized RAM layers,  
> Assign a value to a variable and then it's stored in memory,  
> Learn hex and binary, that's half your coding weaponry,  
> Stick with math a little longer, you ‘member functions?  
> It takes an input, spits an output, together like conjunctions?  
> Like absolute value, tangent, and square root,  
> Over time you’ll build your own, your knowledge will bear fruit,  
> After that, input and output easily comes next,  
> Every language can consume and spit out a block of text,  
> Look, now we can make a calculator,  
> To count up all the green you’ll be covered in like an alligator,  





### Part 3: Conditionals and Loops

> Let’s finish the basics of this boot camp, next are conditionals,  
> They work deterministically, there’s no magic rituals,  
> It’s boolean logic and you’ve done this all before,  
> Is it true?  Is it false?  mixed with 'and', mixed with 'or',  
> Let’s add one more thing before we can get crazy,  
> The trick to being an engineer is we're all incredibly lazy,  
> We get bored when doing things in repetition,  
> Surround the code you want to automate, apply the right condition,  
> For-loops, while-loops, do-loops, Fruit Loops,  
> Erlang has none, but Ericsson has screws loose,  
> Now take those conditionals that we used from before,  
> We can reuse that same logic, that’s the thing I adore,  
> Put it all together, we can solve any problem,  
> Like Batman’s got his utility belt and he's got his Robin,  
