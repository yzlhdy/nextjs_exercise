import { Box } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import CardItem from '../components/CardItem'

export default function Home() {
  const [dataList, setdataList] = useState<any[]>([])
  const getLists = async () => {
    const data = await fetch('https://opentdb.com/api.php?amount=10')
    const datas = await data.json()
    setdataList(datas.results)
  }
  useEffect(() => {
    getLists()

  }, [])
  return (
    <Layout>
      <CardItem Lists={dataList} />
    </Layout >
  )
}
