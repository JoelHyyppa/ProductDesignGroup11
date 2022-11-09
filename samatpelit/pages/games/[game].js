import { useRouter } from 'next/router'
import Layout from '../../components/Layout'

export default function GamePage() {
    const router = useRouter()
  return (
    <div> 
        <Layout/>
        <h1> This is game page</h1>
    <h2>game = {router.query.game}</h2></div>
  )
}
