import { ReactNode } from 'react';

export interface CardProps {
  children: ReactNode;
}

export function Card(props: CardProps) {
  const { children } = props;

  return (
    <div className="p-4 bg-white rounded-md text-gray-800">{children}</div>
  );
}
