import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "./ui/badge";
import { useSelector } from "react-redux";

function AppliedJobsTable() {
  const { allAppliedJobs } = useSelector((store) => store.job);

  return (
    <div>
      <div>
        <Table>
          <TableCaption>A list of your recent Applied jobs.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Date</TableHead>
              <TableHead>Job Role</TableHead>
              <TableHead>Company</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allAppliedJobs <= 0 ? (
              <span> You haven&apos;t applied for any Job till now</span>
            ) : (
              allAppliedJobs.map((appliedJob) => (
                <TableRow key={appliedJob?._id}>
                  <TableCell className="font-medium">
                    {appliedJob?.createdAt.split("T")[0]}
                  </TableCell>
                  <TableCell>{appliedJob?.job?.title}</TableCell>
                  <TableCell>{appliedJob?.job?.company?.name}</TableCell>
                  <TableCell className="text-right">
                    <Badge
                      className={`${
                        appliedJob?.status === "rejected"
                          ? "bg-red-400"
                          : appliedJob.status === "pending"
                          ? "bg-gray-400"
                          : "bg-green-400"
                      }`}
                    >
                      {appliedJob.status.toUpperCase()}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default AppliedJobsTable;
