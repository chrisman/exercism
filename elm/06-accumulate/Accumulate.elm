module Accumulate exposing (..)

accumulate : (x -> x) -> List x -> List x
accumulate f xs =
  case xs of
    [] -> []
    first :: last -> 
      f first :: accumulate f last
