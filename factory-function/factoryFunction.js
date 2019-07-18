// 1. In your HTML, define an `<article>` element with an id of `contactList`
// 2. Create a function called `createContact`.  The function should return a new object with three properties: `name`, `title`, `email`.
// 3. Design `createContact` to accept three arguments, which will be used to make the object.

// const createContact = (name, title, email) => 
//     ({
//         name, title, email
//     })

// const sarah = createContact("Sarah", "Student", "sarah@email.com")
// console.log(sarah)

// 1. Write another function named `displyContact`. Design it to accept a contact object as an argument.
// 2. Use `document.querySelector()` and `innerHTML += ...` to add a new `<section>` element as a child to your `<article>`.
// 3. The `<section>` should have a class of `contact`.
// 4. The contact should display the name of the contact in an `<h1>` element, and the title as an `<h2>` element, and the email in a `<div>` element

const displayContainer = document.querySelector("#contactList")

const createContact = (name, title, email) => ({
        name, title, email
    })

const josh = createContact("Josh Gad", "Manager", "josh@email.com")
const jen = createContact("Jen Aniston", "Specialist", "jen@email.com")
const jason = createContact("Jason Statham", "CEO", "jason@email.com")
const jessica = createContact("Jessica Jones", "VP", "jessica@email.com")
const jack = createContact("Jack Reacher", "COO", "jack@email.com")

const displayContact = (contact) => {
    const contactHTMLRepresentation = `
    <section class="contact">
        <h1>${contact.name}</h1>
        <h2>${contact.title}</h2>
        <div>${contact.email}</div>
    </section>
    `
    displayContainer.innerHTML += contactHTMLRepresentation
}

displayContact(josh)
displayContact(jen)
displayContact(jason)
displayContact(jessica)
displayContact(jack)