const LabelForm = ({ htmlFor, text }) => {
  return (
    <label htmlFor={htmlFor} class="form-label my-2">
      {text}
    </label>
  )
}

export default LabelForm
