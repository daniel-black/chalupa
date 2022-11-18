import { 
  Job, 
  JobsData, 
  Location, 
  Pay, 
  PositionLocation, 
  PositionRemuneration, 
  SearchResult, 
  SearchResultItem 
} from "../types";

export const mapJobApiResponse = (data: SearchResult): JobsData => {
  const jobsData: JobsData = {
    numJobsReturned: data.SearchResultCount,
    numTotalJobs: data.SearchResultCountAll,
    jobs: mapJobs(data.SearchResultItems),
  };

  return jobsData;
}

function mapJobs(jobs: SearchResultItem[]): Job[] {
  const mappedJobs: Job[] = [];

  for (let i = 0; i < jobs.length; i++) {
    const job: Job = {
      id: jobs[i].MatchedObjectId,
      title: jobs[i].MatchedObjectDescriptor.PositionTitle,
      pay: mapPay(jobs[i].MatchedObjectDescriptor.PositionRemuneration[0]),
      org: jobs[i].MatchedObjectDescriptor.OrganizationName,
      dept: jobs[i].MatchedObjectDescriptor.DepartmentName,
      subAgency: jobs[i].MatchedObjectDescriptor.SubAgency,
      agencyEmail: jobs[i].MatchedObjectDescriptor.UserArea.Details?.AgencyContactEmail,
      agencyPhone: jobs[i].MatchedObjectDescriptor.UserArea.Details?.AgencyContactPhone,
      agencyBlurb: jobs[i].MatchedObjectDescriptor.UserArea.Details?.AgencyMarketingStatement,
      qualifications: jobs[i].MatchedObjectDescriptor.QualificationSummary,
      urlToAppy: jobs[i].MatchedObjectDescriptor.PositionURI,
      locations: mapLocations(jobs[i].MatchedObjectDescriptor.PositionLocation),
    };

    mappedJobs.push(job);
  }

  return mappedJobs;
}

function mapPay(pay: PositionRemuneration): Pay {
  let s = '';

  if (pay.Description === 'Per Year') {
    s = 'yr';
  } else if (pay.Description === 'Per Hour') {
    s = 'hr';
  } else {
    s = pay.Description.toLowerCase();
  }

  const mappedPay: Pay = {
    per: s,
    min: pay.MinimumRange,
    max: pay.MaximumRange,
  };
  
  return mappedPay;
}

function mapLocations(locations: PositionLocation[]): Location[] {
  const mappedLocations: Location[] = [];

  for (let i = 0; i < locations.length; i++) {
    const mappedLocation: Location = {
      locationName: locations[i].LocationName,
      cityName: locations[i].CityName,
      countryCode: locations[i].CountryCode,
      countrySubDivisionCode: locations[i].CountrySubDivisionCode,
      lat: locations[i].Latitude,
      lng: locations[i].Longitude,
    };

    mappedLocations.push(mappedLocation);
  }

  return mappedLocations;
}