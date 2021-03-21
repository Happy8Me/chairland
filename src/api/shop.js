const _chairs = [
    {
        id: 1,
        price: 200,
        quantity: 1,
        title: 'Chair 1', 
        text: 'The Office Chair Has Not One, but Four Fathers!',
        mainText: 'It’s a somewhat well-known fact that the naturalist Charles Darwin was the father of the modern office chair.  He inadvertently invented it by adding wheels to the bottom of his Captain’s Chair so he could scoot around his office and get to his work more easily. That, however, is a bit of an oversimplification. While the story above about Charles Darwin is true, he wasn’t the only innovator that helped bring the modern office chair into the world.  Some credit goes to Thomas Jefferson. ', 
        col: 'linear-gradient(transparent, #ffe699)',
        bgCol: '#f3eee8',
        imgPath: "https://i.pinimg.com/564x/9a/ed/64/9aed64ab3b054719f6dffe8bfffea28b.jpg"
      },
      {
        id: 2,
        price: 500,
        quantity: 3,
        title: 'Chair 2', 
        text: 'The word “chair” comes to us from the Latin word “cathedra,” which means “sit down.”', 
        mainText: 'Ergonomic design features didn’t start making significant inroads into furniture until the 1970’s.  Even then, most of the furnishings that featured ergonomic design elements were office furniture.  Ergonomic designs didn’t start filtering into living room furniture to any significant degree until the 1990’s.', 
        col: 'linear-gradient(transparent, #e3dacd)',
        bgCol: '#ffe699',
        imgPath: "https://i.pinimg.com/474x/7c/05/dc/7c05dc38f456744c2bead54ff4cb9475.jpg"
      },
      {
        id: 3,
        price: 800,
        quantity: 5,
        title: 'Chair 3', 
        text: 'The earliest known game of musical chairs occurred in the year 1877.', 
        mainText: 'Thomas Edison financed the invention of the electric chair in 1889, primarily as a tactic to try and scare people into using DC current, rather than AC current (which was invented by his rival Nikola Tesla). Once the chair had been completed, he saw it as a marketing opportunity, and contacted government offices, billing the chair as a more humane alternative to hanging, which was the primary means of ending the lives of death row criminals.',
        bgCol: '#e3dacd',
        imgPath: "https://i.pinimg.com/474x/01/d5/98/01d59886949e731cee9cd100539f4b83.jpg"
      }
  ]
  
  export default {
    getProducts (cb) {
      setTimeout(() => cb(_chairs), 1000)
    },

  }