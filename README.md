# The headers will be the commit / session

### Initial commit
My first commit was me getting the overall skeleton structure of the page down.
Sometimes I have troubles with a blank canvas so I started by stealing the about section
from the homework and putting that into my site.

I am going for a retro themed site that I would see when I was younger.
Something like 90s / early 2000s, except I wasn't technically born in the 90s.

Making sure that I try to use semantic html, rather than divs for everything - as that is something
I took away from this class

### work p tags 
The commit message for this session is kind of bad but here I am writing a small summary for my work experiences, at this point I was still trying to figure out what the rest of my site should look like / what javascript I will use

### projects and work experience
Here I probably should have seperated it into two different commits, but I doubled down on my theming adding some gifs to the screen. I also added the projects sections.
I had to write a lot more CSS for this and I got lazy during it. For example i wanted to format the images a bit differently for my two projects but instead of figuring out the css for the same class, I just made two classes.

But I am enjoying my theme so far, I have a nice yellow for the shadow of the headers and it reminds me of old movie subtitles - maybe hong kong noir a bit.

### contact
I am using a contact form similar to the HW here, for my project I deploy all my sites with Netlify, and I saw there is a form submission service for free, so I'm gonna try to use that instead
of github pages.

This section was straightforward but i was having issues with some spacing for my form container and the text boxes, but added the last line to this fixed it.

```
.form-group textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #000080;
    box-sizing: border-box;  /* this have equal padding on both sides of form container */
}
```

### Adding some javascript
I wanted to add a custom cursor animation, I didn't know where to start so I decided on using this stack overflow [post](https://stackoverflow.com/questions/48161503/is-it-possible-to-add-a-cursor-trail-to-web-page-and-instead-of-a-default-trail).

This was cool (they are dots) but then I found a better one that animates stars, and I changed the color to be yellow and reduced the original number of stars in the array.
https://stackoverflow.com/questions/64159804/creating-a-disney-dust-style-cursor-trail

I also tried to add a falling animation to the stars, basically combined the two implementations I liked on the stack overflow, I don't think my effect is where I 100% want it though, maybe I will play with it more before I turn it in.
