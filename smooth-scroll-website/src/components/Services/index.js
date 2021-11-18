import React from "react";
import Icon1 from "../../images/svg-pro1.svg";
import Icon2 from "../../images/svg-learn.svg";
import Icon3 from "../../images/svg-n1.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesP,
  ServicesH2,
} from "./ServicesElements";

function Services() {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2> Build Websites </ServicesH2>
          <ServicesP>
            We Build your business the proffesional website it desives. This
            will alow your business to have proper marketing!
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2> Courses </ServicesH2>
          <ServicesP>
            Courses Coming to C.G Designs soon in 2022. Whant to become a
            developer? Sign-up to our news letters for freqaunt updates!
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2> Mobile Apllications</ServicesH2>
          <ServicesP>
            We build mobile applications that your clients would get from Google
            play store and I-store! Why just market your business on a website?
            Get a app to dammit!
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
}

export default Services;
