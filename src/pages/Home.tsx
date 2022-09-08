import { Page } from "@geist-ui/core"

const Child = () => (
  <>
    <h2>Hello, Everyone.</h2>
    <p>This is a simulated page, you can click anywhere to close it.</p>
  </>
)

export const Home = () => {
  return (
    <Page dotBackdrop dotSpace={.3}>
      <Child />
    </Page>
  )
}
