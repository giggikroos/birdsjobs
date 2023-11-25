'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const page = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get('title');
  const desc = searchParams.get('description');
  const minSalary = searchParams.get('minSalary');
  const maxSalary = searchParams.get('maxSalary');
  const SalaryType = searchParams.get('salaryType');
  const SalaryCurrency = searchParams.get('salaryCurrency');
  const applicationUrl = searchParams.get('applicationUrl');
  const companyName = searchParams.get('minSalary');
  const source = searchParams.get('source');

  return (
    <div className="flex flex-col py-5 px-5 md:px-10 border-b  border-gray-400">
      <div>
        <h1 className="text-3xl mb-2 underline font-bold font-[roboto]">
          {title}
        </h1>
        <p className="font-[roboto] capitalize text-xl ">{desc}</p>

        <h3 className="font-bold font-[roboto]">Source:{source}</h3>
      </div>
      <div className="flex items-center p-3 md:p-5  justify-between h-[40px] ">
        <h3 className="font-bold  md:mr-0 font-[roboto]">{companyName}</h3>
        <Link href={`${applicationUrl}`}>
          <button className="rounded-md py-2 px-10 bg-black text-white font-bold font-[roboto] ">
            Apply Here
          </button>
        </Link>
      </div>
    </div>
  );
};
export default page;
