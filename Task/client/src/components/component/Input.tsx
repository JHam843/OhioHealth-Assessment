import { InputParam } from "../global.interface"
import TextField from "@mui/material/TextField";
export default function Input({
  handleChange,
  value,
  labelText,
  labelFor,
  id,
  name,
  type,
  isRequired = false,
  placeholder,
  customClass
}: InputParam) {
  return (
    <TextField
      onChange={handleChange}
      variant="outlined"
      label={labelText}
      value={value}
      id={id}
      name={name}
      type={type}
      required={isRequired}
      className={customClass}
      placeholder={placeholder}
    />
  )
}