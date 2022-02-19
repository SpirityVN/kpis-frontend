import React from 'react'
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react'

import { FaWallet } from 'react-icons/fa'
import { RootState } from '@/store/config.store'
import { connect } from 'react-redux'

function ConnectWallet() {
  // const walletAction = { ...WalletReducer.actions }
  // const dispatch = useAppDispatch()
  // const setData = () => {
  //   dispatch(walletAction.setData({ name: 123 }))
  // }
  // useEffect(() => {
  //   console.log(Props)
  // }, [])
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      {' '}
      <Button leftIcon={<FaWallet />} colorScheme="pink" variant="solid" onClick={onOpen}>
        Connect wallet
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Connect wallet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>
              <Text color="gray.500" fontSize="xl" fontWeight={'600'}>
                1. Accept
              </Text>
            </div>
            <div>
              <Text color="gray.500" fontSize="xl" fontWeight={'600'}>
                2. Choose network
              </Text>
            </div>
            <div>
              <Text color="gray.500" fontSize="xl" fontWeight={'600'}>
                3. Choose wallet
              </Text>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
const mapStateToProps = (state: RootState) => {
  return {
    wallet: state.wallet,
  }
}
export default connect(mapStateToProps)(ConnectWallet)
