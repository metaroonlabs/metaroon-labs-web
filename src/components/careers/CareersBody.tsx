import TabBar from "@/components/careers/TabBar.tsx";
import JobCard from "@/components/careers/JobCard.tsx";
import {FiBriefcase, FiMapPin, FiMonitor} from "react-icons/fi";

function CareersBody() {

    const jobDetails = [
        {
            title: 'Senior UX-UI Designer',
            badges: [
                {
                    icon: <FiMapPin size={20} />,
                    title: 'Sri Lanka'
                },
                {
                    icon: <FiBriefcase size={20}/>,
                    title: 'Full time'
                },
                {
                    icon: <FiMonitor size={20}/>,
                    title: 'Remote'
                },
            ],
            description: 'We’re looking to hire a full-time remote Senior UX/UI Designer to join our team and contribute ' +
                'to creating seamless user experiences for our projects. In this role, you will be responsible for designing ' +
                'fully responsive visuals from start to finish, ensuring a high-quality user experience.',
            heading1: 'Company Overview',
            description1: 'At Metaroon Labs, we are dedicated to delivering top-notch tech solutions that meet the unique needs of our clients. ' +
                'Our team of experienced professionals is passionate about utilizing the latest and most effective technology to create ' +
                'innovative and practical solutions. We are committed to excellence, collaboration, and continuous learning to provide the ' +
                'highest quality services to our clients',
            heading2: 'About the Role',
            description2: 'We’re looking to hire a full-time remote Senior UX/UI Designer to join our team and contribute to creating seamless ' +
                'user experiences for our projects. In this role, you will be responsible for designing fully responsive visuals from ' +
                'start to finish, ensuring a high-quality user experience.',
            description3: 'You\'ll have the opportunity to collaborate with a team of top-tier designers, focusing on teamwork, ' +
                'communication, and product quality. While aligning some of your working hours with the US team is important, the ' +
                'overall work schedule is flexible.',
            heading3: 'Responsibilities',
            responsibilities: [
                'Conduct thorough user research to understand needs, behaviors, and preferences',
                'Analyze data and insights to inform design decisions and improvements.',
                'Design intuitive, user-friendly interfaces that align with brand guidelines.',
                'Develop information architecture and user flows to optimize user experience.',
                'Create low-fidelity and high-fidelity wireframes and interactive prototypes to visualize, test, and iterate on designs.',
                'Plan and conduct usability testing to gather feedback and iterate designs.'
            ],
            heading4: 'Requirements',
            requirements: [
                {
                    requirementsTitle: 'Experience',
                    requirementDescription: '+4 years of design experience with a strong emphasis on UI design. Experience at a startup agency is highly desirable!'
                },
                {
                    requirementsTitle: 'UI Skills',
                    requirementDescription: '+4 years of design experience with a strong emphasis on UI design. Experience at a startup agency is highly desirable!'
                },
                {
                    requirementsTitle: 'Web Mastery',
                    requirementDescription: 'Showcase advanced proficiency in web design, with a deep understanding of user interfaces, user experience principles, and the ability to create visually compelling and user-friendly websites.'
                },
                {
                    requirementsTitle: 'Organization',
                    requirementDescription: 'Skilled in systemic design for team-wide use, covering components, typography, colors, grids, and margins.'
                },
                {
                    requirementsTitle: 'Accountable',
                    requirementDescription: 'Take ownership, solve problems independently, and commit to project success.'
                },
                {
                    requirementsTitle: 'Communication',
                    requirementDescription: 'Effective in team and client communication, presenting research and design concepts.'
                },
                {
                    requirementsTitle: 'Language',
                    requirementDescription: 'Fluent in English for global collaboration.'
                },
                {
                    requirementsTitle: 'User-Centric',
                    requirementDescription: 'Understand user and client needs, focusing on accessibility, scalability, and storytelling.'
                }
            ]
        },
        {
            title: 'Marketing UX-UI Designer',
            badges: [
                {
                    icon: <FiMapPin size={20} />,
                    title: 'Sri Lanka'
                },
                {
                    icon: <FiBriefcase size={20}/>,
                    title: 'Full time'
                },
                {
                    icon: <FiMonitor size={20}/>,
                    title: 'Remote'
                },
            ],
            description: 'We’re looking to hire a full-time remote Senior UX/UI Designer to join our team and contribute ' +
                'to creating seamless user experiences for our projects. In this role, you will be responsible for designing ' +
                'fully responsive visuals from start to finish, ensuring a high-quality user experience.',
            heading1: 'Company Overview',
            description1: 'At Metaroon Labs, we are dedicated to delivering top-notch tech solutions that meet the unique needs of our clients. ' +
                'Our team of experienced professionals is passionate about utilizing the latest and most effective technology to create ' +
                'innovative and practical solutions. We are committed to excellence, collaboration, and continuous learning to provide the ' +
                'highest quality services to our clients',
            heading2: 'About the Role',
            description2: 'We’re looking to hire a full-time remote Senior UX/UI Designer to join our team and contribute to creating seamless ' +
                'user experiences for our projects. In this role, you will be responsible for designing fully responsive visuals from ' +
                'start to finish, ensuring a high-quality user experience.',
            description3: 'You\'ll have the opportunity to collaborate with a team of top-tier designers, focusing on teamwork, ' +
                'communication, and product quality. While aligning some of your working hours with the US team is important, the ' +
                'overall work schedule is flexible.',
            heading3: 'Responsibilities',
            responsibilities: [
                'Conduct thorough user research to understand needs, behaviors, and preferences',
                'Analyze data and insights to inform design decisions and improvements.',
                'Design intuitive, user-friendly interfaces that align with brand guidelines.',
                'Develop information architecture and user flows to optimize user experience.',
                'Create low-fidelity and high-fidelity wireframes and interactive prototypes to visualize, test, and iterate on designs.',
                'Plan and conduct usability testing to gather feedback and iterate designs.'
            ],
            heading4: 'Requirements',
            requirements: [
                {
                    requirementsTitle: 'Experience',
                    requirementDescription: '+4 years of design experience with a strong emphasis on UI design. Experience at a startup agency is highly desirable!'
                },
                {
                    requirementsTitle: 'UI Skills',
                    requirementDescription: '+4 years of design experience with a strong emphasis on UI design. Experience at a startup agency is highly desirable!'
                },
                {
                    requirementsTitle: 'Web Mastery',
                    requirementDescription: 'Showcase advanced proficiency in web design, with a deep understanding of user interfaces, user experience principles, and the ability to create visually compelling and user-friendly websites.'
                },
                {
                    requirementsTitle: 'Organization',
                    requirementDescription: 'Skilled in systemic design for team-wide use, covering components, typography, colors, grids, and margins.'
                },
                {
                    requirementsTitle: 'Accountable',
                    requirementDescription: 'Take ownership, solve problems independently, and commit to project success.'
                },
                {
                    requirementsTitle: 'Communication',
                    requirementDescription: 'Effective in team and client communication, presenting research and design concepts.'
                },
                {
                    requirementsTitle: 'Language',
                    requirementDescription: 'Fluent in English for global collaboration.'
                },
                {
                    requirementsTitle: 'User-Centric',
                    requirementDescription: 'Understand user and client needs, focusing on accessibility, scalability, and storytelling.'
                }
            ]
        }
    ]

    return (
        <>
            <TabBar />
            {
                jobDetails.map((jobDetail, index) => (
                    <JobCard
                        key={index}
                        title={jobDetail.title}
                        badges={jobDetail.badges}
                        description={jobDetail.description}
                        heading1={jobDetail.heading1}
                        description1={jobDetail.description1}
                        heading2={jobDetail.heading2}
                        description2={jobDetail.description2}
                        description3={jobDetail.description3}
                        heading3={jobDetail.heading3}
                        responsibilities={jobDetail.responsibilities}
                        heading4={jobDetail.heading4}
                        requirements={jobDetail.requirements}
                    />
                ))
            }
        </>
    );
}

export default CareersBody;