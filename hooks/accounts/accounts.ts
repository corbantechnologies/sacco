'use client'
import { SignUpData, signUpMember } from "@/app/actions/account"
import { useMutation } from "@tanstack/react-query"

export const useCreateUserAccountMutation = ()=>{
    return useMutation({
        mutationFn:(user: SignUpData)=> signUpMember(user)
    })
}