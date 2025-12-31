// lib/data.tsx

import type { FAQ } from '@/types'

export const faqs: FAQ[] = [
  {
    question: "What kind of IT optimization and AI services do you offer?",
    answer: "OpenCode Solutions provides a full suite of services across KSA, including AI model integration, IT automation with Red Hat Ansible, hybrid cloud infrastructure design, and expert Kubernetes and OpenShift deployment. We help businesses modernize from the ground up.",
  },
  {
    question: "Which products does OpenCode work with?",
    answer: "We work with Red Hat OpenShift, OpenShift AI, Ansible, Red Hat Enterprise Linux, GitLab, VMware, and other open-source and enterprise tools.",
  },
  {
    question: "What is the benefit of using Red Hat OpenShift for a business in KSA?",
    answer: "Red Hat OpenShift provides an enterprise-grade Kubernetes platform that accelerates application development, improves security, and simplifies management across hybrid cloud environments. It's ideal for Saudi businesses looking to build scalable, resilient applications with reliable support."
  },
  {
    question: "Do you handle cloud migration and Kubernetes deployments?",
    answer: "Yes, absolutely. Our core expertise is helping businesses in Saudi Arabia migrate to the cloud and manage containerized applications. We handle everything from initial strategy and database design to full Kubernetes cluster management, ensuring a smooth and secure transition."
  },
  {
    question: "Do you offer training services?",
    answer: "Absolutely. We provide customized hands-on training and workshops to help your team get the most out of the technologies we implement.",
  },
  {
    question: "We need our team to learn these new technologies. Do you offer training?",
    answer: "Yes, we believe in empowerment. We provide customized, hands-on training workshops for teams across Saudi Arabia to master the technologies we implement, including OpenShift, Ansible, and more. This ensures your team can manage the new infrastructure with confidence."
  },
  {
    question: "How can automation with a tool like Ansible reduce my operational costs?",
    answer: "By automating repetitive IT tasks like provisioning, configuration management, and application deployment, Red Hat Ansible reduces human error, frees up your engineering team for innovation, and significantly lowers operational costs. Many of our clients in the region see a rapid return on their automation investment."
  },
  {
    question: "Does OpenCode support other open-source tools besides Red Hat?",
    answer: "Yes, while we specialize in Red Hat products, we integrate various open-source and enterprise technologies to deliver the best solution for your business.",
  },
  {
    question: "How do I get started with OpenCode Solutions?",
    answer: (
      <>
        The first step is a simple consultation.{' '}
        <a href='#contact' className='text-teal-400 hover:text-teal-300'>
          Contact our team here
        </a>
        , and we will schedule a call to understand your specific challenges and business goals. From there, we'll create a tailored IT modernization proposal for you.
      </>
    )
  }
]