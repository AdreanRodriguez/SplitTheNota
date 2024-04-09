

function Header({ totalPer }) {



  return (
    <header>
        { totalPer === 0 ? 
        <h1 className="heading" id="heading-text">Split the nota</h1> : 
        <h1 className="heading" id="heading-text">Summan per person: {totalPer} SEK</h1> }
  </header>
  )
}

export default Header;