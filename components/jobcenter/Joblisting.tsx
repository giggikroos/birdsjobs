'use client';
import { Button } from '../ui/button';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { JobListingProps } from '@/typings';
import { useRouter } from 'next/navigation';

const Joblisting = ({
  title,
  description,
  salary,
  id,
  companyName,
  applicationUrl,
  source,
}: JobListingProps) => {
  const minSalary = salary?.min_salary;
  const maxSalary = salary?.max_salary;
  const salaryType = salary?.salary_type;
  const salaryCurrency = salary?.currency;
  const router = useRouter();
  const handleFullDetailsBtn = () => {
    router.push(
      `/jobs/${id}?title=${title}&description=${description}&minSalary=${minSalary}&maxSalary=${maxSalary}&salaryType=${salaryType}&salaryCurrency=${salaryCurrency}&applicationUrl=${applicationUrl}&source=${source}&companyName=${companyName}`
    );
  };
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader className="flex-row gap-4 items-center">
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>Sourced From :{source}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className=" line-clamp-4 ">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={handleFullDetailsBtn} variant={'default'}>
          View Details
        </Button>
        {salary && (
          <h3>
            Salary:{salary?.currency}
            {salary?.min_salary} to {salary?.max_salary} {salary?.salary_type}
          </h3>
        )}
      </CardFooter>
    </Card>
  );
};
export default Joblisting;
