# forms-in-react
react forms with validation, controlled component state

# spawning up a new form project in order to control component state, and deactive submit button

Overview
Make every input a controlled input — i.e. its value should be set within the component’s state.
Add onChange handlers to all the form fields. When the value changes, it should trigger a state update.
After the state update completes, a callback function should fire which checks the validity of the value and then sets another state property flagging the field as invalid or valid. This will display appropriate field error messages.
Finally, another callback function should trigger which then checks to see if the whole form is valid or not. This is will allow / disallow form submission.

