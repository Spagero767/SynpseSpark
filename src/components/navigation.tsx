"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrainCircuit, LayoutDashboard, Settings, User } from "lucide-react";
import {
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SettingsDialog } from "./settings-dialog";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "./ui/button";

export function Navigation() {
  const pathname = usePathname();
  const userAvatar = PlaceHolderImages.find((p) => p.id === "user-avatar");

  return (
    <>
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center gap-3 p-3">
          <BrainCircuit className="h-9 w-9 text-primary" />
          <div className="text-lg font-semibold text-sidebar-foreground">
            Synapse Spark
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={pathname === "/"}
              tooltip="Daily Challenges"
            >
              <Link href="/">
                <BrainCircuit />
                <span>Daily Challenges</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={pathname === "/dashboard"}
              tooltip="Dashboard"
            >
              <Link href="/dashboard">
                <LayoutDashboard />
                <span>Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border mt-auto p-2">
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center gap-3">
            <Avatar className="h-9 w-9">
              {userAvatar && (
                <AvatarImage
                  src={userAvatar.imageUrl}
                  alt={userAvatar.description}
                  data-ai-hint={userAvatar.imageHint}
                />
              )}
              <AvatarFallback>
                <User />
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="font-semibold text-sm text-sidebar-foreground">
                Alex Doe
              </span>
              <span className="text-xs text-sidebar-foreground/70">
                Pro Member
              </span>
            </div>
          </div>
          <SettingsDialog>
            <Button variant="ghost" size="icon" className="text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent">
                <Settings className="w-5 h-5" />
            </Button>
          </SettingsDialog>
        </div>
      </SidebarFooter>
    </>
  );
}
