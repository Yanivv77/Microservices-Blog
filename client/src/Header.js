function Header({ text, bgColor, textColor }) {
  return (
    <header>
      <div className="container d-flex justify-content-center ">
        <h2 className="text-white">{text}</h2>
      </div>
    </header>
  )
}

export default Header
