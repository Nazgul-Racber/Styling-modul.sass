import FooterStyle from "../scss/footer.module.scss"

const Footer = () => {
  return (
    <div className={FooterStyle["footer"] }>
      <p>Copyriht by Nazgul ❤ {new Date ().getFullYear()}</p>
    </div>
  )
}

export default Footer

