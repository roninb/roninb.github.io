---
layout: post
title: "Configuring a Private Cloud"
date: 2017-03-31 10:40:30 -0500
categories: tech privacy
author: Malik Butler
tags: privacy tech
---

I have always been most interested in the bleeding edge of technology, an "early adopter" if you will. Unfortunately, especially nowadays, that yearning for the latest and greatest comes in direct conflict with my desire for privacy and trust. As has been revealed over the course of the last 5-6 years, cyberwarefare is the biggest threat to National Security[0](https://www.intelligence.senate.gov/sites/default/files/wwt2016.pdf). Of course, there's not much one can do as an individual if a nation-state decided to bear down on them, but that doesn't mean one can't do as much as they cna to secure themself (and their data) from other would-be sleuths. 

Most of us have at least half a dozen online services that get used on daily bases and many of us have even more. So many accounts that we're seeing a proliferation in account management software like LastPass and KeePass[1](https://books.google.com/books?id=HPS9BAAAQBAJ&pg=PA65). This series of articles will focus less on the authentication side (although, I will touch on that) and more on replacing the cloud-based services themselves with self-hosted services we can dissect and monitor.

Due to the current political climate, many people are trying to secure their online presence and anonymize it as much as possible. Doing this proves difficult for most. Due to convinience and social pressure, certain services can't be given up easily. Though, like before, we won't let perfect be the enemy of good.

To start, I'll cover what services I use now and how I plan on replacing them. After that we'll move onto actually trying to replace said services!

My current plan of replacement is as follows:
- Article about configuring the Pi itself
  - Initial setup
  - Dynamic DNS (DDNS)
  - Domain setup
  - Securing it slightly and accessing it remotely
- Replace Googe Drive
  - Configure NextCloud
    - [Finding a calendar and notetaking replacement](../../10/03/drivin-me-crazy-keeping-me-sane.html)
- Replace GitHub
- Replace Chrome
  - Configure Firefox Accounts Server
  - Configure Firefox Sync Server
  - Replace Google Chrome Canary on all my devices with Firefox Nightly
- Replace Google Search
  - Using DuckDuckGo
- Setup SSH tunnel for secure public browsing
  - Configure SSH server
  - Configure Android device to use tunnel
  - Configure Windows device to do the same
  - Finally a Linux device
