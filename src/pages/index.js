import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import UltimateFeatures from 'sections/ultimate-features';
import UsefulFeatures from 'sections/useful-features';
import Faq from 'sections/faq';
import Blog from 'sections/blog';
import Partners from 'sections/partners';
import Solution from 'sections/solution';
export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="JuanLoop" />
        <Banner />
        <UltimateFeatures />
        <Solution />
        <UsefulFeatures />
        <Partners />
        <Faq />
        <Blog />
        <MessengerCustomerChat pageId={`${process.env.NEXT_PUBLIC_MESSENGER_PAGEID}`} appId={`${process.env.NEXT_PUBLIC_MESSENGER_APPID}`}/>
      </Layout>
    </ThemeProvider>
  )
}
