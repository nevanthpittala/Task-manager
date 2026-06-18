# TaskManager — DOM Explorer

A simple, interactive Task Manager built using **pure JavaScript** (no frameworks or libraries), demonstrating core browser and DOM concepts: dynamic DOM manipulation, Attributes vs Properties, Event Propagation, and Event Delegation.

## Features

- Add, edit, complete, and delete tasks dynamically
- Category selection via dropdown
- Live task counters (Total / Completed / Pending / Deleted)
- Clear All Tasks button
- Dark Mode / Light Mode toggle
- Event Propagation demo (Bubbling & Capturing)
- Attribute vs Property demo
- Browser Rendering Pipeline visual explainer

## Concepts Explained

### Parsing
When a browser receives an HTML file, it reads the raw text character by character and converts it into a structured format it can understand. This first step is called parsing.

### Tokenization
During parsing, the browser breaks the HTML text into small units called tokens — things like start tags, end tags, attributes, and text content (e.g. `<button>`, `id="Create"`, `Add Task`). These tokens are the building blocks used to construct the DOM tree.

### DOM Tree
Once tokens are generated, the browser organizes them into a tree-like structure of objects called the DOM (Document Object Model) Tree. Each HTML element becomes a node in this tree, with parent-child relationships matching the nesting in the HTML. JavaScript interacts with the page through this tree (e.g. `document.createElement()`, `querySelector()`).

### CSSOM Tree
Similarly, the browser parses CSS rules into a tree structure called the CSSOM (CSS Object Model) Tree, representing all the style rules and how they apply to elements.

### Render Tree
The browser combines the DOM Tree and CSSOM Tree to build the Render Tree — this includes only the visual elements that will actually be displayed (e.g. elements with `display: none` are excluded) along with their computed styles. The Render Tree is what the browser uses to actually paint pixels on the screen.

### Event Bubbling
When an event (like a click) happens on an element, it first fires on that exact element, then "bubbles up" through each of its ancestors in order, all the way to the document root. In this project, clicking the Child Button in the Event Propagation Demo logs: