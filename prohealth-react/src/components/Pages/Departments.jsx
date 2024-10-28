import React from 'react';
import BannerSectionStyle5 from '../Section/BannerSection/BannerSectionStyle5';
import Section from '../Section';
import DepartmentSectionStyle3 from '../Section/DepartmentSection/DepartmentSectionStyle3';
import BannerSectionStyle6 from '../Section/BannerSection/BannerSectionStyle6';
import { pageTitle } from '../../helpers/PageTitle';
const departmentData = [
  {
    iconUrl: 'images/departments/icon_1.svg',
    title: 'OPD Queuing System',
    subTitle:
      'Our OPD Queuing System optimizes patient flow, reducing wait times and creating a seamless experience from check-in to consultation.',
    href: '/departments/department-details',
  },
  {
    iconUrl: 'images/departments/icon_1.svg',
    title: 'Appointment Booking System',
    subTitle:
      'Our convenient booking system allows patients to schedule appointments, choose their preferred doctors, and receive real-time updates for efficient planning.',
    href: '/departments/department-details',
  },
  {
    iconUrl: 'images/departments/icon_1.svg',
    title: 'Therapy Assistant',
    subTitle:
      'Our AI-powered Therapy Assistant offers a safe space for patients to discuss mental health concerns privately, delivering valuable insights to doctors and helping patients feel understood.',
    href: '/departments/department-details',
  },
  {
    iconUrl: 'images/departments/icon_1.svg',
    title: 'TPA Integration for Insurance',
    subTitle:
      'Streamline the insurance process with our TPA integration, which simplifies claim handling and expedites communication with insurance providers, ensuring smooth processing for patients.',
    href: '/departments/department-details',
  },
  {
    iconUrl: 'images/departments/icon_1.svg',
    title: 'Disease Prediction Models',
    subTitle:
      'Our advanced disease prediction models leverage machine learning to detect early signs of health conditions, enabling patients to make proactive healthcare decisions.',
    href: '/departments/department-details',
  },
  {
    iconUrl: 'images/departments/icon_1.svg',
    title: 'Medical Assistant Chatbot',
    subTitle:
      'Our intelligent Medical Assistant provides quick responses to health queries, offers preliminary assessments, and helps patients prepare for consultations with accurate, supportive information.',
    href: '/departments/department-details',
  },
  {
    iconUrl: 'images/departments/icon_1.svg',
    title: 'Comprehensive Health Records Management',
    subTitle:
      'We securely manage and store patient and doctor records, making it easy for healthcare professionals and patients to access important medical history and ensure continuity of care.',
    href: '/departments/department-details',
  },
  {
    iconUrl: 'images/departments/icon_1.svg',
    title: 'Data-Driven Health Insights',
    subTitle:
      'Caremate generates detailed, AI-driven health reports for doctors, offering insights into patient health, treatment progress, and personalized recommendations to improve patient outcomes.',
    href: '/departments/department-details',
  },
];



export default function Departments() {
  pageTitle('Medical Chatbot');
  return (
    <>
      <BannerSectionStyle5
        bgUrl="/images/departments/banner_bg.svg"
        imgUrl="https://prohealth-react.vercel.app/images/departments/banner_img.png"
        title="Get to Know <br>health"
        subTitle="At ProHealth, we offer a wide range of medical and healthcare services that are designed to meet your individual needs and help you achieve optimal health."
      />
      <Section bottomMd={140} bottomLg={100} bottomXl={60}>
        <DepartmentSectionStyle3 data={departmentData} />
      </Section>
      <Section className="cs_footer_margin_0">
        <BannerSectionStyle6
          imgUrl="https://prohealth-react.vercel.app/images/departments/banner_img_2.png"
          title="Don’t Let Your Health Take a Backseat!"
          subTitle="Schedule an appointment with one of our <br />experienced medical professionals today!"
        />
      </Section>
    </>
  );
}
