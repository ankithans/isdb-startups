import { Text } from "@chakra-ui/react";

export default function LoginHeader({ title, subtitle }) {
  return (
    <div className='p-2 pb-7'>
      <Text fontSize='xl' fontWeight='medium' textColor='grey'>
        {title}
      </Text>
      <Text textColor='blue.500' fontSize='xl' fontWeight='bold'>
        {subtitle}
      </Text>
    </div>
  );
}
