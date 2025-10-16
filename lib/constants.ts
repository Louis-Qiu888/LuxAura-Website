// 站点配置常量
export const SITE_CONFIG = {
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://luxaura.com.au',
  name: 'LuxAura',
  description: 'Premium custom window treatments, blinds, curtains, and sheers',
} as const;

// 联系信息
export const CONTACT_INFO = {
  phone: '0450 871 699',
  email: 'service@luxaura.com.au',
  address: {
    city: 'Sydney',
    region: 'NSW',
    country: 'Australia',
  },
  hours: 'Monday - Sunday: 24/7',
} as const;

// 社交媒体链接
export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/LuxAuraLiving/',
  instagram: 'https://www.instagram.com/qiu.louis/',
} as const;
