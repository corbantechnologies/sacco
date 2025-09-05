import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';
import { useCreateUserAccountMutation } from '@/hooks/accounts/accounts';
import { useRouter } from 'next/navigation';

interface FormData {
  // Step 1: Personal Information
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password:string;
  
  // Step 2: More Information
  dob: string;
  gender: string;
  id_type: string;
  id_number: string;
  tax_pin: string;
  employment_type: string;
  salutation: string;
}

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const router = useRouter();
  const { mutateAsync: createAccount, isPending:isLoadingCreate  }=useCreateUserAccountMutation()
  // useCreateAdminAccountMutation
  const [formData, setFormData] = useState<FormData>({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: '',
    dob: '',
    gender: '',
    id_type: '',
    id_number: '',
    tax_pin: '',
    employment_type: '',
    salutation: '',
  });

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(formData.first_name && formData.last_name && formData.email && formData.phone);
      case 2:
        return !!(formData.employment_type && formData.dob && formData.gender && formData.id_type && formData.id_number && formData.tax_pin);
      case 3:
        return true; // No validation needed for review step
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    } else {
      toast('Please fill in all required fields before proceeding.');
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    try {
      const newPost = await createAccount(formData);
      
      if (!newPost) {
          toast.error('Registration failed. Please try again.');
      } else {
          toast.success('Registration complete!');
          router.replace('/account-verification?true=1');
      }
  } catch{
      toast.error('An error occurred. Please try again later.');
  }
}

  const getStepTitle = () => {
    switch (currentStep) {
      case 1: return "Personal Information";
      case 2: return "More Information";
      case 3: return "Review & Submit";
      default: return "";
    }
  };

  const progress = (currentStep / 3) * 100;

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">Join Our SACCO</h2>
        <p className="text-muted-foreground mb-4">Complete your registration in 3 simple steps</p>
        <Progress value={progress} className="h-2" />
        <div className="flex justify-between mt-2">
          <span className={`text-sm ${currentStep >= 1 ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
            Personal Info
          </span>
          <span className={`text-sm ${currentStep >= 2 ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
            More Info
          </span>
          <span className={`text-sm ${currentStep >= 3 ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
            Review & Submit
          </span>
        </div>
      </div>

      <Card className="shadow-medium bg-gradient-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {currentStep === 3 && <CheckCircle className="h-5 w-5 text-success" />}
            {getStepTitle()}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {currentStep === 1 && (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.first_name}
                    onChange={(e) => updateFormData('first_name', e.target.value)}
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.last_name}
                    onChange={(e) => updateFormData('last_name', e.target.value)}
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  placeholder="john.doe@example.com"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password *</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => updateFormData('password', e.target.value)}
                />
              </div>
            </>
          )}

          {currentStep === 2 && (
            <>
            <div className="space-y-2">
                <Label htmlFor="dob">Date of Birth *</Label>
                <Input
                  id="dob"
                  type='date'
                  value={formData.dob}
                  onChange={(e) => updateFormData('dob', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="employment_type">Employment Type *</Label>
                <select
                  id="membershipType"
                  value={formData.employment_type}
                  onChange={(e) => updateFormData('employment_type', e.target.value)}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background"
                >
                  <option value="">Select employment type</option>
                  <option value="employed">Employed</option>
                  <option value="self-employed">Self-employed</option>
                  <option value="unemployed">Unemployed</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Gender *</Label>
                <select
                  id="gender"
                  value={formData.gender}
                  onChange={(e) => updateFormData('gender', e.target.value)}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="salutation">Salutation *</Label>
                <select
                  id="salutation"
                  value={formData.salutation}
                  onChange={(e) => updateFormData('salutation', e.target.value)}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background"
                >
                  <option value="">Select salutation *</option>
                  <option value="mr">Mr.</option>
                  <option value="mrs">Mrs.</option>
                  <option value="miss">Miss</option>
                  <option value="dr">Dr.</option>
                  <option value="prof">Prof.</option>
                  <option value="hon">Hon.</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="id_type">ID type *</Label>
                <select
                  id="id_type"
                  value={formData.id_type}
                  onChange={(e) => updateFormData('id_type', e.target.value)}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background"
                >
                  <option value="">Select ID type</option>
                  <option value="national_id">National Id</option>
                  <option value="passport">Passport</option>
                  <option value="driving_license">Driving License</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="id_number">ID no. *</Label>
                <Input
                  id="id_number"
                  type="text"
                  value={formData.id_number}
                  onChange={(e) => updateFormData('id_number', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tax_pin">Tax pin *</Label>
                <Input
                  id="tax_pin"
                  type="text"
                  value={formData.tax_pin}
                  onChange={(e) => updateFormData('tax_pin', e.target.value)}
                />
              </div>
            </>
          )}

          {currentStep === 3 && (
            <div className="space-y-4">
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-medium mb-3">Review Your Information</h4>
                <div className="space-y-2 text-sm">
                  <div><strong>Name:</strong> {formData.first_name} {formData.last_name}</div>
                  <div><strong>Email:</strong> {formData.email}</div>
                  <div><strong>Phone:</strong> {formData.phone}</div>
                  <div><strong>Date of Birth:</strong> {formData.dob}</div>
                  <div><strong>Gender:</strong> {formData.gender}</div>
                  <div><strong>Employment:</strong> {formData.employment_type}</div>
                  <div><strong>ID type:</strong> {formData.id_type}</div>
                  <div><strong>ID no.:</strong> {formData.id_number}</div>
                  <div><strong>Tax pin:</strong> {formData.tax_pin}</div>
                </div>
              </div>
              
              <div className="p-4 bg-success/10 rounded-lg border border-success/20">
                <p className="text-sm text-success-foreground">
                  By submitting this form, you agree to our terms of service and privacy policy. 
                  A welcome email will be sent to your registered email address.
                </p>
              </div>
            </div>
          )}

          <div className="flex justify-between pt-4">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Previous
            </Button>
            
            {currentStep < 3 ? (
              <Button
                onClick={nextStep}
                className="flex items-center gap-2 bg-primary cursor-pointer"
              >
                Next
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={isLoadingCreate}
                className="flex items-center gap-2 bg-primary"
              >
                {isLoadingCreate ? 'Submitting...' : 'Complete Registration'}
                <CheckCircle className="h-4 w-4 text-white" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}