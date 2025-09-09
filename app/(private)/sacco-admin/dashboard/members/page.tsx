"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useFetchAllMembers, useVerifyMemberAccount } from "@/hooks/members/actions";
import { Loader2, MoreVertical } from 'lucide-react';
import toast from 'react-hot-toast';
import LoadingSpinner from '@/components/custom/LoadingSpinner';
import { useRouter } from 'next/navigation';

function SaccoMembers() {
  const {
    isPending: isLoadingMembers,
    data: members,
  } = useFetchAllMembers();
  const { mutate, isPending:isApprovalPending } = useVerifyMemberAccount();
  const router = useRouter();

const handleApprove = (memberNo:string) => {
  mutate(memberNo, {
    onSuccess: () => {
      toast.success(" Member approved successfully!");
    },
    onError: () => {
      toast.error(" Approval failed. Please try again.");
    },
  });
};
  
  if (isLoadingMembers) {
    return <div className='m-4'>
      <LoadingSpinner/>
    </div>;
  }

  const onMemberClick = (memberNo: string) => {
    console.log(memberNo)
    router.push(`/sacco-admin/dashboard/members/${memberNo}`);
  }

  return(
    <div className='mx-4'>
      <h1 className='mb-4 text-xl md:text-3xl font-bold text-primary'>All Members</h1>
    <div className="bg-white rounded-lg border border-slate-200">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">
            </TableHead>
            <TableHead>Payroll no.</TableHead>
            <TableHead>Salutation</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone number</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Employment type</TableHead>
            <TableHead>Approved</TableHead>
            <TableHead className="w-12"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {members?.map((member) => (
            <TableRow
              key={member.id}
              className="hover:bg-slate-50 cursor-pointer"
              onClick={() => onMemberClick(member.member_no)}
            >
              <TableCell onClick={(e) => e.stopPropagation()}>
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                {member.member_no}
              </TableCell>
              <TableCell className="text-xs text-muted-foreground">
                {member.salutation}
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                {member.first_name} {member.last_name}
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                {member.email}
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                {member.phone}
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                {member.gender}
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                {member.employment_type}
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                {member.is_approved ? 'Yes' : 'No'}
              </TableCell>
              <TableCell onClick={(e) => e.stopPropagation()}>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-48" align="end">
                      <div className="space-y-1">
                        <Button
                          variant="ghost"
                          onClick={() => handleApprove(member.member_no)}
                          className="w-full justify-start"
                          size="sm"
                        >
                          {isApprovalPending ? (
                            <Loader2 className="animate-spin" />
                          ) : (
                            "Approve Member"
                          )}
                        </Button>
                      </div>
                    </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
    </div>
  );
}

export default SaccoMembers;
