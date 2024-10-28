import React from "react";
import Hero from "../Hero";
import AboutSection from "../Section/AboutSection";
import BrandsSection from "../Section/BrandsSection";
import Banner from "../Section/BannerSection";
import Section from "../Section";
import FeaturesSection from "../Section/FeaturesSection";
import TestimonialSection from "../Section/TestimonialSection";
import BlogSection from "../Section/BlogSection";
import AppointmentSection from "../Section/AppointmentSection";
import FaqSection from "../Section/FaqSection";
import AwardSection from "../Section/AwardSection";
import DepartmentSection from "../Section/DepartmentSection";
import { pageTitle } from "../../helpers/PageTitle";
const featureListData = [
  {
    iconSrc: "/images/home_1/compassion.svg",
    title: "Compassion",
    subTitle:
      "We know that seeking medical care can feel overwhelming. Our mission is to create a warm, supportive environment, ensuring every patient feels cared for and understood.",
  },
  {
    iconSrc: "/images/home_1/excellence.svg",
    title: "Excellence",
    subTitle:
      "Dedicated to excellence, we strive to continuously enhance our knowledge, skills, and resources, delivering only the highest standard of care.",
  },
  {
    iconSrc: "/images/home_1/integrity.svg",
    title: "Integrity",
    subTitle: `Guided by honesty and transparency, we always prioritize our patients’ best interests, providing clear communication and trustworthy solutions.`,
  },
  {
    iconSrc: "/images/home_1/respect.svg",
    title: "Respect",
    subTitle:
      "We honor the dignity and uniqueness of every individual, fostering an atmosphere of kindness and understanding, regardless of background or beliefs.",
  },
  {
    iconSrc: "/images/home_1/teamwork.svg",
    title: "Teamwork",
    subTitle:
      "We collaborate seamlessly with healthcare professionals to offer comprehensive, cohesive care—because our strength is in unity for your health.",
  },
];
const brandData = [
  { imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQao9WAFOnM3RnEH4bu5ctO92C53rNB9UK5WQ&s", imgAlt: "Brand" },
  { imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQao9WAFOnM3RnEH4bu5ctO92C53rNB9UK5WQ&s", imgAlt: "Brand" },
  { imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQao9WAFOnM3RnEH4bu5ctO92C53rNB9UK5WQ&s", imgAlt: "Brand" },
  { imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQao9WAFOnM3RnEH4bu5ctO92C53rNB9UK5WQ&s", imgAlt: "Brand" },
  { imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQao9WAFOnM3RnEH4bu5ctO92C53rNB9UK5WQ&s", imgAlt: "Brand" },
  { imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQao9WAFOnM3RnEH4bu5ctO92C53rNB9UK5WQ&s", imgAlt: "Brand" },
  { imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQao9WAFOnM3RnEH4bu5ctO92C53rNB9UK5WQ&s", imgAlt: "Brand" },
  { imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQao9WAFOnM3RnEH4bu5ctO92C53rNB9UK5WQ&s", imgAlt: "Brand" },
];
const faqData = [
  {
    title: "What services does Caremate offer?",
    content:
      "Caremate provides an all-in-one solution for hospital management, enhancing the patient journey from start to finish. Key features include Smart OPD Queue Management to reduce wait times, Real-Time Bed Availability tracking for smoother admissions, a Therapy Assistant powered by AI for personalized mental health support, Automated TPA Processing to streamline insurance approvals, and advanced Disease Prediction Models for early detection of critical conditions. Caremate aims to simplify healthcare for patients, doctors, and hospital staff alike.",
  },
  {
    title: "How do I schedule an appointment with Caremate?",
    content:
      "Scheduling an appointment through Caremate is quick and user-friendly. Patients can use our online portal or mobile app to select their preferred time, specialty, and doctor. With our integrated system, patients can also view estimated wait times and receive real-time notifications about their appointment status. Caremate’s scheduling tool is designed to make the entire process transparent, flexible, and hassle-free, ensuring a smooth experience from booking to check-in.",
  },
  {
    title: "Does Caremate support insurance processing?",
    content:
      "Yes, Caremate simplifies insurance processing through its Automated TPA (Third Party Administrator) feature. Our platform securely connects with insurance providers, allowing for automated approvals, claims verification, and billing, reducing paperwork for patients and staff. Patients receive instant updates on claim status and coverage options, helping streamline their healthcare financing. This feature makes Caremate a valuable tool for minimizing the administrative load in healthcare.",
  },
  {
    title: "What information do I need to bring to my appointment when using Caremate?",
    content:
      "To ensure a seamless experience, bring any identification documents, previous medical records, and health insurance information. Caremate securely stores past medical records, lab results, and consultation notes, so having up-to-date records allows your healthcare provider to make well-informed decisions during your appointment. For faster check-ins, patients can also upload digital copies through our app in advance.",
  },
  {
    title: "How do I access Caremate's Therapy Assistant?",
    content:
      "Caremate’s Therapy Assistant is accessible through our mobile app and web platform. This AI-driven assistant offers a private, judgment-free space where patients can discuss mental health concerns, stress, and other personal challenges. Through natural conversation, the Therapy Assistant provides a preliminary assessment, which is securely shared with your doctor to support a more personalized care approach. Designed for empathy and effectiveness, this feature allows patients to explore their needs comfortably before speaking directly with a healthcare provider.",
  },
];
const blogData = [
  {
    title: "The Benefits of Mindfulness Meditation for Stress and Anxiety",
    thumbUrl: "https://prohealth-react.vercel.app/images/home_1/post_1.jpeg",
    date: "May 1, 2023",
    btnText: "Learn More",
    href: "/blog/blog-details",
    socialShare: true,
  },
  {
    title: "Healthy Eating on a Budget: Tips and Strategies",
    thumbUrl: "https://prohealth-react.vercel.app/images/home_1/post_2.jpeg",
    date: "May 4, 2023",
    btnText: "Learn More",
    href: "/blog/blog-details",
    socialShare: true,
  },
  {
    title: "The Importance of Regular Cancer Screenings and Early Detection",
    thumbUrl: "https://images.unsplash.com/photo-1631049122761-ebf51910f814?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "May 1, 2023",
    btnText: "Learn More",
    href: "/blog/blog-details",
    socialShare: true,
  },
];
const awardData = [
  {
    title: "Smart OPD Queue Management",
    subTitle:
      "Streamlines patient flow and reduces wait times, ensuring a smooth experience from check-in to consultation.",
    iconUrl: "images/icons/award.svg",
  },
  {
    title: "Real-Time Bed Availability",
    subTitle:
      "Provides up-to-date bed status, facilitating quicker admissions and seamless patient transitions.",
    iconUrl: "images/icons/award.svg",
  },
  {
    title: "Therapy Assistantl",
    subTitle:
      "Offers virtual therapy support using advanced AI, enhancing patient comfort and delivering insights to doctors.",
    iconUrl: "images/icons/award.svg",
  },
  {
    title: "Insurance Processing Automation",
    subTitle:
      "Automates TPA processes, simplifying health insurance approvals and improving administrative efficiency.",
    iconUrl: "images/icons/award.svg",
  },
];
const departmentData = [
  {
    title: "Smart OPD Queue Management",
    iconUrl: "images/home_1/department_icon_1.svg",
    href: "/departments/department-details",
  },
  {
    title: "Real-Time Bed Availability",
    iconUrl: "images/home_1/department_icon_2.svg",
    href: "/departments/department-details",
  },
  {
    title: "Therapy Assistant",
    iconUrl: "images/home_1/department_icon_3.svg",
    href: "/departments/department-details",
  },
  {
    title: "Insurance Processing Automation",
    iconUrl: "images/home_1/department_icon_4.svg",
    href: "/departments/department-details",
  },
  {
    title: "Disease Prediction Models",
    iconUrl: "images/home_1/department_icon_5.svg",
    href: "/departments/department-details",
  },
  {
    title: "Medical Assistant",
    iconUrl: "images/home_1/department_icon_6.svg",
    href: "/departments/department-details",
  },
];

export default function Home() {
  pageTitle("Home");
  return (
    <>
      <Hero
        title="Your Partner in Health and Wellness"
        subTitle="We are committed to providing you with the best medical and healthcare services to help you live healthier and happier."
        bgUrl="/images/home_1/hero_bg.jpeg"
        imgUrl="https://prohealth-react.vercel.app/images/home_1/hero_img.png"
        videoBtnText="See how we work"
        videoUrl="https://www.youtube.com/embed/VcaAVWtP48A"
        infoList={[
          {
            title: "Hotline",
            subTitle: "123-456-7890",
            iconUrl: "/images/contact/icon_1.svg",
          },
          {
            title: "Ambulance",
            subTitle: "876-256-876",
            iconUrl: "/images/icons/ambulance.svg",
          },
          {
            title: "Location",
            subTitle: "Jaipur , India",
            iconUrl: "/images/icons/pin.svg",
          },
        ]}
        btnText="Book Now"
        btnUrl="/appointments"
      />
      {/* Start Feature Section */}
      <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={185}
        bottomLg={140}
        bottomXl={100}
      >
        <FeaturesSection sectionTitle="Our Values" data={featureListData} />
      </Section>
      {/* End Feature Section */}
      {/* Start About Section */}
      <Section>
        <AboutSection
          imgUrl="https://prohealth-react.vercel.app/images/home_1/about.png"
          spiningImgUrl="/images/home_1/about_mini.svg"
          title="About Us"
          subTitle="Caremate"
          featureList={[
            {
              featureListTitle:
                "Caremate is a team of experienced medical professionals",
              featureListSubTitle:
                "Caremate is a pioneering healthcare platform designed to transform patient care experiences and streamline hospital processes. Our mission is to make healthcare more accessible, efficient, and personalized—bridging patients, hospitals, and healthcare providers through cutting-edge technology and compassionate solutions. From managing OPD queues to bed availability and admissions, Caremate ensures smoother, faster, and more supportive patient journeys every step of the way.",
            },
          ]}
        />
      </Section>
      {/* End About Section */}
      {/* Start Departments Section */}
      <Section topMd={185} topLg={150} topXl={110}>
        <DepartmentSection
          sectionTitle="Features"
          bgUrl="images/home_1/department_bg.svg"
          data={departmentData}
        />
      </Section>

      {/* End Departments Section */}
      {/* Start Award Section */}
      <Section topMd={185} topLg={140} topXl={100}>
        <AwardSection sectionTitle="Features" data={awardData} />
      </Section>
      {/* End Award Section */}
      {/* Start Testimonial */}
      <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <TestimonialSection
          sectionTitle="Some Reviews"
          sectionTitleDown="Of our clients"
        />
      </Section>
      {/* End Testimonial */}
      {/* Start Banner Section */}
      <Section>
        <Banner
          bgUrl="images/home_1/cta_bg.svg"
          imgUrl="https://prohealth-react.vercel.app/images/home_1/cta_img.png"
          title="Don’t Let Your Health Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced medical professionals today!"
        />
      </Section>
      {/* End Banner Section */}
      {/* Start Blog Section */}
      <Section topMd={190} topLg={145} topXl={105}>
        <BlogSection
          sectionTitle="Latest Update"
          sectionTitleUp="BLOG POSTS"
          data={blogData}
        />
      </Section>
      {/* End Blog Section */}
      {/* Start Appointment Section */}
      <Section topMd={190} topLg={145} topXl={105} id="appointment">
        <AppointmentSection
          sectionTitle="Appointment"
          sectionTitleUp="BOOK AN"
          imgUrl="https://prohealth-react.vercel.app/images/home_1/appointment.jpeg"
        />
      </Section>
      {/* End Appointment Section */}
      {/* Start FAQ Section */}
      <Section topMd={190} topLg={145} topXl={105}>
        <FaqSection
          data={faqData}
          sectionTitle="Usually Asked"
          sectionTitleUp="What People"
        />
      </Section>
      {/* End FAQ Section */}
      {/* Start Brand Section */}
      <Section
        topMd={200}
        topLg={150}
        topXl={110}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <BrandsSection data={brandData} />
      </Section>
      {/* End Brand Section */}
    </>
  );
}
