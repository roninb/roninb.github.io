---
layout: post
title: "Clean Ya Damn Room"
categories: tech crypt
author: Malik Butler
tags: crypt tech
---

So there's a man out there in the world named Chuck Erdnhert (airheart, is how you actually pronounce it but it's spelled nothing like that)

He had a problem trying to access a legal reference database at the law school back when I was the helpdesk manager. His office was just on the opposite side of the wing and he stopped by saying something along the lines of "I can't login, I can't logout, I can't print, I'm about to throw this damn thing out the window" which wasn't ok because he was the last professor to upgrade since he didn't want change and when the guy who literally wrote the book on evidence for your state tells you he's not doing something... well, he's not doing it

(seriously, google (and then find the correct spelling of) his name)

So I walk over and his desk is, as always, a mess. I start clicking around and mouse clicks are working. I press ctrl+alt+del and get the uac. Confused, I am. I tried logging out and it worked fine. I tried logging back in and I got in, lickity split.

Of course this frustrates the piss out of Chuck. I have him go back and try to log in and it tells him nope. So I think it's definitely a password issue. I have him change it on another computer at the helpdesk and we go back to his office for him to try again... Failure. I log in, perfectly fine. So this time I go back and change his password myself, then try to log in.... Error.

What is wrong with Chucks account???!?! I skim the AD, see if any changes have been made to his memberships or to the groups he’s a part of and… Nothing…

The miracle came when his dusty old office caused him to sneeze and scare the everloving poo out of me as I was super zoned out racking every corner of my brain and his stapler fell off the KEY FUNCTION AND NUMBERPAD EXTENSION HE HAD UNDER A STACK OF PAPERS. Thus every time he was entering a number in his password using the numberpad, it was actually doing something like home or page down…

My password happened to only have special characters and capital letters at the time and I didn’t process that since I of course didn't make his temp password my actual password

We of course, toggled the button and were able to get back into his account but I don’t think he ever cleaned his office.
