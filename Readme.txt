Peer Challenge - Templates

Welcome to templates! In this challenge you will be creating a meme server that renders HTML using Jade templates. 

This time you can use WebStorm to auto generate your project for you. You do not need to use express-generator (it is used under the hood by WebStorm).

IMPORTANT: Select Jade as the rendering engine (it is by default).

Use pair programming to complete the assignment. At each “section” below, switch who is driving and who is observing.

Section 1
You and your partner need to select a meme (safe for work please) and pick some images. If you need some ideas, check out http://knowyourmeme.com/memes/popular 

Create a json file that will act as a model to store images for your memes. Select 5 images for your memes and store them in /public/images.

Create a page named “memes.jade” that will display your meme images. Create a route that renders the page along with the images.

Note: You can’t use “partials” like with HBS. If you want to move any parts of the html into a new Jade file, use the “includes” keyword to render it. http://jade-lang.com/reference/includes/
Section 2
Create a new data model that will associate messages (i.e. sentences related to the image) to each image. 

Modify the template to display the correct message with each image.
Section 3
Create a text input on the page, underneath the image, that will allow users to modify the meme message. 
Bonus

Experiment with CSS or Bootstrap, etc. to get the messages to appear on top of the meme image, and flip through them using left and right buttons.
