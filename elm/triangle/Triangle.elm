module Triangle exposing (..)

triangleKind : number -> number -> number -> Result String String
triangleKind a b c =
  let sides = Ok "yep"
  in case sides of
    Ok val -> Ok "equilateral"
    Err msg -> Err "not a triangle"
