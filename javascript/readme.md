## Notes ##

__JavaScript__

  1. hello-world

  2. leap

  3. hamming

  4. rna-trans

  5. bob - I altered test "calmly speaking about umlauts" (line 62) because I think it was wrong. It contained all capital letters, which is not speaking calmly, but shouting. I changed one character to lowercase, so that it could actually be considered calmly speaking.

  6. gigasecond - i had to change the way i used module.exports in order for jasmine to work. see `gigasecond.js` vs `bob.js`

  7. word count - i was using a `if (curr in arr)` to build the object at first, which allowed the string value of `toString` to get assigned to the property. Using `hasOwnProperty()` instead fixed this.

  8. pangram

  9. beer-song - could _not_ figure out why it was failing the final test. eventually copied my result and the expectation into text files and diffed them, and discovered the un-tested for (n === 2) case, where there's one (singular) bottle of beer remaining on the wall after you take one down and pass it around.

  1. phone-number

  1. anagram - I don't know if the `Array.prototype.slice.call(arguments)` trick was the best way to get it to accept arrays of strings and lists of strings.

  1. food-chain - es6 string templates ftw. let's never escape strings again.
  
  1. grade school

  1. ??? - robot-name: Signed into exercism for the first time in, according to exercism, 4 months. !!! Picked up where I left off. Remember being stuck hard on _robot-name_. But I guess one gets much stronger during 4 months of constant practice, bc I knocked it out pretty quick. Onward!

  1. ETL - Extract/Transform/Load. Glad to know there's a word for that. Pretty easy object to object transformation. Wish there was an easier way to _reduce_ an objest..

  1. Space Age - pretty straight forward. set a constant earthyear, and a dictionary of planets and years based earthyear.

  2. grains - fun playing with BigInt. i think i should rewrite this (maybe most of these) using object prototypes so i'm not exporting the whole kit and kaboodle each time...

  1. triangle - es2015 spread

  2. clock - `return this` = method chaining. node still doesn't support default params = operator overloading. 

  1. acronym - pretty easy. don't get to play with regex all the time.

  1. scrabble_score - also pretty simple. fun. i wonder if there's a way to work around the temp return variable in LOOKUP.

  1. roman numerals - toughie! Had to think that one through a while. I'd prefer to define the dictionary with just the base numbers, and dynamically add the "subtraction numbers"

  2. isogram - went through several iterations. Finally removed all of my usual functional stuff bc it wasn't really needed. Used es2015 class notation, and the Set datatype _radically_ simplified handling duplicate values.

  3. circular_buffer - :D two implementations: a 'real' one, and a cheating one using parseInt: `git diff 899a25f 5667422`

  3. prime_factors - included three solutions. I wrote a tail call optimized recursive function, and a trampoline it execute it. Had never done that before. That was new!

  2. raindrops - fizzbuzz problem. tried some functional error handling featuring Left.of, Right.of, and either

  1. allergies - not much to report. used a recursive solution. made sure it was tail call optimized, but didn't exploit the fact. TODO: is there a bitwise solution? __UPDATE__ bitwise and, and bitmasks ftw!!

  2. strain - implement a filter.

  3. sieve - The Sieve of Erazamus! terse recursion. are these getting easier?

  3. octal - oh cool, another binary/trinary exercise

  2. luhn - that's fun!

  3. pig-latin - meh. don't love my solution. it's fine.

  2. pythagorean-triplets - that was tuff

  2. series - another soft ball
  
  3. difference of squares - too easy

  3. secret handshake - bitwise math ftw

  2. linked list (**Note** I apparently did a bunch of exercises here w/o taking any notes ¯\_(ツ)_/¯)

  3. wordy

  3. flatten array

  3. hexadecimal

  3. largest series product

  2. kindergarten garden

  2. binary search

  2. binary search tree

  2. matrix - could be more pure..

  3. robot-simulator - that was neat!

  2. nth-prime - probably a better way of doing that.. This is yet another test suite that demonstrates how the `new` keyword is problematic. I assume this happens when the author of the test suite doesn't fully understand prototypal inheritance. No matter, it's good practice for recognizing the need for writing static vs instance methods based on implementation.
