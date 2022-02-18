import { useSelector } from '@/hooks/useSelector'
import { Button } from '@chakra-ui/react'
import React from 'react'
import { FaWallet } from 'react-icons/fa'

export default function ConnectWallet() {
  const wallet = useSelector((state) => state.wallet)
  console.log(wallet)
  return (
    <Button leftIcon={<FaWallet />} colorScheme="pink" variant="solid">
      Connect wallet
    </Button>
  )
}
