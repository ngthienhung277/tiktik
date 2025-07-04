// sanity-backend/schema.ts
import post from './schemas/post'
import user from './schemas/user'
import comment from './schemas/comment'
import postedBy from './schemas/postedBy'

export const schemaTypes = [post, user, comment, postedBy]
