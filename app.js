require('dotenv').config()

const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.use(express.static(path.join(__dirname, 'public'))) // Export the styles files to folder public

const Prismic = require('@prismicio/client')
const PrismicDOM = require('prismic-dom')
const { each, map } = require('lodash')

const initApi = req => {
  return Prismic.getApi(process.env.PRISMIC_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    req: req
  })
}

// Link Resolver
const handleLinkResolver = doc => {
  /*  console.log(doc)
  if (doc.type === 'product') {
    return `/detail/${doc.uid}`
  } */
  // if (doc.type === 'page') {
  //  return '/page/' + doc.uid
  // } else if (doc.type === 'blog_post') {
  //  return '/blog/' + doc.uid
  // }

  // Default to homepage
  return '/'
}

app.use((req, res, next) => {
  /*  res.locals.ctx = {
    endpoint: process.env.PRISMIC_ENDPOINT,
    linkResolver: handleLinkResolver
  } */

  res.locals.Link = handleLinkResolver

  // add PrismicDOM in locals to access them in templates.
  res.locals.PrismicDOM = PrismicDOM
  next()
})

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', async (req, res) => {
  const api = await initApi(req)
  const home = await api.query(Prismic.Predicates.at('document.type', 'home'), {
    orderings: '[images]'
  })

  const medias = home.results[0].data
  const gallery = []

  for(let i = 0; i <= 4; i++) {
    const image = medias.gallery[i].image.url
    gallery.push(image)
  }

  res.render('pages/home', {
    home,
    gallery
  })
})



/* app.get('/', async (req, res) => {
  res.render('pages/home')
}) */

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
