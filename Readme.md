What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
1. getElementById = The entire html file can contains only one teg with a specific ID name. using JS, we can call that specific item by id name.
2. getElementsByClassName = Class is used to reffer one or many tegs. So, to get all the elements with the same class name, We need to use getElementsByClassName.
3. querySelector = It give the first elements that matchs with attributes inside that function. It can contain class, id, even css tegs
4. It give all the elements that matchs with attributes inside that function and return a nodelist.


How do you create and insert a new element into the DOM?
- Firstly create a variable to contain the element. and calling the function createElement and inside we need to tell what type of element we are going to creat

 const newElement = document.createElement("div").

- we can add innerHtml to add more html content or innerText to add text

 newDiv.innerText = "Hello, World!";

- We need to call the parent teg, inside it we will add the newly created element

 const container = document.getElementById("parentDiv"); 

- Lastly, appent the newly created element inside the parent
 
 container.appendChild(newElement);


What is Event Bubbling and how does it work?
- When there is a element where event listener is created. And it is under one or more elements where different event listener is created. 
then if we call the inner element. If will perform its event after that its parent's event. like this. 
we can stop the bubble by calling "event.stopPropagation();"


What is Event Delegation in JavaScript? Why is it useful?
- If i have child elements inside the parent teg. and i want to add event to all the chield with the given condition from the parent, then it automatically perform to all the elements from parent.

example:
const innerListItem = document.getElementById('mainList');

innerListItem.addEventListener('click', function(event) {
  if(event.target.tagName === 'li') {
    alert('The clield is clicked');
  }
});

its benifits:
1. It reduces the code
2. It makes the page faster load
3. New item with the same condition automatically get that event


What is the difference between preventDefault() and stopPropagation() methods?
- preventDefault() = it stops the default behaviour of the element but if the bubble event available, it perform the parents actions. 

- stopPropagation() = almost reverse action with preventDefault. It stops the bubbling but perform the event of the element