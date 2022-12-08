import Button from "@/components/Button"
import Layout from "@/components/Layout"

import { useRouter } from "next/router"

export default function index() {
  const router = useRouter()

  return (
    <Layout>
      <div>
        Add Page
        <Button onClick={() => router.push("/add/games")}> Add Games </Button>
        <Button onClick={() => router.push("/add/cards")}>Add Cards</Button>
      </div>
    </Layout>
  )
}
