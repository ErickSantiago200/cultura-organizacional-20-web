import type { ReactNode } from 'react';
import './PageHeader.css';

interface Props {
  title: string;
  subtitle?: ReactNode;
}

function PageHeader({ title, subtitle }: Props) {
  return (
    <div className="page-header">
      <div className="container">
        <h1>{title}</h1>
        {subtitle && <p className="page-header__subtitle">{subtitle}</p>}
      </div>
    </div>
  );
}

export default PageHeader;
