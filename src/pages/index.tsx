
import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import CardItem from '../components/CardItem'
import { useQuery } from 'react-query'
import { Text } from '@chakra-ui/react'

export default function Home() {

  const [dataList, setdataList] = useState<any[]>([])

  const getLists = async () => {
    const data = await fetch('https://opentdb.com/api.php?amount=20')
    const datas = await data.json()
    setdataList(datas.results)
  }
  const { isLoading, data } = useQuery('todos', async () => {
    return await fetch('https://opentdb.com/api.php?amount=20').then(res => res.json())
  })
  console.log(data);

  if (isLoading) {
    <Text>Loading......</Text>
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
