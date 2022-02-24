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
import gameskraftLogo from "../assets/company_logos/gameskraft.png";
import practoLogo from "../assets/company_logos/practo.png";
import deloitteLogo from "../assets/company_logos/dlite.png";
import tripockLogo from "../assets/company_logos/tripock.png";
import niLogo from "../assets/company_logos/ni.png";
import capdgeminiLogo from "../assets/company_logos/capgemini.webp";
import zomatologo from "../assets/company_logos/zomato.png";
import gaugelogo from "../assets/company_logos/gauge.png";
import symphonylogo from "../assets/company_logos/symphony.jpg";
import ecorp from "../assets/company_logos/314ecorp.jpeg";
import amd from "../assets/company_logos/amd.jpg"
import bigbasket from "../assets/company_logos/bigbasket.jpg"
import byjus from "../assets/company_logos/byjus.png"
import cognitio from "../assets/company_logos/cognitio.png"
import cognizant from "../assets/company_logos/cognizant.png"
import cogoport from "../assets/company_logos/cogoport.jpg"
import accenture from "../assets/company_logos/accenture.png" 
import albatronix from "../assets/company_logos/albatronix.png"
import cred from "../assets/company_logos/cred.png"
import darwinbox from "../assets/company_logos/darwinbox.jpg"
import dolcera from "../assets/company_logos/dolcera.png"
import fis from "../assets/company_logos/FIS.png"
import ganit from "../assets/company_logos/ganit.png"
import gupshup from "../assets/company_logos/gupshup.png"
import increff from "../assets/company_logos/increff.png"
import indiamart from "../assets/company_logos/indiamart.png"
import infosys from "../assets/company_logos/infosys.png"
import inframarket from "../assets/company_logos/inframarket.jpg"
import innominds from "../assets/company_logos/innominds.png"
import ixigo from "../assets/company_logos/ixigo.png"
import larsentoubro from "../assets/company_logos/larsentoubro.png"
import mathworks from "../assets/company_logos/mathworks.png"
import neosoft from "../assets/company_logos/neosoft.png"
import nvidia from "../assets/company_logos/nvidia.png"
import netmeds from "../assets/company_logos/netmeds.png"
import paynearby from "../assets/company_logos/paynearby.png"
import pristyn from "../assets/company_logos/pristyn.png"
import parkplus from "../assets/company_logos/parkplus.jpg"
import samsungsds from "../assets/company_logos/SamsungSDS.png"
import sawolabds from "../assets/company_logos/sawo.png"
import servicenow from "../assets/company_logos/ServiceNow.png"
import sourcewiz from "../assets/company_logos/sourcewiz.png"
import techcurator from "../assets/company_logos/techcurator.jpg"
import techolution from "../assets/company_logos/techolution.png"
import tejas from "../assets/company_logos/tejas.jpg"
import trifacta from "../assets/company_logos/trifacta.png"
import undostres from "../assets/company_logos/undostres.jpg"
import walmartglobaltech from "../assets/company_logos/walmartglobaltech.jpeg"
import mthree from "../assets/company_logos/mthree.webp"
import zsassociates from "../assets/company_logos/zsassociates.png"
import zycus from "../assets/company_logos/zycus.png"
import thrillophilia from "../assets/company_logos/thrillophilia.png"
import sportsapp from "../assets/company_logos/sportsapp.png"

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
              <img src={ecorp} alt="314ecorp" />
              <img src={ackoLogo} alt="Acko" />
              <img src={intelLogo} alt="Intel" />
            </div>

            <div className="pr-inner-row">
              <img src={americanExpressLogo} alt="American Express" />
              <img src={amd} alt="AMD" />
              <img src={bigbasket} alt="BigBasket" />
              <img src={byjus} alt="Byjus" />
              <img src={capdgeminiLogo} alt="Capgemini" />
            </div>

            <div className="pr-inner-row">
              <img src={codenationLogo} alt="Codenation" />
              <img src={cognitio} alt="cognitio" />
              <img src={cognizant} alt="Cognizant" />
              <img src={cogoport} alt="Cogoport" />
              <img src={accenture} alt="Accenture" />
            </div>

            <div className="pr-inner-row">
              <img src={albatronix} alt="Albatronix" />
              <img src={cred} alt="Cred" />
              <img src={darwinbox} alt="DarwinBox" />
              <img src={deloitteLogo} alt="Deloitte" />
              <img src={dolcera} alt="Dolcera" />
            </div>

            <div className="pr-inner-row">
              <img src={fis} alt="FIS" />
              <img src={gameskraftLogo} alt="Gameskraft" />
              <img src={ganit} alt="Ganit" />
              <img src={gupshup} alt="Gupshup" />
              <img src={increff} alt="Increff" />
            </div>

            <div className="pr-inner-row">
              <img src={indiamart} alt="Indiamart" />
              <img src={infoedgeLogo} alt="Infoedge" />
              <img src={infosys} alt="Infosys" />
              <img src={inframarket} alt="Inframrket" />
              <img src={innominds} alt="Innominds" />
            </div>

            <div className="pr-inner-row">
              <img src={ixigo} alt="Ixigo" />
              <img src={jioLogo} alt="Jio" />
              <img src={joshtechnologyLogo} alt="Josh Technology Group" />
              <img src={larsentoubro} alt="Larsen Tourbo" />
              <img src={maqsoftwareLogo} alt="MAQ Software" />
            </div>

            <div className="pr-inner-row">
              <img src={mathworks} alt="Mathworks" />
              <img src={dotnetLogo} alt="Dotnet" />
              <img src={mindtickleLogo} alt="Mind Tickle" />
              <img src={nagarroLogo} alt="nagarro" />
              <img src={niLogo} alt="National Instruments" />
            </div>

            <div className="pr-inner-row">
              <img src={neosoft} alt="Neosoft" />
              <img src={netmeds} alt="Netmeds" />
              <img src={nferenceLogo} alt="Nference" />
              <img src={sportsapp} alt="sportsapp" />
              <img src={nucleusLogo} alt="Nucleus" />
            </div>

            <div className="pr-inner-row">
              <img src={nutanixLogo} alt="Nutanix" />
              <img src={nvidia} alt="nvidia" />
              <img src={onineLogo} alt="o9 solutions" />
              <img src={parkplus} alt="parkplus" />
              <img src={paynearby} alt="Paynearby" />
            </div>

            <div className="pr-inner-row">
              <img src={paytmLogo} alt="Paytm" />
              <img src={postmanLogo} alt="Postman" />
              <img src={practoLogo} alt="Practo" />
              <img src={pristyn} alt="pristyn" />
              <img src={pubLogo} alt="Publicis Sapients" />
            </div>

            <div className="pr-inner-row">
              <img src={sabreLogo} alt="Sabre" />
              <img src={samsungLogo} alt="Samsung" />
              <img src={samsungsds} alt="Samsung sds" />
              <img src={sawolabds} alt="Sawo Labs" />
              <img src={servicenow} alt="Service Now" />
            </div>

            <div className="pr-inner-row">
              <img src={ShipsyLogo} alt="shipsy" />
              <img src={sourcewiz} alt="SourceWiz" />
              <img src={tcsLogo} alt="TATA Consultancy Services" />
              <img src={techcurator} alt="Tech Curator" />
              <img src={techolution} alt="Techolution" />
            </div>

            <div className="pr-inner-row">
              <img src={tejas} alt="tejas" />
              <img src={tekionLogo} alt="Tekion Corp" />
              <img src={thrillophilia} alt="thrillophilia" />
              <img src={trifacta} alt="Trifacta" />
              <img src={undostres} alt="Undostres" />
            </div>

            <div className="pr-inner-row">
              <img src={vassarlabsLogo} alt="Vassar Labs" />
              <img src={walmartglobaltech} alt="Walmart Global Tech" />
              <img src={mthree} alt="Wiley Mthree" />
              <img src={zsassociates} alt="ZS Associates" />
              <img src={zycus} alt="Zycus" />
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
              <img src={zomatologo} alt="Zomato" />
            </div>

            <div className="pr-inner-row">
              <img src={intelLogo} alt="Intel" />
              <img src={dotnetLogo} alt="Dotnet" />
              <img src={nutanixLogo} alt="Nutanix" />
              <img src={postmanLogo} alt="Postman" />
              <img src={buyhatkeLogo} alt="Buy Hatke" />
            </div>

            <div className="pr-inner-row">
              <img src={tekionLogo} alt="Tekion" />
              <img src={gradeupLogo} alt="Gradeup" />
              <img src={ucLogo} alt="Urban Company" />
              <img src={jioLogo} alt="Jio" />
              <img src={pubLogo} alt="Publicis Sapients" />
            </div>

            <div className="pr-inner-row">
              <img src={onineLogo} alt="o9 solutions" />
              <img src={nferenceLogo} alt="Nference" />
              <img src={abbLogo} alt="ABB" />
              <img src={clarivateLogo} alt="Clarivate" />
              <img src={delhiveryLogo} alt="Delhivery" />
            </div>

            <div className="pr-inner-row">
              <img src={cardekhoLogo} alt="Car Dekho" />
              <img src={gameskraftLogo} alt="Gameskraft" />
              <img src={practoLogo} alt="Practo" />
              <img src={deloitteLogo} alt="Deloitte" />
              <img src={capdgeminiLogo} alt="Capgemini" />
            </div>

            <div className="pr-inner-row">
              <img src={gaugelogo} alt="Gauge Data Solutions" />
              <img src={symphonylogo} alt="Symphony" />
              <img src={tripockLogo} alt="Tripock" />
              <img src={niLogo} alt="National Instruments" />
            </div>
          </div>
        </div>

      </Collapse>
    </div>

  );
};

export default PastRecruiters;
