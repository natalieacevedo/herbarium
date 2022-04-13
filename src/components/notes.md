# Project's notes.

>I had a lot of fun developing this small project, however, I encounter a few obstacles during the proccess, as in any software project.

>Because the path for the images were not included as a key part of the flower object, I decided to manipulate the object with the data and added an image key with the path for the flower. 

>I thought about getting the image by using the name key and corverting the first letter to lowercase; then, slicing the rest of the string and putting both strings together. Finally adding this as the source of the image. 

>I decided not to go this way because I didn't think the extra code was a neccesary, besides for this small application, I was only displaying those three flowers.

>At first I created a folder for the flowers in the source folder, but of couse it did not work because they were not static, they came with the data, I was not importing them and they weren't an url neither. I then discover I  had to create a folder in the public folder, which is configured to serve data without having to import it.

>Since the svg files where static I could have been able to just import them, and then putting the import as the source of the img tag. However, I decided to put them as background images on the css. The user was not going to interact with them in any way.

>I created two spans on Card component to display the humidity and the temperature. I was debating whether I should have add a common class for the both of them and then an individual class for the styles they were not sharing. 
>I decided instead to target both classes in the same css rule and then, in separate rules I apply the individual properties to each one of them.
> If I were using SASS it would have been cleaner . I could have created a mixing and then changing the values of the properties that werent the same.

>For the background of the cards, I decided to use the :nth-child pseudo class. Althought a little repetitive, it was faster and cleaner than maybe changing a variable's background value with if else statements if the name was the one; then adding an inline style with that value in the JSX.

>Because I needed to center the text of both spans vertically with the temperature and humidity text, and using display flex, align items:center would have messed my layout, (I had already decided to use display inline-block, changing to display flex would have required me to do other changes and there was not time). I simply added a small padding top in order to center it vertically, was not the best practice solution but it looked good. 

>On the first flower the temperature had many numbers after the dot. So I used the toFixed() method to show only one number after the dot. According to mdn this methods sometimes rounds the number, but since this is not real application, I went for it.

>I was not too fond of putting the description on a div outside the main div of the Card component; but putting inside changed my whole layout and once again did not have the time to fix it, so I left it outside.

>I wanted to add different background colors to the descriptions divs, but I could not use the :nth pseudo class because of course they were not always present. They being present in the DOM depended on a boolean that toggles to true to false, so doing it like that would not have worked. 

>I then decided to always have a class with the styles that were not dependent on wheter the div was present or not; as well as having a ternary for when the boolean was true. If it was true not new className was added but if it was not a hidden ClassName with `display:none` would have been added.

>Unfortunately this approach did not work :(, and because I had run out of time I had to add the same background color for all description divs.

>I also did not have time to do any of the bonus challenges.






