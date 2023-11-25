export interface JobSearch {
  searchTerm: string;
  country: string;
  city: string;
}
export interface JobSearchResult {
  id: string;
  application_url: string;
  company_name: string;
  plain_text_description: string;
  publication_time: string;
  source: string;
  title: string;
  salary: {
    currency: string;
    min_salary: number;
    max_salary: number;
    salary_type: string;
  };
}

export interface JobListingProps {
  title: string;
  description: string;
  applicationUrl: string;
  salary: {
    currency: string;
    min_salary: number;
    max_salary: number;
    salary_type: string;
  };
  companyName: string;
  id: string | Number;
  source: string;
  publicationTime: string;
}
