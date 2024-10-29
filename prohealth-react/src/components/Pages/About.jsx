import React from 'react';
import BannerSectionStyle3 from '../Section/BannerSection/BannerSectionStyle3';
import BannerSectionStyle4 from '../Section/BannerSection/BannerSectionStyle4';
import Section from '../Section';
import DepartmentSectionStyle2 from '../Section/DepartmentSection/DepartmentSectionStyle2';
import FeaturesSectionStyle2 from '../Section/FeaturesSection/FeaturesSectionStyle2';
import FunFactSection from '../Section/FunFactSection';
import TeamSection from '../Section/TeamSection';
import GallerySection from '../Section/GallerySection';
import AwardSectionStyle2 from '../Section/AwardSection/AwardSectionStyle2';
import { pageTitle } from '../../helpers/PageTitle';
const departmentData = [
  {
    title: 'OPD Queuing',
    subTitle:'Streamline patient flow and minimize wait times with our efficient OPD queuing system, ensuring a smoother experience from check-in to consultation.',
    iconUrl: '/images/icons/calendar_white.svg',
    href: '/departments/department-details',
  },
  {
    title: 'Booking System',
    subTitle:
      'Easily schedule appointments through our user-friendly online booking system, allowing patients to select preferred times and specialties effortlessly.',
    iconUrl: '/images/icons/calendar_white.svg',
    href: '/departments/department-details',
  },
  {
    title: 'Therapy Assistant',
    subTitle:
      'Utilize our AI-powered Therapy Assistant for personalized support, enabling patients to discuss concerns confidentially and receive valuable insights before seeing a doctor.',
    iconUrl: '/images/icons/calendar_white.svg',
    href: '/departments/department-details',
  },
  {
    title: 'TPA Integration',
    subTitle:
      'Experience hassle-free insurance processing with our TPA integration, simplifying claims management and enhancing communication with insurance providers.',
    iconUrl: '/images/icons/calendar_white.svg',
    href: '/departments/department-details',
  },
  {
    title: 'Disease Prediction',
    subTitle:
      'Leverage advanced algorithms in our disease prediction models for early detection and proactive management of various health conditions, improving overall patient outcomes.',
    iconUrl: '/images/icons/calendar_white.svg',
    href: '/departments/department-details',
  },
];

const featureListData = [
  {
    title: 'Cutting-Edge Innovation',
    subTitle:
      'At Caremate, we harness the power of advanced technology to revolutionize your healthcare experience. Our AI-driven therapy assistant and seamless OPD queuing system empower you to take charge of your health like never before.',
    iconUrl: 'images/icons/professional.svg',
  },
  {
    title: 'Comprehensive Patient Support',
    subTitle:
      'We believe in caring for the whole person, not just the symptoms. With our holistic approach, we provide unwavering support throughout your healthcare journey, from proactive disease prediction to hassle-free TPA integration, ensuring your needs are met at every turn.',
    iconUrl: 'images/icons/comprehensive.svg',
  },
  {
    title: 'Tailored to You',
    subTitle:
      'Your health is unique, and so is our care. Our patient-centered philosophy fosters genuine connections, allowing us to understand and address your specific concerns, ensuring you receive the personalized attention you deserve.',
    iconUrl: 'images/icons/patient.svg',
  },
  {
    title: 'Excellence at Every Step',
    subTitle:
      'At Caremate, we are driven by a relentless commitment to quality and compassion. Our state- of-the-art facilities and dedicated team work tirelessly to provide you with exceptional healthcare services, transforming your experience into one of trust, support, and empowerment.',
    iconUrl: 'images/icons/facilities.svg',
  },
];

const funFactData = [
  { number: '20+', title: 'Years of experience' },
  { number: '95%', title: 'Patient satisfaction rating' },
  { number: '5000+', title: 'Patients served annually' },
  { number: '10+', title: 'Healthcare providers on staff' },
  { number: '22+', title: 'Convenient locations in the area' },
];

const teamData = [
  {
    imgUrl: 'https://prohealth-react.vercel.app/images/about/doctor_1.png',
    name: 'Dr. Karan Subramanian',
    designation: 'Head of Cardiologist',
    description:
      'With expertise in managing complex heart conditions and performing advanced cardiac procedures',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
  },
  {
    imgUrl: 'https://prohealth-react.vercel.app/images/about/doctor_2.png',
    name: 'Dr. Robin Singh, MD',
    designation: 'Emergency Medicine Physician',
    description:
      'With expertise in treating acute illnesses and injuries in medicine physician',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
  },
  {
    imgUrl: 'https://prohealth-react.vercel.app/images/about/doctor_3.png',
    name: 'Dr. Reema Goel, MD',
    designation: 'Board-certified Pediatrician',
    description:
      'With experience in managing complex medical conditions in children',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
  },
];

const galleryData = [
  { imgUrl: 'https://prohealth-react.vercel.app/images/about/portfolio_1_lg.jpeg' },
  { imgUrl: 'https://prohealth-react.vercel.app/images/about/portfolio_2_lg.jpeg' },
  { imgUrl: 'https://prohealth-react.vercel.app/images/about/portfolio_3_lg.jpeg' },
  { imgUrl: 'https://prohealth-react.vercel.app/images/about/portfolio_4_lg.jpeg' },
  { imgUrl: 'https://prohealth-react.vercel.app/images/about/portfolio_5_lg.jpeg' },
];
const awardData = [
  {
    iconUrl: '/images/icons/award.svg',
    title: 'Transforming Healthcare Delivery',
    subTitle:'We aim to revolutionize the way healthcare is accessed and delivered, ensuring that innovative solutions meet the evolving needs of our patients and communities.'
  },
  { iconUrl: '/images/icons/award.svg',
   title: 'Empowering Patients' ,
   subTitle:'Our mission is to empower individuals with the tools, knowledge, and support they need to take control of their health and wellness, fostering a proactive approach to healthcare.'
  },
  {
    iconUrl: '/images/icons/award.svg',
    title: 'Commitment to Excellence',
    subTitle:'We are dedicated to achieving excellence in all our services, striving for the highest standards of quality, compassion, and efficiency in patient care.'
  },
  {
    iconUrl: '/images/icons/award.svg',
    title: 'Building a Healthier Community',
    subTitle:'Through collaboration and community engagement, we envision a healthier future where every individual has access to comprehensive, personalized healthcare solutions.'
  },
];




export default function About() {
  pageTitle('About');
  return (
    <>
      <BannerSectionStyle3
        bgUrl="/images/about/banner_bg.svg"
        imgUrl="https://prohealth-react.vercel.app/images/about/banner_img.png"
        title="Welcome to Caremate<br/>
        Your Partner in Health and Wellness"
        subTitle="At Caremate, we are dedicated to providing exceptional healthcare services tailored to your needs. Our innovative solutions enhance your experience, making health and wellness accessible and efficient. Together, let’s embark on your journey to better health!
        "
      />
      <Section topMd={200} topLg={150} topXl={110}>
        <DepartmentSectionStyle2
          sectionTitle="Transforming Healthcare Through Innovative Services"
          sectionTitleUp="SERVICES"
          data={departmentData}
        />
      </Section>
      <Section topMd={175} topLg={125} topXl={85} bottomMd={100} bottomLg={110}>
        <FeaturesSectionStyle2
          sectionTitle="Why Choose Us"
          imgUrl="https://prohealth-react.vercel.app/images/about/why_choose_us.jpeg"
          data={featureListData}
        />
      </Section>
      <Section>
        <FunFactSection
          bgUrl="images/about/fun_fact_bg.jpeg"
          data={funFactData}
        />
      </Section>
      <Section topMd={190} topLg={145} topXl={105}>
        <TeamSection
          sectionTitle="Experts Doctor"
          sectionTitleUp="MEET OUR"
          data={teamData}
        />
      </Section>
      <Section topMd={170} topLg={120} topXl={80}>
        <GallerySection
          sectionTitle="Our Facilities and <br />Latest Activities"
          sectionTitleUp="HAVE A LOOK AT"
          data={galleryData}
        />
      </Section>
      <Section
        topMd={190}
        topLg={145}
        topXl={105}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <AwardSectionStyle2
          sectionTitle="Our Vision for a Healthier Tomorrow"
          sectionTitleUp="Our Mission and Vision"
          sectionSubTitle="We have been recognized for our commitment to <br />excellence in healthcare."
          data={awardData}
        />
      </Section>
      <Section className="cs_footer_margin_0">
        <BannerSectionStyle4
          bgUrl="https://prohealth-react.vercel.app/images/about/banner_bg_2.jpeg"
          title="Don’t Let Your Health <br />Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced <br />medical professionals today!"
          center
        />
      </Section>
    </>
  );
}
