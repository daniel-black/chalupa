export interface SearchResult {
  readonly SearchResultCount: number;
  readonly SearchResultCountAll: number;
  readonly SearchResultItems: SearchResultItem[];
  readonly UserArea: UserArea;
}

export interface SearchResultItem {
  readonly MatchedObjectDescriptor: MatchedObjectDescriptor;
  readonly MatchedObjectId: string;
  readonly RelevanceRank: number;
}

export interface MatchedObjectDescriptor {
  readonly PositionTitle: string;
  readonly PositionURI: string;
  readonly QualificationSummary: string;
  readonly PublicationStartDate: string;
  readonly ApplicationCloseDate: string;
  readonly PositionStartDate: string;
  readonly PositionEndDate: string;
  readonly DepartmentName: string;
  readonly OrganizationName: string;
  readonly SubAgency: string;
  readonly ApplyURI: string[]; // array of length 1
  readonly JobCategory: JobCategory[];
  readonly JobGrade: JobGrade[];
  readonly PositionID: string;
  readonly PositionLocation: PositionLocation[];
  readonly PositionLocationDisplay: string;
  readonly PositionOfferingType: PositionOfferingType[];
  readonly PositionRemuneration: PositionRemuneration[];
  readonly PositionSchedule: PositionSchedule[];
  readonly UserArea: UserArea;
}

export interface JobCategory {
  readonly Name: string;
  readonly Code: string;
}

export interface JobGrade {
  readonly Code: string;
}

export interface PositionLocation {
  readonly CityName: string;
  readonly CountryCode: string;
  readonly CountrySubDivisionCode: string;
  readonly LocationName: string;
  readonly Latitude: number;
  readonly Longitude: number;
}

export interface PositionOfferingType {
  readonly Name: string;
  readonly Code: string;
}

export interface PositionRemuneration {
  readonly Description: string;
  readonly MaximumRange: string;
  readonly MinimumRange: string;
  readonly RateIntervalCode: string;
}

export interface PositionSchedule {
  readonly Name: string;
  readonly Code: string;
}

export interface UserArea {
  readonly IsRadialSearch: boolean;
  readonly NumberOfPages?: string;
  readonly Details?: Details;
}

export interface Details {
  readonly AdjudicationType: string[];
  readonly AgencyContactEmail: string;
  readonly AgencyContactPhone: string;
  readonly AgencyMarketingStatement: string;
  readonly AnnouncementClosingType: string;
  readonly ApplyOnlineUrl: string;
  readonly Benefits: string;
  readonly BenefitsDisplayDefaultText: string;
  readonly BenefitsUrl: string;
  readonly CommuteDistance: string;
  readonly DetailStatusUrl: string;
  readonly DrugTestRequired: string; // "True" or "False"
  readonly Education: string;
  readonly Evaluations: string;
  readonly HighGrade: string;
  readonly LowGrade: string;
  readonly HiringPath: string[];
  readonly HowToApply: string;
  readonly JobSummary: string;
  readonly KeyRequirements: [];
  readonly MajorDuties: string[];
  readonly OrganizationCodes: string;
  readonly OtherInformation: string;
  readonly PositionSensitivitiy: string;
  readonly PromotionPotential: string;
  readonly Relocation: string; // "True" or "False"
  readonly RemoteIndicator: boolean;
  readonly RequiredDocuments: string;
  readonly Requirements: string;
  readonly SecurityClearance: string;
  readonly ServiceType: string;
  readonly TeleworkEligible: boolean;
  readonly TotalOpenings?: string;
  readonly TravelCode: string;
  readonly WhatToExpectNext: string;
  readonly WhoMayApply: string;
  readonly WithinArea: string; // "True" or "False"

}

export interface WhoMayApply {
  readonly Code: string;
  readonly Name: string;
}

export enum HiringPaths {
  'DISABILITY' = 'Individuals with disabilities',
  'FED' = 'Federal employees',
  'FED-COMPETITIVE' = 'Federal employees - Competitive service',
  'FED-EXCEPTED' = 'Federal employees - Excepted service',
  'FED-INTERNAL-NOSEARCH' = 'Internal to an agency - does not appear on USAJOBS',
  'FED-INTERNAL-SEARCH' = 'Internal to an agency - appears on USAJOBS',
  'FED-TRANSITION' = 'Career transition (CTAP, ICTAP, RPL)',
  'GRADUATES' = 'Recent graduates',
  'LAND' = 'Land & base management',
  'MSPOUSE' = 'Military spouses',
  'NATIVE' = 'Native Americans',
  'NGUARD' = 'National Guard & Reserves',
  'NOPUBLIC' = 'Exclusive posting',
  'OVERSEAS' = 'Family of overseas employees',
  'PEACE' = 'Peace Corps & AmeriCorps Vista',
  'PUBLIC' = 'The public',
  'SE-OTHER' = 'Senior executives - Other',
  'SES' = 'Senior executives',
  'SPECIAL-AUTHORITIES' = 'Special authorities',
  'STUDENT' = 'Students',
  'VET' = 'Veterans',
}

export type ApiParams = 
  | 'Keyword'
  | 'PositionTitle'
  | 'RemunerationMinimumAmount'
  | 'RemunerationMaximumAmount'
  | 'LocationName'
  | 'Organization'
  | 'SortField'
  | 'SortDirection'   // value: 'Asc' or 'desc'
  | 'Page'
  | 'ResultsPerPage'
  | 'WhoMayApply'
  | 'RemoteIndicator'; // value: 'True' or 'False'

// DATA TYPES SENT TO USERS

export interface JobsData {
  numJobsReturned: number;
  numTotalJobs: number;
  jobs: Job[];
}

export interface Job {
  id: string;
  title: string;
  urlToAppy: string;
  qualifications: string;
  dept: string;
  org: string;
  subAgency?: string;
  agencyEmail?: string;
  agencyPhone?: string;
  agencyBlurb?: string;
  pay: Pay;
  locations: Location[];
  summary?: string;
  duties?: string[];
  requirements?: string;
  requiredDocs?: string;
  totalOpenings?: string;
  howToApply?: string;
  whatToExpectNext?: string;
  education?: string;
  evaluations?: string;
}

export interface Pay {
  per: string;
  max: string;
  min: string;
}

export interface Location {
  cityName: string;
  countryCode: string;
  countrySubDivisionCode: string;
  locationName: string;
  lat: number;
  lng: number;
}

export interface MyApiResponse {
  result: JobsData | string;
}