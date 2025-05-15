## Code challenge Notes

Hi, first of all I want to say this was the funnest challenge I'm ever given for a hiring process! It was fun building something I can actually use right now! :)

The conference idea is a really good one. I can see myself getting a few bingos in some of the meetings I am in :D! It was hard for me initially to come up with my own idea but in the end I went for **`"City Stroll Bingo"`**, a game where players explore the city with friends, marking off phrases they hear (e.g., overheard conversations in any language) on a 5x5 bingo card. Not the easiest way of getting a Bingo unless you really, really like walking a ton thru the city. But hopefully the code is the main objective here :)

### Development process

1. I initiated the project by running `npx create-next-app@latest` and opted to use `Typescript`, `Tailwind` and `Turbopack` for a quick setup and removed all the code that I did not need. I kept some of the features like the theme toggle, as it was already there and 90% done, I thought Ill just leave it there and tailor it as a "nice to have" feature.

2. Then I focused first on the Layout component and added a very basic navbar with a title of the game and a button to toggle between dark and light theme. the default setting for the theme is based on the users browser settings.

3. Now I focused on the `BingoCard` itself. I was long arguing with myself if I should use `grid-box` or a simple `table` component. In the end I went for a table component. It "feels-more-robust" for this use-case and also the `border-collapse` class makes it easy to have each field stick to each other in a nice way without having to add unnecessary tailwind classes. At this point I map over an array with empty strings and return a `td` component for the table

4. Once I was happy with the first look of my `BingoCard`, I moved the Card to its own component (I initially started in Page.tsx ) in `src/components/`. It was now time to focus on each `BingoField`. Since here most of the logic happens I moved this also to it's own component. Now I was ready to render some text and align that nicely. I added the folder `const` with a `index.tx` file and created an array with 24 phrases. The `BingoCard` (the table) maps over the array and now returns a `BingoField`

5. For all the game-logic I use React context for easy sharing of functions and variables among components. Maybe not entirely needed for this scale. But in larger applications we always use some form of state management tool and I thought this is an opportunity to show you that I know what Im doing when it comes to state management :). In the `BingoContext` I handle the following features:

   - Generate a new bingo-card
   - Toggle each field
   - Check For winning lines
   - Reset the card
   - keep track of the total-score
   - trigger the Bingo animation
   - toggle game-rules
   - Pick a color

   I did not plan this many features at first, but once I was done with all the mandatory features it was very easy and fast to add extra features like a colorpicker because all the logic was in one place.

6. Now that I have all the logic I need for the game I focused on the animation. I honestly did not work with animations like confetti for some years so I had to do some research (== asking chatGPT) if there is a package that would work for me. Lottie was a package I liked. It is easy to search for animations online and more importantly it is easy to implement. I created a new component `WinAnimation` and basically copied the code-snippet from the Lottie documentation and stripped away all the code I did not need and tailored it slightly. The challenge I faced here did not had to do anything with Lottie perse, but was the sequence in which both animations run.

7. The game was now working and functionally it met all the requirements of the challenge. It was now time to make sure it looks good on all screen-sizes. so far I only had been testing on mobile screen-size, because, `Mobile-First`. I used `Tailwind` breakpoints by prefixing all the necessary utility classes with `md: lg: ..` where needed.

8. Now the game was complete, I couldn't stop myself from adding a few features that were burning inside of me to add. I added the `GameController` component, which is a terrible name now that I think of it.. where The user can: - pick a color to play with - see the Total Bingos - reset the game. I also added a component that is an overlay with the `GameRules`. Which is a basic component that returns a few paragraphs.

### Design Choices

- **Tailwind CSS**: Personally I am a big fan of Tailwind. I also know it is a requirement for the role so I decided to use it for the challenge. Tailwind does come with one big problem and that is the long strings you end up having in your JSX, which is just ugly imo. There are luckily a few solutions to fix that. Myself I like to create style object with separate variables:
  <pre> const styleObject = {
    base: "...",
    base_hover: "hover:...",
    base_sizes: "md:..."
  } </pre>

  This keeps styles manageable and easy to tweak.

- **Typescript**: I have been using Typescript almost as long as I have been using Javascript and I cannot live without it! A conscious design focus I had here is reusability. I created a types folder where I export all the shared types from. When creating for example a new array with winning fields that have all the fieldId's which is a type number I can do: `const winningFields: number[] = []` But I prefer `const winningFields: BingoFieldType["id"][] = []`. This way I can be sure that when type id changes, it changes everywhere.

- **Multi-Player Equality**: To ensure fairness across devices, each player always gets the same only 24 phrases game offers in a shuffled way.

- **React**: One thing I like to mention here is that as you will see in my code, all my React components do not have any pure functions within the component themselves. The only functions that stay in the component are those that return side-effects like updating state for example. The pure functions stay in the same file however, unless it is a function that more components could use. Then I would move these functions to a utility folder. Which is not the case in this project.

### Challenges

- **Animation**: Out of practice with animation libraries, I started from scratch but got it working with Lottie.

- **Finding the winning line**: Rewrote this function 15 times! Tricky but fun to make it clean and avoid redundancy.

- **UI**: Like many devs, I struggle with design decisions. Picking a color for a button takes me on average 3x longer than writing the code what the button must do! I kept it as simple as I could, thankfully for those who finance the project, this is not my focus in most projects ^^

- **Time**: With more time, I’d polish the UI and refine functions, especially animation triggers and win detection.

### Final thoughts

For me it was a lot of fun working on this challenge. I hope you can see the authenticity in my code. I will be very happy to discuss any of my code further with you!
