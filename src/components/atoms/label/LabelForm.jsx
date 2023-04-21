const LabelForm = ({ htmlFor, text }) => {
  return (
    <label htmlFor={htmlFor} className="form-label my-2">
      {text}
    </label>
  )
}

export default LabelForm
