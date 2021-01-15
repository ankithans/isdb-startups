import { Input, FormLabel } from "@chakra-ui/react";

export default function TextInput({
  label,
  type,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className='p-2'>
      <FormLabel textColor='grey' fontWeight='medium' fontSize='sm'>
        {label}
      </FormLabel>
      <Input
        rounded='md'
        variant='filled'
        value={value}
        onChange={onChange}
        type={type}
        required
        placeholder={placeholder}
      ></Input>
    </div>
  );
}
