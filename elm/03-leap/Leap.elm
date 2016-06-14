module Leap exposing (..)

type alias Year = Int

isLeapYear : Year -> Bool
isLeapYear y =
  let multipleOf =
    \n -> y % n == 0
  in
    (multipleOf 400)
    || 
      (multipleOf 4) && (not (multipleOf 100))
