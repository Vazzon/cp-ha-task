# Code&Pepper Home Assignment Task
## Setup
In main cateory run:\
```npm install```\
Then to run cypress web UI:\
```npm run cypress:open```\
to run all tests in headless mode run:\
```npm run cypress:test:all```

## Bugs

```
1.
Title: Page scrolls up so that makes content unreachable by user 

Description:

[Issue]
Page scrolls up  due to fast clicks so that makes content unreachable by user.
It was observed while writing automation tests that page sometimes scrolls up under navigation bar.

[Steps to reproduce]
1. Run tests 
2. Sometimes tests fail because page scrolls up and:
    a.Europe radio is not visible
    b. "A bit about you" is not visible

[Expected result]
Page should not scroll due to fast clicking user

2. 
Title: Clicking links in menu while filling form open new page in the same tab

Description:

[Issue]
Clicking links in menu while filling form open new page in the same tab, User is losing context and all filled data

[Steps to reproduce]
1. Go to home page
2. Close modal
3. Select annual cover
4. Pass through steps but do not finish form
5. Open menu
6. Click for example "About us"

[Expected result]
User should be asked "Are you sure you want to leave page" because he will lose all his progress

3.
Title: Navigation bar jumps when user click app logo while scroll bar is active

Description:
[Issue]
Navigation bar jumps when user click app logo and modal appears while scroll bar is active

[Reproduction steps]
1. Go to home page
2. Click app logo

[Environment]
Brand: iPhone
OS: iOS(13.0.1)
Model: SE
Chrome browser ver: 82.012390.10230

4. 
Title: User may cause some server issue due to onChange in refral code field

Description:
[Issue]
User may cause some server issue due to onChange in refral code field. Each change in input field is making a GET request to backend.

[Reproduction steps]
1. Go to home page
2. Clik "Have a friend's referral code?"
3. Open network tab in dev tools with XHR filter
4. Start typing in field

[Expected result]
TBC with client
A. There should be a button to submit value in field
B. Request should be sent when user hit H/W Enter key


5. 
Title: Transparent nav bar on mobile device may be confusing

Description:
[Issue]
Transparent navigation bar on mobile device may be confusing. User can scroll content on the same level as "back" button and on click user is going back

[Preconditions]
Annual cover started, user is on "Some details about your trip" view

[Reproduction steps]
(run in browser iphone 5/se simulator)
1. Scroll until Europe is on the same level as back button
2. Click on radio button

[Expected result]
User should not be able to see content on the same level, transparent navigation bar give user feeling like elements are interactable

[Environment]
Brand: iPhone
OS: iOS(13.0.1)
Model: 5/SE
Safari browser
```

## Comment
Proposed solution is not complete