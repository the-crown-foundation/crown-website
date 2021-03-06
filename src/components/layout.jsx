import React from "react"
import Footer from "./footer"
import Header from "./header"

export default function Layout({ children }) {
  return (
    <>
      <div className="dark:text-white">
        <div className="container center mx-auto lg:w-8/12 flex flex-col h-screen justify-between">
          <Header />
          <main className="mb-auto">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  )
}
