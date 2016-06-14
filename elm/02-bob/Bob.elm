module Bob exposing (..)
import String
import List

-- TYPES
type alias Query = String
type alias Answer = String

isYelling : Query -> Bool
isYelling q =
  q == String.toUpper q && q /= String.toLower q

isQuestion : Query -> Bool
isQuestion q =
  String.endsWith "?" q

isSilence : Query -> Bool
isSilence q =
  String.isEmpty (String.trim q)
  
cases = [
  (isYelling, "Whoa, chill out!"),
  (isQuestion, "Sure."),
  (isSilence, "Fine. Be that way!")
  ] 

hey : Query -> Answer
hey query =
  case (List.head (List.filter (\c -> (fst c) query) cases)) of
    Just c -> snd c
    Nothing -> "Whatever."
