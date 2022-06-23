import React from 'react'
import {  Button } from '@chakra-ui/react'

const DogButton = ({handleDogCount, dogCount}) => {
  return (
      <Button _active={{
        bg: 'none'
      }} fontSize={23} _hover='none' onClick={handleDogCount} bg='none' color='blue.500' >
        DOGS <br/>
         {dogCount}%
      </Button>
  )
}

export default DogButton