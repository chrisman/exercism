module Pangram exposing (..)
import Set exposing (toList, fromList)
import List exposing (length)
import String exposing (split, filter, toLower, split)
import Char exposing (isLower)

type alias Sentence = String

isPangram : Sentence -> Bool
isPangram sentence =
  let letters = sentence
    |> toLower
    |> filter isLower
    |> split ""
    |> fromList
    |> toList
    |> length
  in
    letters == 26
