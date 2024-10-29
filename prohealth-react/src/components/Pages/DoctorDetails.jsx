import React from 'react';
import BreadcrumbStyle2 from '../Breadcrumb/BreadcrumbStyle2';
import Section from '../Section';
import BannerSectionStyle9 from '../Section/BannerSection/BannerSectionStyle9';
import DoctorDetailsSection from '../Section/DoctorDetailsSection';
import AppointmentSectionStyle2 from '../Section/AppointmentSection/AppointmentSectionStyle2';
import { pageTitle } from '../../helpers/PageTitle';

export default function DoctorDetails() {
  pageTitle('Therapy Assistant');
  return (
    <>
      <BreadcrumbStyle2 />
      <Section bottomMd={190} bottomLg={150} bottomXl={110}>
        <DoctorDetailsSection
          bgUrl="/images/doctors/doctor_details_bg.svg"
          imgUrl="https://prohealth-react.vercel.app/images/doctors/doctor_details.jpeg"
          name=" Caremate Therapy Assistant"
          department="Caremate Therapy Assistant"
          designation=""
          description="AI-Powered Mental Health Support
          Our Therapy Assistant leverages advanced AI and natural language processing to provide compassionate, personalized mental health support tailored to individual needs."
          social={[
            { icon: 'Launch', href: '/about',variant:'' },
          ]}
          contactInfo={[
            { iconUrl: '/images/icons/call.svg', title: '+123+456-7890' },
            {
              iconUrl: '/images/icons/envlope.svg',
              title: 'https://jaipur.manipal.edu/',
            },
          ]}
          contactInfoHeading="Contact Info"
          schedules={[
            { day: 'Monday', time: '09.00-12.00' },
            { day: 'Wednesday', time: '15.00-18.00' },
            { day: 'Friday', time: '09.00-12.00' },
          ]}
          scheduleHeading="Appointement Scheduling"
          degrees={[
            {
              title: 'AI Model: Llama 3.1',
              subTitle: 'Advanced AI model fine-tuned on over 1.5 million patient-physician interactions to provide empathetic, accurate responses.',
            },
            {
              title:
                'Data Sources',
              subTitle: 'Includes comprehensive medical resources like the Gale Encyclopedia of Medicine to offer reliable, well-informed insights.',
            },
            {
              title: 'Enhanced Privacy',
              subTitle: 'Ensures all interactions are confidential and secure, encouraging open communication for effective mental health support.',
            },
          ]}
          degreesHeading="Innovative Technology"
          experiences={[
            {
              title: 'Symptom and Mood Evaluation',
              subTitle: 'The Therapy Assistant identifies and assesses symptoms through natural conversations, helping users explore their mental health concerns in a non-judgmental space.',
            },
            {
              title:
                'Preliminary Mental Health Guidance',
              subTitle: 'Offers initial advice for managing mood, stress, and anxiety, helping users address issues before a consultation with a mental health professional.',
            },
            {
              title: 'Personalized Therapy Reports',
              subTitle: 'Generates comprehensive reports based on interactions, summarizing key insights for healthcare providers to review, enabling a more informed diagnosis and treatment plan.',
            },
            {
              title: 'Seamless Integration with Healthcare Providers',
              subTitle: 'Connects directly to the Caremate platform to schedule appointments, follow up on therapy recommendations, and share essential information with healthcare professionals.',
            },
          ]}
          experiencesHeading="Features"
          awards={[
            { 
            title: 'Advanced AI Excellence',
            subtitle:"Recognized for delivering accurate, empathetic mental health support through advanced AI modeling and rigorous validation."
          },
          {
              title:
                'Privacy and Security Commitment',
                subtitle:"Awarded for maintaining high standards of data protection and ensuring secure, confidential patient interactions."
          },
          ]}
          awardHeading="Data Integrity"
        />
      </Section>
      <Section bottomMd={200} bottomLg={150} bottomXl={110}>
        <AppointmentSectionStyle2
          bgUrl="/images/home_2/appointment_bg.svg"
          imgUrl="https://prohealth-react.vercel.app/images/home_2/appointment_img.png"
          sectionTitle="Appointment"
          sectionTitleUp="BOOK AN"
        />
      </Section>

      <Section className="cs_footer_margin_0">
        <BannerSectionStyle9
          title="Don’t Let Your Health <br />Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced <br />medical professionals today!"
          imgUrl="https://prohealth-react.vercel.app/images/doctors/banner_img_3.png"
        />
      </Section>
    </>
  );
}
