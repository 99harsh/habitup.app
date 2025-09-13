import React, { ReactNode } from 'react';
import "./Card.scss";

type CardProps = {
  children: ReactNode;
  className?: string
};

export default function Card({ children, className }: CardProps) {
  return <div className={`hbup-card p-3 ${className}`}>{children}</div>;
}