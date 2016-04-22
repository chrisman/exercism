# exercism

Let's do an [exercism.io](http://exercism.io/)

[http://exercism.io/chrisman]()

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

__Someday/Maybe__

  * CoffeeScript
  * Haskell
  * Lua
  * Rust
  * Java
  * Ruby
  * Python

__Active language tracks__

* Clojure                       clojure        38 problems
* CoffeeScript                  coffeescript   21 problems
* C++                           cpp            34 problems
* C#                            csharp         44 problems
* ECMAScript                    ecmascript     50 problems
* Emacs Lisp                    elisp          13 problems
* Elixir                        elixir         39 problems
* Erlang                        erlang         32 problems
* F#                            fsharp         34 problems
* Go                            go             71 problems
* Haskell                       haskell        70 problems
* Java                          java           31 problems
* JavaScript                    javascript     61 problems
* Lisp Flavoured Erlang (LFE)   lfe            30 problems
* Common Lisp                   lisp           28 problems
* Lua                           lua            31 problems
* Objective-C                   objective-c    11 problems
* OCaml                         ocaml          19 problems
* Perl 5                        perl5          61 problems
* PHP                           php            13 problems
* PL/SQL                        plsql          10 problems
* Python                        python         55 problems
* Racket                        racket         18 problems
* Ruby                          ruby           66 problems
* Rust                          rust           25 problems
* Scala                         scala          60 problems
* Scheme                        scheme         13 problems
* Swift                         swift          47 problems
