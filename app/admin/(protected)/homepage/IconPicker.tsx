'use client';

import {
  Droplet, Users, Handshake, TrendingUp, Award, MapPin,
  Wrench, Toilet, Sprout, Phone, Mail, Globe, Shield,
  Sun, Heart, BookOpen, Target, Activity,
} from 'lucide-react';

export const ICON_OPTIONS = [
  { value: 'Droplet', label: 'Droplet', component: Droplet },
  { value: 'Users', label: 'Users', component: Users },
  { value: 'Handshake', label: 'Handshake', component: Handshake },
  { value: 'TrendingUp', label: 'Trending Up', component: TrendingUp },
  { value: 'Award', label: 'Award', component: Award },
  { value: 'MapPin', label: 'Map Pin', component: MapPin },
  { value: 'Wrench', label: 'Wrench', component: Wrench },
  { value: 'Toilet', label: 'Toilet', component: Toilet },
  { value: 'Sprout', label: 'Sprout', component: Sprout },
  { value: 'Phone', label: 'Phone', component: Phone },
  { value: 'Mail', label: 'Mail', component: Mail },
  { value: 'Globe', label: 'Globe', component: Globe },
  { value: 'Shield', label: 'Shield', component: Shield },
  { value: 'Sun', label: 'Sun', component: Sun },
  { value: 'Heart', label: 'Heart', component: Heart },
  { value: 'BookOpen', label: 'Book Open', component: BookOpen },
  { value: 'Target', label: 'Target', component: Target },
  { value: 'Activity', label: 'Activity', component: Activity },
];

export function getIconComponent(iconName: string) {
  const found = ICON_OPTIONS.find(o => o.value === iconName);
  return found?.component || Droplet;
}

interface IconPickerProps {
  value: string;
  onChange: (value: string) => void;
  name?: string;
}

export function IconPicker({ value, onChange, name }: IconPickerProps) {
  return (
    <div>
      <input type="hidden" name={name} value={value} />
      <div className="grid grid-cols-6 gap-2">
        {ICON_OPTIONS.map((icon) => {
          const Icon = icon.component;
          const isSelected = value === icon.value;
          return (
            <button
              key={icon.value}
              type="button"
              onClick={() => onChange(icon.value)}
              className={
                `flex flex-col items-center gap-1 p-2 rounded-lg border text-xs transition-colors ${
                  isSelected ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 hover:border-gray-300 text-gray-600'
                }`
              }
              title={icon.label}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] truncate w-full text-center">{icon.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
