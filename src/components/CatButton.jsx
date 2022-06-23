import React from 'react'
import {  Button } from '@chakra-ui/react'

const CatButton = ({handleCatCount, catCount}) => {
  return (
    <Button _active={{
      bg: 'none'
    }} fontSize={23} _hover='none' onClick={handleCatCount} bg='none' color='green.500'>
          CATS <br />
          {catCount}%
      </Button>
  )
}

export default CatButton