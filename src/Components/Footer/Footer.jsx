import './Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <div className='footer_container'>
      
      <p > © {currentYear} Augustine Joseph</p>  
    </div>
  )
}

export default Footer
