import { Button } from "@chakra-ui/react";
export default function StyledButton({ label, type, isLoading, onClick }) {
  return (
    <div className='p-2'>
      <Button
        isLoading={isLoading}
        colorScheme='blue.500'
        bgColor='blue.600'
        rounded='md'
        w='150px'
        mt='3'
        onClick={onClick}
      >
        {label}
      </Button>
    </div>
  );
}
