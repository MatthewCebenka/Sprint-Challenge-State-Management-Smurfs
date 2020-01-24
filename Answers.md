1. What problem does the context API help solve?

It helps with passing global variables around. No more prop drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Action: It performs an action like deleting removing or toggling.
Reducer: Takes an action and state and gives you an updated state.
Store: Contains the state for an entire application.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

App state: Encompasses the state of the whole application.
Component state: Encompasses the state of a single component.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

It makes things asynchronous. It allows us to make api calls from action creators.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I think redux because of centralized state even though I was too nervous to use it in todays project.
