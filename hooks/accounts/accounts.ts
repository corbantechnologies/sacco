'use client'
import { SignUpData, signUpMember, signUpSystemAdmin } from "@/app/actions/account"
import { useMutation } from "@tanstack/react-query"

export const useCreateAdminAccountMutation = ()=>{
    return useMutation({
        mutationFn:(user: SignUpData)=> signUpSystemAdmin(user)
    })
}
export const useCreateUserAccountMutation = ()=>{
    return useMutation({
        mutationFn:(user: SignUpData)=> signUpMember(user)
    })
}
