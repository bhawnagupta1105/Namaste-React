# Namaste-React

# Parcel
- Dev Build
- Local Server
- Hmr =Hot Module Replacement
- file Watching Algorithms
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress = It minifies & comprises your files and works as a builder
- Consistent Hashing
- Code Splitting
- Diffrential Bundling(Support Old Browsers)
- Tree Shaking - remove unused code
- Good Error Handling


//config-driven-UI
It maybe possible that things will be different for different places,so instead of changing the website we can simply make our Ui in such a way that it will be differ places to places ,lets say it can be offers at different places,prices over diff place.
So how you manages your website using backend and UI to make it happen.
When you build real a world application so you want should your website work in many country or many place we control our fontend it is known as using Config-Driven UI . API or Backend Driven which is data Comming from API.

//keys are an important thing,you should always write key property to identify the unique property,this also enhances the performance.
React does not recommend using index as an key


TWO TYPES OF Export/Import
# Default Export/Import
export default Component;
import Component from "path";

# Named Export/Import
export const Component;
import {Component} from "path";

UI layer and data layer should work together,and react is faster as i can do do faster . 
//State Variable = Super powerful variable
# React Hooks
- Normal Javascript Utility Function
- Two imp HOOks are -use state() and -useEffect()
- useState() - Superpowerful state variables. You import it from react like a name import. It maintains the state of your application or you can say of your component
import {useState} from "react";
const [resList,setresList] = useState([]);
it takes first input and it sets the 2nd parameter with the change
-whenever a state variable updates react re-renders this component

# Reconciliation Algorithm also known as React fiber(in react 16 it came out,It is a new way of finding the div and updating the domn).
- Suppose in our res-container we have 7 res card and we filter out 3 res card from it.
# Virtual Dom is a representation of an Actual Dom, it is basically those react elements, the react treats jsx as an object , & it keeps the react virtualDom-It is nothing then the object.
# Diff Algorith
- It finds out the difference between 2 virtual domsthat is the previous dom & the updated dom.
LEts say that there was 7 res card and after click there are 3 res card so it finds out the difference betweenn the 2 is actually 4 and it wil update it on every render cycle.

# Incremental Rendering - It is the ability to split rendering work into chunks and spread it out over multiple frames.

# React is doing efficient dom manipulation as it has a virtual dom.It has a diff algorithm
https://github.com/acdlite/react-fiber-architecture.

# Monolith Architecture
It consist of many things like Api,UI,DB CODE,SEND MESG CODE, AND many more things..

# Microservices Architecture
We have different services for different things
Like backend service,UI service ,db service,email notification service....and all these services combine a big project ... This follows single responsibility principal....and also known separation of concerns..
Everything is working separately. every team is working on their service...

Now these services needs to communicate with each other so there will be different type of connections will be there....


# There are 2 approaches to call api
- 1st - as soon as the page load we can call the data it comes and then render the Ui

- 2nd - As soon as the page loads we will quickly render the Ui....then we will make an API call and as soon as we get the data in return we will update the data or we can say it will render the data.
In react we will make 2nd approach as it will give the Better UX ,it will give atleast something to the user.  


-    useEffect(() => {
        
    },[]);
It takes 2 arguments callback function and dependency array.


# Shimmer UI - we show a fake page until we ge the actual data.

# whenever a state variable updates,react triggers a reconcilation cyvle(re-renders the component)

***useEffect(() ⇒ {},[]) THERE ARE 3 WAYS IN WHICH WE CAN IMPLEMENT THIS***

**useEffect(() ⇒ {})** useEffect - If there is no dependency array then it means it will be called on every render,every time that components renders.

**useEffect(() ⇒ {},[])**  If dependency array is empty it will only be rendered one time the component is called.it’s basic nature is to be called affter every render but if dependency array is empty then it will only be called once

**useEffect(() ⇒ {}.[btnNameReact])**  Now if we have given some value in the dependency array then it will behave according to it,it will render every time the button will be clicked or btnNameReact will be used or called.

***useState***

const [onevale,setonevalue] = useState([]);

Never create your useState out of your body, it is used for creating local state variable in your functional components,so it should be inside your body.

You should always call it on the top in your body ,so there won’t be any inconsistency so try to keep it on top of your functional component inside body.

Never use useState inside if else or any conditional code it can cause inconsistency in your code.

Never also create it inside forloop