import { useRouter } from 'next/router'

export default function GamePage() {
    const router = useRouter()
  return (
    <div> <h1> This is game page</h1>
    <h2>game = {router.query.game}</h2></div>
  )
}
