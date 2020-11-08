import React from "react"
import { Button, Container, Jumbotron } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Home() {
  return (
    <Layout pageInfo={{ pageName: "index" }}>
      <SEO title="Home" />
      <Jumbotron fluid>
        <Container className="text-center">
          <h1>The Flexible Game Engine</h1>
          <p>
            <Button
              href="https://github.com/dbartolini/crown/releases/latest"
              variant="primary"
            >
              Download
            </Button>
          </p>
        </Container>
      </Jumbotron>
    </Layout>
  )
}
