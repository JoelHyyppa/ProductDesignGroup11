import Button from "@/components/Button"
import Layout from "@/components/Layout"
import { useRouter } from "next/router"

export default function index() {
  const router = useRouter()

  return (
    <Layout>
      <div>
        Add Page
        <Button onClick={() => router.push("moderator/add/games")}>
          Add Games
        </Button>
        <Button onClick={() => router.push("moderator/add/cards")}>
          Add Cards
        </Button>
        <Button onClick={() => router.push("moderator/edit/cards")}>
          Edit/Delete Cards
        </Button>
        <Button onClick={() => router.push("moderator/edit/games")}>
          Edit/Delete Games
        </Button>
      </div>
    </Layout>
  )
}
