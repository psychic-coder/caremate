import React from 'react';
import BannerSectionStyle7 from '../Section/BannerSection/BannerSectionStyle7';
import Section from '../Section';
import AppointmentSection from '../Section/AppointmentSection';
import BreadcrumbStyle2 from '../Breadcrumb/BreadcrumbStyle2';
import AboutSectionStyle2 from '../Section/AboutSection/AboutSectionStyle2';
import FeaturesSectionStyle3 from '../Section/FeaturesSection/FeaturesSectionStyle3';
import TeamSectionStyle3 from '../Section/TeamSection/TeamSectionStyle3';
import { pageTitle } from '../../helpers/PageTitle';
import Button from '../Button';

const featureData = [
  {
    title: 'Symptom Evaluation',
    subTitle:
      'The Medical Assistant Chatbot listens to and assesses patient-reported symptoms, providing insights to help patients understand their health concerns.',
    iconUrl: '/images/departments/icon_9.svg',
  },
  {
    title: 'Health Advice and Guidance',
    subTitle:
      'Based on the symptoms shared, the chatbot offers preliminary advice, suggesting potential steps for managing symptoms until a consultation.',
    iconUrl: '/images/departments/icon_10.svg',
  },
  {
    title: 'Appointment Scheduling',
    subTitle:
      'The Chatbot can book appointments with the appropriate healthcare provider, ensuring patients are connected to the right specialist when needed.',
    iconUrl: '/images/departments/icon_11.svg',
  },
  {
    title: 'Personalized Health Reports',
    subTitle:
      'The Chatbot generates tailored health reports from interactions, summarizing key concerns and recommendations for doctors to review during appointments.',
    iconUrl: '/images/departments/icon_12.svg',
  },
];

const doctorData = [
  {
    imgUrl: 'https://prohealth-react.vercel.app/images/departments/related_doctor_1.jpeg',
    name: 'Dr. Anita Singh, MD',
    designation: 'Board-certified Pediatrician',
    description:
      'With experience in managing complex <br />medical conditions in children',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    availableUrl: '/',
    callUrl: '/',
    chatUrl: '/',
    btnText: 'Booking',
    btnUrl: '/appointments',
  },
  {
    imgUrl: 'https://prohealth-react.vercel.app/images/departments/related_doctor_1.jpeg',
    name: 'Dr. Anita Singh, MD',
    designation: 'Board-certified Pediatrician',
    description:
      'With experience in managing complex <br />medical conditions in children',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    availableUrl: '/',
    callUrl: '/',
    chatUrl: '/',
    btnText: 'Booking',
    btnUrl: '/',
  },
  {
    imgUrl: 'https://prohealth-react.vercel.app/images/departments/related_doctor_1.jpeg',
    name: 'Dr. Anita Singh, MD',
    designation: 'Board-certified Pediatrician',
    description:
      'With experience in managing complex <br />medical conditions in children',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    availableUrl: '/',
    callUrl: '/',
    chatUrl: '/',
    btnText: 'Booking',
    btnUrl: '/',
  },
  {
    imgUrl: 'https://prohealth-react.vercel.app/images/departments/related_doctor_1.jpeg',
    name: 'Dr. Anita Singh, MD',
    designation: 'Board-certified Pediatrician',
    description:
      'With experience in managing complex <br />medical conditions in children',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    availableUrl: '/',
    callUrl: '/',
    chatUrl: '/',
    btnText: 'Booking',
    btnUrl: '/',
  },
];


export default function DepartmentDetails() {
  pageTitle('Department Details');
  return (
    <>
      <BreadcrumbStyle2 />
      <Section topMd={135} topLg={100} topXl={100}>
        <AboutSectionStyle2
          title="Medical Assistant"
          subTitle="
          Our Medical Assistant is here to make healthcare more accessible. Simply share your health concerns, and the Medical Assistant will provide helpful insights, offer preliminary advice, and even book an appointment for you with the right doctor."
          imgUrl="https://prohealth-react.vercel.app/images/departments/department_img_1.png"
        />
        <Button class="" btnUrl={"https://www.google.co.in/"} btnText={"Chatbot"} variant={""}/>
      </Section>

      <Section topMd={170} topLg={145} topXl={90}>
        <FeaturesSectionStyle3
          sectionTitle="Treatments"
          sectionTitleUp="MORE TYPE OF"
          data={featureData}
        />
      </Section>
      <Section topMd={200} topLg={150} topXl={100}>
        <TeamSectionStyle3 sectionTitle="Medical Advisors" data={doctorData} />
      </Section>

      {/* Start Appointment Section */}
      <Section
        topMd={190}
        topLg={145}
        topXl={105}
        bottomMd={190}
        bottomLg={145}
        bottomXl={110}
        id="appointment"
      >
        <AppointmentSection
          sectionTitle="Appointment"
          sectionTitleUp="BOOK AN"
          imgUrl="https://prohealth-react.vercel.app/images/departments/related_doctor_1.jpeg"
        />
      </Section>
      {/* End Appointment Section */}
      <Section className="cs_footer_margin_0">
        <BannerSectionStyle7
          imgUrl="https://prohealth-react.vercel.app/images/departments/banner_img_3.png"
          bgUrl="/images/departments/banner_bg_3.svg"
          title="Don’t Let Your Health <br />Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced <br />medical professionals today!"
        />
      </Section>
    </>
  );
}
