module HelloWorld exposing (..)
import Maybe 
import String

helloWorld : Maybe String -> String

helloWorld name =
  String.concat 
    [ "Hello, "
    , case name of
      Nothing ->
        "World"

      Just name ->
        name
    , "!"
    ]
