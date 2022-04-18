# Project's notes

I had fun developing this small project, however, I encountered a few obstacles during the process, as in any software project.

When I first tried to create the herbarium app with create-react-app I got an unexpected error:

```
$ npx create-react-app@5.0.0 herbarium

Creating a new React app in /home/natalie/codingProjectsSince2021/herbarium.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...


added 1354 packages in 43s

171 packages are looking for funding
  run `npm fund` for details

Initialized a git repository.

Installing template dependencies using npm...
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR! 
npm ERR! While resolving: herbarium@0.1.0
npm ERR! Found: react@18.0.0
npm ERR! node_modules/react
npm ERR!   react@"^18.0.0" from the root project
npm ERR! 
npm ERR! Could not resolve dependency:
npm ERR! peer react@"<18.0.0" from @testing-library/react@12.1.5
npm ERR! node_modules/@testing-library/react
npm ERR!   @testing-library/react@"^12.0.0" from the root project
npm ERR! 
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force, or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR! 
npm ERR! See /home/natalie/.npm/eresolve-report.txt for a full report.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/natalie/.npm/_logs/2022-04-12T15_20_42_518Z-debug-0.log
`npm install --no-audit --save @testing-library/jest-dom@^5.14.1 @testing-library/react@^12.0.0 @testing-library/user-event@^13.2.1 web-vitals@^2.1.0` failed

```
 
After heading to the create-react-app Github it turned out it was a [known issue](https://github.com/facebook/create-react-app/issues/12278). There were a few workarounds but I decided to wait a day, and fair enough the following day it was fixed in a new version of the package.

Because the path for the images was not included as a property of the flower object, I decided to manipulate the object with the data and added an image property with the path for the flower. 

I thought about calculating the image names in code by using the `name` property. I decided not to go this way because it felt too hardcoded even for a toy application, and in a real app the images would come as URLs from the API anyway.

At first I created a folder for the flowers in the source folder, but of course it did not work because they were not static, they came with the data, I was not going to import them. I then discovered that [create-react-app would serve content from the public folder automatically](https://create-react-app.dev/docs/using-the-public-folder#adding-assets-outside-of-the-module-system), so that was the right place for the images.

Since the SVG files where static I could have been able to just import them, and then putting the import as the source of `img` tags. However, I decided to put them as background images on the CSS. The user was not going to interact with them in any way.

I created two spans on `Card` component to display the humidity and the temperature. I was debating whether I should have add a common class for the both of them and then an individual class for the styles they were not sharing. I decided instead to target both classes in the same CSS rule and then, in separate rules apply the individual properties to each one of them.

If I had been using SASS it would have been cleaner. I could have created a mixin and then change the values of the properties that weren't the same.

For the background of the cards, I decided to use the `:nth-child` pseudo class. Although a little repetitive, it was faster and cleaner than maybe changing a variable's background value with `if else` statements if the name was the one; then adding an inline style with that value in the JSX.

I needed to center the text of both spans vertically with the temperature and humidity text, and using `display:flex`, `align items:center` would have messed my layout. I had already decided to use `display: inline-block`, changing to display flex would have required me to do other changes and there was not time. I simply added a small `padding-top` in order to center it vertically, was not the best practice solution but it looked good. 

On the first flower the temperature had too many decimals, so I used the `toFixed()` method to show only one. According to MDN this method rounds the number, which made same for temperatures.

I was not too fond of putting the description on a `div` outside the main `div` of the `Card` component; but putting them inside changed my whole layout and once again did not have the time to fix it, so I left it outside.

I wanted to add different background colors to the description `div`s, but I could not use the `:nth-children` pseudo class because they were not always present, only when the card was clicked. This meant that there were not a constant number of elements so the selectors didn't match the desired ones. 

I then decided to always have a class with the styles that were not dependent on whether the div was present or not; as well as having a ternary for when the boolean was true. If it was true not new className was added but if it was not a hidden ClassName with `display:none` would have been added.

Unfortunately this approach did not work and because I had ran out of time I left the same background color for all description divs.

There is known bug that I did not have the time to fix: When you click on the first or second card, and their description appears, the color of the following cards change because the description divs are at the same level of the card divs, so the wrong `:nth-children` selectors applies. The fix would likely involve putting the descriptions inside each card `div`.

I also did not have time to do any of the bonus challenges.

In addition I didn't do many commits as it was a very short project, also I wrote most of this notes file after the three hours were over.
