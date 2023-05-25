const Button = ({ styles }) => {
  return (
    <buton type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} hover:text-slate-600 hover:scale-105 transition-all active:transform`}>
      Get Started
    </buton>
  )
}

export default Button