https://codebuild.us-east-2.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiczFwZW5LMDdZZmdxRHA1b2d0QjNCYUVZVFV6R2o3N3dtT2xKUVBqSlIxZEtnc1JhMmNmY2lkci9LQVErVU1Xd3MzRGtmUVJidzNtRmVFd1lMTEhwUVU4PSIsIml2UGFyYW1ldGVyU3BlYyI6IjJ1cE84YkQ4c1BXSEdZeHAiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master

# Outline

The idea of this repository is to define resume data in a single place, with change history.  This data will follow a schema, which other web projects can consume to display the uniform data in different ways.  This allows for learning and displaying the skills of different frameworks from a single source of truth.

Currently, this YAML is being stored in S3 and will be pulled from the corresponding bucket.  This also enables fast decemination of information across all frameworks whenever the data needs to change.  

# Resume Data Schema

- `sections` - An ordered list of sections that will be generated for display.  
  - `title` - Title of each section
  - `type` - Type of section for displaying the data
  - `asset` - Image asset to be used for the section, as either a background or foreground image.
- `social_media` - Collection of social media contacts


- Section Types
  - `intro` - Basic section that consists of title and image asset
  - `experience` - Section that summarizes work experience and outlines skills
  - `jobs` - Section breaking down work history and past experiences
    - `jobs` - Ordered list of past work experience
      - `company` - Company Name
      - `time` - Time spent at the company
      - `asset` - Image asset (logo or picture) of the company
      - `positions` - Ordered list with the positions held while at the specific company
        - `title` - Job Title while on team
        - `team` - Name of the specific team
        - `points` - Bullet points outlining roles and responsibilities while on the team
  - `projects` - Collection of contributions outside of work experience 
  - `contact` - Section with an email address for communication or contact
