# Discover D&D Races with Shell Scripting

Hey there, aspiring adventurers and young developers! 🌟 Are you ready to dive into the mystical world of Dungeons & Dragons and create your own interactive race search tool using the power of the command line? Well, grab your virtual dice, because we're about to embark on a coding quest! 🎲🧙‍♀️

## Preparing Your Bash Adventure

Before we set off on our coding journey, make sure you have these magical items:

1. A command-line terminal (Bash)
2. An internet connection
3. Your excitement and curiosity

## Building the D&D Race Search Tool

1. **Summon the Magic of Curl:**

    Open your command-line terminal and let's cast our first spell to fetch D&D race information using the mighty `curl` command. Type or copy-paste the following:

    ```bash
    curl -L 'https://www.dnd5eapi.co/api/races/dwarf' \
    -H 'Accept: application/json'
    ```

    When you hit Enter, you'll unveil the mystical details of the D&D Dwarf race!

2. **Create Your Own Spell (Bash Script):**

    Now, let's create a magical script named `dnd_race_search.sh` using your favorite text editor (like `nano`, `vim`, or even a code editor).

    ```bash
    #!/bin/bash

    echo "Welcome to the D&D Race Search Tool!"
    echo "-----------------------------------"
    echo

    read -p "Enter the name of a D&D race: " race_name

    curl -L "https://www.dnd5eapi.co/api/races/$race_name" \
    -H 'Accept: application/json'
    ```

3. **Enchant Your Script:**

    Before you can use your script, you'll need to make it executable. In your terminal, type:

    ```bash
    chmod +x dnd_race_search.sh
    ```

4. **Embark on Your Quest:**

    Cast your spell and run your enchanted script:

    ```bash
    ./dnd_race_search.sh
    ```

    You'll be prompted to enter the name of a D&D race. For now, let's try "dwarf" and see what magnificent details unfold!

## The Mystical Output Awaits!

Prepare yourself, for the secrets of the D&D Dwarf race shall be revealed before your very eyes! Once you enter "dwarf," you should expect an awe-inspiring response similar to this:

```
Welcome to the D&D Race Search Tool!
-----------------------------------

Enter the name of a D&D race: dwarf

{
  "index": "dwarf",
  "name": "Dwarf",
  "speed": 25,
  "ability_bonuses": [
    {
      "ability_score": {
        "index": "con",
        "name": "CON",
        "url": "/api/ability-scores/con"
      },
      "bonus": 2
    }
  ],
  "alignment": "Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.",
  "age": "Dwarves mature at the same rate as humans, but they're considered young until they reach the age of 50. On average, they live about 350 years.",
  "size": "Medium",
  "size_description": "Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.",
  ...
  ...
}

```

## Celebrate Your Coding Victory!

Congratulations, young adventurers! You've crafted your very own D&D Race Search Tool using the magical language of Bash. You can now explore different races and learn about their unique abilities, traits, and more. Your journey has just begun, and there's so much more to discover in the realm of coding and Dungeons & Dragons. May your code be bug-free and your rolls be critical hits! 🎉🏰🧝‍♂️

Remember, coding is like a grand adventure. Keep exploring, learning, and having fun along the way! Happy coding! 🌟🐉👾