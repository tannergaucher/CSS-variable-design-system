import { Link } from "gatsby"
import React from "react"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="CSS Variable Design System" />
    <header
      style={{
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
        padding: `var(--space-sm)`,
      }}
    >
      <Link to="/">
        <h4
          style={{ padding: `var(--space-sm)`, margin: `0`, fontWeight: 900 }}
        >
          Site Title
        </h4>
      </Link>
      <nav>
        <a className="nav-link" href="#">
          Navlink
        </a>
        <a className="nav-link" href="#">
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
      <small>Small</small>
      <p>
        Paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nullam eget orci ac sapien consequat posuere et id lectus. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Mauris egestas finibus enim, vel luctus felis pretium et.
        Pellentesque iaculis dui sit amet tempor rutrum. Suspendisse commodo
        molestie commodo. Fusce porttitor eget est sit amet ultricies. Proin
        malesuada velit id velit viverra pretium.
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

      <p>
        Paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nullam eget orci ac sapien consequat posuere et id lectus. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Mauris egestas finibus enim, vel luctus felis pretium et.
        Pellentesque iaculis dui sit amet tempor rutrum. Suspendisse commodo
        molestie commodo. Fusce porttitor eget est sit amet ultricies. Proin
        malesuada velit id velit viverra pretium.
      </p>
      <fieldset className="fieldset">
        <form className="form" action="">
          <input className="input" type="email" placeholder="Input" />
          <button className="btn btn-primary" type="">
            Primary Button
          </button>
        </form>
      </fieldset>
      <button className="btn" style={{ marginRight: `var(--space-md)` }}>
        Button
      </button>
      <button
        className="btn"
        style={{ marginRight: `var(--space-md)` }}
        disabled
      >
        Disabled Button
      </button>
      <button className="btn btn-primary" disabled>
        Disabled Primary Button
      </button>
      <form action="" className="form">
        <textarea
          className="text-area"
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Textarea"
        ></textarea>
      </form>
    </div>
    <footer style={{ padding: `var(--space-sm)` }}>
      <Link to="/">
        <h4
          style={{ padding: `var(--space-sm)`, margin: `0`, fontWeight: 900 }}
        >
          Site Title
        </h4>
      </Link>
    </footer>
  </>
)

export default IndexPage
