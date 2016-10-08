require "csv"
require "json"

cards = []
CSV.foreach("./cards.csv") do |row|
  cost_match = row[4].match(/\d+/)
  cost = cost_match ? cost_match[0].to_i : nil

  cards << {
    name: row[0],
    expansion: row[2],
    cost: cost,
    cost_attributes: {
      overpay_allowed: row[4].include?("+"),
      requires_potion: row[4].include?("Þ"),
    },
    not_in_supply: row[4].include?("*"),
    type: {
      action: row[3].include?("Action"),
      attack: row[3].include?("Attack"),
      event: row[3].include?("Event"),
      duration: row[3].include?("Duration"),
      reaction: row[3].include?("Reaction"),
      reserve: row[3].include?("Reserve"),
      treasure: row[3].include?("Treasure"),
      traveller: row[3].include?("Traveller"),
      victory: row[3].include?("Victory"),
    },
    text: row[10]
  }
end

# File.write("./cards.json", JSON.pretty_generate(cards))
File.write("./cards.json", JSON.generate(cards))
