import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';

interface FormData {
  // Step 1: Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  
  // Step 2: SACCO Information
  membershipType: string;
  initialDeposit: string;
  monthlyContribution: string;
  referralCode: string;
}

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    membershipType: '',
    initialDeposit: '',
    monthlyContribution: '',
    referralCode: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(formData.firstName && formData.lastName && formData.email && formData.phone);
      case 2:
        return !!(formData.membershipType && formData.initialDeposit && formData.monthlyContribution);
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
    setIsSubmitting(true);
    
    // API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success('Registration complete! Welcome to the SACCO.');
    
    setIsSubmitting(false);
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1: return "Personal Information";
      case 2: return "SACCO Membership Details";
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
            Membership
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
                    value={formData.firstName}
                    onChange={(e) => updateFormData('firstName', e.target.value)}
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => updateFormData('lastName', e.target.value)}
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
            </>
          )}

          {currentStep === 2 && (
            <>
              <div className="space-y-2">
                <Label htmlFor="membershipType">Membership Type *</Label>
                <select
                  id="membershipType"
                  value={formData.membershipType}
                  onChange={(e) => updateFormData('membershipType', e.target.value)}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background"
                >
                  <option value="">Select membership type</option>
                  <option value="basic">Basic Member ($50/month)</option>
                  <option value="premium">Premium Member ($100/month)</option>
                  <option value="corporate">Corporate Member ($500/month)</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="initialDeposit">Initial Deposit *</Label>
                <Input
                  id="initialDeposit"
                  type="number"
                  value={formData.initialDeposit}
                  onChange={(e) => updateFormData('initialDeposit', e.target.value)}
                  placeholder="1000"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="monthlyContribution">Monthly Contribution *</Label>
                <Input
                  id="monthlyContribution"
                  type="number"
                  value={formData.monthlyContribution}
                  onChange={(e) => updateFormData('monthlyContribution', e.target.value)}
                  placeholder="250"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="referralCode">Referral Code (Optional)</Label>
                <Input
                  id="referralCode"
                  value={formData.referralCode}
                  onChange={(e) => updateFormData('referralCode', e.target.value)}
                  placeholder="FRIEND2024"
                />
              </div>
            </>
          )}

          {currentStep === 3 && (
            <div className="space-y-4">
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-medium mb-3">Review Your Information</h4>
                <div className="space-y-2 text-sm">
                  <div><strong>Name:</strong> {formData.firstName} {formData.lastName}</div>
                  <div><strong>Email:</strong> {formData.email}</div>
                  <div><strong>Phone:</strong> {formData.phone}</div>
                  <div><strong>Membership:</strong> {formData.membershipType}</div>
                  <div><strong>Initial Deposit:</strong> ${formData.initialDeposit}</div>
                  <div><strong>Monthly Contribution:</strong> ${formData.monthlyContribution}</div>
                  {formData.referralCode && <div><strong>Referral Code:</strong> {formData.referralCode}</div>}
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
                className="flex items-center gap-2 bg-gradient-primary hover:bg-primary-hover"
              >
                Next
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex items-center gap-2 bg-gradient-primary hover:bg-primary-hover"
              >
                {isSubmitting ? 'Submitting...' : 'Complete Registration'}
                <CheckCircle className="h-4 w-4" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}