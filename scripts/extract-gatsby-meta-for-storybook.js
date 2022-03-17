const fs = require("fs")

const { siteMetadata } = require("../gatsby-config")

const args = process.argv.slice(1)
const destFile = args[1]

if (!destFile) {
  console.error("Sorry, missing argument for destination file.")
  console.error(`Usage: ${args[0]} <destination-file>`)
  process.exit(1)
}

console.log("Creating static metadata from gatsby config into this file:")
console.log(destFile)
console.log("Storybook needs this file for properly rendering.")

if (destFile) {
  fs.writeFileSync(
    destFile,
    JSON.stringify({
      data: {
        site: {
          siteMetadata,
        }
      },
    }),
    "utf8"
  )
}
