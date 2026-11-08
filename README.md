## Weekly Update - [November 8]
**Latest mockups:** https://www.figma.com/design/fkIpAgOvPY9w1rEAX0vdWr/Lindsey_Assignment4_Mockups?node-id=0-1&m=dev&t=hF3Vm1bwZubo0orF-1

**Live site:** 

**State Plan**
- **User story:** As a student I want _to see my total filters so that I know how many filters were selected.

- **What does the page remember?**
How many times an item in the filter-list was clicked

- **What does it start at?**
It starts at 0

- **What changes it?**
When auser clicks on an item int he filter list

- **What does the user see?**
They see a total count of filters clicked

- **What does the `if/else` decide?**
I actually need some assistance with this. Since it's a filter count, thre's not a specific number of action items needed. I'd love your assistance on how to incorporate an if/else into the filters. I knwo you mentioned filters are the hardest to do.

**What changed:**
The total count of filters

**What was hard, and what I tried:**
At first I did a count of the actual "Apply Filters" button. When I originally set this up, it worked and the console showed a count of how many times the "Apply Filters" button was clicked. I also had it set to click only 6 times since there were 6 filters. But then I realized that did not help the user because the user would be clicking the actual filter items themselves. I know you mentioned filters are a harder task. I was hoping to get your assistance because I was able to get a count of when items are clicked, but I couldn't figure out how to "un-count" if a user un-clicked a filter.

**What happened when I tried to break it:**
I was able to see the break in the console. However, when I hade it harder on myself and added the level of count per filter item, it was easier to break.

**What I learned or changed my mind about:**
Similar to what is stated above, I changed my ind of having the Apply Filters button being counted and decided to have the filter-list counted instead. I found the overall concepts similar and still used the formatting we practived in class.

I also took your feedback from last week and made a media query for my naviation menu to stack ontop of the main content when brought to a 768px setting. 

**Question for Joey:**
How can I decrease the count when a user un-clicks a filter item? 

**Next week's goal:**
To figure out my filter list and make it dynaic where it keeps count of what is clicked and un-clicked

**AI use:**
I used ChatGPT to assist me in figuring out how to count the filter-list items rather than the "Apply Filters" button. I used it to catch errors that I found in my current code. It also advised use of a separate JS file when I was encountering issues using my script.js file.

## Weeky Update - [November 1]

**Added**
-Media Query for Feature_2 HTML page 
-Corrected grid structure and added a new Javascript display for Feature_2
-Deviated my media query at 769px because that is what ChatGPT said is the best for a mobile vs desktop break. 

**Challenges**
-Had a hard time setting up layout to mobile and then desktop since my original build has been mostly desktop
-Having a hard time adding buttons to the Feature_2 page, and may edit my mockup to remove the buttons

**Figma Mockups**
https://www.figma.com/design/fkIpAgOvPY9w1rEAX0vdWr/Lindsey_Assignment4_Mockups?t=344bZeTMpXwgxmw8-0



## Structure Audit — [October 26]

**Fixed today:**
- Closed Feature, Feature2, and Action pages with appropriate closing html
- Edited fonts and colors according to my style tile

**Still missing (building before the layout assignment):**
- [Yellow buttons in Feature 2 ] 
- [Image in Feature 1 ] 

**One thing I couldn't figure out:**
I'm having trouble figuring out Feature_2 where it displayes another set of schools. I added additional Javascript, however I'm having troulbe displaying it on my Feature_2 HTML


## Assignment 6 Comments:
Data: My data being displayed is NYU school data. I'm choosing to display the school formal name, the description is the actual school the name represents, an image of the school logo, and a link to the school page.

Challenges: One of the major challenges I faced was images. I created an images file and uploaded each school logo and a JPG or PNG. The issue I faced was coding the pathway to the image correctly within javascript. I found that I accidentally created an image file within the image file which meant my pathway to attach each photo required more wording. 

Wireframe Changes: Currently, my wireframes are changing slightly, however I have not made official changes in Figma because I want to wait for class to fully ensure I'm proceeding correctly.  


Week 7 Assignment:
Fixes needing done after class: Image in Feature_1, add yellow buttons to Feature_2, edit Action page on wireframes and add a back button to return to previous page.

