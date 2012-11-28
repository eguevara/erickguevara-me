---
layout: post
title: First post using Jekyll hosted on GAE
---

##0.0 - The Solution
So i started to look at how to host sites for the least possible cost.  Mainly because i hardly ever
update the content and I would only use it for development.  In my search, I read a blog by [Harper Reed](http://harperreed.org)
that talked about how to move your static site to Google App Engine with an DryDrop App and use Github to push your changes. 
Pretty awesome.  Continuing to reading the blog i was able to figure out how to move my Wordpress blog with my Europe posts in a matter of days.. 

The end product... erickguevara.me.

##0.1 - The Install
I installed all the software needed on my osx lion.  with sudo easy_install, the installs were quick and easy.  Wordpress lets you export  your
existing blogs in xml format which can then be migrate to Jekyll with a singe cmd line.  I think the trickest part of the install was
understanding how Jekyll generates the static site from the default folder structure.  Learning markdown was also something new but
i can already see the usefulness.  If you always hated to write raw html (markup), then you'll **love** markdown. Can't say i did the 
entire install on my own..  Have to give credit to [Harper Reed](https://www.nata2.org/2011/01/26/how-to-use-app-engine-to-host-static-sites-for-free/) and 
[Carl Sverre](http://thelab.carlsverre.com/2010/02/09/static-hosting)

##0.2 - The Config
I did make changes to \_site.yaml to so that drydrop can route to my _site folder.  I was having issues at first because DryDrop was not
reading my config file.  I had to verify with the Admin page that the config was being read by DryDrop.  **TODO** I should point my DryDrop settings to 
a branch in github instead of the master.


##0.3 - Next
So the plan is to learn new things for free. I hope to take advantage of all these free technologies which are available to any of us developers.  
Sites like the following are a great way to get started:

- [github.com](http://www.github.com) - Such a great tool to look at what people of building.
- [https://developers.google.com/](https://developers.google.com/) - Google has a ton of free api in flavor of language.
- [http://www.udacity.com/](http://www.udacity.com) - Free online learning.  Highly **recommend!**
- [https://www.coursera.org/](https://www.coursera.org/) - free online learning from top Universities.

enjoy.. Till next time!


