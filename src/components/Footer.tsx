import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { Heading } from './Heading';
import { routesEnum } from '../Routes';
import { Link } from './Link';
import EthDiamond from '../static/bidaow.svg';
import { Button } from './Button';

const Rhino = styled.span`
  font-size: 20px;
`;

const RainbowBackground = styled.div`
  min-width: 100%;
  overflow: hidden;
  background-image: ${p =>
    `radial-gradient(circle at 100% -80%, ${p.theme.rainbowLight})`};
`;

const FooterStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 4rem;
  @media screen and (max-width: 1080px) {
    flex-direction: column;
  }
  @media screen and (max-width: 960px) {
    .cta-button {
      display: none;
    }
  }

  @media screen and (max-width: 518px) {
    .extra-links {
      margin-top: 1rem;
    }
  }
`;

export const Footer = () => {
  const { pathname } = useLocation();
  const despotWorkflowRoutes = [
    routesEnum.acknowledgementPage,
    routesEnum.selectClient,
    routesEnum.generateKeysPage,
    routesEnum.uploadValidatorPage,
    routesEnum.connectWalletPage,
    routesEnum.summaryPage,
    routesEnum.transactionsPage,
    routesEnum.congratulationsPage,
    routesEnum.topUpPage,
  ];

  return (
    <footer className="footer">
      <div className="footer-body container">
        <div className="row footer-logo-row">
          <div className="col-md-12">
            <a className="footer-brand" href="/">
              <img
                className="navbar-logo"
                src={EthDiamond}
                alt="Ascend Devnet"
                style={{ marginRight: "10px", maxHeight: "40px" }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "24px", fontWeight: 700, letterSpacing: "1px", margin: 0, padding: 0, lineHeight: 1 }}>
                  Bidao®
                </span>
                <span style={{ fontSize: "18px", lineHeight: 1.1 }}>Ascend Devnet</span>
              </div>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-lg-3">
            <p className="footer-info-text">
              Experience the ultimate DeFi and NFT hub: Decentralized and limitless. BiSC is an EVM compatible blockchain ecosystem.
            </p>
          </div>
          <div className="col-xs-12 col-md-4 col-lg-3 footer-list">
            <h3>Bidao Smart Chain</h3>
            <ul>
              <li>
                <a href="https://bidaochain.com/" rel="noreferrer" className="footer-link" target="_blank">
                  Learn more
                </a>
              </li>
              <li>
                <a href="https://bidaochain.com/#roadmap" rel="noreferrer" className="footer-link" target="_blank">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-md-4 col-lg-3 footer-list">
            <h3>Community</h3>
            <ul>
              <li>
                <a href="https://t.me/bidaoofficial" rel="noreferrer" className="footer-link" target="_blank">
                  Telegram
                </a>
              </li>
              <li>
                <a href="https://twitter.com/Bidaochain" rel="noreferrer" className="footer-link" target="_blank">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@BidaoChain" rel="noreferrer" className="footer-link" target="_blank">
                  Youtube
                </a>
              </li>
              <li>
                <a href="https://bidao-blockchain.medium.com/" rel="noreferrer" className="footer-link" target="_blank">
                  Medium
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <style>
    {`
     /*! CSS Used from: https://ascend.bidaochain.com/css/app-9be971ba5578a934f4c6c41a6be125ac.css?vsn=d */
@media (min-width:1200px){
.container{max-width:1300px!important;}
}
*,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box;}
footer{display:block;}
h3{margin-bottom:.5rem;margin-top:0;}
p{margin-bottom:1rem;margin-top:0;}
ul{margin-bottom:1rem;}
ul{margin-top:0;}
a{background-color:transparent;color:#007bff;}
a:hover{color:#0056b3;text-decoration:underline;}
img{border-style:none;}
img{vertical-align:middle;}
input{font-family:inherit;font-size:inherit;line-height:inherit;margin:0;}
input{overflow:visible;}
.container{margin-left:auto;margin-right:auto;padding-left:15px;padding-right:15px;width:100%;}
@media (min-width:576px){
.container{max-width:540px;}
}
@media (min-width:768px){
.container{max-width:720px;}
}
@media (min-width:992px){
.container{max-width:960px;}
}
@media (min-width:1200px){
.container{max-width:1140px;}
}
.row{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-left:-15px;margin-right:-15px;}
.col-lg-3,.col-md-12,.col-md-4{padding-left:15px;padding-right:15px;position:relative;width:100%;}
@media (min-width:768px){
.col-md-4{-webkit-box-flex:0;-ms-flex:0 0 33.33333333%;flex:0 0 33.33333333%;max-width:33.33333333%;}
.col-md-12{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%;}
}
@media (min-width:992px){
.col-lg-3{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%;}
}
.d-none{display:none!important;}
h3{font-size:14px;font-weight:600;line-height:36px;}
p{font-size:13px;}
@media screen and (max-width:768px){
p{font-size:14px;}
}
a{color:#4e6fae;text-decoration:none;}
a:focus,a:hover{color:#2e4268;text-decoration:underline;}
.footer{background:#111a2e;color:#8a8dba;font-size:12px;line-height:1.67;margin:0;padding:40px 0;position:relative;}
@media (max-width:768px){
.footer{width:100%;}
}
.footer-logo-row{margin-bottom:30px;}
.footer-info-text{margin:0 0 25px;padding:0 20px 0 0;}
.footer-social-icons{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;margin:0 0 25px;}
.footer-social-icon{color:#8a8dba;font-size:22px;margin-right:15px;text-decoration:none;-webkit-transition:all .4s ease-in-out;-o-transition:all .4s ease-in-out;transition:all .4s ease-in-out;}
.footer-social-icon:hover{color:#fff;}
.footer-social-icon:focus{color:#ae92e2;}
.footer-social-icon:last-child{margin-right:0;}
.footer-link{color:#8a8dba;}
.footer-link:hover{color:#8a8dba;text-decoration:underline;}
.footer-list{padding-top:0;}
.footer-list h3{color:#fff;font-size:14px;font-weight:300;line-height:1.4;margin:0 0 15px;}
.footer-list ul{list-style-type:none;margin:0 0 25px;padding:0;}
.footer-list ul li{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;line-height:2.5;padding:0;}
.footer-list ul li a{-webkit-transition:all .4s ease-in-out;-o-transition:all .4s ease-in-out;transition:all .4s ease-in-out;}
.footer-list ul li a:hover{color:#fff;text-decoration:none;}
.footer-list ul li a:focus{color:#ae92e2;}
.footer-list ul li:before{background-color:#1596d5;border-radius:50%;content:"";display:block;height:6px;margin:0 10px 0 0;width:6px;}
.footer-brand{text-decoration:none!important;}
.navbar-logo{max-height:22px;width:100%;}
.btn-add-chain-to-mm{background-image:url(https://ascend.bidaochain.com/fonts/metamask-fox-c879a582a94e772b8ed27295ae83145d.svg?vsn=d);background-position:50%;background-repeat:no-repeat;}
.btn-add-chain-to-mm{background-position-x:30px;background-position-y:center;background-size:20px 20px;outline:none;padding-left:40px;}
.btn-add-chain-to-mm.in-footer{background-position-x:0;padding-left:25px;}
.fontawesome-icon{background-color:#8a8dba;}
.fontawesome-icon.github{height:22px;-webkit-mask:url(https://ascend.bidaochain.com/fonts/github-085f3d7cc061791dbc3091dd891324d0.svg?vsn=d) no-repeat center;mask:url(https://ascend.bidaochain.com/fonts/github-085f3d7cc061791dbc3091dd891324d0.svg?vsn=d) no-repeat center;mask-size:22px!important;-webkit-mask-size:22px!important;width:22px;}
.fontawesome-icon.twitter{height:22px;-webkit-mask:url(https://ascend.bidaochain.com/fonts/twitter-77c54a1c1b6059dd7d457930bc8d1671.svg?vsn=d) no-repeat center;mask:url(https://ascend.bidaochain.com/fonts/twitter-77c54a1c1b6059dd7d457930bc8d1671.svg?vsn=d) no-repeat center;mask-size:22px!important;-webkit-mask-size:22px!important;width:22px;}
.fontawesome-icon.telegram{height:22px;-webkit-mask:url(https://ascend.bidaochain.com/fonts/telegram-b3bc7d8aac69fc737afcd163f23c5dd3.svg?vsn=d) no-repeat center;mask:url(https://ascend.bidaochain.com/fonts/telegram-b3bc7d8aac69fc737afcd163f23c5dd3.svg?vsn=d) no-repeat center;mask-size:22px!important;-webkit-mask-size:22px!important;width:22px;}
.dark-theme-applied .footer{background:#111a2e;color:#8a8dba;}
.dark-theme-applied .footer-link,.dark-theme-applied .footer-social-icon{color:#8a8dba;}
.dark-theme-applied .footer-link:hover,.dark-theme-applied .footer-social-icon:hover{color:#fff;}
.dark-theme-applied .footer-list ul li:before{background-color:#1596d5;}
.dark-theme-applied a{color:#1596d5;}
.footer-brand{-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#fff!important;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:1.25rem;line-height:inherit;margin-right:1rem;padding-bottom:.3125rem;padding-top:.3125rem;white-space:nowrap;width:170px;}
.dark-theme-applied .footer-list ul li:before{background-color:#1596d5;}
.dark-theme-applied .footer-social-icon-container{background-color:#fff!important;}
/*! CSS Used from: https://ascend.bidaochain.com/css/non-critical-361fee99855ca045610f0f1079622d56.css?vsn=d */
@media (min-width:1200px){
.container{max-width:1300px!important;}
}
/*! CSS Used from: https://ascend.bidaochain.com/css/non-critical-361fee99855ca045610f0f1079622d56.css?vsn=d */
@media (min-width:1200px){
.container{max-width:1300px!important;}
}
`}
    </style>
    </footer>
  );
};
