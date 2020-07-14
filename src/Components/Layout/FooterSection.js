/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import Logo from '../Items/Logo';
import Media from '../../Style/Media';

export const FooterTopWraper = styled.div`
  display: grid;
  height: 483px;
  padding-bottom: 48px;
  margin-bottom: 75px;
  border-bottom: 1px solid rgba(151, 151, 151, 0.21);
  & ul {
    margin-bottom: 26px;
  }
  ${Media.desktop`
  width:1024px;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 24px;
    `}
    ${Media.tablet`
    max-width:994px;
    height:610px;
    padding: 0 0 48px 0;
    margin: 0 0 45px 0;
    grid-template-columns: repeat(8, 1fr);
    `}
    ${Media.mobile`
    grid-template-columns: 50% 50%;
    grid-column:span 1;
    grid-column-gap:0;
    height:978.2px;
    padding:0;
    margin:0;
    `}
`;
export const FooterLogoSection = styled.div`
  ${Media.desktop`
  grid-column: span 2;
    `}
  ${Media.tablet`
  grid-column: span 2;
    `}
    ${Media.mobile`
  grid-column: span 0;
  height:-50px;
    `}
`;
export const FooterSectionWrap = styled.div`
  ${Media.desktop`
      grid-column: span 3;
    `}
  ${Media.tablet`
      grid-column: span 2;
    `}
    ${Media.mobile`
  grid-column: span 1;
    `}
`;

export const FooterLastSection = styled.div`
  ${Media.desktop`
      grid-column: span 1;
      width: 74px;
    `}
  ${Media.tablet`
  width:103px;
  grid-column-start:3;
    `}
    ${Media.mobile`
  grid-column: span 1;
    `}
`;

export const FooterBottomWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 24px;
  height: 244px;
  margin: 0 0 45px 0;
  padding: 0 0 18px 0;
  border-bottom: 1px solid rgba(151, 151, 151, 0.21);
  ${Media.tablet`
  
  height:205px;
  padding:8px 0 18px 0;
  margin:0 0 35px 0;
  grid-template-columns: repeat(3, 1fr);
    `}
  ${Media.mobile`
  height:275px;
  padding:50px 0 10px 0;
  grid-template-columns: repeat(2, 1fr);
    `}
`;
export const BottomSecionWrap = styled.div`
  grid-column: span 1;
  & h3 {
    margin-top: -26px;
  }
`;

export const FooterLink = styled.div`
  display: flex;
  padding: 15px 0 0 0;
  ${Media.mobile`
    height:auto;
    width:auto;
    `}
`;
export const BottomNewyorkSection = styled.div`
  ${Media.mobile`
  display:none;
    `}
`;
export const BottomLastSection = styled.div`
  ${Media.tablet`
  display:none;
    `}
`;
export default function FooterSection() {
  return (
    <div>
      <FooterTopWraper>
        <FooterLogoSection>
          <Logo />
        </FooterLogoSection>
        <FooterSectionWrap>
          <h2>POSTMATES</h2>
          <ul>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Careers</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Press & Media</a>
            </li>
            <li>
              <a>Developers</a>
            </li>
            <li>
              <a>API Docs</a>
            </li>
            <li>
              <a>Civic Labs</a>
            </li>
            <li>
              <a>Unlimited</a>
            </li>
            <li>
              <a>Gift Cards</a>
            </li>
            <li>
              <a>Pickup</a>
            </li>
            <li>
              <a>Postmates Party</a>
            </li>
            <li>
              <a>Postmates for Work</a>
            </li>
          </ul>
        </FooterSectionWrap>
        <FooterSectionWrap>
          <h2>MERCHANTS</h2>
          <ul>
            <li>
              <a>Sell on Postmates</a>
            </li>
            <li>
              <a>Restaurants</a>
            </li>
          </ul>
          <h2>FLEET</h2>
          <ul>
            <li>
              <a>Join the Fleet</a>
            </li>
          </ul>
          <h2>SUPPORT</h2>
          <ul>
            <li>
              <a>Customer Help</a>
            </li>
            <li>
              <a>Fleet Help</a>
            </li>
            <li>
              <a>Merchant Help</a>
            </li>
          </ul>
        </FooterSectionWrap>
        <FooterSectionWrap>
          <h2>MORE</h2>
          <ul>
            <li>
              <a>Delivery Near Me</a>
            </li>
            <li>
              <a>Takeout Near Me</a>
            </li>
            <li>
              <a>Pizza Near Me</a>
            </li>
            <li>
              <a>Thai Near Me</a>
            </li>
            <li>
              <a>Mexican Near Me</a>
            </li>
            <li>
              <a>Alcohol Delivery</a>
            </li>
            <li>
              <a>FoodFight!</a>
            </li>
          </ul>
        </FooterSectionWrap>
        <FooterLastSection>
          <h2>FOLLOW US</h2>
          <ul>
            <li>
              <a>Twitter</a>
            </li>
            <li>
              <a>Facebook</a>
            </li>
            <li>
              <a>Instagram</a>
            </li>
            <li>
              <a>Snapchat</a>
            </li>
          </ul>
        </FooterLastSection>
      </FooterTopWraper>
      <FooterBottomWrap>
        <BottomSecionWrap>
          <h3>OUR TOP CITIES</h3>
          <ul>
            <li>
              <a>San Francisco</a>
            </li>
            <li>
              <a>Miami</a>
            </li>
            <li>
              <a>San Diego</a>
            </li>
            <li>
              <a>East Bay</a>
            </li>
            <li>
              <a>Long Beach</a>
            </li>
          </ul>
        </BottomSecionWrap>
        <ul>
          <li>
            <a>Los Angeles</a>
          </li>
          <li>
            <a>Washingtion DC</a>
          </li>
          <li>
            <a>Seattle</a>
          </li>
          <li>
            <a>Potland</a>
          </li>
          <li>
            <a>Nashville</a>
          </li>
        </ul>
        <BottomNewyorkSection>
          <ul>
            <li>
              <a>New York City</a>
            </li>
            <li>
              <a>Orange County</a>
            </li>
            <li>
              <a>Atlanta</a>
            </li>
            <li>
              <a>Charlotte</a>
            </li>
            <li>
              <a>Denver</a>
            </li>
          </ul>
        </BottomNewyorkSection>
        <BottomLastSection>
          <ul>
            <li>
              <a>Chicago</a>
            </li>
            <li>
              <a>Phoenix</a>
            </li>
            <li>
              <a>Las Vegas</a>
            </li>
            <li>
              <a>Scaramento</a>
            </li>
            <li>
              <a>Oklahoma City</a>
            </li>
          </ul>
        </BottomLastSection>
      </FooterBottomWrap>
      <h4>
        Postmates is the largest, most reliable on-demand delivery and pickup
        platform.
      </h4>
      <p>
        Able to deliver anything from anywhere, Postmates is the food delivery,
        grocery delivery, whatever-you-can-think-of delivery app to bring what
        you crave right to your door.
        <span>Read More</span>
      </p>
      <FooterLink>
        <span>©2020 POSTMATES INC</span>
        <span>TERMS</span>
        <span>PRIVACY</span>
      </FooterLink>
    </div>
  );
}
