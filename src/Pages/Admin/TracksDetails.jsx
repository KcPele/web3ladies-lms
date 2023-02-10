import React from 'react'
import { PageHoc } from "../../Components";
import { useParams } from 'react-router-dom'
import {
    Text,
} from '@chakra-ui/react'
import TrackTab from '../../Components/Tracks/TracksTab';

const TracksDetails = () => {
    const { id } = useParams()
  return (
    <div>
        <Text fontWeight={"bold"} fontSize={"24px"} mb={6}>Blockchain Development</Text>
        <TrackTab />
    </div>
  )
}

export default PageHoc(TracksDetails)