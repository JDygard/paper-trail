import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  background-color: #fff;
  padding: 4rem 2rem;
`;

const AboutTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const AboutContent = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 2rem;
`;

function About() {
  return (
    <AboutSection>
      <AboutTitle>About Paper Trail Co.</AboutTitle>
      <AboutContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris mauris, maximus sed
        mauris nec, vestibulum tempor enim. Praesent luctus malesuada lorem, in sodales arcu
        lobortis vel. Nam euismod, dolor id congue imperdiet, lectus quam blandit risus, ac rutrum
        quam mauris quis metus. Sed quis mauris vestibulum, finibus ante quis, tincidunt arcu.
        Suspendisse imperdiet, purus ut tristique malesuada, arcu lorem sodales erat, vel
        elementum sem enim vel velit. Sed pellentesque eros quis leo tristique, eu fringilla magna
        semper. In iaculis fringilla elit, vel convallis nulla pellentesque a.
      </AboutContent>
      <AboutContent>
        Praesent sagittis enim in quam tincidunt, in convallis libero lacinia. Ut quis ultricies
        augue. Suspendisse imperdiet orci nulla, nec tempor odio tincidunt eget. Nunc eget ligula
        in lorem iaculis hendrerit. Integer consequat velit ac erat ullamcorper, vel facilisis
        nunc laoreet. Donec et erat ac dolor malesuada convallis vel eget tortor. Sed ut felis id
        nisl blandit consectetur eu ut nibh. Maecenas sit amet quam sem. Nullam sit amet turpis
        vel magna fringilla fringilla ut quis enim.
      </AboutContent>
    </AboutSection>
  );
}

export default About;
