import React from 'react';

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}