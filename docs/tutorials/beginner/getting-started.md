---
sidebar_position: 1
---

# Getting Started

Let's make our first API request to the D&D 5th Edition API!

Open up a terminal and use [curl](http://curl.haxx.se/) or [httpie](http://httpie.org/)
to make an API request for a resource. You can also scroll through the
definitions below and send requests directly from the endpoint documentation!

For example, if you paste and run this `curl` command:

```bash
curl -X GET "https://www.dnd5eapi.co/api/ability-scores/cha" -H "Accept: application/json"

# or with httpie
http dnd5eapi.co/api/ability-scores/cha
```

We should see a result containing details about the Charisma ability score:

```json
{
  "index": "cha",
  "name": "CHA",
  "full_name": "Charisma",
  "desc": [
    "Charisma measures your ability to interact effectively with others. It includes such factors as confidence and eloquence, and it can represent a charming or commanding personality.",
    "A Charisma check might arise when you try to influence or entertain others, when you try to make an impression or tell a convincing lie, or when you are navigating a tricky social situation. The Deception, Intimidation, Performance, and Persuasion skills reflect aptitude in certain kinds of Charisma checks."
  ],
  "skills": [
    {
      "name": "Deception",
      "index": "deception",
      "url": "/api/skills/deception"
    },
    {
      "name": "Intimidation",
      "index": "intimidation",
      "url": "/api/skills/intimidation"
    },
    {
      "name": "Performance",
      "index": "performance",
      "url": "/api/skills/performance"
    },
    {
      "name": "Persuasion",
      "index": "persuasion",
      "url": "/api/skills/persuasion"
    }
  ],
  "url": "/api/ability-scores/cha"
}
```
