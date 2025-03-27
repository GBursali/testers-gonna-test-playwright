Feature: REPO wiki monster manual homepage
    Scenario: Wiki homepage lookup monsters
        Given A web browser on the REPO wiki homepage
        When I click on the "Monsters" category
        Then I should see these monsters:
            | Animal          |
            | Apex Predator   |
            | Banger          |
            | Bowtie          |
            | Chef            |
            | Clown           |
            | Gnome           |
            | Headman         |
            | Hidden          |
            | Huntsman        |
            | Mentalist       |
            | Peeper          |
            | File:Peeper.png |
            | Reaper          |
            | Robe            |
            | Rugrat          |
            | Shadow Child    |
            | Spewer          |
            | Trudge          |
            | Upscream        |
        When I click on the "Mentalist" monster
        Then verify the real name is "Mentalist (Alien)"
        And monster's danger level is 2
        And monster's behavior is "Floating, Telekinesis attack"
        And monster's strength breakpoint is "The Mentalist (Alien) requires 4 strength in order to lift him off of the ground without assistance from other players"
        And monster's map is "TBA"