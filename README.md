# Project Description

This project aims to be a single-page, full-stack dashboard application. It will connect to a SQLite database and make the data available through a GraphQL API for the client. The front-end will use React and TypeScript along with modules for creating charts to visualize the data on the dashboard.

# Goals

1. Understand the design principals behind dashboards and the data they prsent to users

2. Create charts in a web environment to help visualize data

3. Continue improving skills on working with SQL databases in JavaScript/TypeScript

# Challenges

1. Integrating Chart.js with JSX.

- Chart.js requires a `<canvas>` element to latch onto in order to display charts. It also takes in a meta-data (i.e. axes labels, data values, title, etc.) object to create the chart. This object is instantiated inside an async function, which grabs the `<canvas>` element to attach to. However, this function would execute before the component (containing `<canvas>`) would render, so a lightweight wrapper was used to create the `<canvas>` element before another React component was created that would call the async function (see `Bar_Chart.tsx` and `Chart_Wrapper.tsx` in `client`).

2. Handling types with third-party modules in TypeScript

- Operating with third-party module classes is a challenge in figuring out what object type is being returned by functions. Specifying to TypeScript what object types to expect, or deciding when to use an interface to inform TypeScript of what to anticipate from a function.
