const InputForm = ({ onChange, value, name }) => {
  return (
    <input
      onChange={onChange}
      className="form-control w-70 m-50 m-auto d-block"
      type="text"
      placeholder="Put your phrase here"
      name={name}
      arial-label="meme's phrase"
      value={value}
    />
  )
}
export default InputForm
