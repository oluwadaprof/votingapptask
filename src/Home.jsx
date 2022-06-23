import React, { useState} from 'react'
import { Box, Flex,  Divider, Text, Stack } from '@chakra-ui/react'
import CatButton from './components/CatButton'
import DogButton from './components/DogButton'


const Home = () => {
    const [totalCount, setTotalCount] = useState(0);
    const [dogCount, setDogCount] = useState(50);
    const [catCount, setCatCount] = useState(50)
  
   const handleDogCount = () => {
       setTotalCount (  totalCount + 1)
       setDogCount(dogCount >= 0 && dogCount <=99 ? dogCount + 1 : dogCount);
       setCatCount(catCount >= 1 && dogCount <= 99 ? catCount - 1 : catCount);
   }
    const handleCatCount = () => {
        setTotalCount( totalCount + 1)
        setCatCount(catCount >= 0 && catCount <=99 ?  catCount + 1 : catCount );
        setDogCount(dogCount >= 1 && catCount <= 99 ? dogCount - 1 : dogCount); 
    }

   
    return (
        <>
            <Flex w='100%' >
                <Box width={`${catCount}vw`}  height='100vh' bg='green.500'>
                </Box>
                <Box width={`${dogCount}vw`} height='100vh' bg='blue.500'>
                </Box>
            </Flex>
            <Stack  zIndex={4} bg='white' paddingX='4rem' paddingY='4rem' borderRadius='10px' pos='absolute' left='40%' top='40%' h='13rem' w='20rem' direction='row' spacing={4}>
                <CatButton handleCatCount={handleCatCount} catCount={catCount} />
                <Divider orientation='vertical' borderWidth={.8} pos='relative' bottom={8} h='8rem' />
                <DogButton handleDogCount={handleDogCount} dogCount={dogCount} />
            </Stack>
            <Text pos='absolute' fontSize='1.5rem' color='white' fontWeight='3rem' top='90%' left='89%' >{totalCount} votes</Text>
        </>

    )
}

export default Home;


