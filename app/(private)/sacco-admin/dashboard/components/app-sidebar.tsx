"use client"

import * as React from "react"
import {
  LayoutGrid,
  Settings2,
  Users,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { NavMain } from "./nav-main"
import { NavProjects } from "./nav-projects"
import { NavUser } from "./nav-user"
import Image from "next/image"
import Logo from '@/public/sacco.png'

// This is sample data.
const data = {
  user: {
    name: "Tamarind",
    email: "tamarind@gmail.com",
    avatar: "@/public/sacco.png",
  },
  navMain: [
    {
      title: "Members",
      url: "#",
      icon: Users,
      isActive: false,
      items: [
        {
          title: "All Members",
          url: "/sacco-admin/dashboard/members",
        },
        {
          title: "Invite Members",
          url: "#",
        },
        {
          title: "Join Requests",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Members",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
      ],
    },
  ],
  dashboard: [
    {
      name: "Dashboard",
      url: "/sacco-admin/dashboard",
      icon: LayoutGrid,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="bg-primary text-white">
        <div className="flex gap-3 items-center">
        <div className='bg-white size-12 grid place-content-center rounded-xl'>
            <Image src={Logo} alt='logo' width={40} />            
            </div>              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">WananchiMali</span>
                <span className="truncate text-xs">Saccos for All</span>
              </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-primary text-white">
        <NavProjects projects={data.dashboard} />
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter className="bg-primary text-white">
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
