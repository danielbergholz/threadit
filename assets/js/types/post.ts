import { User } from "./user"

export type Post = {
  id: number
  title: string
  body: string
  inserted_at: string
  updated_at: string
  user: User
  likes_count: number
}
