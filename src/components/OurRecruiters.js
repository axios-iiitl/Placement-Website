import React, { useState } from "react";
import { Collapse, Button } from 'reactstrap';
import { BsCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import directiLogo from "../assets/company_logos/directi.png";
import dotnetLogo from "../assets/company_logos/dotnet.png";
import intelLogo from "../assets/company_logos/Intel-Logo-2005.png";
import nutanixLogo from "../assets/company_logos/Nutanix-Logo.wine.png";
import postmanLogo from "../assets/company_logos/postman.png";
import buyhatkeLogo from "../assets/company_logos/buyhatke.png";
import accoliteLogo from "../assets/company_logos/accolite.png";
import ackoLogo from "../assets/company_logos/acko.png";
import expediaLogo from "../assets/company_logos/expedia.png";
import linkedinLogo from "../assets/company_logos/linkedin.png";
import paytmLogo from "../assets/company_logos/paytm.png";
import quantiphiLogo from "../assets/company_logos/quantiphi.png";
import ONEmgLogo from "../assets/company_logos/1mg.png";
import codenationLogo from "../assets/company_logos/codenation.png";
import collegeduniaLogo from "../assets/company_logos/collegedunia.png";
import goldmansachsLogo from "../assets/company_logos/goldmansachs.png";
import hashedInLogo from "../assets/company_logos/hashedin.jpeg";
import infoobjectsLogo from "../assets/company_logos/infoobjects.jpg";
import jdaLogo from "../assets/company_logos/jda.png";
import joshtechnologyLogo from "../assets/company_logos/joshtechnology.png";
import maqsoftwareLogo from "../assets/company_logos/maqsoftware.png";
import mavenhiveLogo from "../assets/company_logos/mavenhive.png";
import nagarroLogo from "../assets/company_logos/nagarro.png";
import nineleapsLogo from "../assets/company_logos/nineleaps.jpg";
import sokratiLogo from "../assets/company_logos/sokarti.png";
import tcsLogo from "../assets/company_logos/tcs.jpg";
import travelokaLogo from "../assets/company_logos/traveloka.png";
import valuefyLogo from "../assets/company_logos/valuefy.jpg";
import vassarlabsLogo from "../assets/company_logos/vassarlabs.jpeg";
import vehanttechnologiesLogo from "../assets/company_logos/vehanttechnologies.png";
import wickedrideLogo from "../assets/company_logos/wickedride.png";
import zenefitsLogo from "../assets/company_logos/zenefits.jpeg";
import kleanLogo from "../assets/company_logos/klean.png";
import googleLogo from "../assets/company_logos/googlei.png";
import polestarLogo from "../assets/company_logos/polestar.jpeg";
import wiproLogo from "../assets/company_logos/wipro.jpeg";
import Microsoft from "../assets/company_logos/Microsoft.png";
import ShipsyLogo from "../assets/company_logos/shipsy.png";
import flipkartLogo from "../assets/company_logos/flipkart.jpeg";
import mindtickleLogo from "../assets/company_logos/mindtickle.png";
import sabreLogo from "../assets/company_logos/sabre.png";
import xebiaLogo from "../assets/company_logos/xebia.png";
import bizongoLogo from "../assets/company_logos/bizongo.jpeg";
import infoedgeLogo from "../assets/company_logos/infoedge.jpeg";
import infotechhubLogo from "../assets/company_logos/infotechhub.png";
import nucleusLogo from "../assets/company_logos/nucleus.png";
import nykaaLogo from "../assets/company_logos/nykaa.jpeg";
import samsungLogo from "../assets/company_logos/samsung.png";
import americanExpressLogo from "../assets/company_logos/americanexpress.png";
import juspayLogo from "../assets/company_logos/juspay.png";
import whitepandaLogo from "../assets/company_logos/whitepanda.png";
import virtusaLogo from "../assets/company_logos/virtusa.png";
import goibiboLogo from "../assets/company_logos/goibibo.png";
import amazonLogo from "../assets/company_logos/amazon.png";
import tekionLogo from "../assets/company_logos/tekion.png";
import gradeupLogo from "../assets/company_logos/gradeup-logo.png";
import ucLogo from "../assets/company_logos/uc.jpg";
import jioLogo from "../assets/company_logos/jio.jpg";
import pubLogo from "../assets/company_logos/pub.png";
import onineLogo from "../assets/company_logos/onine.jpg";
import nferenceLogo from "../assets/company_logos/nference.svg";
import abbLogo from "../assets/company_logos/abb.png";
import clarivateLogo from "../assets/company_logos/clarivate.png";
import delhiveryLogo from "../assets/company_logos/delhivery.png";
import cardekhoLogo from "../assets/company_logos/cardekho.jpeg";
import gameskraftLogo from "../assets/company_logos/gameskraft.jpg";
import maqLogo from "../assets/company_logos/maqsoftware.png";
import practoLogo from "../assets/company_logos/practo.png";
import deloitteLogo from "../assets/company_logos/dlite.png";
import tripockLogo from "../assets/company_logos/tripock.png";
import niLogo from "../assets/company_logos/ni.png";
import capdgeminiLogo from "../assets/company_logos/capgemini.webp";
import zomatologo from "../assets/company_logos/zomato.png";
import gaugelogo from "../assets/company_logos/gauge.png";
import symphonylogo from "../assets/company_logos/symphony.jpg";


const PastRecruiters = props => {
  const [isOpenFirst] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="pr-outer-container">
      <h1 className="pr-main-heading">Our Recruiters</h1>
      <Collapse isOpen={isOpenFirst}>
        <div className="pr-inner-wrapper">
          <div className="pr-inner-box">
            <div className="pr-inner-row">
              <img src={amazonLogo} alt="Amazon" />
              <img src={flipkartLogo} alt="Flipkart" />
              <img src={ackoLogo} alt="Acko" />
              <img src={zomatologo} alt="Xebia" />
              <img src={intelLogo} alt="Goldman Sachs" />

            </div>

            <div className="pr-inner-row">
              <img src={dotnetLogo} alt="Vassar Labs" />
              <img src={nutanixLogo} alt="Vassar Labs" />
              <img src={sabreLogo} alt="Sabre" />
              <img src={postmanLogo} alt="Xebia" />
              <img src={buyhatkeLogo} alt="Goldman Sachs" />
            </div>

            <div className="pr-inner-row">
              <img src={infoedgeLogo} alt="Infoedge" />
              <img src={tekionLogo} alt="Nineleaps" />
              <img src={gradeupLogo} alt="Nucleus" />
              <img src={nykaaLogo} alt="Nykaa" />
              <img src={ucLogo} alt="Samsung" />
            </div>

            <div className="pr-inner-row">
              <img src={jioLogo} alt="Infotech Hub" />
              <img src={paytmLogo} alt="Paytm" />
              <img src={pubLogo} alt="MavenHive" />
              <img src={onineLogo} alt="Virtusa" />
              <img src={nagarroLogo} alt="nagarro" />
            </div>

            <div className="pr-inner-row">
              <img src={nferenceLogo} alt="Bizongo" />
              <img src={abbLogo} alt="Expedia" />
              <img src={clarivateLogo} alt="Info Objects" />
              <img src={delhiveryLogo} alt="Accolite" />
              <img src={cardekhoLogo} alt="Zenefits" />
            </div>

            <div className="pr-inner-row">
              <img src={gameskraftLogo} alt="Quantiphi" />
              <img src={codenationLogo} alt="Codenation" />
              <img src={maqLogo} alt="White Panda" />
              <img src={practoLogo} alt="nagarro" />
              <img src={deloitteLogo} alt="1mg" />
            </div>

            <div className="pr-inner-row">
              <img src={tripockLogo} alt="shipsy" />
              <img src={niLogo} alt="shipsy" />
              <img src={capdgeminiLogo} alt="shipsy" />
              <img src={gaugelogo} alt="shipsy" />
              <img src={symphonylogo} alt="shipsy" />

            </div>
          </div>
        </div>

      </Collapse>

      <Button className="pr-past-heading" color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>
        Past Recruiters &nbsp; {isOpen ? < BsFillCaretUpFill /> : <BsCaretDownFill />}
      </Button>
      <Collapse isOpen={isOpen}>
        <div className="pr-inner-wrapper">
          <div className="pr-inner-box">
            <div className="pr-inner-row">
              <img src={directiLogo} alt="Directi" />
              <img src={amazonLogo} alt="Amazon" />
              <img src={googleLogo} alt="Google" />
              <img src={Microsoft} alt="Microsoft" />
              <img src={linkedinLogo} alt="LinkedIn" />
            </div>

            <div className="pr-inner-row">
              <img src={flipkartLogo} alt="Flipkart" />
              <img src={vassarlabsLogo} alt="Vassar Labs" />
              <img src={sabreLogo} alt="Sabre" />
              <img src={xebiaLogo} alt="Xebia" />
              <img src={goldmansachsLogo} alt="Goldman Sachs" />
            </div>

            <div className="pr-inner-row">
              <img src={infoedgeLogo} alt="Infoedge" />
              <img src={nineleapsLogo} alt="Nineleaps" />
              <img src={nucleusLogo} alt="Nucleus" />
              <img src={nykaaLogo} alt="Nykaa" />
              <img src={samsungLogo} alt="Samsung" />
            </div>

            <div className="pr-inner-row">
              <img src={infotechhubLogo} alt="Infotech Hub" />
              <img src={juspayLogo} alt="Juspay" />
              <img src={mavenhiveLogo} alt="MavenHive" />
              <img src={virtusaLogo} alt="Virtusa" />
              <img src={goibiboLogo} alt="Go Ibibo" />
            </div>

            <div className="pr-inner-row">
              <img src={bizongoLogo} alt="Bizongo" />
              <img src={expediaLogo} alt="Expedia" />
              <img src={infoobjectsLogo} alt="Info Objects" />
              <img src={accoliteLogo} alt="Accolite" />
              <img src={zenefitsLogo} alt="Zenefits" />
            </div>

            <div className="pr-inner-row">
              <img src={quantiphiLogo} alt="Quantiphi" />
              <img src={ackoLogo} alt="Acko" />
              <img src={whitepandaLogo} alt="White Panda" />
              <img src={nagarroLogo} alt="nagarro" />
              <img src={ONEmgLogo} alt="1mg" />
            </div>

            <div className="pr-inner-row">
              <img src={ShipsyLogo} alt="shipsy" />
              <img src={jdaLogo} alt="jda" />
              <img src={maqsoftwareLogo} alt="MAQ Software" />
              <img src={mindtickleLogo} alt="Mind Tickle" />
              <img src={joshtechnologyLogo} alt="Josh Technology Group" />
            </div>

            <div className="pr-inner-row">
              <img src={paytmLogo} alt="Paytm" />
              <img src={hashedInLogo} alt="Hashedin" />
              <img src={americanExpressLogo} alt="American Express" />
              <img src={collegeduniaLogo} alt="College Dunia" />
              <img src={valuefyLogo} alt="Valuefy" />
            </div>

            <div className="pr-inner-row">
              <img src={travelokaLogo} alt="traveloka" />
              <img src={codenationLogo} alt="Codenation" />
              <img src={sokratiLogo} alt="Sokrati" />
              <img src={tcsLogo} alt="TATA Consultancy Services" />
              <img src={vehanttechnologiesLogo} alt="Vehant Technologies" />
            </div>

            <div className="pr-inner-row">
              <img src={wiproLogo} alt="Wipro" />
              <img src={wickedrideLogo} alt="Wicked Ride" />
              <img src={polestarLogo} alt="Pole Star" />
              <img src={kleanLogo} alt="Klean Homez" />
            </div>
          </div>
        </div>

      </Collapse>
    </div>

  );
};

export default PastRecruiters;
