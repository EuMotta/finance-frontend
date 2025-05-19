import React from 'react';

import { siteConfig } from '@/settings/routes';

const Footer = () => {
  return (
    <footer className="text-muted-foregroud mt-5 text-center text-sm">
      <p>
        © {new Date().getFullYear()} {siteConfig.personalInfo.name}. Todos os
        direitos reservados.
      </p>
      <p className="mt-1">Version x</p>
    </footer>
  );
};

export default Footer;
