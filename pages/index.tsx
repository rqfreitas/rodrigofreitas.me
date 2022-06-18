import * as React from 'react'
import { domain } from 'lib/config'
import { resolveNotionPage } from 'lib/resolve-notion-page'
import { NotionPage } from 'components'

export const getStaticProps = async () => {
  try {
    const props = await resolveNotionPage(domain)

    return { props, revalidate: 10 }
  } catch (err) {
    console.error('page error', domain, err)

    // we don't want to publish the error version of this page, so
    // let next.js know explicitly that incremental SSG failed
    // certificado google "google-site-verification=OPwozrpGTv5LZAH_8V9g-aFl9FXXpWeTz2czX5R61sE"
    throw err
  }
}

export default function NotionDomainPage(props) {
  return <NotionPage {...props} />
}
