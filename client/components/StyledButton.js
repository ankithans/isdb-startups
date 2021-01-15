import { Button } from "@chakra-ui/react";
export default function StyledButton({ label, type, isLoading }) {
  return (
    <div className='p-2'>
      <Button
        isLoading={isLoading}
        colorScheme='blue.500'
        bgColor='blue.600'
        rounded='md'
        w='150px'
        type={type}
        mt='3'
      >
        {label}
      </Button>
    </div>
  );
}
