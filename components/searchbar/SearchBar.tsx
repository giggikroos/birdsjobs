'use client';
import handleJobSearch from '@/lib/handleJobSearch';
import { GlobeAmericasIcon } from '@heroicons/react/20/solid';
import { Search } from 'lucide-react';
import { useState } from 'react';
import { JobSearchResult } from '@/typings';
import { delay, motion } from 'framer-motion';
import Joblisting from '../jobcenter/Joblisting';

const SearchBar = () => {
  const [jobSearchResults, setJobSearchResults] = useState<JobSearchResult[]>();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [hasFilledDetails, setHasFilledDetails] = useState<boolean>(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const handleSearchButtonClick = async () => {
    const jobRes: JobSearchResult[] = await handleJobSearch({
      searchTerm,
      country,
      city,
    });
    setJobSearchResults(jobRes);
  };
  return (
    <div>
      <div className="flex flex-col items-center mt-[5px] mb-10  md:mt-[5px] justify-center ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5, ease: 'easeIn' }}
          className="flex mb-6 ">
          <button
            onClick={handleSearchButtonClick}
            className=" rounded-l-full border-r-0 bg-slate-300/70 rounded-md w-[40px] text-center h-[50px] md:h-[60px] ">
            <Search className="ml-2  " height={30} width={30} />
          </button>
          <input
            onChange={(e) => handleInputChange(e)}
            placeholder="What Role Do You Seek...."
            type="text"
            value={searchTerm}
            name="search"
            className="border-t drop-shadow-xl  w-[300px] md:w-[500px] lg:w-[800px] h-[50px] md:h-[60px] placeholder:font-[roboto]  placeholder:text-xl placeholder:text-center  text-center text-2xl p-2 rounded-md font-bold font-mono focus:outline-none  "
          />
        </motion.div>

        <div className="flex flex-col gap-1 border items-center justify-center  drop-shadow-lg rounded-md ">
          {searchTerm && (
            <motion.div
              initial={{
                x: '-100vh',
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: '-50vh',
              }}
              className="flex items-center p-3 border-b  justify-center  drop-shadow-lg rounded-md h-full">
              <GlobeAmericasIcon width={30} height={30} className="ml-3" />
              <input
                type="text"
                value={country.toLowerCase()}
                onChange={(e) => {
                  setCountry(e.target.value);

                  if (e.target.value === '') {
                    setHasFilledDetails(false);
                  } else {
                    setHasFilledDetails(true);
                  }
                }}
                placeholder="Enter Target Country "
                className="mb-1 md:mb-0 placeholder:font-black   placeholder:text-sm md:placeholder:text-xl whitespace-break-spaces placeholder:text-center  text-center text-2xl p-3  font-bold font-mono focus:outline-none placeholder:w-[230px] md:placeholder:w-full  h-[40px] md:h-[60px] w-[250px] md:w-[500px] lg:w-[700px] bg-transparent"
              />
            </motion.div>
          )}

          {country && (
            <motion.div
              initial={{
                x: '100vh',
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: '-100vh',
              }}
              className="flex items-center p-1 justify-center  drop-shadow-lg rounded-md h-full">
              <GlobeAmericasIcon width={30} height={30} className="ml-3" />

              <input
                type="text"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                placeholder="Enter City"
                className="mb-1 md:mb-0 placeholder:font-black   placeholder:text-sm md:placeholder:text-xl whitespace-break-spaces placeholder:text-center  text-center text-2xl p-3  font-bold font-mono focus:outline-none placeholder:w-[230px] md:placeholder:w-full  h-[40px] md:h-[60px] w-[250px] md:w-[500px] lg:w-[700px] bg-transparent"
              />
            </motion.div>
          )}
          {!hasFilledDetails && (
            <div>
              <h3>Kindly Fill In Your Details</h3>
            </div>
          )}
        </div>
      </div>
      <div className="grid   grid-cols-1 md:grid-cols-3 h-[100vh]  w-full  gap-3 md:gap-5">
        {jobSearchResults?.map((job: JobSearchResult) => (
          <Joblisting
            key={job.id}
            applicationUrl={job.application_url}
            source={job.source}
            publicationTime={job.publication_time}
            companyName={job.company_name}
            title={job.title}
            description={job.plain_text_description}
            id={job.id}
            salary={job.salary}
          />
        ))}
      </div>
    </div>
  );
};
export default SearchBar;
