import React from "react";

import directiLogo from "../assets/company_logos/directi.png";
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

const PastRecruiters = props => {
  return (
    <React.Fragment>
      <div className="pr-outer-container">
        <h1 className="pr-main-heading">Our Recruiters</h1>
        <div className="pr-inner-wrapper">
          <div className="pr-inner-box">
            <div className="pr-inner-row">
              <img src={directiLogo} alt="Directi" />
              <img src={ackoLogo} alt="Acko" />
              <img src={googleLogo} alt="Google" />
              <img src={Microsoft} alt="Microsoft" />
              <img src={linkedinLogo} alt="LinkedIn" />
            </div>

            <div className="pr-inner-row">
              <img src={goldmansachsLogo} alt="Goldman Sachs" />
              <img src={expediaLogo} alt="Expedia" />
              <img src={codenationLogo} alt="Codenation" />
              <img src={accoliteLogo} alt="Accolite" />
              <img src={paytmLogo} alt="PayTm" />
            </div>
            <div className="pr-inner-row">
              <img src={quantiphiLogo} alt="Quantiphi" />
              <img src={wickedrideLogo} alt="Wicked Ride" />
              <img src={mavenhiveLogo} alt="MavenHive" />
              <img src={nagarroLogo} alt="nagarro" />
              <img src={ONEmgLogo} alt="1mg" />
            </div>
            <div className="pr-inner-row">
              <img src={ShipsyLogo} alt="shipsy" />
              <img src={jdaLogo} alt="jda" />
              <img src={maqsoftwareLogo} alt="MAQ Software" />
              <img src={vassarlabsLogo} alt="Vassar Labs" />
              <img src={joshtechnologyLogo} alt="Josh Technology Group" />
            </div>
            <div className="pr-inner-row">
              <img src={zenefitsLogo} alt="Zenefits" />
              <img src={hashedInLogo} alt="Hashedin" />
              <img src={nineleapsLogo} alt="Nineleaps" />
              <img src={collegeduniaLogo} alt="College Dunia" />
              <img src={valuefyLogo} alt="Valuefy" />
            </div>
            <div className="pr-inner-row">
              <img src={travelokaLogo} alt="traveloka" />
              <img src={infoobjectsLogo} alt="Info Objects" />
              <img src={sokratiLogo} alt="Sokrati" />
              <img src={tcsLogo} alt="TATA Consultancy Services" />
              <img src={vehanttechnologiesLogo} alt="Vehant Technologies" />
            </div>
            <div className="pr-inner-row">
              <img src={wiproLogo} alt="Wipro" />
              <img src={polestarLogo} alt="Pole Star" />
              <img src={kleanLogo} alt="Klean Homez" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PastRecruiters;
