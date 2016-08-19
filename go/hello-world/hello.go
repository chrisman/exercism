package hello
const testVersion = 2

func HelloWorld(input string) string {
  if input == "" {
    input = "World"
  }

  return "Hello, " + input + "!";
}
