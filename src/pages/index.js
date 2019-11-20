import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{
        maxWidth: `var(--max-width)`,
        margin: `0 auto`,
        padding: `0 var(--space-sm)`,
      }}
    >
      <h1 className="text--xxxl"> Large text</h1>
      <h1>Heading One </h1>
      <h2>Heading Two</h2>
      <h3>Heading Three</h3>
      <h4>Heading Four</h4>
      <small>Small</small>

      <br />

      <p>Unordered List with a br before</p>
      <ul>
        <li>List Item</li>
        <li>List Item</li>
        <li>List Item</li>
      </ul>

      <br />

      <p>Ordered List </p>
      <ol>
        <li>List Item</li>
        <li>List Item</li>
        <li>List Item</li>
      </ol>

      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu ex
        semper, suscipit enim in, rutrum ex. Ut iaculis pellentesque erat, in
        imperdiet tellus fermentum at. Maecenas posuere ante sem, at sagittis
        tellus facilisis in. Cras luctus, tellus ac sodales vehicula, libero dui
        viverra leo, at suscipit massa ligula quis nisl. Curabitur a ornare
        neque. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Proin rutrum vulputate auctor. Proin sit amet
        lacinia quam, in convallis velit. Nam ac felis nec dolor rutrum aliquet.
        Morbi felis felis, finibus eu tempor quis, aliquam id justo. Morbi
        lobortis tellus ligula, et iaculis tortor auctor laoreet.
      </p>
      <h2>Heading Two</h2>
      <p>
        Suspendisse potenti. Morbi in facilisis arcu. Donec facilisis odio ac
        sem egestas, consequat mattis eros venenatis. Donec justo diam,
        tristique at malesuada vel, luctus et urna. Nunc ornare mauris a arcu
        pellentesque, a tincidunt leo iaculis. Praesent nisl magna, lobortis at
        nibh vel, venenatis efficitur metus. Donec vitae bibendum diam.
        Vestibulum vel malesuada augue, non iaculis eros. Duis porta malesuada
        placerat. Integer id pharetra quam. Pellentesque eu turpis rutrum,
        varius ipsum vitae, malesuada neque. Etiam ac commodo lorem. Ut erat
        ligula, fermentum vitae tempor a, vehicula quis nulla. Donec vel augue
        arcu. Ut a felis orci.
      </p>
      <h3>Heading Three</h3>
      <p>
        Suspendisse potenti. Donec et mattis risus, nec porttitor lorem.
        Vestibulum sit amet mauris hendrerit, vestibulum magna vitae, convallis
        enim. Fusce vitae libero consequat, gravida metus et, volutpat sem.
        Mauris non ipsum volutpat massa congue tempor. Phasellus pellentesque
        elementum magna at efficitur. Maecenas justo eros, malesuada at aliquet
        eget, imperdiet sit amet risus. Interdum et malesuada fames ac ante
        ipsum primis in faucibus. Donec consectetur sem quis metus pharetra
        consequat. Fusce sed tempor tortor, ut mattis augue. Curabitur mollis ac
        orci a dictum. Sed efficitur non arcu mollis euismod. Pellentesque
        imperdiet placerat diam eget hendrerit. Praesent molestie lectus eget
        mauris pretium, ac egestas magna ullamcorper. Fusce ut arcu quis orci
        aliquet rutrum.
      </p>
      <div
        style={{
          background: `dodgerblue`,
          padding: `var(--space-md) var(--space-sm)`,
          margin: `var(--space-md) 0`,
        }}
      >
        I'm a lonely div with medium top and bottom margin spacing.
      </div>
      <p>
        Sed efficitur non arcu mollis euismod. Pellentesque imperdiet placerat
        diam eget hendrerit. Praesent molestie lectus eget mauris pretium, ac
        egestas magna ullamcorper. Fusce ut arcu quis orci aliquet rutrum.
      </p>
      <div
        style={{
          background: `papayawhip`,
          padding: `var(--space-md) var(--space-sm)`,
          margin: `var(--space-lg) 0`,
        }}
      >
        I'm a lonely div with large top and bottom margin spacing.
      </div>
      <p>
        Sed efficitur non arcu mollis euismod. Pellentesque imperdiet placerat
        diam eget hendrerit. Praesent molestie lectus eget mauris pretium, ac
        egestas magna ullamcorper. Fusce ut arcu quis orci aliquet rutrum.
      </p>

      <div
        style={{
          background: `dodgerblue`,
          padding: `var(--space-md) var(--space-sm)`,
          margin: `var(--space-xl) 0`,
        }}
      >
        {" "}
        I'm a lonely div with xl top and bottom margin spacing
      </div>

      <p>
        Sed efficitur non arcu mollis euismod. Pellentesque imperdiet placerat
        diam eget hendrerit. Praesent molestie lectus eget mauris pretium, ac
        egestas magna ullamcorper. Fusce ut arcu quis orci aliquet rutrum.
      </p>

      <div className="component" style={{ background: `grey` }}>
        Im an arbitray div with a class of component. I have padding and
        spacing.
      </div>

      <div
        className="component"
        style={{
          marginBottom: `var(--space-lg)`,
          background: `grey`,
        }}
      >
        I'm an arbitray div with a class of component and a margin bottom of
        space-lg
      </div>

      <div className="component" style={{ background: `grey` }}>
        Im another arbitry div with a class of component.
      </div>
      <div
        className="component"
        style={{
          marginBottom: `var(--space-xl)`,
          background: `grey`,
        }}
      >
        I'm an arbitray div with a class of component and a margin bottom of
        space-xl
      </div>

      <div className="component" style={{ background: `grey` }}>
        Im a lowly div with a class of component.
      </div>
    </div>
  </Layout>
)

export default IndexPage
