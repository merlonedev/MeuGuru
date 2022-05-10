import { Pagination } from 'react-bootstrap'

interface Props {
  userCount: number
  active: number
  handlePage: (pageNum: number) => void
}

export default function Paginator({ userCount, active, handlePage }: Props) {
  const pagesCount = Math.ceil(userCount / 10)
  const items = []

  for (let index = 1; index <= pagesCount; index++) {
    items.push(
      <Pagination.Item
        key={index}
        active={index === active}
        onClick={() => handlePage(index)}
      >
        {index}
      </Pagination.Item>
    )
  }
  return <Pagination>{items}</Pagination>
}
