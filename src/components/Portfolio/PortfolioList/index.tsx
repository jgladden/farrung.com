import React, { useState } from 'react'
import styled from 'styled-components'
import { useQuery } from 'react-query'
import { fetchPortfolio, fetchPortfolioItem } from '../api'

import Loader from '../../common/Loader'
import ErrorMsg from '../../common/ErrorMsg'
import Text from '../../common/Text'

export default function List() {
  const [itemId, setItemId] = useState<string | undefined>()
  const { isLoading, error, data } = useQuery('portfolio', fetchPortfolio)

  const item = useQuery(['item', itemId], () => fetchPortfolioItem({ id: itemId as string }), {
    enabled: !!itemId,
  })

  console.log(itemId, item.data)

  return error ? (
    <ErrorMsg error={error} />
  ) : (
    <Loader isLoading={isLoading}>
      <ItemContainer>
        {data?.Items &&
          data.Items.map((item) => (
            <div key={item.id}>
              <Text component="p" onClick={() => setItemId(item.id)}>
                {item.title}
              </Text>
              <img src={`/images/${item.imageorder[0]}`} alt={item.title} />
            </div>
          ))}
      </ItemContainer>
    </Loader>
  )
}

const ItemContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  & > div {
    width: 25%;
    padding: 10px;
    img {
      width: 100%;
    }
  }
`
/*
const pi: PortfolioItem[] = [
  {
    id: '82b25789-a984-4cf6-83f8-0353b5b1a754',
    type: 'print',
    title: 'Farrung',
    client: 'Farrung',
    description:
      "<p>As part of an internal marketing effort this poster was created to help promote design services provided by Farrung.com.<p> \r\n<p>The poster's design was intended to capture the company's youth oriented design in an effort to bring in new clients.</p>",
    imageorder: ['15_1.jpg'],
    display: '1',
    rating: '5',
    projectDate: '06/22/2001',
  },
  {
    id: 'd09991e7-e73f-434a-85dc-cef3522bb2dd',
    type: 'print',
    title: 'Spike Radio',
    client: 'Spike Radio',
    description:
      '<p>Spike Radio is an online radio station streaming live DJ set along with videos of well known electronic music artists.</p>\r\n<p>The posters where used to promoted the company as an edgy, youth oriented online service.</p>',
    imageorder: ['17_1.jpg', '17_2.jpg', '17_3.jpg'],
    display: '1',
    rating: '7',
    projectDate: '11/20/2000',
  },
  {
    id: 'a22cacc7-bdb1-4b09-919f-728e00a0cbc0',
    type: 'print',
    title: 'The Arts Online',
    client: 'The Arts Online',
    description:
      "<p>This poster was designed to attract membership to The Arts Online, an online interactive web artist's community.</p> \r\n<p>The concept was to create imagery compelling to a variety of artists and art appreciators.</p>",
    imageorder: ['18_1.jpg'],
    display: '1',
    rating: '5',
    projectDate: '07/06/1999',
  },
  {
    id: '05e16d32-b3e8-4bab-b549-b0935023e495',
    type: 'online',
    title: 'Activision Site',
    client: 'Activision',
    description:
      "<p>This an example of a series of advertisements developed for Activision to promote awareness of new game titles.</p>\r\n<p>The animated flash advertisements ran on Activision's homepage promoting a wide range of popular new releases.</p>",
    imageorder: ['22_1.jpg'],
    display: '1',
    rating: '6',
    projectDate: '04/07/2001',
  },
  {
    id: '4eeb63ac-196b-4333-b030-02522d4952fa',
    type: 'online',
    title: 'The Arts Online',
    client: 'The Arts Online',
    description:
      '<p>The Arts Online serves as an artist community with contributors from all over the world.</p>\r\n<p>The site features chat, an art resources search engine, as well as galleries featuring a wide range of artistic endeavors.</p>',
    imageorder: ['31_1.jpg', '31_2.jpg', '31_3.jpg'],
    display: '1',
    rating: '4',
    projectDate: '07/06/1999',
  },
  {
    id: '73301f0f-c223-4407-9895-9d77fe272a6f',
    type: 'online',
    title: 'Ignited Minds',
    client: 'Ignited Minds',
    description:
      '<p>This website was designed for Ignited Minds, a print, video and web design services company.</p>\r\n<p>The website was developed as a marketing tool to introduce new clients to the work, ideology and services the company had to offer.</p>',
    imageorder: ['38_1.jpg', '38_2.jpg', '38_3.jpg', '38_4.jpg'],
    display: '1',
    rating: '7',
    projectDate: '12/29/2001',
  },
  {
    id: '3866c83d-ac26-4581-88c5-257a33c53f4b',
    type: 'online',
    title: 'Lenny Kravitz',
    client: 'Artist Direct',
    description:
      "<p>The Lenny Kravitz official website and store was developed for Artist Direct as part of the company's series of music artists' properties.</p>\r\n<p>The site served as a destination for fans to learn more about Lenny Kravitz and purchase merchandise directly from the artist.</p>",
    imageorder: ['40_1.jpg', '40_2.jpg'],
    display: '1',
    rating: '2',
    projectDate: '03/01/2000',
  },
  {
    id: 'f95336cb-23a4-4787-a8da-c235a505dd9e',
    type: 'online',
    title: 'Nike',
    client: 'Nike',
    description:
      '<p>Spike Radio partnered with Nike to deliver live streaming radio for the Olympics. The player developed was capable of delivering updates and news stories along with streaming advertisements for Nike.</p>',
    imageorder: ['47_1.jpg', '47_2.jpg'],
    display: '1',
    rating: '6',
    projectDate: '08/07/2000',
  },
  {
    id: 'fcc141d6-ffb7-47a5-ab03-48f5da585516',
    type: 'online',
    title: 'Shaun Palmer',
    client: 'Activision',
    description:
      '<p>This website was developed for Activision to promote one of the companies hottest titles,  "Shaun Palmer\'s Pro Snowboarder."</p>\r\n<p>It features an in depth look at the game along with a wealth of information about the different levels and characters.</p>',
    imageorder: ['50_1.jpg', '50_2.jpg', '50_3.jpg', '50_4.jpg'],
    display: '1',
    rating: '6',
    projectDate: '07/22/2002',
  },
  {
    id: '0e98decd-cc9b-44c2-8cf8-ff7b009faaad',
    type: 'online',
    title: 'Stuart Little 2',
    client: 'Activision',
    description:
      '<p>This website was developed for Activision to promote the game title Stuart Little 2, a sequel to the popular original game title.</p>\r\n<p>The site featured information, puzzles and screenshots all directed towards the purchase of the game.</p>',
    imageorder: ['52_1.jpg', '52_2.jpg', '52_3.jpg', '52_4.jpg'],
    display: '1',
    rating: '6',
    projectDate: '01/15/2002',
  },
  {
    id: '0e5cbce1-3e67-45f9-8f00-2ad5ed8269e2',
    type: 'print',
    title: 'Connect and Create',
    client: 'Sony',
    description:
      '<p>Sony developed the Connect and Create program in an effort to promote deals on various peripherals if coupled with the purchase of a Sony computer.</p>\r\n<p>The print campaign was developed to make it easy for retailers to customize the advertisements to fit their local markets.</p>',
    imageorder: ['56_1.jpg', '56_2.jpg', '56_3.jpg'],
    display: '1',
    rating: '8',
    projectDate: '04/22/2002',
  },
  {
    id: '08a070ea-af49-4acd-a7e2-170a5f044171',
    type: 'online',
    title: 'Geography Master',
    client: 'Channel One News',
    description:
      '<p>This interactive feature developed for Channel One News is a fun way to learn geography.</p>\r\n<p>The game challenges users to identify countries in various regions across the globe. The user must correctly drag the country name to the map to move on to the next continent.</p>',
    imageorder: ['72_1.jpg', '72_2.jpg', '72_3.jpg', '72_4.jpg'],
    display: '1',
    rating: '7',
    projectDate: '06/16/2005',
  },
  {
    id: '82850b47-50b1-4264-b953-7bdf61c31039',
    type: 'online',
    title: 'Quake Simulator',
    client: 'Channel One News',
    description:
      '<p>This interactive feature developed for Channel One News is a supplemental resource for stories relating to earthquakes that aired on the network.</p>\r\n<p>The interactive game challenges the user to correctly identify the magnitude of various historical earthquakes.</p>',
    imageorder: ['74_1.jpg', '74_2.jpg', '74_3.jpg', '74_4.jpg'],
    display: '1',
    rating: '7',
    projectDate: '12/13/2005',
  },
  {
    id: '8433b3fd-bd59-401a-9565-db82304fe83b',
    type: 'online',
    title: 'ArchiPlus Studio',
    client: 'ArchiPlus Studio',
    description:
      "<p>This website was built as a showcase of work for ArchiPlus Studios, an architecture firm based in Bangkok Thailand.</p>\r\n<p>The site design is minimal and intuitive evoking the same ideals found in the firm's approach to architecture.</p>",
    imageorder: ['79_1.jpg', '79_2.jpg'],
    display: '1',
    rating: '7',
    projectDate: '09/08/2004',
  },
  {
    id: '04f54815-a47c-4245-9ad0-02bd5f319de0',
    type: 'online',
    title: 'History of Flight',
    client: 'Channel One News',
    description:
      '<p>This flash timeline was created for Channel One News. The timeline is used as a tie in with the Channel One News broadcast seen daily by over 7 millions teens from around the country.</p>\r\n<p>The timeline covers the historical milestones in flight and aviation history.</p>',
    imageorder: ['80_1.jpg', '80_2.jpg', '80_3.jpg'],
    display: '1',
    rating: '7',
    projectDate: '08/24/2006',
  },
  {
    id: '63f84a0a-1634-4cd0-a9ed-fd5322d72298',
    type: 'online',
    title: 'Elvis Shoes',
    client: 'PSDI USA',
    description:
      '<p>This flash based e-commerce website was developed for PSDI USA as an online store for their Elvis brand shoes.</p> \r\n<p>The website and administration tools back-end was developed usning PHP with MySQL.</p>',
    imageorder: ['82_1.jpg', '82_2.jpg', '82_3.jpg'],
    display: '1',
    rating: '8',
    projectDate: '06/27/2007',
  },
  {
    id: '43c371fe-5545-41e9-82b6-4a9d3bf1f332',
    type: 'online',
    title: 'Elvis Site',
    client: 'PSDI USA',
    description:
      "<p>Elvis shoes was developed for PSDI USA to showcase the brand's latest styles for retail and wholesale customer.</p>\r\n<p>Along with current inventory the website features a store locator along with editorial, celebrity, and event galleries.</p>",
    imageorder: ['83_1.jpg', '83_2.jpg', '83_3.jpg', '83_4.jpg'],
    display: '1',
    rating: '4',
    projectDate: '05/22/2007',
  },
  {
    id: 'caa22b99-d129-461b-942f-490ac426ba06',
    type: 'online',
    title: 'Christian Audigier',
    client: 'PSDI USA',
    description:
      "<p>Christian Audigier shoes was developed for PSDI USA to showcase the brand's latest styles for retail and wholesale customer.</p>\r\n<p>Along with current inventory the website features a store locator along with editorial, celebrity, and event galleries.</p>",
    imageorder: ['84_1.jpg', '84_2.jpg', '84_3.jpg', '84_4.jpg'],
    display: '1',
    rating: '8',
    projectDate: '08/16/2007',
  },
  {
    id: '1fd0823e-2492-45f4-bacb-cb7826c9bac4',
    type: 'online',
    title: 'Ed Hardy Shoes',
    client: 'PSDI USA',
    description:
      "<p>Ed Hardy shoes was developed for PSDI USA to showcase the brand's latest styles for retail and wholesale customer.</p>\r\n<p>Along with current inventory the website features a store locator along with editorial, celebrity, and event galleries.</p>",
    imageorder: ['85_1.jpg', '85_2.jpg', '85_3.jpg', '85_4.jpg'],
    display: '1',
    rating: '8',
    projectDate: '10/05/2007',
  },
  {
    id: 'c2329f54-60d2-4761-90ab-83c0393dfc7c',
    type: 'online',
    title: 'Smet Shoes',
    client: 'PSDI USA',
    description:
      "<p>Smet shoes was developed for PSDI USA to showcase the brand's latest styles for retail and wholesale customer.</p>\r\n<p>Along with current inventory the website features a store locator along with editorial, celebrity, and event galleries.</p>",
    imageorder: ['86_1.jpg', '86_2.jpg', '86_3.jpg', '86_4.jpg'],
    display: '1',
    rating: '8',
    projectDate: '01/22/2008',
  },
  {
    id: '0dfdc5d7-afe1-40b0-88c7-8db8d22188aa',
    type: 'online',
    title: 'PSDI Wholesale',
    client: 'PSDI USA',
    description:
      "<p>The site was designed for PSDI USA, a Los Angeles shoe development company handling brands such as Ed Hardy, Christian Audigier, Smet and Elvis shoes.</p>\r\n<p>The website serves as a tool for wholesalers to browse the company's latest offerings and place orders.</p>",
    imageorder: ['97_1.jpg', '97_2.jpg', '97_3.jpg'],
    display: '1',
    rating: '8',
    projectDate: '04/06/2008',
  },
  {
    id: '31158774-da67-4783-87e9-858fb500c76f',
    type: 'online',
    title: 'Philip Simon Shoes',
    client: 'PSDIUSA Inc.',
    description:
      '<p>This site was designed for PSDI USA, a shoe development company based in Los Angeles, California handling brands such as Ed Hardy, Christian Audigier, Smet and Elvis shoes.</p>\r\n<p>The website serves as a promotional tool for consumers to browse upcoming styles as well as editorial, celebrity, events and video galleries.</p>',
    imageorder: ['108_1.jpg', '108_2.jpg', '108_3.jpg', '108_4.jpg'],
    display: '1',
    rating: '9',
    projectDate: '05/02/2011',
  },
  {
    id: 'aee23821-a1d5-4bc3-8483-901b975f739d',
    type: 'online',
    title: 'US Army Shoes',
    client: 'PSDI USA',
    description:
      "<p>US Army shoes was developed for PSDI USA to showcase the brand's latest styles for retail and wholesale customer.</p>\r\n<p>Along with current inventory the website features a store locator along with editorial, celebrity, and event galleries.</p>",
    imageorder: ['109_1.jpg', '109_2.jpg', '109_3.jpg'],
    display: '1',
    rating: '8',
    projectDate: '08/22/2010',
  },
  {
    id: 'e35b5c9e-4108-43bd-a6fa-624c4fe130bd',
    type: 'online',
    title: 'Philip Simon Store',
    client: 'PSDI USA Inc.',
    description:
      "<p>This site was designed for PSDI USA, a shoe development company based in Los Angeles, California developing shoes for Ed Hardy and Nine West.</p>\r\n<p>This website is the online store selling the company's in house brand, Philip Simon shoes.</p>",
    imageorder: ['110_1.jpg', '110_2.jpg', '110_3.jpg', '110_4.jpg'],
    display: '1',
    rating: '9',
    projectDate: '05/15/2011',
  },
  {
    id: 'a6bc48f7-cca8-468e-a312-47788ed06b47',
    type: 'online',
    title: 'Philip Simon Brands',
    client: 'Philip Simon Brands',
    description:
      '<p>The website provides corporate information related to Philip Simon Brands Group as well as providing information regarding its various brands; Nine West Original Sneakers and Philip Simon Shoes.</p>',
    imageorder: ['111_1.jpg', '111_2.jpg', '111_3.jpg', '111_4.jpg'],
    display: '1',
    rating: '9',
    projectDate: '08/20/2011',
  },
  {
    id: 'a425caee-0311-4346-b318-385f5f9e6def',
    type: 'online',
    title: 'Ed Hardy Shoes',
    client: 'PSDI USA, Inc.',
    description:
      "<p>Ed Hardy shoes was developed for PSDI USA to showcase the brand's latest styles for retail and wholesale customer.</p>\r\n<p>Along with current inventory the website features a store locator along with editorial, celebrity, and event galleries.</p>",
    imageorder: ['112_1.jpg', '112_2.jpg', '112_3.jpg', '112_4.jpg'],
    display: '1',
    rating: '9',
    projectDate: '08/20/2011',
  },
  {
    id: 'db162c75-5f0f-4ee5-bdac-37c6d3f9ae2b',
    type: 'online',
    title: 'Ed Hardy Store',
    client: 'PSDI USA',
    description:
      '<p>This site was designed for PSDI USA, a fashion company based in Los Angeles, California developing shoes for Ed Hardy, Smet, Philip Simon and Nine West.</p>\r\n<p>The site features a custom built content management system and e-commerce platform.</p>',
    imageorder: ['113_1.jpg', '113_2.jpg', '113_3.jpg', '113_4.jpg'],
    display: '1',
    rating: '9',
    projectDate: '01/12/2012',
  },
  {
    id: 'ee879233-7392-4b11-b1e3-d3ad810b64d4',
    type: 'online',
    title: 'Wilshire Axon',
    client: 'Wilshire Axon',
    description:
      "<p>Corporate website for Wilshire Axon detailing the company's Blueprint process.</p>\r\n<p>A responsive site supporting iPad, iPhone, android devices as well as Amazon's Kindle. Each section and slide modal are modular templates populated by an Umbraco powered CMS.</p>",
    imageorder: ['114_1.jpg', '114_2.jpg', '114_3.jpg', '114_4.jpg'],
    display: '1',
    rating: '10',
    projectDate: '01/01/2013',
  },
  {
    id: 'c08ee5ee-3199-4c37-883f-0ee75548ce81',
    type: 'online',
    title: 'Hello Music',
    client: 'Wilshire Axon',
    description:
      '<p>A membership based music equipment e-commerce site featuring infinite scrolling product feed, product detail modal w/ client side javascript url rewriting, custom form validation engine and pervasive social integration.</p>',
    imageorder: ['115_1.jpg', '115_2.jpg', '115_3.jpg', '115_4.jpg'],
    display: '1',
    rating: '10',
    projectDate: '11/15/2012',
  },
  {
    id: 'd1fa3649-27fe-48fd-b540-cbc7b4764f4b',
    type: 'online',
    title: 'The Beatrix Girls',
    client: 'Wilshire Axon',
    description:
      "<p>Social radio player developed for Wilshire Axon's The Beatrix Girls website.</p> \r\n<p>The radio player includes original music by The Beatrix Girls along with artists in the same genre.</p>",
    imageorder: ['116_1.jpg', '116_2.jpg', '116_3.jpg'],
    display: '1',
    rating: '10',
    projectDate: '03/13/2013',
  },
  {
    id: 'fae8187d-7f2a-493f-b7b1-701be351e7aa',
    type: 'online',
    title: 'Modalizr',
    client: '',
    description:
      '<p>Modalizr is a plugin developed to create both modal and lightbox. It has configurable options controlling animation, navigation type, overlay appearance and more. It features a template system and can be extended with custom navigation control.</p>',
    imageorder: ['117_1.jpg', '117_2.jpg'],
    display: '1',
    rating: '8',
    projectDate: '03/27/2013',
  },
  {
    id: 'ad47f6c4-e9bc-4155-8610-0a6711d75867',
    type: 'online',
    title: 'IMF Relationship Map',
    client: 'Deluxe Entertainment',
    description:
      'Application as part of the ONEUI suite of services to serve distributors wishing to view inventory asset relationships.',
    imageorder: ['cdw4wyvlir_eszw72j5d1.jpg'],
    display: '1',
    rating: '10',
    projectDate: '03/03/2019',
  },
  {
    id: '36f8a2e7-c4e4-4064-8f5b-5640c15a9fdf',
    type: 'online',
    title: 'Oprah Feature Nav',
    client: 'Oprah',
    description: 'Responsive navigation featuring highlighted content, content sections and tertiary content links.',
    imageorder: ['rhucv0nq57_w25riy67vxm.jpg'],
    display: '1',
    rating: '10',
    projectDate: '03/15/2018',
  },
  {
    id: '9fa764b0-26a0-4598-b272-dd7e76bfde41',
    type: 'online',
    title: 'Oprah Calendar',
    client: 'oprah',
    description: "Calendar module highlighting Oprah's daily show schedule.",
    imageorder: ['xpp7ahjf61_9syax3okkfo.jpg'],
    display: '1',
    rating: '10',
    projectDate: '03/10/2015',
  },
  {
    id: '7f69d081-03bf-43b6-9142-4647b145b397',
    type: 'online',
    title: 'OTT Service',
    client: 'Deluxe Entertainment',
    description:
      'Application as part of the ONEUI suite of services to serve as white label video distribution. The application is a white label "Netflix" allowing distributors to curate and serve video content.',
    imageorder: ['0ncirq5n97d_tbv3qfky4r.jpg'],
    display: '1',
    rating: '10',
    projectDate: '04/13/2019',
  },
  {
    id: '71589315-17ab-4cd3-b7b1-29576ee776e2',
    type: 'online',
    title: 'Oprah Show Modules',
    client: 'oprah',
    description:
      "Built out all modules for Oprah's featured shows. Each section features a variety of modules ranging from a video / image rotator to episode carousels, both dynamic and curated content.",
    imageorder: ['arufq7ailem_3y3tqjm2l73.jpg'],
    display: '1',
    rating: '10',
    projectDate: '09/13/2017',
  },
  {
    id: '1cfb6e11-aae3-41af-b5c8-5337ed093c79',
    type: 'online',
    title: 'Oprah Carousel',
    client: 'oprah',
    description:
      'Carousel developed for featuring Oprah videos and images, featured 3-d perspective and comes in a variety of forms from on demand loading of content, video only, images and flippable slides that reveal additional content details.',
    imageorder: ['b8tl5wue80i_eun3qvtehpa.jpg'],
    display: '1',
    rating: '10',
    projectDate: '05/10/2017',
  },
  {
    id: 'c369268e-7093-4747-ae4e-4963824c4c5e',
    type: 'online',
    title: 'Inventory App',
    client: 'Deluxe Entertainment',
    description:
      'Application as part of the ONEUI suite of services to serve as hub for distributors inventory allowing access to content, edit meta data, view assets and titles.',
    imageorder: ['ccbcyn0f4xe_mzuv2r1z5d.jpg', 'ccbcyn0f4xe_60vxcqjdwr2.jpg', 'ccbcyn0f4xe_azcdua9ohau.jpg'],
    display: '1',
    rating: '10',
    projectDate: '03/07/2019',
  },
]

*/
