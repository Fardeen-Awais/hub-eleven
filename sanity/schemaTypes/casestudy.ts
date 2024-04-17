import { defineField, defineType } from "sanity";

export default defineType({
  name: "case-study",
  title: "Case Study",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (rule) => [
        rule.required().error("Project title is required"),
        rule.min(10).warning("At least 10 charcter is required"),
        rule.max(20).error("Maximum 20 character is enough for title"),
      ],
    }),
    defineField({
      name: "desc",
      title: "Project Description",
      type: "string",
      validation: (rule) => [
        rule.required().error("Project description is required"),
        rule.min(30).error("At least 30 charcter is required"),
        rule.max(220).error("Maximum 220 character is enough for desc"),
      ],
    }),
    defineField({
      name: "industry",
      title: "Industry",
      type: "string",
      validation: (rule) => [
        rule.required().error("Industry name is required"),
        rule.min(10).warning("At least 10 charcter is useful"),
        rule.max(25).error("Maximum 25 character is enough for defining field"),
      ],
    }),
    defineField({
      name: "link",
      title: "Project link",
      type: "url",
      validation: (rule) => [
        rule.required().error("Url is required"),
        rule
          .uri({
            scheme: ["http", "https"], // only allow http and https URLs
            allowRelative: false, // do not allow relative URLs
          })
          .error("Please enter a valid URL"),
      ],
    }),
    {
      title: "Provided Services",
      name: "services",
      type: "array",
      of: [
        {
          type: "string",
          options: {
            list: [
              { title: "Amazon", value: "amazon" },
              { title: "Search Engine Optimization", value: "seo" },
              { title: "PPC", value: "ppc" },
              { title: "Email Marketing", value: "email marketing" },
              { title: "Social Media Organic", value: "social media organic" },
              { title: "Meta Ads", value: "meta_ads" },
              { title: "Influencer Marketing", value: "influencer marketing" },
              { title: "Ecommerce Store", value: "ecommerce store" },
              { title: "Business Sites", value: "business sites" },
              {
                title: "Custom Web Application",
                value: "custom_web_application",
              },
              { title: "Content Writing", value: "content writing" },
              { title: "Videography", value: "videography" },
              { title: "Logo Designing", value: "logo designing" },
              { title: "UI/UX Design", value: "ui ux design" },
              { title: "Flyers and Brochures", value: "flyers and brochures" },
            ],
            layout: "dropdown", // Display as tags for multiselect
            max: 4, // Set maximum selections to 4
          },
        },
      ],
      validation: (rule) => [
        rule.required().error("Provided services is required"),
      ],
    },
    {
      title: "Tech Stack",
      name: "tech",
      type: "array",
      of: [
        {
          type: "string",
          options: {
            layout: "dropdown", // Display as tags for multiselect
            max: 5, // Set maximum selections to 4
          },
        },
      ],
    },
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
    defineField({
      name: "body",
      title: "About Project",
      type: "blockContent",
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
