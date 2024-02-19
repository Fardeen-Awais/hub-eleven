import { icons } from "lucide-react";

export const services = [
  {
    title: 'Digital Marketing',
    image: '/services/Digital_marketing.gif',
    href: '/services/digital_marketing',
    description: 'Boost your online presence with our comprehensive Digital Marketing services.',
    subservices: [
      {
        title: 'Amazon',
        image: '/services/amazon.gif',
        href: '/services/digital_marketing/amazon',
        description: 'Leverage the power of Amazon for your digital marketing strategies. Enhance your product visibility and drive sales through Amazon’s vast marketplace.',
      },
      {
        title: 'Search Engine Optimization',
        image: '/services/seo.gif',
        href: '/services/digital_marketing/seo',
        description: 'Improve your website rankings and visibility with our SEO services. Our proven strategies drive organic traffic and enhance your online authority.',
      },
      {
        title: 'PPC',
        image: '/services/google_ads.gif',
        href: '/services/digital_marketing/ppc',
        description: 'Run effective advertising campaigns on Google to reach your target audience. Optimize ad placements and maximize your ROI with our expert Google Ads management.',
      },
      {
        title: 'Email Marketing',
        image: '/services/keyword_research.gif',
        href: '/services/digital_marketing/email_marketing',
        description: 'Strategize your content with in-depth Email Marketing. Identify and target the right keywords to enhance your online visibility and attract relevant traffic.',
      },
    ],
  },
  {
    title: 'Social Media Management',
    image: '/assets/SettingResearch.gif',
    href: '/services/social_media_management',
    description: "Maximize your brand's presence and engagement on social media platforms.",
    subservices: [
      {
        title: 'Social Media Organic',
        image: '/services/social_media_organic.gif',
        href: '/services/social_media_management/organic',
        description: 'Build organic reach and engagement on your social media channels.',
      },
      {
        title: 'Meta Ads',
        image: '/services/meta_ads.gif',
        href: '/services/social_media_management/meta_ads',
        description: 'Leverage meta ads for targeted social media advertising.',
      },
      {
        title: 'Influencer Marketing',
        image: '/services/influencer_marketing.gif',
        href: '/services/social_media_management/influencer_marketing',
        description: 'Collaborate with influencers to enhance your brand presence.',
      },
    ]
  },
  {
    title: 'Web Development',
    image: '/services/webdev_01.gif',
    href: '/services/web_development',
    description: 'Unlock the potential of modern web technologies with our Web Development services.',
    subservices: [
      {
        title: 'Ecommerce Store',
        image: '/services/ecommerce_store.gif',
        href: '/services/web_development/ecommerce_store',
        description: 'Create a powerful and scalable ecommerce platform for your business.',
      },
      {
        title: 'Business Sites',
        image: '/services/business_sites.gif',
        href: '/services/web_development/business_sites',
        description: 'Develop professional and effective websites tailored to your business needs.',
      },
      {
        title: 'Custom Web Application',
        image: '/services/custom_web_app.gif',
        href: '/services/web_development/custom_web_application',
        description: 'Build customized web applications to meet your specific requirements.',
      },
      // Add more subservices as needed...
    ],
  },
  {
    title: 'Content Creation',
    image: '/services/content_creation.gif',
    href: '/services/content_creation',
    description: 'Elevate your brand with our creative Content Creation services.',
    subservices: [
      {
        title: 'Content Writing',
        image: '/services/content_writing.gif',
        href: '/services/content_creation/content_writing',
        description: 'Craft compelling and engaging written content for your brand.',
      },
      {
        title: 'Videography',
        image: '/services/videography.gif',
        href: '/services/content_creation/videography',
        description: 'Produce high-quality videos that tell your brand story effectively.',
      },
      // Add more subservices as needed...
    ],
  },
  {
    title: 'Graphic Designing',
    image: '/services/graphic_designing.gif',
    href: '/services/graphic_designing',
    description: 'Transform your brand visuals with our creative Graphic Designing services.',
    subservices: [
      {
        title: 'Logo Designing',
        image: '/services/logo_designing.gif',
        href: '/services/graphic_designing/logo_designing',
        description: 'Create a distinctive and memorable brand identity with our logo design services.',
      },
      {
        title: 'UI/UX Design',
        image: '/services/ui_ux_design.gif',
        href: '/services/graphic_designing/ui_ux_design',
        description: 'Enhance user experience and engagement with our expert UI/UX design solutions.',
      },
      {
        title: 'Flyers and Brochures',
        image: '/services/flyers_brochures.gif',
        href: '/services/graphic_designing/flyers_brochures',
        description: 'Craft visually appealing flyers and brochures to communicate your brand message effectively.',
      },
      // Add more subservices as needed...
    ],
  },
];

export const DigitalMarketing = {
  title: 'Digital Marketing Services',
  description: `Elevate your online presence and drive meaningful results with our comprehensive Digital Marketing Solutions. At HubEleven, we go beyond traditional marketing approaches, leveraging the power of digital channels to connect your brand with the right audience.`,
  image: '/services/DM/digital_marketing.gif',
  sections: [
    {
      title: 'Amazon Marketing',
      description: `Leverage the power of Amazon for your digital marketing strategies. Enhance your product visibility and drive sales through Amazon’s vast marketplace. 
      Our Amazon Marketing services are designed to maximize your presence on the e-commerce giant, ensuring that your products stand out amidst the competition. We strategically optimize product listings, implement targeted advertising, and employ data-driven approaches to boost your success on Amazon.`,
      image: '/services/DM/digitalmarketing_amazon.jpg',
      href: '/services/digital_marketing/amazon',
      sections: [
        {
          title: 'Data-Driven Optimization Centered on Profitability',
          subheading: "PPC",
          description: `Unlock the potential of Amazon's advertising platform with our data-led optimization services tailored for profitability. We specialize in navigating Amazon's advertising ecosystem to deliver targeted ads that drive results.

          Amazon PPC campaigns are most effective when paired with strategic organic optimizations, ensuring maximum visibility for your products while optimizing your budget allocation. Our approach focuses on efficiency, utilizing your resources effectively to achieve the best possible outcomes.
          .`,
          image: 'https://images.pexels.com/photos/7661590/pexels-photo-7661590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          href: '/services/digital_marketing/ppc',
        },
        {
          title: 'SEO Strategies',
          subheading: "SEO",
          description: `Craft a powerful plan to elevate your website's visibility and rankings on search engines through our proven SEO strategies. We meticulously optimize your online content, conduct in-depth keyword analysis, and implement effective tactics to drive sustainable organic traffic. Our SEO experts stay abreast of industry trends and algorithm updates to ensure that your website remains at the forefront of search engine results, attracting the right audience and enhancing online authority.`,
          image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          href: '/services/digital_marketing/seo',
        },
        {
          title: 'Enhance Your Email Marketing Efforts',
          subheading: "Email Marketing",
          description: `Elevate your digital marketing strategy by incorporating email marketing campaigns tailored to your audience. Our expert team crafts compelling email content, designs visually appealing templates, and implements targeted email automation to engage your subscribers effectively. With our data-driven approach, we analyze metrics and user behavior to optimize your email campaigns for maximum impact and conversion. Let us help you unlock the full potential of email marketing to drive engagement, nurture leads, and boost sales.          `,
          image: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          href: '/services/digital_marketing/email_marketing',
        },

      ],
      faq: [
        {
          question: 'What Amazon services do you offer?',
          answer: 'We provide comprehensive Amazon services tailored to optimize your presence on the platform. Our offerings include Amazon PPC management, product listing optimization, brand store setup, and strategic consulting to maximize your sales and visibility on the e-commerce giant.'
        },
        {
          question: 'How can Amazon marketing benefit my business?',
          answer: 'Amazon marketing is instrumental in enhancing your product visibility, driving targeted traffic, and ultimately increasing sales on the platform. With our strategic approach to Amazon marketing, we help you reach a wider audience, improve brand recognition, and achieve higher conversion rates, leading to significant revenue growth.'
        },
        {
          question: 'Is Amazon marketing suitable for my business?',
          answer: "Absolutely! Amazon marketing is adaptable and beneficial for businesses of all sizes and industries. Whether you're a small startup or a large enterprise, our customized Amazon marketing strategies are designed to align with your specific business goals and market dynamics, ensuring optimal results and ROI."
        },
        {
          question: 'What benefits does Amazon PPC offer?',
          answer: 'Amazon PPC (Pay-Per-Click) advertising offers several benefits, including increased product visibility, precise targeting of potential customers, measurable results through detailed analytics, and the ability to control ad spend according to your budget and goals.'
        },
        {
          question: 'How do you optimize Amazon product listings?',
          answer: "We optimize Amazon product listings by conducting keyword research, optimizing product titles and descriptions, enhancing product images, and ensuring that listings adhere to Amazon's guidelines and best practices. This optimization process helps improve search rankings and visibility, leading to higher click-through rates and sales."
        }
      ],
      stats: [
        {
          data: "90%",
          title: "Client Success Rate"
        },
        {
          data: "13+",
          title: "Countries Served"
        },
        {
          data: "2x",
          title: "Revenue Growth"
        }
      ]

    },
    {
      title: 'SEO Strategies',
      description: `Craft a powerful plan to elevate your website's visibility and rankings on search engines through our proven SEO strategies. We meticulously optimize your online content, conduct in-depth keyword analysis, and implement effective tactics to drive sustainable organic traffic. Our SEO experts stay abreast of industry trends and algorithm updates to ensure that your website remains at the forefront of search engine results, attracting the right audience and enhancing online authority.`,
      image: '/services/DM/digitalmarketing_seo.jpg',
      href: '/services/digital_marketing/seo',
      sections: [
        {
          title: 'Data-Driven Optimization Centered on Profitability',
          subheading: "PPC",
          description: `Unlock the potential of Amazon's advertising platform with our data-led optimization services tailored for profitability. We specialize in navigating Amazon's advertising ecosystem to deliver targeted ads that drive results.

          Amazon PPC campaigns are most effective when paired with strategic organic optimizations, ensuring maximum visibility for your products while optimizing your budget allocation. Our approach focuses on efficiency, utilizing your resources effectively to achieve the best possible outcomes.
          .`,
          image: 'https://images.pexels.com/photos/7661590/pexels-photo-7661590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          href: '/services/digital_marketing/ppc',
        },
        {
          title: 'Push Amazon with SEO',
          subheading: "Amazon",
          description: `Craft a powerful plan to elevate your product's visibility and rankings on Amazon's vast marketplace through our proven SEO strategies. We meticulously optimize your product listings, conduct in-depth keyword analysis, and implement effective tactics to drive sustainable organic traffic to your Amazon store. Our SEO experts stay abreast of Amazon's algorithms and industry trends to ensure that your products remain at the forefront of search results, attracting the right audience and enhancing online authority.`,
          image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          href: '/services/digital_marketing/seo',
        },
        {
          title: 'Enhance Your Email Marketing Efforts',
          subheading: "Email Marketing",
          description: `Elevate your digital marketing strategy by incorporating email marketing campaigns tailored to your audience. Our expert team crafts compelling email content, designs visually appealing templates, and implements targeted email automation to engage your subscribers effectively. With our data-driven approach, we analyze metrics and user behavior to optimize your email campaigns for maximum impact and conversion. Let us help you unlock the full potential of email marketing to drive engagement, nurture leads, and boost sales.          `,
          image: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          href: '/services/digital_marketing/email_marketing',
        },

      ],
      faq: [
        {
          question: 'What SEO services do you offer?',
          answer: "We offer a comprehensive range of SEO services tailored to enhance your website's visibility and rankings on search engines. Our services include on-page optimization, off-page optimization, keyword research, content creation, technical SEO audits, and SEO strategy development."
        },
        {
          question: 'How can SEO benefit my business?',
          answer: "SEO can benefit your business in numerous ways. By improving your website's visibility and rankings on search engines, SEO helps drive organic traffic to your site, increases brand awareness, attracts relevant leads, and boosts conversions and revenue. Additionally, SEO provides long-term sustainable results and offers a high return on investment (ROI)."
        },
        {
          question: 'Is SEO suitable for my business?',
          answer: "Absolutely! SEO is essential for businesses of all sizes and industries that aim to establish a strong online presence and compete effectively in today's digital landscape. Whether you're a small local business or a multinational corporation, our customized SEO strategies can be tailored to align with your specific business goals and target audience, ensuring maximum effectiveness and results."
        },
        {
          question: 'What are the benefits of investing in SEO?',
          answer: 'Investing in SEO offers a multitude of benefits for your business. Some key advantages include increased website traffic, improved search engine rankings, enhanced brand credibility and authority, higher conversion rates, better user experience, and long-term sustainability. SEO also provides valuable insights into customer behavior and market trends, helping you make informed business decisions.'
        },
        {
          question: 'How do you measure the success of SEO campaigns?',
          answer: "We measure the success of SEO campaigns through various key performance indicators (KPIs) such as organic traffic growth, keyword rankings, backlink quality and quantity, conversion rates, and return on investment (ROI). Additionally, we conduct regular SEO audits and performance analyses to track progress, identify areas for improvement, and ensure that our strategies align with your business objectives."
        }
      ],
      stats: [
        {
          data: "90%",
          title: "Client Success Rate"
        },
        {
          data: "30+",
          title: "Satisfied Clients"
        },
        {
          data: "10x",
          title: "Search Engine Traffic"
        }
      ]
    },
    {
      title: 'PPC Advertising',
      description: `Align your marketing goals with instant visibility and targeted traffic through our strategic PPC campaigns. We skillfully optimize ad placements, set budget-friendly bids, and conduct thorough performance analysis, ensuring a substantial return on investment for your business. Our PPC Advertising services cover platforms like Google Ads, ensuring that your ads reach the right audience at the right time, maximizing conversions and minimizing wasteful spending.`,
      image: '/services/DM/digitalmarketing_ppc.jpg',
      href: '/services/digital_marketing/ppc',
      sections: [
        {
          title: 'Push Amazon with PPC',
          subheading: "Amazon",
          description: `Leverage the power of Amazon for your digital marketing strategies. Enhance your product visibility and drive sales through Amazon’s vast marketplace. Our Amazon Marketing services are designed to maximize your presence on the e-commerce giant, ensuring that your products stand out amidst the competition. We strategically optimize product listings, implement targeted advertising, and employ data-driven approaches to boost your success on Amazon.`,
          image: 'https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          href: '/services/digital_marketing/seo',
        },
        {
          title: 'SEO Strategies',
          subheading: "SEO",
          description: `Craft a powerful plan to elevate your product's visibility and rankings on Amazon's vast marketplace through our proven SEO strategies. We meticulously optimize your product listings, conduct in-depth keyword analysis, and implement effective tactics to drive sustainable organic traffic to your Amazon store. Our SEO experts stay abreast of Amazon's algorithms and industry trends to ensure that your products remain at the forefront of search results, attracting the right audience and enhancing online authority.`,
          image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          href: '/services/digital_marketing/seo',
        },
        {
          title: 'Enhance Your Email Marketing Efforts',
          subheading: "Email Marketing",
          description: `Elevate your digital marketing strategy by incorporating email marketing campaigns tailored to your audience. Our expert team crafts compelling email content, designs visually appealing templates, and implements targeted email automation to engage your subscribers effectively. With our data-driven approach, we analyze metrics and user behavior to optimize your email campaigns for maximum impact and conversion. Let us help you unlock the full potential of email marketing to drive engagement, nurture leads, and boost sales.`,
          image: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          href: '/services/digital_marketing/email_marketing',
        },

      ],
      faq: [
        {
          question: 'What PPC services do you offer?',
          answer: "We offer a comprehensive range of PPC services designed to maximize your advertising efforts and drive results. Our services include PPC campaign management, keyword research, ad copy creation, bid management, performance tracking, and optimization."
        },
        {
          question: 'How can PPC benefit my business?',
          answer: "PPC can benefit your business in several ways. By placing targeted ads in front of your audience at the right time, PPC helps increase brand visibility, drive relevant traffic to your website, and generate leads and conversions. Additionally, PPC offers precise targeting options, real-time performance tracking, and the ability to control ad spend, ensuring a high return on investment (ROI) for your advertising budget."
        },
        {
          question: 'Is PPC suitable for my business?',
          answer: "Absolutely! PPC is a versatile advertising channel suitable for businesses of all sizes and industries. Whether you're a small startup or a large enterprise, PPC can be tailored to align with your specific goals, target audience, and budget. With its flexibility, scalability, and measurable results, PPC offers an effective way to reach your marketing objectives and drive business growth."
        },
        {
          question: 'What are the benefits of investing in PPC?',
          answer: 'Investing in PPC offers numerous benefits for your business. Some key advantages include immediate visibility and traffic, precise audience targeting, measurable results, flexibility and control over ad spend, and the ability to test and optimize campaigns in real time. PPC also complements other marketing channels, enhances brand awareness, and drives conversions across various stages of the customer journey.'
        },
        {
          question: 'How do you measure the success of PPC campaigns?',
          answer: "We measure the success of PPC campaigns through various key performance indicators (KPIs) such as click-through rate (CTR), conversion rate, cost per acquisition (CPA), return on ad spend (ROAS), and overall campaign performance. Additionally, we utilize advanced analytics tools and tracking technologies to monitor campaign metrics, identify areas for improvement, and optimize ad performance for maximum results."
        }
      ],
      stats: [
        {
          data: "90%",
          title: "Client Success Rate"
        },
        {
          data: "30+",
          title: "Satisfied Clients"
        },
        {
          data: "10x",
          title: "Increase in Conversions"
        }
      ]

    },
    {
      title: 'Email Marketing',
      description: `Maximize your reach with effective email marketing campaigns. Our tailored strategies focus on delivering personalized content, nurturing leads, and driving conversions, ensuring that your email marketing contributes to your overall digital success. From crafting engaging newsletters to implementing automated drip campaigns, our Email Marketing services are designed to keep your audience engaged and drive measurable results.`,
      image: '/services/DM/digitalmarketing_email.jpg',
      href: '/services/digital_marketing/email_marketing',
      sections: [
        {
          title: 'Integrated Email and PPC Strategies',
          subheading: "PPC",
          description: `Discover the synergies between email marketing and pay-per-click (PPC) advertising to amplify your marketing efforts and drive superior results.
        
          Our integrated approach combines the power of email marketing and PPC advertising to create a seamless and effective marketing strategy. By synchronizing your email campaigns with targeted PPC ads, we ensure consistent messaging across multiple channels, maximizing audience engagement and conversion opportunities.`,
          image: 'https://images.unsplash.com/photo-1557804483-ef3ae78eca57?q=80&w=1488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          href: '/services/integrated-marketing/email_marketing',
        },
        {
          title: 'Push Amazon with Email Marketing',
          subheading: "Email Marketing",
          description: `Leverage the power of email marketing to propel your Amazon business forward. Our tailored email marketing strategies are designed to engage your audience, drive sales, and increase brand loyalty on the Amazon platform.
      
          With targeted email campaigns, personalized content, and strategic automation, we help you reach your Amazon customers effectively, nurturing relationships and maximizing your ROI. Let us assist you in leveraging the full potential of email marketing to boost your Amazon sales and grow your business.`,
          image: 'https://images.unsplash.com/photo-1555421689-3f034debb7a6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          href: '/services/digital_marketing/email_marketing',
        },
        {
          title: 'Boost traffic with email campaigns',
          subheading: "SEO",
          description: `Optimize your product's visibility and rankings on Amazon's vast marketplace with our synergistic approach that combines email marketing and SEO strategies.
        
          Our integrated approach synchronizes targeted email campaigns with strategic SEO tactics to maximize your product's exposure and drive organic traffic to your Amazon store. Through meticulous keyword analysis and optimization techniques, we ensure that your product listings rank prominently in Amazon's search results, attracting relevant customers and enhancing online visibility.`,
          image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          href: '/services/integrated-marketing/amazon-email-seo',
        }
        
      ],
      faq: [
        {
          question: 'What email marketing services do you offer?',
          answer: "We offer a comprehensive range of email marketing services tailored to help you engage your audience effectively and drive results. Our services include email campaign management, email template design, audience segmentation, A/B testing, automation workflows, performance tracking, and more."
        },
        {
          question: 'How can email marketing benefit my business?',
          answer: "Email marketing can benefit your business in numerous ways. By leveraging targeted email campaigns, you can nurture leads, build customer relationships, drive website traffic, promote products or services, and increase sales and revenue. Additionally, email marketing provides a cost-effective way to reach your audience directly and measure campaign performance for continuous improvement."
        },
        {
          question: 'Is email marketing suitable for my business?',
          answer: "Absolutely! Email marketing is a versatile tool that can be tailored to suit businesses of all sizes and industries. Whether you're a small startup or a large enterprise, email marketing can help you connect with your audience, drive engagement, and achieve your business goals. Our customized email marketing strategies can be adapted to align with your specific objectives and target audience, ensuring maximum effectiveness and results."
        },
        {
          question: 'What are the benefits of investing in email marketing?',
          answer: "Investing in email marketing offers a multitude of benefits for your business. Some key advantages include increased brand awareness, improved customer engagement, higher conversion rates, enhanced customer loyalty, measurable ROI, and scalability. With email marketing, you can deliver personalized messages directly to your audience's inbox, fostering meaningful interactions and driving business growth."
        },
        {
          question: 'How do you measure the success of email marketing campaigns?',
          answer: "We measure the success of email marketing campaigns through various key performance indicators (KPIs) such as open rates, click-through rates, conversion rates, unsubscribe rates, and overall campaign ROI. Additionally, we conduct A/B testing and analyze campaign metrics to optimize performance, refine targeting strategies, and ensure that our email marketing efforts align with your business objectives."
        }
      ],
      stats: [
        {
          data: "90%",
          title: "Client Success Rate"
        },
        {
          data: "30+",
          title: "Satisfied Clients"
        },
        {
          data: "10x",
          title: "Increase in Email Engagement"
        }
      ],
    },
  ],
  faq: [
    {
      question: 'What Digital Marketing services do you offer?',
      answer: 'We offer a holistic suite of Digital Marketing services, including Search Engine Optimization (SEO), social media management, pay-per-click (PPC) advertising, content marketing, and more. Our goal is to create customized strategies that align with your business objectives and resonate with your target audience.',
    },
    {
      question: 'How will Digital Marketing benefit my business?',
      answer: 'Digital Marketing enhances your online visibility, drives targeted traffic to your website, and increases brand awareness. By leveraging various digital channels, we help you engage with your audience, build brand loyalty, and ultimately boost conversions and revenue.',
    },
    {
      question: 'Is Digital Marketing suitable for my industry or business size?',
      answer: 'Absolutely! Digital Marketing is versatile and can be tailored to suit businesses of all sizes and industries. Whether you\'re a startup, a small local business, or a large enterprise, our team crafts strategies that align with your specific goals and market dynamics.',
    },
  ],
  stats: [
    {
      data: "90%",
      title: "The success rate"
    },
    {
      data: "13+",
      title: "Countries"
    },
    {
      data: "2x",
      title: "Total revenue"
    },
  ],
};

export const WebDevelopment = {
  title: 'Web Development Services',
  description: `Unlock the potential of modern web technologies with our Web Development services. At HubEleven, we specialize in building cutting-edge web applications tailored to your specific needs.`,
  image: '/services/WEB/web.gif',
  sections: [
    {
      title: 'Ecommerce Store',
      image: '/services/WEB/web_ecommerce.jpg',
      href: '/services/web_development/ecommerce_store',
      description: `Establish a dominant online presence with our Ecommerce Store development services. We craft powerful and scalable platforms that not only showcase your products effectively but also provide a seamless shopping experience for your customers. From intuitive navigation to secure payment gateways, we ensure your ecommerce store stands out.`,
    },
    {
      title: 'Business Sites',
      image: '/services/WEB/web_business.jpg',
      href: '/services/web_development/business_sites',
      description: `Enhance your brand image with our Business Sites development. Our team creates professional and effective websites tailored to your business needs. We focus on user-friendly interfaces, responsive designs, and strategic content placement to ensure your business site attracts and engages visitors effectively.`,
    },
    {
      title: 'Custom Web Application',
      image: '/services/WEB/web_custom.jpg',
      href: '/services/web_development/custom_web_application',
      description: `Unlock the full potential of your online presence with Custom Web Applications. We specialize in building tailored web applications that address your specific business requirements. From database management to user authentication, our solutions are designed to streamline processes and enhance overall efficiency.`,
    },
  ],
  faq: [
    {
      question: 'What Web Development services do you offer?',
      answer: "We provide a wide range of Web Development services, including front-end and back-end development, e-commerce development, content management system (CMS) development, and more. Our goal is to deliver tailor-made solutions that align with your business needs.",
    },
    {
      question: 'How will Web Development benefit my business?',
      answer: "Web Development enhances your online presence by creating a user-friendly and functional web application. Whether you're looking to establish an e-commerce platform, showcase your portfolio, or manage content seamlessly, our solutions drive user engagement and contribute to business growth.",
    },
    {
      question: 'Is Web Development suitable for my industry or business size?',
      answer: "Absolutely! Web Development is versatile and can be customized for businesses of all sizes and industries. Whether you're a startup, a small business, or a large enterprise, our developers craft solutions that align with your unique goals and target audience.",
    },
  ],
  stats: [
    {
      data: "48",
      title: "Web Development Projects"
    },
    {
      data: "40+",
      title: "Countries"
    },
    {
      data: "30M+",
      title: "Total revenue"
    },
  ],

  // Add more subservices as needed...

};
export const SocialMediaManagement = {
  title: 'Social Media Management',
  description: `Enhance your brand's online presence and engage with your audience through our comprehensive Social Media Management services. At HubEleven, we offer a range of strategies to optimize your social media channels for maximum impact.`,
  image: '/services/SMM/social_media.gif',
  sections: [
    {
      title: 'Social Media Organic',
      image: '/services/SMM/social_media_organic.jpg',
      href: '/services/social_media_management/organic',
      description: `Overcome the common challenges faced by businesses on social media. Our advanced strategies address issues such as low organic reach, ineffective content, and the need for efficient social media management. We focus on building organic engagement and boosting your brand's visibility.`,
    },
    {
      title: 'Meta Ads',
      image: '/services/SMM/social_media_meta.jpg',
      href: '/services/social_media_management/meta_ads',
      description: `Define and achieve your online goals with our expertise in Social Media Management. Whether it's increasing organic reach, running targeted advertising campaigns, or collaborating with influencers, our strategies are tailored to meet your unique objectives.`,
    },
    {
      title: 'Influencer Marketing',
      image: '/services/SMM/social_media_influncer.jpg',
      href: '/services/social_media_management/influencer_marketing',
      description: `Experience the success that our Social Media Management services can bring to your business. Watch as your brand gains traction on social platforms, attracts a larger audience, and achieves higher engagement rates. Our proven track record ensures your satisfaction and long-term success.`,
    },
  ],

  faq: [
    {
      question: 'What Social Media Management services do you offer?',
      answer: "We offer a comprehensive suite of Social Media Management services, including organic growth strategies, meta ads campaigns, influencer marketing collaborations, and efficient social media channel management.",
    },
    {
      question: 'How will Social Media Management benefit my business?',
      answer: "Social Media Management enhances your brand's online visibility, increases organic reach, and improves audience engagement. Whether you're looking to run targeted ads, collaborate with influencers, or efficiently manage your social media channels, our strategies contribute to your brand's success.",
    },
    {
      question: 'Is Social Media Management suitable for my industry or business size?',
      answer: "Absolutely! Social Media Management is adaptable and can be customized for businesses of all sizes and industries. Whether you're a startup, a local business, or a large enterprise, our strategies are tailored to align with your specific goals and target audience.",
    },
  ],
  stats: [
    {
      data: "90%",
      title: "The success rate"
    },
    {
      data: "40+",
      title: "Countries"
    },
    {
      data: "2x",
      title: "Total revenue"
    },
  ],

};
export const ContentCreation = {
  title: 'Content Creation Creation',
  description: `Elevate your brand's narrative and captivate your audience with our comprehensive Content Creation services. At HubEleven, we bring your ideas to life through compelling written content and visually stunning videos.`,
  image: '/services/CONTENT/Content.gif',
  sections: [
    {
      title: 'Content Writing',
      description: `Craft compelling and engaging written content for your brand with our Content Writing services. Our expert writers create content that resonates with your target audience, communicates your brand message effectively, and drives meaningful engagement.`,
      image: '/services/CONTENT/content_write.jpg', // Replace with the actual path to your image
      href: '/services/content_creation/content_writing', // Replace with the actual href
    },
    {
      title: 'Videography',
      description: `Produce high-quality videos that tell your brand story effectively. Our Videography services are designed to capture the essence of your brand, creating visually appealing and impactful videos that leave a lasting impression on your audience.`,
      image: '/services/CONTENT/content_graphy.jpg', // Replace with the actual path to your image
      href: '/services/content_creation/videography', // Replace with the actual href
    },
  ],

  faq: [
    {
      question: 'What services do you offer under Content Creation?',
      answer: 'We offer Content Writing and Videography services. Our Content Writing services focus on creating written content that resonates with your audience, while our Videography services produce high-quality videos that effectively tell your brand story.',
    },
    {
      question: "How does Content Creation benefit my brand?",
      answer: "Content Creation enhances your brand's narrative, captivates your audience, and communicates your message effectively. Compelling written content and visually stunning videos contribute to a memorable and impactful brand presence.",
    },
    {
      question: 'Can I customize the Content Creation services for my specific needs?',
      answer: 'Absolutely! Our services are customizable to meet your unique requirements. Whether you need tailored content writing or specific videography styles, we work closely with you to bring your ideas to life.',
    },
  ],

  stats: [
    {
      data: '95%',
      title: 'Increased Reach',
    },
    {
      data: '5+',
      title: 'Company trusted',
    },
    {
      data: '4x',
      title: 'Success Rate',
    },
  ],
};
export const GraphicDesigning = {
  title: 'Graphic Designing Services',
  description: `Transform your brand's visual identity and captivate your audience with our expert Graphic Designing services. At HubEleven, we offer a range of creative solutions to elevate your brand's design elements.`,
  image: '/services/DESIGN/designing.gif',
  sections: [
    {
      title: 'Logo Designing',
      image: '/services/DESIGN/Design_logo.jpg',
      href: '/services/graphic_designing/logo_designing',
      description: `Create a distinctive and memorable brand identity with our logo design services. Our expert designers work collaboratively with you to craft a logo that reflects your brand's values and leaves a lasting impression on your audience. Whether you're starting a new venture or rebranding, we ensure your logo stands out amidst the competition.`,
    },
    {
      title: 'UI/UX Design',
      image: '/services/DESIGN/Design-ui.jpg',
      href: '/services/graphic_designing/ui_ux_design',
      description: `Enhance user experience and engagement with our expert UI/UX design solutions. Our designers focus on creating seamless and visually appealing interfaces that align with your brand's aesthetic and provide an optimal user experience. From website interfaces to mobile apps, we prioritize design elements that resonate with your target audience.`,
    },
    {
      title: 'Flyers and Brochures',
      image: '/services/DESIGN/Design-flyers.jpg',
      href: '/services/graphic_designing/flyers_brochures',
      description: `Craft visually appealing flyers and brochures to communicate your brand message effectively. Our graphic design team combines creativity and strategic thinking to design marketing collateral that stands out. Whether you're promoting an event, product, or service, our designs capture attention and drive engagement.`,
    },
    // Add more subservices as needed...
  ],

  faq: [
    {
      question: 'What Graphic Designing services do you offer?',
      answer: "We offer a comprehensive suite of Graphic Designing services, including logo designing, UI/UX design, and the creation of flyers and brochures. Our goal is to enhance your brand's visual identity and communication.",
    },
    {
      question: 'How will Graphic Designing benefit my brand?',
      answer: "Graphic Designing enhances your brand's visual appeal, creating a distinctive and memorable identity. Whether you're looking for a unique logo, an improved user interface, or visually stunning marketing materials, our solutions contribute to effective brand communication and engagement.",
    },
    {
      question: 'Is Graphic Designing suitable for my industry or business size?',
      answer: "Absolutely! Graphic Designing is adaptable and can be customized for brands of all sizes and industries. Whether you're a startup, a small business, or a large enterprise, our designers tailor solutions to align with your unique goals and target audience.",
    },
  ],

  stats: [
    {
      data: "85%",
      title: "Design Satisfaction"
    },
    {
      data: "30+",
      title: "Industries Served"
    },
    {
      data: "1M+",
      title: "Design Elements Created"
    },
  ],

};
