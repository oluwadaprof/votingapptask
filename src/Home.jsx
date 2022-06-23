import React, {useState} from 'react'
import { Box, Flex,  Divider, Text, Stack } from '@chakra-ui/react'
import CatButton from './components/CatButton'
import DogButton from './components/DogButton'


const Home = () => {
    const [dogCount, setDogCount] = useState(50);
    const [catCount, setCatCount] = useState(50)

   const handleDogCount = () => {
       setDogCount(dogCount >= 0 && dogCount <=90 ? dogCount + 10 : dogCount);
       setCatCount(catCount >= 10  && dogCount <=90 ? catCount - 10 : catCount)
   }
    const handleCatCount = () => {
        setCatCount(catCount >= 0 && catCount <=90 ?  catCount + 10 : catCount );
        setDogCount(dogCount >= 10 && catCount <=90 ? dogCount - 10 : dogCount )
    }



    return (
        <>
            <Flex w='100%' >
                <Box width={catCount}  height='100vh' bg='green.500'>
                    <Text>{catCount}</Text>
                </Box>
                <Box width={dogCount} height='100vh' bg='blue.500'>
                    <Text>{dogCount}</Text>
                </Box>
            </Flex>
            <Stack  zIndex={4} bg='white' paddingX='4rem' paddingY='4rem' borderRadius='10px' pos='absolute' left='40%' top='40%' h='13rem' w='20rem' direction='row' spacing={4}>
                <CatButton handleCatCount={handleCatCount} catCount={catCount} />
                <Divider orientation='vertical' borderWidth={.8} pos='relative' bottom={8} h='8rem' />
                <DogButton handleDogCount={handleDogCount} dogCount={dogCount} />
            </Stack>
        </>

    )
}

export default Home