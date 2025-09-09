"use client";

import { useFetchMemberByMemberNumber } from "@/hooks/members/actions";
import { useParams } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  Calendar, 
  CreditCard, 
  Hash,
  Building,
  UserCheck
} from "lucide-react";

interface User {
    avatar?: string;
    county?: string;
    dob: string;
    email: string;
    employer?: string;
    employment_type: string;
    first_name: string;
    gender: string;
    id_number?: string;
    id_type: string;
    job_title?: string;
    last_name: string;
    member_no: string;
    phone: string;
    salutation: string;
    tax_pin: string;
  }
  
  interface UseFetchMemberResult {
    data: User | undefined;
    isLoading: boolean;
    error: Error | null;
  }

const InfoItem = ({ 
  icon: Icon, 
  label, 
  value, 
  className = "" 
}: { 
  icon: React.ElementType; 
  label: string; 
  value?: string; 
  className?: string;
}) => (
  <div className={`flex items-center space-x-3 p-4 rounded-lg bg-secondary/30 border border-border/50 hover:bg-secondary/50 transition-smooth ${className}`}>
    <div className="flex-shrink-0">
      <Icon className="h-5 w-5 text-primary" />
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-sm font-medium text-muted-foreground">{label}</p>
      <p className="text-foreground font-semibold truncate">{value || "Not provided"}</p>
    </div>
  </div>
);

const SectionCard = ({ 
  title, 
  children, 
  className = "" 
}: { 
  title: string; 
  children: React.ReactNode; 
  className?: string;
}) => (
  <Card className={`bg-gradient-card border-border/50 shadow-card hover:shadow-elegant transition-smooth ${className}`}>
    <CardHeader className="pb-4">
      <h2 className="text-xl font-bold text-foreground">{title}</h2>
    </CardHeader>
    <CardContent className="space-y-4">
      {children}
    </CardContent>
  </Card>
);

const MemberDetail = () => {
  const { member_no } = useParams();

  const {
    isLoading,
    data: user,
    error
  }:UseFetchMemberResult = useFetchMemberByMemberNumber(member_no as string);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-surface p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading user details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-surface p-6 flex items-center justify-center">
        <div className="text-center">
          <p className="text-destructive mb-4">Error loading user details</p>
          <p className="text-muted-foreground">Please try again later</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-surface p-6 flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">No user data found</p>
        </div>
      </div>
    );
  }
  const fullName = `${user.salutation} ${user.first_name} ${user.last_name}`.trim();
  const initials = `${user.first_name?.[0] || ''}${user.last_name?.[0] || ''}`.toUpperCase();

  const formatDate = (dateString: string) => {
    if (!dateString) return "Not provided";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getEmploymentBadgeVariant = (type: string) => {
    switch (type?.toLowerCase()) {
      case 'full-time':
      case 'permanent':
        return 'default';
      case 'part-time':
        return 'secondary';
      case 'contract':
        return 'outline';
      default:
        return 'secondary';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-surface">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Header Section */}
        <div className="mb-12">
          <Card className="bg-gradient-card border-border/50 shadow-elegant">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                <div className="relative">
                  <Avatar className="h-32 w-32 ring-4 ring-primary/20 shadow-elegant">
                    <AvatarImage 
                      src={user.avatar} 
                      alt={fullName}
                      className="object-cover"
                    />
                    <AvatarFallback className="text-4xl font-bold bg-gradient-primary text-primary">
                      {initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-2 -right-2 bg-primary rounded-full p-2 shadow-card">
                    <UserCheck className="h-4 w-4 text-primary-foreground" />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left space-y-4">
                  <div>
                    <h1 className="text-4xl font-bold text-foreground mb-2">
                      {fullName}
                    </h1>
                    <p className="text-xl text-muted-foreground mb-4">
                      {user.job_title || "Position not specified"}
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                      <Badge variant={getEmploymentBadgeVariant(user.employment_type)} className="px-3 py-1">
                        {user.employment_type || "Employment type not specified"}
                      </Badge>
                      {user.gender && (
                        <Badge variant="outline" className="px-3 py-1">
                          {user.gender}
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-6 justify-center md:justify-start text-sm">
                    {user.member_no && (
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Hash className="h-4 w-4" />
                        <span>Member #{user.member_no}</span>
                      </div>
                    )}
                    {user.county && (
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{user.county}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Personal Information */}
          <SectionCard title="Personal Information">
            <div className="grid gap-4">
              <InfoItem 
                icon={User} 
                label="Full Name" 
                value={`${user.first_name} ${user.last_name}`} 
              />
              <InfoItem 
                icon={Calendar} 
                label="Date of Birth" 
                value={formatDate(user.dob)} 
              />
              <InfoItem 
                icon={MapPin} 
                label="County" 
                value={user?.county} 
              />
            </div>
          </SectionCard>

          {/* Contact Information */}
          <SectionCard title="Contact Information">
            <div className="grid gap-4">
              <InfoItem 
                icon={Mail} 
                label="Email Address" 
                value={user.email} 
              />
              <InfoItem 
                icon={Phone} 
                label="Phone Number" 
                value={user.phone} 
              />
            </div>
          </SectionCard>

          {/* Employment Details */}
          <SectionCard title="Employment Details">
            <div className="grid gap-4">
              <InfoItem 
                icon={Building} 
                label="Employer" 
                value={user.employer} 
              />
              <InfoItem 
                icon={Briefcase} 
                label="Job Title" 
                value={user.job_title} 
              />
              <InfoItem 
                icon={UserCheck} 
                label="Employment Type" 
                value={user.employment_type} 
              />
            </div>
          </SectionCard>

          {/* Identification */}
          <SectionCard title="Identification & Documentation">
            <div className="grid gap-4">
              <InfoItem 
                icon={CreditCard} 
                label="ID Type" 
                value={user.id_type} 
              />
              <InfoItem 
                icon={Hash} 
                label="ID Number" 
                value={user.id_number} 
              />
              <InfoItem 
                icon={Hash} 
                label="Tax PIN" 
                value={user.tax_pin} 
              />
              <InfoItem 
                icon={Hash} 
                label="Member Number" 
                value={user.member_no} 
              />
            </div>
          </SectionCard>
        </div>
      </div>
    </div>
  );
};

export default MemberDetail;
