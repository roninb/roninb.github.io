---
layout: post
title: "Clean Ya Damn Room"
categories: tech crypt
author: Malik Butler
tags: crypt tech
---

A state employee in my position before me developed a help desk application with C# and ASP using IIS/.NET framework to publish the webapp. This connected to a pretty basic database and while it was a bit annoying to use (due to a somewhat short and poorly tested session timeout, mostly) it was functional.

I offered to make a few minor changes like removing old technician options from that particular select or updating the timeout logic. These were always shot down because “if it works don’t fix it” type logic and I mostly acquiesced because I was new.

At a certain point there needed to be a change in the domain level on our AD and to complete it some SQL servers needed to be upgraded past the compatibility level of the current IIS server that ran several in-house applications (like the aforementioned helpdesk). I offered to migrate the code and compile it on a new server but the team decided that since it was running on IIS there would likely be a .dll file that could simply be run on the newer server as well. I warned if that happened we wouldn’t be able to make changes in the future since we wouldn’t have the code to recompile…. Since I’m telling this story you can guess which route they chose.

Fast forward a few years and we’re needing to uplift the domain level again but this time we were running into a different issue. The new exchange servers were named differently from the old ones and to submit a ticket the email server needs to respond appropriately. Unfortunately, the email the helpdesk sent was hardcoded to our OLD exchange server by domain name. Of course, after explaining that it might take a while since we had no source due to simply copying over the executable.

After a bit of cursory research, I had a basic plan. Use an Intermediate Language interpreter to view the instructions reverted into some semblance of code (in this case C#). Then I’d have to decompile the .dll itself to edit the email function, updating to our new server name. After that I could recompile and test the working helpdesk application.

It took a few days of testing various IDEs, testing suites, and plugins before I found the right set of tools. It started with the ILSpy plugin for Visual Studio that allowed me to load the .dll and search the entire file for text. I searched for our old exchange server’s domain name and found only one result. It was a new SmtpClient call with our server name listed as the first argument.

From there I used Telerik JustDecompile to actually edit the .dll. This software claims to avoid most usual faux paus while editing IL directly, but unfortunately, in doing so it prevented you from doing things like changing a string to longer than was originally buffered when compiled… Of course, our new exchange server’s SUBDOMAIN was twice as long as the original’s entire FQDN…. Thankfully, it only took a few short bangs of my head against my desk before I realized I could shortcut as well as any other state employee and use the IP address in the SmtpClient constructor. Navigating directly to the SendANotice function I changed the string and saved a new .dll. After requesting a snapshot from the data center I sent off the updated helpdesk to the admin managing the domain uplift and received a new ticket shortly afterward.
