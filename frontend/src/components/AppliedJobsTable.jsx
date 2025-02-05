import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "./ui/badge"

function AppliedJobsTable() {
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
                        {
                            [1, 2, 3, 4, 5].map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">04-02-2025</TableCell>
                                    <TableCell>Fullstack Developer</TableCell>
                                    <TableCell>Wipro Limited</TableCell>
                                    <TableCell className="text-right"><Badge className="bg-black text-[white] hover:bg-black hover:text-white">Accepted</Badge></TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>

            </div>
        </div>
    )
}

export default AppliedJobsTable