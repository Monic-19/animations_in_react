import React from 'react'
import Header from '../Elements/Header'
import PageIntro from '../page2components/PageIntro'
import Menu3d from '../page2components/Menu3d'
import TextWeight from '../page2components/TextWeight'
import ChangeButton from '../page2components/ChangeButton'

const Page2 = () => {
  return (
    <>
        <Header></Header>
        <PageIntro></PageIntro>
        <Menu3d></Menu3d>
        <TextWeight/>
        <ChangeButton></ChangeButton>
    </>
  )
}

export default Page2