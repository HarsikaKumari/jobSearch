import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table.jsx'
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Edit2, MoreHorizontal } from 'lucide-react';

const CompaniesTable = () => {
    return (
        <div>
            <Table>
                <TableCaption>Companies you have registered recently</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Logo</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableCell>
                        <Avatar>
                            <AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" />
                        </Avatar>
                    </TableCell>
                    <TableCell>Wipro</TableCell>
                    <TableCell>06-03-25</TableCell>
                    <TableCell className="text-right cursor-pointer">
                        <Popover>
                            <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
                            <PopoverContent className="w-32">
                                <div className='flex items-center gap-2'>
                                    <Edit2 className='w-4'/>
                                    <span>Edit</span>
                                </div>
                            </PopoverContent>
                        </Popover>
                    </TableCell>
                </TableBody>
            </Table>
        </div>
    )
}

export default CompaniesTable