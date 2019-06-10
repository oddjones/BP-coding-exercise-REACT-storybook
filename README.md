# Blue Prism coding exercise (react storybook)

This project forms the second part of my submission to the Blue Prism Tech Test. 

The project is a React front end delivered within the [Storybook](https://storybook.js.org/) framework. Storybook allows for the development, testing and documentation of React components in a sandbox environment, where their individual properties can be tested outside of a production (or development) environment.

The standalone UI can be viewed remotely at (https://pensive-euler-25c7bf.netlify.com/iframe.html?id=pages--default)

The Storybook interface, showing all the individual components is available [HERE](https://pensive-euler-25c7bf.netlify.com/?path=/story/assignworkers--default). The full UI is the "Pages -> default" option with other options showing implementations of various components. 

**Please note:** at the time of writing - 11:40pm on Sunday night - some of these components are missing configuration options as detailed in item 2 of "How would I make it better" below - I may have changed this by the time you see it :-)

## Installation

If you wish to install the project for yourself locally, clone the repo and run `yarn` to install the dependencies.

Run storybook by typing `yarn storybook`

The standalone interface can be toggled by clicking the "open canvas in new tab" link (second to right in the top right corner of the interface, signified by an icon of an arrow rising vertically out of a rectangle).

**NOTE** I haven't tested the install with the npm package manager, but I have had some difficulties with it personally, so I have stuck with yarn - if you have difficulty installing, use the web version above - it is identical

## Features

### Add remove Workers
* click the (-) and (+) buttons either side of the "workers assigned" figure to increas/decrease the number of workers assigned to a task
* It is assumed that a process with no workers assigned is set to "Unassigned"
* an Unassigned process (with no workers) cannot be started
* adding a worker to an unassigned process sets it to "Assigned"

### Set priority
* click the star rating widget to change the process's priority (one star = low, 2 = medium, 3 = high)

### view advanced progress information
* clicking the "eye" icon drops down a panel beneath the Progress bar, showing more information about the process
* A process with 0 progress shows a greyed out icon - this is more to show conditional rendering than anythinng else - "running" the process changes the icon's colour - this probably wouldn't make it to production as it's not very intuitive.

### Auto Assign
* hovering (or clicking on mobile) on the gear status icon pops up a settings menu.
* the only setting which is wired up is "Auto assign" as detailed in the sketch file - clicking this will show a "set priority" widget.
* choosing low/medium/high sets the priority in the process and assigns an appropriate number of workers to the project.
* if a process is unassigned when "auto assign" is performed, it will be set to "Assigned"

### "start" a process
* Clicking the "play" button will start a process
* The running process has been spoofed in this mockup by using a 5 second timeout, after which the process will be shown to complete
* a complete process cannot be restarted unless it is re-assigned
* a limitation of the "spoofing" is that if a process is "paused" it will still show as completed - this is acknowledged as a limitation of the mockup.

## Accepted Issues

* the project presents two errors at WCAG2.0 AA to the [SQUIZ Labs HTML_codesniffer](https://squizlabs.github.io/HTML_CodeSniffer/) accessibility widget: 

1. `The html element should have a lang or xml:lang attribute which describes the language of the document.` This is because te page is presented by Storybook - I will need to investigate further how to edit this.

2. `This form does not contain a submit button, which creates issues for those who cannot submit the form using the keyboard. Submit buttons are INPUT elements with type attribute "submit" or "image", or BUTTON elements with type "submit" or omitted/invalid.` - This is the search form, which has been presented without a submit button in the designs - an alternative can be provided but this would need signoff.

* "Paused" processes still complete - a limitation of the "spoofing" for progress (see "start a process" above).


## How would I make it better?

1. Learn more React! - this is my first serious React project - it has been a learning experience - there's plenty I'd do differently, given the chance to spend more time with the code.
2. Configure the storybook stories more effectively - a few components are missing key dependencies (mainly due to my hoisting the code from them up to the main "processItem" component) - I will be rewriting the stories so as to make them work independently again.
3. Accessibility/Usability fixes : there are a few gotchas that I'd round up in the next pass: 
    * Skip to content link - there currently isn't any nav to skip so it would be included along with the nav.
    * Some elements are rendered directly into the virtual DOM rather than being shown/hidden (the progress details for example) - this would cause havoc for assistive tech. I'd fix that.
    * Below 375px screen width render for older phones - I'd add another media query and do some fixing.
3. Install and configure more add-ins to Storybook - a built in responsive viewer, code lifting and documentation as well as the infamous "knobs" addon which allows you to play with all the settings of a component in its standalone state.
4. Sort the processes by priority - or maybe offer a "drag and drop" facility to change priority by moving processes up and down the list
5. Interactions - I'd take some time to finesse the way the UI moves - at the moment it's all "on or off" - I'd like to add some subtle transformations and interactions to bring a little "joy" to it.
4. Rethink the popup menu - I used a spectre.css tool to render this, which makes use of CSS transforms only, meaning I had no hook to attach a click or close event to - so I had to rely on a 4 second setTimeout to change the rating widget back to the list - this works in the most part but can give unpredictable results on mobile and if the user re-opens the list or stays overlong on the rating panel.
4. Fix the linting warnings - there are some basic Javascript things (`Expected '!==' and instead saw '!='`, unused variables, duplicate props) that need hoovering up.
5. Testing - Storybook implements the Jest testing framework by default - and addins can be implemented to set rendered results within the Storybook UI as "snapshot" tests for automation testing purposes.
5. More testing - I've only dealt with the real accessibility howlers in this pass - I'd test with more tools, look at the "warnings" and do a fine-toothed comb cleanup of stuff that automated testing can't pick up, like tab-index, focus states etc.
6. Build it into an app - this didn't seem to be a requirement of the tech-test and certainly wasn't possible (for me) in the allotted timeframe





