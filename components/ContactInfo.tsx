'use client';

import { useEffect, useState } from 'react';

const EMAIL_B64 = 'aW5mb0BndWxmbWFya3MuY29t'; // info@gulfmarks.com
const PHONE_B64 = 'Kzk2NiA1NyA3ODIgNTI4MA=='; // +966 57 782 5280
const PHONE_RAW_B64 = 'OTY2NTc3ODI1Mjgw'; // 966577825280 (for wa.me links)

function decode(b64: string): string {
  if (typeof window === 'undefined') return '';
  return atob(b64);
}

export function ProtectedEmail({ className }: { className?: string }) {
  const [email, setEmail] = useState('');

  useEffect(() => {
    setEmail(decode(EMAIL_B64));
  }, []);

  if (!email) return <span className={className}>...</span>;

  return (
    <a href={`mailto:${email}`} className={className}>
      {email}
    </a>
  );
}

export function ProtectedPhone({ className }: { className?: string }) {
  const [phone, setPhone] = useState('');

  useEffect(() => {
    setPhone(decode(PHONE_B64));
  }, []);

  if (!phone) return <span className={className}>...</span>;

  return <span className={className}>{phone}</span>;
}

export function ProtectedWhatsAppText({ className }: { className?: string }) {
  const [text, setText] = useState('');

  useEffect(() => {
    setText('Chat on WhatsApp');
  }, []);

  if (!text) return <span className={className}>...</span>;

  return <span className={className}>{text}</span>;
}

export function ProtectedWhatsAppLink({
  className,
  children,
  message,
  style,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: {
  className?: string;
  children: React.ReactNode;
  message?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  const [href, setHref] = useState('');

  useEffect(() => {
    const rawPhone = decode(PHONE_RAW_B64);
    const url = message
      ? `https://wa.me/${rawPhone}?text=${encodeURIComponent(message)}`
      : `https://wa.me/${rawPhone}`;
    setHref(url);
  }, [message]);

  if (!href) return <span className={className}>{children}</span>;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={style}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  );
}

export function getWhatsAppUrl(message?: string): string {
  if (typeof window === 'undefined') return '#';
  const rawPhone = atob(PHONE_RAW_B64);
  return message
    ? `https://wa.me/${rawPhone}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${rawPhone}`;
}
