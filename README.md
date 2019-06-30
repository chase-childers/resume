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
