# Command Line Spellbook with Python

Welcome to this step-by-step tutorial on building an interactive command-line spellbook using Python! Whether you're a beginner or have some experience with Python, this tutorial will guide you through creating a simple tool to explore Dungeons & Dragons 5th Edition (D&D 5e) spells right from your terminal.

## Prerequisites

Before we begin, make sure you have the following:

1. Basic understanding of Python programming.
2. A code editor (e.g., Visual Studio Code) installed on your computer.
3. Familiarity with making HTTP requests in Python.

## Setting Up the Project

1. **Create a New Directory:** Start by creating a new directory for your project. Let's call it "spellbook-cli".

2. **Create a Python Script:** Inside the project directory, create a file named `spellbook.py`.

## Building the Command-Line Spellbook

### `spellbook.py`

Let's start building our command-line spellbook:

```python
import requests

def display_spell(spell_data):
    print(f"Name: {spell_data['name']}")
    print(f"Index: {spell_data['index']}")
    print(f"URL: {spell_data['url']}")
    print()

def main():
    url = "https://www.dnd5eapi.co/api/spells"
    headers = {'Accept': 'application/json'}

    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        spells_data = response.json()
        spells = spells_data['results']

        print("Welcome to the D&D 5e Spellbook!")
        print(f"Total Spells: {spells_data['count']}\n")

        while True:
            print("Commands:")
            print("1 - List all spells")
            print("2 - Search for a spell by name")
            print("3 - Exit")
            
            choice = input("Enter your choice: ")

            if choice == '1':
                print("\nList of Spells:")
                for spell in spells:
                    display_spell(spell)
            elif choice == '2':
                spell_name = input("Enter the spell name: ").lower()
                matching_spells = [spell for spell in spells if spell_name in spell['name'].lower()]
                print("\nMatching Spells:")
                for spell in matching_spells:
                    display_spell(spell)
            elif choice == '3':
                print("Goodbye!")
                break
            else:
                print("Invalid choice. Please select a valid option.")

if __name__ == "__main__":
    main()
```

## Running the Spellbook

1. Open your terminal and navigate to the project directory.

2. Run the following command to execute the `spellbook.py` script:

   ```
   python spellbook.py
   ```

3. Follow the on-screen prompts to explore and search for D&D 5e spells right from your command line.

## Conclusion

Congratulations! You've successfully built an interactive command-line spellbook using Python. This tool allows you to list all spells, search for spells by name, and exit the application. As you become more comfortable with Python programming, you can explore adding more features, improving user experience, or integrating additional APIs.

Remember, practice is essential for becoming a proficient developer. Keep coding, experimenting, and learning, and you'll continue to develop your programming skills. Happy adventuring! 🪄