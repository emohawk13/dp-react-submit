set to react 17.0.2

For this project you will create a web application consisting of a series of widgets. A widget is an interactive tool that users access to perform a certain task. Create and mount the following sections in your web application:

NOTE: Identify what needs to change in these components. This will determine what parts need to leverage state.

Part I
App Component. This component should take each of the components below and mount them.
A Counter widget which will include:
Render a count value to the DOM
Render an "add" and a "subtract" button to add to and subtract from the counter
The new value of count should render on the DOM in real-time
The program should not allow for the count to be 0 (zero)
A Toggled Greeting widget which will include:
1 (one) rendered "hello" greeting
1 (one) rendered button titled "toggled me"
When the user clicks the button the greet should toggle between a "hello" and "goodbye" message.
A Show/Hide Toggle widget which will include:
1 (one) rendered text on the DOM that says "Hide Me"
1 (one) rendered button
A button should cause the "Hide Me' text to become displayed or hidden
The button's text should be conditionally rendered to say:
"Hide" when the text "Hide Me" is displayed
"Show" when the text "Hide Me" is hidden

Part II
A Font Sizer widget which will include:
1 (one) text titled anything you prefer
2 (two) rendered buttons titled "Grow" and "Shrink" should include:
alter the text's size in incremenets of 5 pixels
Have a minimum and maximum font size range of 0 through 100 pixels
A Text Alignment widget which will include:
1 (one) rendered line of text
3 (three) rendered buttons named "left", "center", "right"
The text should align to the:
left when the "left" button is pressed
center when the "center" button is pressed
right when the "right" button is pressed
A Clock widget which will include:
A clock that will tell the user's time and will update every second
A button that will either mount of unmount the clock (using class-component lifecycle)
The button's text should be conditionally rendered to say:
"Mount" when the component is unmounted
"Unmount" when the component is mounted

Part III
A Color Changer widget which will the text and color of an h1 element to match the color's name. For example, if blue is inputted into the text field, the text of the h1 element will update to blue and will become blue in color. Include:
1 (one) rendered <h1> element
1 (one) text input
1 (one) button with the text "update"
Consider that:
The <h1> text and color should update through state
The input should clear everytime the button is clicked
A RGB slider widget which will include:
1 (one) rendered small box with a solid background color
1 (one) rendered label with 3 (three) numbers underneath detailing how much red, green and blue are used in the color based on the RGB number system
3 (three) rendered range slider input elements
Consider that when sliding one of the three sliders it should:
Update the cooresponding value in the label to the appropriate red, green or blue value
Update the background color of the small box to the appropriate color
A Weather widget tha that will fetch its weather data from an api

Part IV
Turn all your widgets into a navigable application with the following:
SCSS
BrowserRouter (once we have learned about navigation in the React unit lesson Navigation and Routing)
Navigation Page
Dashboard Main Page with links to each widget
Each of the 10 (ten) widgets on a separate page
Either a horizontal or vertical navigation bar
Widget Pages
The widget is presented in a format with which the user may interact
A description of the widget, its purpsoe and instructions on its use
Login/Logout
A login through custom api
A logout
