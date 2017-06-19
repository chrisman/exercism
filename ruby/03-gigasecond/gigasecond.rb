class Gigasecond
  @@seconds = 10**9

  def self.from time
    time + @@seconds
  end
end

module BookKeeping
  VERSION = 6
end
