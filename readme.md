# exercism

Let's do an [exercism.io](http://exercism.io/)

[http://exercism.io/chrisman]()

__Working on__

* JavaScript

  1. phone-number

__Done__

* JavaScript

  1. hello-world

  2. leap

  3. hamming

  4. rna-trans

  5. bob - I altered test "calmly speaking about umlauts" (line 62) because I think it was wrong. It contained all capital letters, which is not speaking calmly, but shouting. I changed one character to lowercase, so that it could actually be considered calmly speaking.

  6. gigasecond - i had to change the way i used module.exports in order for jasmine to work. see `gigasecond.js` vs `bob.js`

  7. word count - i was using a `if (curr in arr)` to build the object at first, which allowed the string value of `toString` to get assigned to the property. Using `hasOwnProperty()` instead fixed this.

  8. pangram

  9. beer-song - could _not_ figure out why it was failing the final test. eventually copied my result and the expectation into text files and diffed them, and discovered the un-tested for (n === 2) case, where there's one (singular) bottle of beer remaining on the wall after you take one down and pass it around.

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
