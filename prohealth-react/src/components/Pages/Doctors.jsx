import React from 'react';
import BannerSectionStyle5 from '../Section/BannerSection/BannerSectionStyle5';
import BannerSectionStyle4 from '../Section/BannerSection/BannerSectionStyle4';
import TeamSectionStyle2 from '../Section/TeamSection/TeamSectionStyle2';
import Section from '../Section';
import { pageTitle } from '../../helpers/PageTitle';
const teamData = [
  {
    imgUrl: 'https://img.freepik.com/premium-photo/young-male-indian-doctor-white-background_1239886-2044.jpg',
    department: 'Emergency Department',
    name: 'Dr. Arvind Sharma, MD',
    designation: 'Emergency Medicine Specialist',
    description:
      'Dr. Sharma has over 10 years of experience in emergency medicine and is board certified in emergency medicine. He has a special interest in critical care and trauma management.',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    category: 'cardiology',
    href: '/doctors/doctor-details',
  },
  {
    imgUrl: 'https://img.freepik.com/premium-photo/young-male-indian-doctor-white-background_1239886-2044.jpg',
    department: 'Emergency Department',
    name: 'Dr. Priya Patel, MD',
    designation: 'Emergency Medicine Specialist',
    description:
      'Dr. Patel is a highly experienced emergency medicine physician with over 15 years of experience. She is board-certified in emergency medicine and has a special interest in disaster management.',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    category: 'emergency',
    href: '/doctors/doctor-details',
  },
  {
    imgUrl: 'https://img.freepik.com/premium-photo/young-male-indian-doctor-white-background_1239886-2044.jpg',
    department: 'Emergency Department',
    name: 'Dr. Neha Gupta, MD',
    designation: 'Emergency Medicine Specialist',
    description:
      'Dr. Gupta is a skilled emergency medicine physician with expertise in the treatment of acute medical conditions. She is board-certified in emergency medicine and has a special interest in cardiac care.',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    category: 'pediatric',
    href: '/doctors/doctor-details',
  },
  {
    imgUrl: 'https://img.freepik.com/premium-photo/young-male-indian-doctor-white-background_1239886-2044.jpg',
    department: 'Pediatric Department',
    name: 'Dr. Vikram Singh, MD',
    designation: 'Pediatrician',
    description:
      'Dr. Singh is a compassionate pediatrician with over 15 years of experience. He is board-certified in pediatrics and has a special interest in preventive care and childhood development.',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    category: 'others',
    href: '/doctors/doctor-details',
  },
  {
    imgUrl: 'https://img.freepik.com/premium-photo/young-male-indian-doctor-white-background_1239886-2044.jpg',
    department: 'Pediatric Department',
    name: 'Dr. Aisha Khan, MD',
    designation: 'Pediatrician',
    description:
      'Dr. Khan is a highly skilled pediatrician with expertise in the treatment of common childhood illnesses and conditions. She is board-certified in pediatrics.',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    category: 'cardiology',
    href: '/doctors/doctor-details',
  },
  {
    imgUrl: 'https://img.freepik.com/premium-photo/young-male-indian-doctor-white-background_1239886-2044.jpg',
    department: 'Pediatric Department',
    name: 'Dr. Ramesh Iyer, MD',
    designation: 'Pediatrician',
    description:
      'Dr. Iyer is a dedicated pediatrician with a focus on providing comprehensive care to children of all ages. He is board-certified in pediatrics and has a special interest in childhood obesity.',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    category: 'psychiatry',
    href: '/doctors/doctor-details',
  },
  {
    imgUrl: 'https://img.freepik.com/premium-photo/young-male-indian-doctor-white-background_1239886-2044.jpg',
    department: 'Emergency Department',
    name: 'Dr. Anil Bhatia, MD',
    designation: 'Cardiologist',
    description:
      'Dr. Bhatia is a skilled cardiologist with expertise in the diagnosis and treatment of cardiovascular disease. He is board-certified in cardiology and has a special interest in preventive cardiology.',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    category: 'emergency',
    href: '/doctors/doctor-details',
  },
  {
    imgUrl: 'https://img.freepik.com/premium-photo/young-male-indian-doctor-white-background_1239886-2044.jpg',
    department: 'Emergency Department',
    name: 'Dr. Pooja Desai, MD',
    designation: 'Cardiologist',
    description:
      'Dr. Desai is a renowned cardiologist with over 20 years of experience. She is board-certified in cardiology and has a special interest in the treatment of heart failure and arrhythmias.',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    category: 'others',
    href: '/doctors/doctor-details',
  },
  {
    imgUrl: 'https://img.freepik.com/premium-photo/young-male-indian-doctor-white-background_1239886-2044.jpg',
    department: 'Emergency Department',
    name: 'Dr. Rajesh Kumar, MD',
    designation: 'Cardiologist',
    description:
      'Dr. Kumar is a board-certified cardiologist with extensive experience in the management of complex cardiac conditions. He has a special interest in interventional cardiology.',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    category: 'psychiatry',
    href: '/doctors/doctor-details',
  },
  {
    imgUrl: 'https://img.freepik.com/premium-photo/young-male-indian-doctor-white-background_1239886-2044.jpg',
    department: 'Psychiatry Department',
    name: 'Dr. Meera Nair, MD',
    designation: 'Psychiatrist',
    description:
      'With more than 15 years of experience studying human psychology and behavior, Dr. Nair is an expert in managing mood and anxiety disorders.',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    category: 'others',
    href: '/doctors/doctor-details',
  },
  {
    imgUrl: 'https://img.freepik.com/premium-photo/young-male-indian-doctor-white-background_1239886-2044.jpg',
    department: 'Psychiatry Department',
    name: 'Dr. Sanjay Menon, MD',
    designation: 'Psychiatrist',
    description:
      'Dr. Menon is a board-certified psychiatrist with over 10 years of experience. He has a special interest in addiction psychiatry and the treatment of substance use disorders.',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    category: 'emergency',
    href: '/doctors/doctor-details',
  },
];




export default function Doctors() {
  pageTitle('Doctors');
  return (
    <>
      <BannerSectionStyle5
        bgUrl="/images/doctors/banner_bg.svg"
        imgUrl="https://prohealth-react.vercel.app/images/doctors/banner_img.png"
        title="Introduce You to <br />Our Experts"
        subTitle="The list of certified doctors with years of <br />professional experiences"
      />
      <Section topMd={65} bottomMd={200} bottomLg={150} bottomXl={110}>
        <TeamSectionStyle2 data={teamData} />
      </Section>
      <Section className="cs_footer_margin_0">
        <BannerSectionStyle4
          bgUrl="https://prohealth-react.vercel.app/images/doctors/banner_bg_2.jpeg"
          title="Don’t Let Your Health <br />Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced <br />medical professionals today!"
        />
      </Section>
    </>
  );
}
