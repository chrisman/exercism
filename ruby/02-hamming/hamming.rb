# String helpers:
class String
  def head
    self[0]
  end

  def tail
    self[1..-1]
  end
end

def do_count(left, right, count)
  left.empty? ? count : do_count(left.tail, right.tail, left.head == right.head ? count : count + 1)
end

class Hamming
  def self.compute(left, right)
    raise ArgumentError unless left.length == right.length
    do_count(left, right, 0)
  end
end

module BookKeeping
  VERSION = 3 # Where the version number matches the one in the test.
end
