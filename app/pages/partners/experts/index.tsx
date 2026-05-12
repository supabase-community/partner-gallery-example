import Head from 'next/head'
import BecomeAPartner from '~/components/BecomeAPartner'
import Layout from '~/components/Layout'
import PartnerLinkBox from '~/components/PartnerLinkBox'
import PartnerTileGrid from '~/components/PartnerTileGrid'
import SectionContainer from '~/components/SectionContainer'
import supabase from '~/lib/supabase'
import { Partner } from '~/types/partners'

export async function getStaticProps() {
  const { data: partners } = await supabase
    .from<Partner>('partners')
    .select('*')
    .eq('approved', true)
    .eq('type', 'expert')
    .order('category')
    .order('title')

  return {
    props: {
      partners,
    },
    revalidate: 18000, // In seconds - refresh every 5 hours
  }
}

interface Props {
  partners: Partner[]
}

function ExpertPartnersPage(props: Props) {
  const { partners } = props
  const partnersByCategory: { [category: string]: Partner[] } = {}
  partners.map(
    (p) =>
      (partnersByCategory[p.category] = [
        ...(partnersByCategory[p.category] ?? []),
        p,
      ])
  )

  const meta_title = 'Find an expert'
  const meta_description = `Find an expert to help build your next idea.`

  return (
    <>
      <Head>
        <title>{meta_title} | Supabase Partner Gallery Example</title>
        <meta name="description" content={meta_description}></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <SectionContainer className="space-y-12">
          <div>
            <h1 className="h1">{meta_title}</h1>
            <h2 className="text-xl text-scale-900">{meta_description}</h2>
          </div>
          <div className="grid grid-cols-12 lg:gap-16 xl:gap-32">
            <div className="col-span-3">
              {/* Horizontal link menu */}
              <div className="space-y-6">
                {/* Search Bar */}
                <div className="space-y-4">
                  <div className="mb-2 text-sm text-scale-900">
                    Explore more
                  </div>
                  <PartnerLinkBox
                    title="Integrations"
                    color="blue"
                    description="Extend and automate your workflow by using integrations for your favorite tools."
                    href={`/partners/integrations`}
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                        />
                      </svg>
                    }
                  />
                  <PartnerLinkBox
                    title="Become a partner"
                    color="brand"
                    description="Fill out a quick 30 second form to apply to become a partner"
                    href={`/partners/integrations#become-a-partner`}
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    }
                  />
                </div>
              </div>
            </div>
            <div className="col-span-9">
              {/* Partner Tiles */}
              <div className="grid">
                {partners.length ? (
                  <PartnerTileGrid
                    partnersByCategory={partnersByCategory}
                    hideCategories={true}
                  />
                ) : (
                  <h2 className="h2">No Partners Found</h2>
                )}
              </div>
            </div>
          </div>

          {/* Become a partner form */}
        </SectionContainer>
        <BecomeAPartner supabase={supabase} />
      </Layout>
    </>
  )
}

export default ExpertPartnersPage
