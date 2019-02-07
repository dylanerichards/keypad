class Keypad
  def self.possible_words(number)
    number = number.split("")

    keypad = {
      "1" => [],
      "2" => ["a", "b", "c"],
      "3" => ["d", "e", "f"],
      "4" => ["g", "h", "i"],
      "5" => ["j", "k", "l"],
      "6" => ["m", "n", "o"],
      "7" => ["p", "q", "r", "s"],
      "8" => ["t", "u", "v"],
      "9" => ["w", "x", "y", "z"],
    }

    letters = [].tap do |letters|
      number.each do |digit|
        letters << keypad[digit]
      end
    end.flatten

    combination_zips = letters.combination(number.length).to_a.map { |combination| combination.zip(number) }

    valid_combinations = []
    combination_zips.each do |combination|
      if combination.all? { |zip| keypad[zip[1]].include?(zip[0])}
        valid_combinations << combination
      end
    end

    valid_combinations.map { |combination| p combination.join.tr("0-9", "") }
  end
end
