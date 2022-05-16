import React, { useMemo } from 'react'
import styled, { keyframes } from 'styled-components'
import { useQuery } from 'react-query'
import { fetchPortfolioItem, PortfolioItem } from '../api'

import Text, { TextColor, TextComponent } from '../../common/Text'
import Loader from '../../common/Loader'
import ErrorMsg from '../../common/ErrorMsg'

type Props = {
  selectedItemId: string
  setSelectedItemId: React.Dispatch<React.SetStateAction<string | undefined>>
  items: PortfolioItem[]
}

export default function PortfolioModal({ selectedItemId, setSelectedItemId, items }: Props) {
  const { isLoading, error, data } = useQuery(['selectedItem', selectedItemId], () =>
    fetchPortfolioItem({ id: selectedItemId })
  )

  const item = useMemo(() => {
    return data?.Item || undefined
  }, [data])

  const { prevId, nextId } = useMemo(() => {
    const itemIdx = items.findIndex((item) => item.id === selectedItemId)
    return {
      nextId: items[itemIdx < items.length ? itemIdx + 1 : 0].id,
      prevId: items[itemIdx > 0 ? itemIdx - 1 : items.length].id,
    }
  }, [selectedItemId, items])

  console.log(data)

  return error ? (
    <ErrorMsg error={error} />
  ) : (
    <Loader isLoading={isLoading}>
      <>
        {item && (
          <PortfolioDetailContainer>
            <PortfolioItemDetails>
              <DetailNav>
                <Text component={TextComponent.H5} color={TextColor.NEUTRAL} id="type">
                  {item.type.toUpperCase()}
                </Text>
                <div>
                  <button id="prevBtn" onClick={() => setSelectedItemId(prevId)}></button>
                  <button id="nextBtn" onClick={() => setSelectedItemId(nextId)}></button>
                </div>
              </DetailNav>
              <Text component={TextComponent.H5} color={TextColor.NEUTRAL}>
                {item.title}
              </Text>
              <DetailDescription dangerouslySetInnerHTML={{ __html: item.description }} />
            </PortfolioItemDetails>
            <PortfolioDetailImageWrapper>
              <ul className={`slideNum${item.imageorder.length}`}>
                {item.imageorder.map((image) => (
                  <li key={image}>
                    <img src={`/images/${image}`} alt={item.title} />
                  </li>
                ))}
              </ul>
            </PortfolioDetailImageWrapper>
          </PortfolioDetailContainer>
        )}
      </>
    </Loader>
  )
}

const PortfolioDetailContainer = styled.section`
  height: 360px;
  width: 100%;
  max-width: 866px;
  position: relative;
  top: 50%;
  margin: -180px auto 0;

  @media only screen and (max-width: 920px) {
    margin: 0;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    height: 100%;
    max-height: 360px;
  }

  @media only screen and (max-width: 767px) {
    margin: 0;
    top: 0;
    transform: translateY(0);
    left: 0;
    height: 100%;
    max-height: 100%;
  }

  @media only screen and (max-width: 567px) {
    height: 100%;
  }

  @media only screen and (max-width: 414px) {
    width: 100%;
    top: 0;
    margin: 0;
    max-height: 340px;
    transform: translateY(0);
  }
`

const PortfolioItemDetails = styled.div`
  width: 340px;
  float: left;
  height: 100%;
  padding: 20px;
  background-color: #fff;

  h5 {
    padding-top: 5px;
    width: 1000px;
    font-size: 26px;
  }

  @media only screen and (max-width: 920px) {
    padding: 10px;
    width: 50%;
  }

  @media only screen and (max-width: 567px) {
    width: 100%;
    float: none;
  }
`

const DetailDescription = styled.div`
  overflow: hidden;
  margin-bottom: 10px;
  p {
    font-size: 13px;
    line-height: 18px;
    padding-top: 3px;
  }
`

const DetailNav = styled.div`
  overflow: auto;
  width: auto;
  background-color: #000;
  padding: 10px;

  #closeBtn {
    float: left;
    display: block;
    background: url('../../../../assets/img/site/close_x.gif') no-repeat;
    width: 30px;
    height: 23px;
    border-right: 1px solid #666666;
  }

  #closeBtn:hover {
    border-right: 1px solid white;
  }

  #type {
    float: left;
    padding-left: 10px;
    padding-top: 2px;
  }

  div {
    display: block;
    float: right;
    overflow: auto;
    width: auto;
  }

  button {
    display: block;
    float: left;
    width: 23px;
    height: 23px;
  }

  #prevBtn {
    background: url('../../../../assets/img/site/arrow_left.gif') center center no-repeat;
    border-right: 1px solid #666666;
    margin-right: 10px;
    cursor: pointer;
  }

  #prevBtn:hover {
    border-right: 1px solid white;
  }

  #nextBtn {
    background: url('../../../../assets/img/site/arrow_right.gif') center center no-repeat;
    border-left: 1px solid #666666;
  }

  #nextBtn:hover {
    border-left: 1px solid white;
  }
`

const imageAnimation2 = keyframes`
0% { opacity: 0;
  animation-timing-function: ease-in; }
  20% { opacity: 1;
       animation-timing-function: ease-out; }
  45% { opacity: 1 }
  65% { opacity: 0 }
  100% { opacity: 0 }
`

const imageAnimation3 = keyframes`
0% { opacity: 0;
  animation-timing-function: ease-in; }
  13% { opacity: 1;
       animation-timing-function: ease-out; }
  30% { opacity: 1 }
  43% { opacity: 0 }
  100% { opacity: 0 }
`

const imageAnimation4 = keyframes`
0% { opacity: 0;
  animation-timing-function: ease-in; }
  10% { opacity: 1;
       animation-timing-function: ease-out; }
  20% { opacity: 1 }
  30% { opacity: 0 }
  100% { opacity: 0 }
`

const imageAnimation5 = keyframes`
0% { opacity: 0;
  animation-timing-function: ease-in; }
  8% { opacity: 1;
       animation-timing-function: ease-out; }
  17% { opacity: 1 }
  25% { opacity: 0 }
  100% { opacity: 0 }
`

const PortfolioDetailImageWrapper = styled.div`
  margin-left: 360px;
  overflow: hidden;
  height: 100%;

  ul {
    overflow: hidden;
    display: block;
    position: relative;
    height: 100%;
    background-color: #fff;
  }

  li {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;

    color: transparent;
    opacity: 0;
    z-index: 0;
    -webkit-backface-visibility: hidden;
  }

  li img {
    width: 100%;
  }

  ul.slideNum1 li {
    opacity: 1;
    z-index: 1;
  }

  ul.slideNum2 li {
    animation: ${imageAnimation2} 12s linear infinite 0s;
  }

  ul.slideNum3 li {
    animation: ${imageAnimation3} 18s linear infinite 0s;
  }

  ul.slideNum4 li {
    animation: ${imageAnimation4} 24s linear infinite 0s;
  }

  ul.slideNum5 li {
    animation: ${imageAnimation5} 30s linear infinite 0s;
  }

  li:nth-child(2) {
    animation-delay: 6s !important;
  }
  li:nth-child(3) {
    animation-delay: 12s !important;
  }
  li:nth-child(4) {
    animation-delay: 18s !important;
  }
  li:nth-child(5) {
    animation-delay: 24s !important;
  }

  @media only screen and (max-width: 920px) {
    overflow: hidden;
    padding: 0;
    margin: 0;
    li {
      padding: 10px;
    }
    img {
      margin-top: 50%;
      transform: translateY(-50%);
    }
  }

  @media only screen and (max-width: 767px) {
    padding: 10px;
  }

  @media only screen and (max-width: 567px) {
    overflow: hidden;
    height: 227px;
    padding: 0px;
    margin: 0;
    li {
      padding: 0 10px 10px 10px;
    }
    li img {
      margin: 0;
      transform: translateY(0);
    }
  }

  @media only screen and (max-width: 414px) {
    height: 200%;
  }
`
