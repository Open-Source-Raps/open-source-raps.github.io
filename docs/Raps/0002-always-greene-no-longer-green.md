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
The files for this lesson are located at the path: `/raps/0002-always-greene-no-longer-green`.

All exercises for this lesson were done in Python.  Note that this documentation will mention other programming languages where applicable to explain concepts and how they are different in Python versus other languages.

### Part 1: Introduction and Why Python? (Spoiler Alert: Why Not?)

> Yo, there's so many computer science lessons today,  
> So Open Source Raps! is here teach you in a different way,  
> Apologies we couldn't get Ice Spice or Drake,  
> But this rap'll change your life become an engineer today,  

Many tech companies believe that "talent can come from anywhere", such as [LinkedIn's REACH program](https://www.youtube.com/watch?v=-5l0IfnjyRw) (or others such as [Microsoft's LEAP program](https://leap.microsoft.com/en-US/) or [AirBnb's Connect program](https://medium.com/airbnb-engineering/inside-connect-airbnbs-engineering-apprenticeship-program-c26d6eb2768c)) where that phrase was taken and will nurture emerging talent to be successful.  
That said, you still need to have the basics under your belt!  We'll help you get there.  

If you follow along with these lesson and accompanying materials, we're sure you can learn basic programming in just a single day!

And we're still very sorry we couldn't get [Ice Spice](https://open.spotify.com/artist/3LZZPxNDGDFVSIPqf4JuEf) or [Drake](https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4).

> To start out, let us shatter an illusion,  
> Programming language choice, there’s so much confusion,  
> For a beginner they’re the same, you don’t need an inspection,  
> Ignore confusing terms for now like “garbage collection”,  
> On your coding journey, pick the language that looks fun,  
> They all compile down to the same 0s and 1s,  
 
Here are some of the programming languages you might have heard of, even if you're a programming neophyte:  
C++, COBOL, Fortran, Java, JavaScript, HTML, PHP, or Python

If you've had some exposure to programming, maybe you've heard of one or more of the following languages:  
Assembly, C#, Lisp, Pascal, PERL, Ruby, Rust, SQL, or Swift

These languages barely crack the surface of what tools are available for programmers to use.  Let's do a small comparison of different features that some of these languages support to show the versatility.

| Language   | Compiled        | Interpreter | Pointers | Managed Memory |
|------------|-----------------|-------------|----------|----------------|
| Assembly   | Yes<sup>1</sup> | No          | Yes      | No             |
| C++        | Yes             | No          | Yes      | No             |
| Java       | Yes             | No          | No       | Yes            |
| JavaScript | No<sup>2</sup>  | Yes         | No       | Yes            |
| PHP        | No<sup>3</sup>  | No          | No       | Yes            |
| Python     | No              | Yes         | No       | Yes            |
| SQL        | No              | No          | No       | No             |
<sup>1 - Many other languages are compiled down to assembly language and then that is compiled into a machine-ready binary. Assembly language is usually just compiled (and linked) into a binary.</sup>
<sup>2 - NodeJS is a version of JavaScript used on backend servers and can be compiled.</sup>
<sup>3 - Facebook previously created HipHop to compile PHP, but it was not widely used outside of the company.</sup>
<br /><br />
See how crazy this can all get?!  That's why...

> We’re going to use Python 'cause it’s simple, fast, and free,  
> And usually installed on both Macs and PCs,  

We could have picked any language.  We chose Python for these reasons.  Once you have the basics down, explore a little and figure out what looks interesting to you.

### Part 2: Variables, Input, and Output
The code for this section is in the file: `1-programming-basics.py`.

All right.  Let's get into it!~

> Just like math coding languages have variables,  
> But unlike algebra, they really aren’t that terrible,  
> They have a name, they have a value, then you can reference,  
> Them in any place in the program, whatever your preference,  

```python
# Anything after the # is a "comment".  It's just a note to ourselves and doesn't actually do anything.
# We'll use these to give notes along with the programs below...

# Variables?!  Oh, no!~
x = 5

y = 6

z = -1

x + y

a = x + y - z
```

Just assign the value and you can use them any way you like, even assigning them to each other, like
```python
x = y
```

> So many different types, you can consider them like “flavors”,  
> We’ll give the slightest taste now and explain more later,  

```python
string_variable = str('A string is just a list of characters.')
int_variable = int(5)
other_int_variable = int(y)
float_variable = float(-1.234)
bool_variable = True
char_variable = 'a'             
```

This is more than you even really need to know for now, but it's just important to note that variables are "typed" and can hold different data depending on their type.

> Since we mentioned math maybe you see where this is headed,  
> Variables? Check! Next are “functions” or “methods”,  
> There’s the ones you know from math like tangent or square root,  

```python
import math
```

It would take a long time for everything that a programming language to do to be accessible at once.  Instead, utilities are kept in "libraries" that can be imported and referenced.
Since I want to use some functions from mathematics, I'm importing Python's built-in `math` library.

Then I can use it to execute any of the methods it imported:

```python
math.sin(a)                                                                                             # a is the input, the output is -0.5365729180004349

math.tan(z)                                                                                             # Tangent.
math.sqrt(49)                                                                                           # Square root.
```

> Over time you’ll build your own, your knowledge will bear fruit,  

This function isn't very useful, but it's an example of a user-defined function.  It takes the value that I pass in (labeled `thing`) adds 1 to it and then returns the result as the output of the function to the caller.

```python
def my_function(thing):
  return thing + 1

a = my_function(x)
b = my_function(y)
print(a)
print(b)
```

> Let’s hit the most important, but they aren’t that complex,  
> Interfacing with the user using blocks of text,  

```python
print("Any string can go here" + " and even 'added' (or concatenated) to another one.")                 # We've already been doing output so far...

print('Enter your favorite number:')
favorite_number = input()
print('You entered: ' + favorite_number)
favorite_number_incremented = int(favorite_number) + 1                                                  # python is smart enough to see we're trying to add a number and a string and will error if we don't "cast" one to the other
print('This number is bigger: ' + str(favorite_number_incremented))                                     # and now we have to cast it back
```

As we'e already been demonstrating above, the `print()` method takes any _string_ passed to it and outputs it to the screen.  
Note that we have some creative uses above such as "concatenating" a number or another string.  

Note that this is one of the areas where types are important, which is why this is demonstrated here.  We can't really add "words" to "numbers", so we have to do some intermediary conversions.

### Part 3: Conditionals and Loops
The code for this section is in the file: `1-programming-basics.py`.

> Let’s (w)rap up with the basics, ending with conditionals,  
> They work deterministically, there’s no magical rituals,  
> It’s boolean logic and I’m sure you’ve done it before,  
> Is it true?  Is it false?  mixed with 'and', mixed with 'or',  

Conditionals, otherwise known as "if-then-else" statements allow us to branch our logic based on some kind of conditions.

```python
x = 0
if x > 0:
  print('Greater than 0.')

if x == 0:
  print('Equal to 0.')

if x < 0:
  print('Less than 0.')
```

The indented code (which is how Python creates segmented blocks of instructions) only executes if the condition after "if" is true.  This is "boolean logic": something that results in a true or false result.

```python
if x > 0:
  print('Greater than 0.')
elif x == 0:
  print('Equal to 0.')
else:
  print('Less than 0.')
```

This is just a simplification of the previous statement.  Note that they are functionally slightly different:
- They are logically the same because the only alternative case after the first two is that x is less than 0.  Be very careful that your else can _always_ execute.
- The second example is one single block.  It will execute in whole one time.  The first is three separate statements.  If the value of x were somehow to be changed in between the if-statements, more than one could execute. 

```python
y = 1
if x == 0 and y == 2:
    print('This will not work.')
elif x == 0 and y == 1:
    print('This will work.')

if x == 0 or y == 2:
    print('This will also work.')
```

Using `and` and `or` to combine boolean expressions lets us impement extremely complex logic.  Note that you can add as many `and`s or `or`s as you like and you can use parenthesis to add grouping and priority.

> One last tool before we can get crazy,  
> The trick to being an engineer is we're all so lazy,  
> Everyone gets bored when doing things in repetition,  
> Indent the code you want to automate, apply the right condition,  

"Loops" are one of the most important constructs in computer programming since they let us write instructions a single time and then execute them as many times as needed.

> For-loops, while-loops, do-loops, word soup,  
> Simple enough, recite this rap while you go and shoot hoops,  

These are the different kinds of loops you'll find in most languages:
**for** - These loops are generally used when you have a known number of times to execute a set of instructions.  
**while** - These loops will run forever until some condition is met that causes them to stop executing.  A loop that has a condition that can never evaluate as false will theoretically run "forever" and is known as an "infinite loop".
**do** - This is exactly the same as the `while` loop except that the condition is checked at the end instead of the beginning (meaning the instructions will execute at least once).

```python
for x in range(5):      # range() is a yielding function (one that keeps track of its responses and enumerates appropriately) that will return the values 0, 1, 2, 3, and 4 respectively.
  print(x)

x = 0
while x <= 4:
  print(x)
```
These two loops do the same exact thing, printing the numbers 0, 1, 2, 3, and 4 on separate lines.
Technically Python does not have a "do loop".  We can simulate one, but this is a construct you'll find in other languages. 🙂

> You've had the basics, are you ready to bring the thunder?!  
> Let’s write your first program to check for a prime number,  

Ok, that's seriously it.  Let's put it all together and write your first program!!!

### Part 4: First Program - Is a number prime or not?
The code for this section is in the file: `2-is-a-number-prime.py`.

> The only input that we need is the number that we're checking,

```python
def is_prime(n):
```

We define our method, giving it a name and indicating tha tit will take a single parameter, `n`.

```python
  if n <= 1:
    return False
```

This is what we call a "corner" or "edge" case.  If we didn't have this part, the program would work just fine when passed a number less than or equal to 1, but it would skip over the for loop below and return `True` which is incorrect!

> And when we brute force it with all these values we’re inspecting,  
> We could loop from 2 until the number that we have,  
> But we’re working with divisors, so we only have to do half,  
> And we don't start at 1 because that’d be a total waste,  
> Every number can be divided by 1, that’s from like fourth grade!

```python
  for i in range(2, int(n**0.5) + 1):
```

Ok, this one is a little complex...
We're looping from 2 until just past the midpoint for our value.  This is just a simple optimization around division.  If we checked all the numbers, we would be doing double work.

And yea, every number can be divided by 1 is from fourth grade, right?

> Loop over each, divide, and check the remainder,  
> We call that “modulus” otherwise this shouldn't be a stranger,  
> If we have nothing left then it's a clean divisor,  
> It's not prime like a lost Amazon subscriber,

```python
    if n % i == 0:
      return False
```

"Modulus" is the math operation of dividing two numbers but in this case we are only concerned with the remainder.
If there is no remainer and we found a clean divisor, we know that a number isn't prime.  (Slick Amazon joke, right?)

```python
  return True
```

> But if it hits the bottom and it makes all the way through,  
> It means we couldn't find a divisor, it's prime, return true,  

If by the end we haven't returned False, we can assume the number is prime!

```python
print(is_prime(4))
print(is_prime(10))
print(is_prime(7))
```

### Part 5: Second Program - Next ten leap years.

> You may think that you’re not ready; you may have some deep fears,  
> So practice more and find the next 10 leap years,  

You've got this!~

> First we call the today() method to grab current date,  
> Strip out the current year and we’ve got a starting point, that’s great,

```python
from datetime import date

current_year = date.today().year
```

We use the built-in date construct's `today()` method to grab the current year.

> Reset a counter back to 0, it's like we just pushed rewind,  
> Now we can try to loop forever even if it takes our whole lifetime, (it won’t)  
> Checking if the year divides evenly in four,  
> If not, we don't have to check any more,  
> Otherwise, we mod 100 and only accept every fourth,  
> Every nerd here knows the leap year formula, of course,  
> If the conditional’s true, we print the year and increment,  
> Now loop until we’re done and wonder where the heck the time went,

```python
# Initialize count and year variables
count = 0
year = current_year

# Loop until we find 10 leap years
while count < 10:
  if year % 4 == 0 and (year % 100 != 0 or year % 400 == 0):
    # If the year is a leap year, print it and increment the count
    print(year)
    count += 1

  # Increment the year
  year += 1
```

### Part 6: Conclusion

> With this kind of mentality you can finish any problem,  
> Take what you’re given break it into pieces and solve ‘em,  
> To be an engineer, all you need from here is practice,  
> HackerRank, LeetCode, Career Cup, max this,  
> Any problem, break it down, right along its axis,  
> And of course use LinkedIn Learning and I bet you’ll crack this.  

That's it.  You really have the basics of programming if you understand how those last two projects were constructed.
Everything else from this point is experience and practice.