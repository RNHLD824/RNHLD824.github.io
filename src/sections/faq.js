/** @jsxImportSource theme-ui */
import { Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-heading';
import Accordion from 'components/accordion/accordion';
import { TriggerAnalytics, ComponentType } from 'analytics/trigger'
const styles = {
  footnote: {
    color: 'muted',
    fontSize: '0.75em'
  },
  bold: {
    fontWeight: 'bold'
  }
}

const faqs = [
  {
    title: `I received a JuanBag, how can I return it?`,
    contents: (
      <div>
        You can scan the QR code on the bag's flap or message us on <a href="https://www.facebook.com/itsJuanLoop" alt="JuanLoop-Facebook-Page" target="_blank">Facebook</a> where will be asking information including your name, address, and the *serial number of your JuanBag. Once returned, you will receive reward points and incentives!<br/>
        <i sx={styles.footnote}>*Serial Number is located on the little flap of the bag.</i>
      </div>
    ),
  },
  {
    title: `What are the benefits of choosing JuanBag as my packaging?`,
    contents: (
      <div>
        <ol style={{ paddingLeft: 0 }}>
          <li><span sx={styles.bold}>It is made just for you!</span> Yes, for you! JuanBag is made to cater Filipino consumers who wish to lessen their packaging waste while still securing their items.</li>
          <li><span sx={styles.bold}>Say goodbye to single-use plastic packaging!</span> JuanBag is made from upcycled tarps, designed to be be used several times.</li>
          <li><span sx={styles.bold}>To give love!</span> Convert your points into rewards and donate to our partner communities.</li>
          <li><span sx={styles.bold}>It features our hardworking Juans!</span> Each JuanBag is handmade by Nanays and collected by bikers resulting to less carbon dioxide emission.</li>
        </ol>
      </div>
    ),
  },
  {
    title: 'How can I earn rewards from returning my JuanBag?',
    contents: (
      <div>
        <p>Exciting mobile App coming your way! We're working on giving you a seamless experience when returning our JuanBags and getting your rewards and rebates.</p>
        <p>Follow us to be updated!</p>
      </div>
    ),
  },
  {
    title: 'I am an online seller/business, how can I avail  your reusable packaging?',
    contents: (
      <div>
        <p>Hang on tight! We're still currently on testing phase with few partners. But we'd love to know about your business and how we can offer our packaging! Connect with us via <a href="https://www.facebook.com/itsJuanLoop" alt="JuanLoop-Facebook-Page" target="_blank">Facebook</a> or at hellojuan@juanloop.com </p>
        <p>Got used tarpaulins that are in good condition? Donate them by emailing us at hellojuan@juanloop.com </p>
      </div>
    ),
  },
  {
    title: 'Where can I know more about JuanLoop?',
    contents: (
      <div>
        <p>Follow our social media pages to get the latest updates on our initiatives! Or you can connect with us at hellojuan@juanloop.com</p>
        <p>We'd love to know you!</p>
      </div>
    ),
  },
]
export default function Faq() {
  return (
    <TriggerAnalytics name="FAQ" component={ComponentType.SECTION}>
      <Box as="section" id="faq" variant="section.faq">
        <Container>
          <SectionHeader
            title="Do you have any questions?"
            description={<div>Let's connect! <a href="https://www.facebook.com/itsJuanLoop" alt="JuanLoop-Facebook-Page" target="_blank">Facebook</a>, <a href="https://www.instagram.com/itsjuanloop/?hl=en" alt="JuanLoop-Instagram-Page" target="_blank">Instagram</a>, <a href="https://twitter.com/itsJuanLoop" alt="JuanLoop-Twitter-Page" target="_blank">Twitter</a> <br/>Email: hellojuan@juanloop.com</div>}
          />
          <Box
            sx={{
              display: 'flex',
              width: ['100%', null, null, '650px', '745px'],
              flexDirection: 'column',
              mx: 'auto',
              my: -4,
            }}
          >
            <Accordion items={faqs} />
          </Box>
        </Container>
      </Box>
    </TriggerAnalytics>
  );
}
