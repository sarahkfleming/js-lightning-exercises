const cats = [
    {
      name: "Henry",
      bio: "Eat plants, meow, and throw up because I ate plants. Knock over christmas tree, stare at imaginary bug, and meow and walk away. Lick master's hand at first then bite because im moody purrrrrr do not try to mix old food with new one to fool me!"
    },
    {
      name: "Jessica",
      bio: "Spend all night ensuring people don't sleep. Sleep all day. Meowzer for when in doubt, destroy the couch."
    },
    {
      name: "Jake",
      bio: "Groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked munch on tasty moths for meow meow mama meow all night murr I hate humans they are so annoying."
    }
  ]
  // Write out a brief list of steps needed to display this data in the DOM.

  /*
    Add an output container with an id or class to the HTML file
    Use querySelector to get a reference to that container
    Iterate through the data
    Create a variable function that returns a string of HTML to put in the DOM
    Render the HTML in the DOM
  */

const catOutputContainer = document.querySelector("#cat-bios")

const catBioStringGenerator = (cat) => {
    return `
    <h1>${cat.name}</h1>
    <p>${cat.bio}</p>`
}

const displayCatsinDOM = (HTMLString) => {
  catOutputContainer.innerHTML += HTMLString
}

cats.forEach(cat => {
  const catHTML = catBioStringGenerator(cat)
  displayCatsinDOM(catHTML)
})