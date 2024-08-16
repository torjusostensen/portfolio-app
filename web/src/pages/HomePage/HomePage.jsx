import { Metadata } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />

      <h1 className="flex justify-center">HomePage</h1>
      <ArticlesCell />
    </>
  )
}

export default HomePage
