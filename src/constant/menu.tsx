import { v4 as uuid } from "uuid";
import {
  Contact2,
  Home,
  LucideInstagram,
  Plug2,
  PlugZap2,
  PlugZap2Icon,
  Settings,
} from "lucide-react";
import React from "react";
import {
  IconAutomation,
  IconBrandInstagram,
  IconBrandInstagramFilled,
  IconBrandShopee,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

type FieldProps = {
  label: string;
  id: string;
  href: string;
};

type SideBarProps = {
  icon: React.ReactNode;
} & FieldProps;
export const SIDEBAR_MENU: SideBarProps[] = [
  { id: uuid(), label: "Home", icon: <Home />, href: "/" },
  { id: uuid(), label: "Contacts", icon: <Contact2 />, href: "/contacts" },
  {
    id: uuid(),
    label: "Automations",
    icon: <IconAutomation />,
    href: "/automations",
  },
  {
    id: uuid(),
    label: "Integrations",
    icon: <PlugZap2Icon />,
    href: "/intergrations",
  },
  { id: uuid(), label: "Settings", icon: <Settings />, href: "/settings" },
];

export const PLANS = [
  {
    name: "Free Plan",
    description: "Perfect for getting started",
    price: "$0",
    features: [
      "Boost engagement with target responses",
      "Automate comment replies to enhance audience interaction",
      "Turn followers into customers with targeted messaging",
    ],
    cta: "Get Started",
  },
  {
    name: "Smart AI Plan",
    description: "Advanced features for power users",
    price: "$99",
    features: [
      "All features from Free Plan",
      "AI-powered response generation",
      "Advanced analytics and insights",
      "Priority customer support",
      "Custom Branding options",
    ],
    cta: "Upgrade",
  },
];

type INTEGRATIONSPROPS = {
  title: string;
  icon: React.ReactNode;
  description: string;
  strategy: "INSTAGRAM" | "WHATSAPP" | "SHOPIFY";
  isAvailable: boolean;
};
import { Instagram, MessageCircle, ShoppingCart, Ban } from "lucide-react";

export const INTERGRATIONS: INTEGRATIONSPROPS[] = [
  {
    title: "Instagram DM Automation",
    icon: <IconBrandInstagram className="w-5 h-5 text-indigo-500" />,
    description: "Automatically reply to Instagram DMs and boost engagement.",
    strategy: "INSTAGRAM",
    isAvailable: true,
  },
  {
    title: "WhatsApp Auto Messaging",
    icon: <IconBrandWhatsapp className="w-5 h-5 text-indigo-500" />,
    description: "Send automated messages and replies via WhatsApp.",
    strategy: "WHATSAPP",
    isAvailable: false,
  },
  {
    title: "Shopify Abandoned Cart",
    icon: <IconBrandShopee className="w-5 h-5 text-indigo-500" />,
    description: "Recover lost sales by sending cart reminders via DM.",
    strategy: "SHOPIFY",
    isAvailable: false,
  },
];
