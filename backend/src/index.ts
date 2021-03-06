import { PrismaClient } from '@prisma/client'
import express, { Request, Response } from 'express'
import cors from 'cors'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())
app.use(cors())

// POST query to create a new user
app.post('/user', async (req: Request, res: Response) => {
  const result = await prisma.user.create({
    data: {
      ...req.body,
    },
  })

  return res.json(result)
})

// PUT query to edit users
app.put('/user/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  const { name, email } = req.body
  const editedUser = await prisma.user.update({
    where: { id: Number(id) },
    data: {
      name,
      email,
    },
  })

  return res.json(editedUser)
})

// DELETE query to delete users
app.delete('/user/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  const deletedUser = await prisma.user.delete({
    where: { id: Number(id) },
  })

  return res.json(deletedUser)
})

// GET query to get users according to pagination, ordered by id
app.get('/users', async (req: Request, res: Response) => {
  const { page } = req.headers
  const users = await prisma.user.findMany({
    orderBy: {
      id: 'asc',
    },
    skip: (Number(page) - 1) * 10,
    take: 10,
  })

  return res.json(users)
})

// GET query to count users
app.get('/userCount', async (req: Request, res: Response) => {
  const userCount = await prisma.user.count()
  return res.json(userCount)
})

// GET query to find a single user based on id
app.get('/user/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
  })

  return res.json(user)
})

// GET query to search one or more users based on name and/or e-mail
app.get('/search/:query', async (req: Request, res: Response) => {
  const { query } = req.params
  const result = await prisma.user.findMany({
    where: {
      OR: [
        {
          name: {
            contains: query,
          },
        },
        {
          email: {
            contains: query,
          },
        },
      ],
    },
  })

  return res.json(result)
})

app.listen(3001, () => console.log('Listening on port 3001'))
