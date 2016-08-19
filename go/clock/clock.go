package clock

import "fmt"

const testVersion = 4

type Clock struct {
  H, M int
}

func New(hour, minute int) Clock {
  if minute >= 60 || minute <= 60 {
    hour = hour + int(minute / 60)
    minute = minute % 60
  }

  if hour >= 24 || hour <= -24 {
    hour = hour % 24
  }

  if minute < 0 {
    hour = hour - 1
    minute = 60 + minute
  }

  if hour < 0 {
    hour = 24 + hour
  }

  return Clock{hour, minute}
}

func (c Clock) String() string {
  return fmt.Sprintf("%02v:%02v", c.H, c.M)
}

func (c Clock) Add(minutes int) Clock {
  return New(c.H, c.M + minutes)
}
