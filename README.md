NS Basic Template
-----------------
This is a template intended for usage with the [ns-front CLI](https://www.npmjs.com/package/ns-front).

This template allows you to create a full-stack app React app easily using the [NoStack](www.nostack.net) framework for the backend.

It generates a complete application that you can then style.  To use it, you'll have to be comfortable working with [React styled components](https://styled-components.com/docs/basics) and [Context](https://reactjs.org/docs/context.html). The free version of NoStack should be enough for you to prototype your app.

On the debit side, this template doesn't reuse code very well.  But it has a lot of flexibility.  It leaves styling open to you, and contains about the same custom code regions on all the dynamic pages.

# Getting Started 

To use it:
1. clone to your local.  Move to the parent directory where you want the template to be located and type: `git clone git@github.com:YizYah/basicNsFrontTemplate.git`.
2. install ns-front globally: `npm i ns-front`
3. Go to the website for [NoStack](www.nostack.net) and get a free trial license.
4. Follow the instructions at [ns-front CLI](https://www.npmjs.com/package/ns-front) for creating the app using the template.
5. copy over `sample.app.yml` into your `meta` directory as `app.yml`.  It's just for a simple todo list.  You can then modify it to create whatever you want.

# Required `inputs`
Make sure that your `app.yml` contains in `inputs` at least one unitName for the the `highestComponents` array, e.g.:
```
inputs:
  highestComponents:
    - appSpec
```
That unit (or those units) will get inserted into your generated `App.js` file.

#Data Type Categories
The following categories are supported:
* `create`: lets the user class for a unit create instances of the data type in question.  Shows a list of the instances for a given parent, with a form to create a new one.
* `constrain`: included in the unit just to limit the data results--doesn't actually show up as a component, but limits the query results for the shown types.
* `use`: doesn't let the owner of the parent create new instances, but views a list of them.
* `selectable`: similar to use, but allows the user to select one.
* `property`: created as a property of the parent.  [NOTE: not yet implemented at NoStack but planned.]
