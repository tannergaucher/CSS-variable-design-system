import Layout from "../components/layout"
import { Link } from "gatsby"
import React from "react"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <header style={{ padding: `var(--space-sm)` }}>
      <Link to="/">
        <h4>Site Title</h4>
      </Link>
      <nav>
        <a className="nav-link" href="">
          Navlink
        </a>
        <a href="" className="nav-link">
          Navlink
        </a>
        <a href="" className="nav-link">
          Navlink
        </a>
      </nav>
    </header>
    <div
      style={{
        maxWidth: `var(--container)`,
        margin: `0 auto`,
        padding: `var(--space-sm)`,
      }}
    >
      <h1>Heading One</h1>
      <h2>Heading Two</h2>
      <h3>Heading Three</h3>
      <h4>Heading Four</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
        orci ac sapien consequat posuere et id lectus. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Mauris egestas finibus enim, vel luctus felis pretium et. Pellentesque
        iaculis dui sit amet tempor rutrum. Suspendisse commodo molestie
        commodo. Fusce porttitor eget est sit amet ultricies. Proin malesuada
        velit id velit viverra pretium.
      </p>
      <blockquote>
        Blockquote Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nullam eget orci ac sapien consequat posuere et id lectus. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Mauris egestas finibus enim, vel luctus felis pretium et.
        Pellentesque iaculis dui sit amet tempor rutrum. Suspendisse commodo
        molestie commodo. Fusce porttitor eget est sit amet ultricies. Proin
        malesuada velit id velit viverra pretium.
      </blockquote>
      <form className="form" action="">
        <input className="input" type="email" placeholder="Email" />
        <input className="input" type="password" placeholder="Password" />
        <button className="btn btn-primary" type="submit">
          Primary Button
        </button>
        <button className="btn">Regular Button</button>
      </form>
      <br />
      <form action="" className="form">
        <textarea
          className="text-area"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button className="btn btn-primary">Submit</button>
      </form>
      <h2>CSS Classes </h2>
      <ul>
        <li>form</li>
        <li>input</li>
        <li>button</li>
        <li>navlink</li>
        <li>blockquote</li>
        <li>textarea</li>
      </ul>
    </div>
    <footer style={{ padding: `var(--space-sm)` }}>
      <Link to="/">
        <h4 style={{ margin: `0` }}>Site Title</h4>
      </Link>
    </footer>
  </Layout>
)

export default IndexPage
